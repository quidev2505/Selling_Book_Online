<script>
import UserService from '../services/User.service';
import ToastVue from '../components/Toast.vue';
import toast from '../assets/js/toasts';
export default {
    components: {
        ToastVue
    },
    data() {
        return {
            toasts: {
                title: "",
                msg: "",
                type: "",
                duration: 0
            },
            userDataInput: {
                old_password: "",
                new_password:"",
                renew_password: ""
            },
        }
    },
    methods: {
        toast,
        async handleChangePassword(){
            let data = await UserService.getuserwithidChangePass(this.$router.params.id);
        }
        // async getDataUser() {
        //     const dataReturn = await UserService.getuserwithid(this.$route.params.id);
        //     this.userDataInput.username = dataReturn.username;
        //     this.userDataInput.email = dataReturn.email;
        //     this.userDataInput.phonenumber = dataReturn.phonenumber;
        // },
        // async handleEditUser() {
        //     try {
        //         let dataUpdate = await UserService.update(this.$route.params.id, this.userDataInput)
        //         this.userDataupdate._id = dataUpdate._id;
        //         this.userDataupdate.username = dataUpdate.username;
        //         this.userDataupdate.email = dataUpdate.email;
        //         this.userDataupdate.phonenumber = dataUpdate.phonenumber;

        //         localStorage.setItem("isloggin", JSON.stringify(this.userDataupdate))

        //         this.toasts.title = "Success",
        //             this.toasts.msg = "Cập nhật thông tin người dùng thành công !"
        //         this.toasts.type = "success",
        //             this.toasts.duration = 2000
        //         document.querySelector("#toast").style.display = 'block'
        //         this.toast();
        //         setTimeout(() => {
        //             document.querySelector("#toast").style.display = 'none'
        //             this.$router.push(`/infoUser/${this.$route.params.id}`)
        //         }, 1500)
        //     }
        //     catch (err) {
        //         console.log(err)
        //         this.toasts.title = "Failed",
        //             this.toasts.msg = "Cập nhật thông tin người dùng thất bại !"
        //         this.toasts.type = "error",
        //             this.toasts.duration = 2000
        //         document.querySelector("#toast").style.display = 'block'
        //         this.toast()
        //         setTimeout(() => {
        //             document.querySelector("#toast").style.display = 'none'
        //         }, 700)
        //     }
        // },
        // backPage() {
        //     setTimeout(() => {
        //         this.$router.push(`/infoUser/${this.$route.params.id}`)
        //     }, 100)
        // },
    }
}
</script>
<template>
    <div class="container" style="margin-top:90px;">
        <ToastVue></ToastVue>
        <!-- Giao diện chỉnh sửa thông tin cá nhân -->
        <form @submit.prevent id="form_editUser" style="width:100%;">
            <button @click="backPage()" type="button" class="btn btn-primary"><i class="fa-solid fa-arrow-left"></i> Trở về</button>

            <br>
            <h2 class="text-center" style="color:#62ab00">Đổi mật khẩu</h2>
            <!-- Title Input -->
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label fw-bold">Nhập mật khẩu cũ: </label>
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vui lòng nhập vào tên người dùng..." v-model="userDataInput.old_password" required>
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label fw-bold">Nhập mật khẩu mới: </label>
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vui lòng nhập vào tên người dùng..." v-model="userDataInput.new_password" required>
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label fw-bold">Nhập lại mật khẩu mới: </label>
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vui lòng nhập vào tên người dùng..." v-model="userDataInput.renew_password" required>
            </div>



            <button @click="handleChangePassword()" type="submit" class="btn btn-light fw-bold" style="padding: 10px;border:1px solid #ccc">Xác Nhận</button>
        </form>
    </div>
</template>