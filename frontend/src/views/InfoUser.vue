<script>
import UserService from '../services/User.service';
import OrderService from '../services/Order.service';
export default {
    data() {
        return {
            dataUser: [

            ],
            id_user: '',
            dataOrderInput: {
                iduser: "",
                username: "",
                email: "",
                phonenumber: "",
                address: "",
                payment: "",
                detail_cart: [],
                statusOrder: "",
                totalOrder: ""
            },
            totalAllOrder: '',
            dataOrder: '',
            id_order: ''
        }
    },
    methods: {
        async getDataUser() {
            this.dataUser = await UserService.getuserwithid(this.$route.params.id);
            this.id_user = this.$route.params.id;
        },
        async getDataOrder() {
            let dataValue = await OrderService.getDataOrderWithIDUser(this.$route.params.id);
            this.dataOrderInput.iduser = dataValue.iduser;
            this.dataOrderInput.username = dataValue.username;
            this.dataOrderInput.email = dataValue.email;
            this.dataOrderInput.phonenumber = dataValue.phonenumber;
            this.dataOrderInput.address = dataValue.address;
            this.dataOrderInput.payment = dataValue.payment;
            this.dataOrderInput.detail_cart = dataValue.detail_cart;
            this.dataOrderInput.totalOrder = dataValue.totalOrder;

            this.dataOrder = dataValue;
            var total = 0
            dataValue.forEach((item, index) => {
                total += item.totalOrder;
            })
            this.totalAllOrder = total
        },
        async cancelOrder(IDORDER) {
            let check = confirm('Bạn có chắc chắn muốn hủy đơn hàng ?');
            if (check) {
                this.dataOrderInput.statusOrder = 'Hủy đơn hàng';
                await OrderService.updateOrder(IDORDER, this.dataOrderInput);
                this.getDataOrder();
                this.getDataUser();
            }
        }
    },
    created() {
        this.getDataUser();
        this.getDataOrder();
    }
}
</script>
<template>
    <div class="container" id="container_height">
        <p style="font-weight:bold;opacity:0.6">TÀI KHOẢN CỦA BẠN</p>
        <hr>
        <h5>QUẢN LÍ ĐƠN HÀNG</h5>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Mã Đơn Hàng</th>
                    <th scope="col">Ngày tạo đơn hàng</th>
                    <th scope="col">Hình thức vận chuyển</th>
                    <th scope="col">Địa chỉ giao hàng</th>
                    <th scope="col">Tổng tiền</th>
                    <th scope="col">Trạng thái đơn hàng</th>
                    <th scope="col">Hủy đơn hàng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in dataOrder">
                    <td>{{ ++index }}</td>
                    <td style="font-weight:bold;">
                        <router-link :to="{
                            name: 'DetailOrder',
                            params: { id: item._id }
                        }">
                            <p style="color:red;">{{ item._id }}</p>
                        </router-link>
                    </td>
                    <td>
                        <p>{{ item.createdAt.substring(0, item.createdAt.search("T")) }}</p> - Time:
                        <p>{{ item.createdAt.substring(item.createdAt.search("T") + 1, item.createdAt.length - 5) }}</p>
                    </td>
                    <td>{{ item.payment }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.totalOrder.toLocaleString() }} đ</td>
                    <td style="color:#62ab00;font-weight:bold;">{{ item.statusOrder }}</td>
                    <td style="color:blue;font-weight:bold;cursor:pointer;
                                font-weight: bold;
                                cursor: pointer;" v-if="item.statusOrder === 'Chưa xử lý'">
                        <div @click="cancelOrder(item._id)" style="text-align: center;
                                background-color: papayawhip;
                                border-radius: 5px;
                                padding: 5px;
                                color: red;">
                            <i class="fa-solid fa-ban"></i>&nbsp;<i class="fa-solid fa-box-open"></i>
                        </div>

                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="3"></td>
                    <td style="font-weight:bold">{{ totalAllOrder.toLocaleString() }} đ</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <hr>
        <h5>THÔNG TIN CÁ NHÂN
            <router-link :to="{
                name: 'editInfoUser',
                params: { id: id_user },
            }">
                <button type="button" class="btn btn-danger"><i class="fa-solid fa-user-pen"></i> Chỉnh sửa </button>
            </router-link>

            &nbsp;&nbsp;
            <router-link :to="{
                name: 'ChangePassword',
                params: { id: id_user },
            }">
                <button type="button" class="btn btn-info text-white"><i class="fa-solid fa-key"></i> Đổi mật khẩu </button>
            </router-link>


        </h5>
        <p>Tên người dùng: {{ dataUser.username }}</p>
        <p>Email: {{ dataUser.email }}</p>
        <p>Số điện thoại: {{ dataUser.phonenumber }}</p>
        <p>Địa chỉ: Việt Nam</p>
    </div>
</template>

<style>
#container_height {
    margin-left: 170px;
    margin-top: 50px;
}
</style>