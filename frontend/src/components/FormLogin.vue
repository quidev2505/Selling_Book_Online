<script>
    export default{
        methods:{

        }
    }
</script>


<template>
    <form>
        <!-- Email Input -->
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fw-bold">Email: </label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vui lòng nhập vào email...">
        </div>

        <!-- Password Input -->
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label fw-bold">Mật khẩu: </label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Nhập vào mật khẩu...">
        </div>

        <!-- Ghi nhớ đăng nhập -->
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input fw-bold" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Ghi nhớ đăng nhập</label>
        </div>

        <button type="submit" class="btn btn-light fw-bold" style="padding: 10px;;border:1px solid #ccc">Xác Nhận</button>
        <p class="mt-4">Nếu chưa có tài khoản. Hãy nhấn vào 
            <router-link to="/register"
                class="link-danger">Đăng Ký
            </router-link>
        </p>
    </form>
</template>