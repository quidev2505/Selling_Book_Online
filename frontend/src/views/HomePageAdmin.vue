<script>
import ManageBook from '../components/ManageBook.vue';
import Category from '../components/Category.vue';
import Author from '../components/Author.vue';
import Account from '../components/Account.vue';
import BookType from '../components/BookType.vue';
import Order from '../components/Order.vue';
export default {
    components: {
        ManageBook,
        Category,
        Author,
        Account,
        BookType,
        Order
    },
    beforeRouteEnter: (to) => {
        if (!localStorage.getItem('isloggin') && to.name !== 'HomePage') {
            alert("Bạn cần phải đăng nhập để vào trang quản trị !")
            return '/'
        }
    }
}
</script>

<template>
    <div class="container" id="main_content_pageAdmin">
        <div class="content_admin_page">
            <h1>Quản Lí WebSite Zbooks Store</h1>

            <!-- Tab quản lí -->
            <ul class="nav nav-pills mb-3 mt-4 cọntainer-fluid" id="pills-tab" role="tablist" style="border:1px solid #ccc;width:fit-content;border-radius:10px;">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa-solid fa-book"></i> Quản Lý
                        Sách </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="fa-solid fa-tag"></i> Quản
                        Lý Danh Mục</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><i class="fa-solid fa-book-open-reader"></i> Quản
                        Lý Tác Giả</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-test-2" data-bs-toggle="pill" data-bs-target="#pills-test" type="button" role="tab" aria-controls="pills-test" aria-selected="false"><i class="fa-regular fa-font-awesome"></i> Quản Lý Thể
                        Loại</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-chon-2" data-bs-toggle="pill" data-bs-target="#pills-chon" type="button" role="tab" aria-controls="pills-chon" aria-selected="false"><i class="fa-solid fa-users"></i> Quản Lý Tài Khoản</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-chinh-2" data-bs-toggle="pill" data-bs-target="#pills-chinh" type="button" role="tab" aria-controls="pills-chinh" aria-selected="false"><i class="fa-solid fa-boxes-stacked"></i> &nbsp;Quản Lý Đơn
                        Hàng</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent" style="border:1px solid #ccc;width:fit-content;border-radius:10px;">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <!-- Quản Lý Sách -->
                    <ManageBook></ManageBook>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <!-- Quản lý danh mục -->
                    <Category></Category>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <!-- Quản lý tác giả -->
                    <Author></Author>
                </div>
                <div class="tab-pane fade" id="pills-test" role="tabpanel" aria-labelledby="pills-test-2">
                    <!-- Quản lý thể loại -->
                    <BookType></BookType>
                </div>
                <div class="tab-pane fade" id="pills-chon" role="tabpanel" aria-labelledby="pills-chon-2">
                    <!-- Quản lý tài khoản -->
                    <Account></Account>
                </div>
                <div class="tab-pane fade" id="pills-chinh" role="tabpanel" aria-labelledby="pills-chinh-2">
                    <!-- Quản lý đơn hàng -->
                    <Order></Order>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#main_content_pageAdmin {
    height: fit-content;
    margin-left: 70px;
}

.content_admin_page {
    margin-top: 80px;
}

tr th, td{
    width: fit-content;
    border: 1px solid #ccc;
}

#img_book{
    object-fit: cover;
}

table{
    font-size: 15px;
    width: fit-content;
}
</style>
