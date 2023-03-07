<script>
import AuthService from '../services/Auth.service';
import ToastVue from './Toast.vue';
import toast from '../assets/js/toasts';

export default {
    components:{
        ToastVue
    },
    data() {
        return{
            userDataInput:{
                username:"",
                email: "",
                phonenumber: "",
                password: ""
            },
            toasts:{
                title: "",
                msg: "",
                type: "",
                duration: 0
            }
        }
    },
    methods: {
        toast,
        async createUser() {
            try {
                console.log(this.userDataInput)
                await AuthService.createregister(this.userDataInput);
                this.toasts.title = "Success",
                this.toasts.msg = "Đăng Ký Thành Công !"
                this.toasts.type = "success",
                this.toasts.duration = 2000
                document.querySelector("#toast").style.display='block'
                this.toast();
                setTimeout(()=>{
                    document.querySelector("#toast").style.display = 'none'
                    this.$router.push({name:"Login"});
                },2000)
            }catch(err){
                console.log(err)
                this.toasts.title = "Failed",
                this.toasts.msg = "Đăng kí tài khoản thất bại !"
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
        <!-- UserName Input -->
        <div class="mb-3">
            <label for="inputUserName" class="form-label fw-bold">Tên đầy đủ: </label>
            <input type="text" class="form-control" id="inputUserName" placeholder="Vui lòng nhập vào tên người dùng..." v-model="userDataInput.username" required>
        </div>

        <!-- Email Input -->
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fw-bold">Email: </label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vui lòng nhập vào email..." v-model="userDataInput.email" required>
        </div>

        <!-- PhoneNumber Input -->
        <div class="mb-3">
            <label for="inputphonenumber" class="form-label fw-bold">Số điện thoại: </label>
            <input type="text" class="form-control" id="inputphonenumber" minlength="10" maxlength="11" placeholder="Vui lòng nhập vào số điện thoại..." v-model="userDataInput.phonenumber" required>
        </div>


        <!-- Password Input -->
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label fw-bold">Mật khẩu: </label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Nhập vào mật khẩu..." v-model="userDataInput.password" required>
        </div>

        <!-- Ghi nhớ đăng nhập -->
        <!-- <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Ghi nhớ đăng nhập</label>
                </div> -->

        <button type="submit" class="btn btn-light fw-bold" style="padding: 10px;;border:1px solid #ccc" @click="createUser()">Xác Nhận</button>
        <p class="mt-4">Nếu đã có tài khoản. Hãy nhấn vào
            <router-link to="/login" class="link-danger">Đăng Nhập
            </router-link>
        </p>
    </form>
</template>