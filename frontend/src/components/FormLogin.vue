<script>
import AuthService from '../services/Auth.service';
import ToastVue from './Toast.vue';
import toast from '../assets/js/toasts';
export default {
    components: {
        ToastVue
    },
    data() {
        return {
            userDataInput: {
                email: "",
                password: ""
            },
            toasts: {
                title: "",
                msg: "",
                type: "",
                duration: 0
            }
        }
    },
    methods: {
        toast,
        async loginUser() {
            try {
                await AuthService.createlogin(this.userDataInput);
                localStorage.setItem('dadangnhap', JSON.stringify(this.userDataInput.email))
                this.toasts.title = "Success",
                this.toasts.msg = "Đăng Nhập Thành Công !"
                this.toasts.type = "success",
                this.toasts.duration = 2000
                document.querySelector("#toast").style.display = 'block'
                this.toast();
                setTimeout(() => {
                    document.querySelector("#toast").style.display = 'none'
                    this.$router.push({ name: "HomePage" });
                }, 2000)
            } catch (err) {
                console.log(err)
                this.toasts.title = "Failed",
                    this.toasts.msg = "Sai tên tài khoản hoặc mật khẩu !"
                this.toasts.type = "error",
                    this.toasts.duration = 2000
                document.querySelector("#toast").style.display = 'block'
                this.toast()
                setTimeout(() => {
                    document.querySelector("#toast").style.display = 'none'
                }, 700)
            }
        }
    }
}
</script>



<template>
    <ToastVue></ToastVue>
    <form @submit.prevent>
        <!-- Email Input -->
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fw-bold">Email: </label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vui lòng nhập vào email..." v-model="userDataInput.email" required>
        </div>

        <!-- Password Input -->
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label fw-bold">Mật khẩu: </label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Nhập vào mật khẩu..." v-model="userDataInput.password" required>
        </div>

        <!-- Ghi nhớ đăng nhập -->
        <!-- <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input fw-bold" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Ghi nhớ đăng nhập</label>
        </div> -->

        <button type="submit" class="btn btn-light fw-bold" style="padding: 10px;;border:1px solid #ccc" @click="loginUser()">Xác Nhận</button>
        <p class="mt-4">Nếu chưa có tài khoản. Hãy nhấn vào 
            <router-link to="/register"
                class="link-danger">Đăng Ký
            </router-link>
        </p>
    </form>
</template>