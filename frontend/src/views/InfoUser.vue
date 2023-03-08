<script>
import UserService from '../services/User.service';
export default {
    data() {
        return {
            dataUser: []
        }
    },
    methods: {
        async getDataUser() {
            this.dataUser = await UserService.getuserwithid(this.$route.params.id);
        }
    },
    created(){
        this.getDataUser();
    }
}
</script>
<template>
    <div class="container">
        <h2>TÀI KHOẢN CỦA BẠN</h2>
        <hr>
        <h4>QUẢN LÍ ĐƠN HÀNG</h4>

        <hr>
        <h3>THÔNG TIN CÁ NHÂN</h3>
        <h4>Tên người dùng: {{ dataUser.username }}</h4>
        <p>Email: {{ dataUser.email }}</p>
        <p>Số điện thoại: {{ dataUser.phonenumber }}</p>
        <p>Địa chỉ: Việt Nam</p>
    </div>
</template>