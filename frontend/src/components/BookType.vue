<script>
import BookTypeService from '../services/BookType.service';
import CategoryService from '../services/Category.service';
import ToastVue from './Toast.vue';
import toast from '../assets/js/toasts';


export default {
    components: {
        ToastVue
    },
    data() {
        return {
            ManageBookType: [],
            ManageCategory: [],
            BookTypeInput: {
                booktype_name: "",
                category_name: ""
            },
            toasts: {
                title: "",
                msg: "",
                type: "",
                duration: 0
            },
            id_book: '',
            data_edit: '',
            inputSearch: "",
        }
    },
    methods: {
        toast,
        async getbooktypeData() {
            try {
                this.ManageBookType = await BookTypeService.getAllBookType();
                this.ManageCategory = await CategoryService.getAllCategory();
            } catch (error) {
                console.log(error)
            }
        },
        addBookType() {
            document.querySelector("#table_manageBookType").style.display = 'none'
            document.querySelector("#form_addBookType").style.display = 'block'
            document.querySelector("#btn_addBookType").style.display = 'none'
            document.querySelector("#pills-tabContent").style.margin = '0 auto'
            document.querySelector("#pills-tabContent").style.width = '100%'
            document.querySelector("#pills-tabContent").style.padding = '40px'
        },
        backPage() {
            setTimeout(() => {
                window.location.reload();
            }, 100)
        },
        async handleAddAuthor() {
            try {
                console.log(this.AuthorInput)
                await AuthorService.create(this.AuthorInput)
                alert('Thêm tác giả thành công !')
                setTimeout(() => {
                    document.querySelector("#toast").style.display = 'none'
                    window.location.reload();
                }, 1000)
            }
            catch (err) {
                alert('Thêm tác giả thất bại ! ')
                setTimeout(() => {
                    document.querySelector("#toast").style.display = 'none'
                }, 700)
            }
        },
        async deleteAuthor(Id_Author) {
            let check_delete = confirm("Chắc chắn muốn xóa chứ ?");
            if (check_delete) {
                try {
                    await AuthorService.delete(Id_Author);
                    alert('Xóa thành công !');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                } catch (err) {
                    alert('Xóa thất bại!')
                }
            } else {
                return
            }
        },
        async FindAuthor(inputKeyWord) {
            if (inputKeyWord === '') {
                this.ManageAuthor = await AuthorService.getAllAuthor();
            } else {
                try {
                    this.ManageAuthor = await AuthorService.findauthorwithName(inputKeyWord);
                } catch (err) {
                    console.log(err)
                }
            }

        }
    },
    mounted() {
        this.getbooktypeData();
    },

}
</script>
<template>
    <button type="button" id="btn_addAuthor" class="btn btn-success" @click="addBookType()"><i class="fa-solid fa-plus"></i> Thêm Thể Loại </button>


    <form action="/" class="d-flex" style="width:500px;margin:0 auto" id="inputSearchKeyWord" @submit.prevent>
        <input type="text" class="form-control" placeholder="Nhập vào tên thể loại..." aria-label="Recipient's username" aria-describedby="basic-addon2" style="border-radius:6px;" v-model="inputSearch">
        <button id="btn_search" type="submit" style="width:120px;height:50px;border-radius:0 6px 6px 0" @click="FindAuthor(inputSearch)">Tìm Kiếm</button>
    </form>
    <br>
    <br>
    <!-- Giao diện thêm danh mục -->
    <ToastVue></ToastVue>
    <form @submit.prevent id="form_addBookType" style="display:none;width:100%;">
        <button @click="backPage()" type="button" class="btn btn-primary"><i class="fa-solid fa-arrow-left"></i> Trở về</button>

        <br>
        <h2 class="text-center" style="color:#62ab00">Thêm thể loại sách</h2>
        <!-- Title Input -->
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fw-bold">Tên thể loại: </label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vui lòng nhập vào tên tác giả..." v-model="BookTypeInput.booktype_name" required>

            <label for="exampleInputEmail1" class="form-label fw-bold">Chọn danh mục: </label>
            <select name="" id="">
                <option value="" v-for="item in ManageCategory" >
                    <input type="text" v-model="BookTypeInput.category_name"> {{ item.category_name }}
                </option>
            </select>
        </div>

        <button @click="handleAddAuthor()" type="submit" class="btn btn-light fw-bold" style="padding: 10px;;border:1px solid #ccc">Xác Nhận</button>
    </form>


    <!-- Giao diện bảng Show Sách -->
    <table class="table" border="1px" style="with:90vw;" id="table_manageBookType">
        <thead>
            <tr class="table-info text-center">
                <th scope="col">STT</th>
                <th scope="col">Tên Tác Giả</th>
                <th scope="col">Hành Động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in ManageAuthor">
                <td>
                    {{ index + 1 }}
                </td>
                <td>{{ item.author_name }}</td>
                <td>
                    <router-link :to="{
                        name: 'EditAuthor',
                        params: { id: item._id },
                    }">
                        <button type="button" class="btn btn-warning"><i class="fa-regular fa-pen-to-square"></i> Sửa</button>
                    </router-link>

                    <br>
                    <br>

                    <button @click="deleteAuthor(item._id)" type="button" class="btn btn-danger"> <i class="fa-solid fa-trash"></i> Xóa</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>