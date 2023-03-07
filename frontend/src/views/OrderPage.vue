<script>
import OrderService from '../services/Order.service';
export default {
    data() {
        return {
            dataOrderInput: {
                username: "",
                email: "",
                phonenumber: "",
                address: "",
                payment: "",
                detail_order: [],
                statusOrder: "",
                totalOrder: ""
            },
            dataLocalStorage:{
                img_url,
                quantity: "",
                title: "",
                totalCart:""
            },
            dataShowFromCart: [],
            id_user:'',
            totalCart: 0
        }
    },
    methods: {
        async loadDataOnCart() {
            let cartLocalStorage = JSON.parse(localStorage.getItem('productCart'));
            this.dataShowFromCart = cartLocalStorage
            var totalCartSum = 0;
            cartLocalStorage.forEach((item, index) => {
                totalCartSum += item.quantity_product * item.price_product;
            })
            this.totalCart = totalCartSum
        },
        async loadDataUserInfo() {
            let UserLocalStorage = JSON.parse(localStorage.getItem('isloggin'));
            this.dataOrderInput.username = UserLocalStorage.username;
            this.dataOrderInput.email = UserLocalStorage.email;
            this.dataOrderInput.phonenumber = UserLocalStorage.phonenumber;
            this.id_user = UserLocalStorage._id;
        },
        changeOptionpayment() {
            this.dataOrderInput.payment = document.querySelector("#choosepayment").value;
        },
        async handleOrder(){
            let objectRightContent = {
                id_account : this.id_user,
                data_cart: JSON.parse(localStorage.getItem('isloggin'))
            }
            let array
            this.dataOrderInput.detail_order = 
        }
    },
    mounted() {
        this.loadDataOnCart();
        this.loadDataUserInfo();
    }
}
</script>

<template>
    <div class="container" style="margin-top:50px;">
        <!-- <ToastVue></ToastVue> -->
        <!-- Giao diện trang thanh toán  -->
        <div class="row">
            <!-- Left_page -->
            <div class="col-lg-7">
                <h2>NHÀ SÁCH ZBOOKS STORE</h2>
                <!-- BreadCrumb -->
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb" style="align-items: center;">
                        <li class="breadcrumb-item">
                            <router-link to="/cartStore" style="color:#62ab00">Giỏ hàng </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Thông tin giao hàng </li>
                        <li class="breadcrumb-item active" aria-current="page">Xác nhận thành công đơn hàng</li>
                    </ol>
                </nav>

                <p>Thông tin giao hàng</p>
                <form @submit.prevent id="form_addBook" style="width:100%;">
                    <!-- Username Input -->
                    <div class="mb-3">
                        <label for="inputUserName" class="form-label fw-bold">Họ và tên: </label>
                        <input type="text" class="form-control" id="inputUserName" placeholder="Vui lòng nhập vào tên người dùng..." v-model="dataOrderInput.username" required>
                    </div>

                    <!-- PhoneNumber Input -->
                    <div class="mb-3">
                        <label for="inputphonenumber" class="form-label fw-bold">Số điện thoại: </label>
                        <input type="text" class="form-control" id="inputphonenumber" minlength="10" maxlength="11" placeholder="Vui lòng nhập vào số điện thoại..." v-model="dataOrderInput.phonenumber"
                            required>
                    </div>

                    <!-- Email Input -->
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label fw-bold">Email: </label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vui lòng nhập vào email..." v-model="dataOrderInput.email" required>
                    </div>

                    <!-- Address Input -->
                    <div class="mb-3">
                        <label for="inputaddress" class="form-label fw-bold">Địa chỉ: </label>
                        <input type="text" class="form-control" id="inputaddress" minlength="10" maxlength="11" placeholder="Vui lòng nhập vào địa chỉ..." v-model="dataOrderInput.address" required>
                    </div>


                    <!-- Payment Input -->
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label fw-bold">Chọn hình thức thanh toán: </label>
                        <select class="form-control" :required="true" @change="changeOptionpayment" id="choosepayment">
                            <option v-bind:value="'Thanh toán khi nhận hàng(COD)'">Thanh toán khi nhận hàng (COD)</option>
                            <option v-bind:value="'Thanh toán trực tuyến(Chuyển Khoản)'">Thanh toán trực tuyến(Chuyển Khoản)</option>
                        </select>
                    </div>

                    <button @click="handleOrder()" type="submit" class="btn btn-info text-white fw-bold" style="padding: 10px;border:1px solid #ccc;width:100%;">Xác Nhận</button>
                </form>
            </div>
            <!-- Right_page -->
            <div class="col-lg-5" style="border:1px solid #62ab00;border-radius:10px;">
                <div class="row" style="display:flex;flex-wrap:nowrap;padding:20px;" v-for="item in dataShowFromCart">
                    <div>
                        <img :src="item.img_product" class="img-thumbnail" alt="..." width="76" height="110">
                        <span>{{ item.title_product }}</span>
                        <span style="color:#62ab00">(SL: {{ item.quantity_product }})</span>
                    </div>
                    <div style="margin-left:-100px;    margin-left: -85px;font-weight:bold;
            line-height: 71px;">
                        <span>{{ (item.price_product * item.quantity_product).toLocaleString() }} đ</span>
                    </div>
                </div>
                <hr>
                <div class="row" style="display:flex;flex-wrap:nowrap;padding:20px;">
                    <span>
                        Phí vận chuyển
                    </span>
                    <span style="margin-left:-100px;font-weight:bold">
                        &nbsp;&nbsp; 35.000 đ
                    </span>
                </div>
                <hr>
                <div class="row" style="display:flex;flex-wrap:nowrap;padding:20px;">
                    <h4>Tổng Cộng:</h4>
                    <div style="margin-left:-200px;">
                        <span style="font-size: 20px;opacity:0.6">VND &nbsp</span>
                        <span style="font-size: 30px;">{{ totalCart.toLocaleString() }} đ</span>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>