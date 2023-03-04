<script>
import ProductService from '../services/Product.service';
export default {
    data() {
        return {
            ManageBooks: [],
            title:'',
            img_url:[],
            author:'',
            categories:'',
            description:'',
            price:'',
            bookType: '',
        }
    },
    methods: {
        async getBookData() {
            try {
                this.ManageBooks = await ProductService.getAllProduct();
            } catch (error) {
                console.log(error)
            }
        },
        addBook() {
            document.querySelector()
        }
    },
    mounted() {
        this.getBookData();
    },

}
</script>
<template>
    <button type="button" class="btn btn-success" @click="addBook()"><i class="fa-solid fa-plus"></i> Thêm Sách </button>
    <br>
    <br>
    <!-- Giao diện thêm sách -->
    <form @submit.prevent>
        <!-- Email Input -->
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fw-bold">Tên Sách: </label>
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

        <button @click="handleLoginUser()" type="submit" class="btn btn-light fw-bold" style="padding: 10px;;border:1px solid #ccc">Xác Nhận</button>
        <p class="mt-4">Nếu chưa có tài khoản. Hãy nhấn vào
            <router-link to="/register" class="link-danger">Đăng Ký
            </router-link>
        </p>
    </form>



    <table class="table" border="1px" style="with:90vw;">
        <thead>
            <tr class="table-info text-center">
                <th scope="col">STT</th>
                <th scope="col">Tên Sách</th>
                <th scope="col">Hình Ảnh</th>
                <th scope="col">Tác Giả</th>
                <th scope="col">Mô Tả</th>
                <th scope="col">Danh Mục</th>
                <th scope="col">Thể Loại</th>
                <th scope="col">Giá</th>
                <th scope="col">Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in ManageBooks">
                <td>
                    {{ index + 1 }}
                </td>
                <td>{{ item.title }}</td>
                <td class="d-flex flex-column" id="img_book">
                    <img :src="item.img_url[0]" class="img-fluid" alt="..." style="width:70px;height:70px;border:1px solid #ccc;border-radius:5px;">
                    <img :src="item.img_url[1]" class="img-fluid" alt="..." style="width:70px;height:70px;border:1px solid #ccc;border-radius:5px;">
                    <img :src="item.img_url[2]" class="img-fluid" alt="..." style="width:70px;height:70px;border:1px solid #ccc;border-radius:5px;">
                </td>
                <td>{{ item.author }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.categories }}</td>
                <td>{{ item.bookType }}</td>
                <td>{{ item.price.toLocaleString() }} đ</td>
                <td>
                    <button type="button" class="btn btn-warning"><i class="fa-regular fa-pen-to-square"></i> Sửa</button>
                    <br>
                    <br>
                    <button type="button" class="btn btn-danger"> <i class="fa-solid fa-trash"></i> Xóa</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>