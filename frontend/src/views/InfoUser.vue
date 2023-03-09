<script>
import UserService from '../services/User.service';
import OrderService from '../services/Order.service';
export default {
    data() {
        return {
            dataUser: [],
            id_user: '',
            dataOrder: [],
            totalAllOrder:''
        }
    },
    methods: {
        async getDataUser() {
            this.dataUser = await UserService.getuserwithid(this.$route.params.id);
            this.id_user = this.$route.params.id;
        },
        async getDataOrder() {
            this.dataOrder = await OrderService.getDataOrderWithIDUser(this.$route.params.id);
            var total = 0
            this.dataOrder.forEach((item, index)=>{
                total += item.totalOrder;
            })
            this.totalAllOrder = total
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
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in dataOrder">
                    <td>{{ ++index }}</td>
                    <td>
                        <router-link :to="{
                            name:'DetailOrder',
                            params: {id: JSON.stringify(item._id) }
                        }">
                        <p>{{ item._id }}</p> 
                       </router-link></td>
                    <td>
                        <p>{{ item.createdAt.substring(0,item.createdAt.search("T")) }}</p>
                    </td>
                    <td>{{ item.payment }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.totalOrder.toLocaleString() }} đ</td>
                    <td style="color:#62ab00;font-weight:bold;">{{ item.statusOrder }}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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