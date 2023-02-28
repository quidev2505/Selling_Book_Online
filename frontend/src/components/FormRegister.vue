<script>
export default {
    methods: {

    }
}
</script>


<template>
    <form>
        <!-- UserName Input -->
        <div class="mb-3">
            <label for="inputUserName" class="form-label fw-bold">Tên người dùng: </label>
            <input type="text" class="form-control" id="inputUserName"  placeholder="Vui lòng nhập vào tên người dùng...">
        </div>

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
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Ghi nhớ đăng nhập</label>
        </div>

        <button type="submit" class="btn btn-light fw-bold" style="padding: 10px;;border:1px solid #ccc">Xác Nhận</button>
        <p class="mt-4">Nếu đã có tài khoản. Hãy nhấn vào
            <router-link to="/login" class="link-danger">Đăng Nhập
            </router-link>
        </p>
    </form>
</template>