<script>
import ProductService from '../services/Product.service';
export default {
    data() {
        return {
            categoryProduct: [],
            nameCategory: '',
        }
    },
    methods: {
        async getDetailDataProduct() {
            try {
                this.categoryProduct = await ProductService.getcategoryProduct(JSON.parse(this.$route.params.name));
                this.nameCategory = JSON.parse(this.$route.params.name);
            } catch (error) {
                console.log(error)
            }
        },
        navigationCategory() {
            setTimeout(() => {
                window.location.reload();
            }, 100)
        }
    },
    created() {
        this.getDetailDataProduct();
    }
}

</script>


<template>
    <div class="container" id="category_book">
        <!-- BreadCrumb -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb" style="align-items: center;">
                <li class="breadcrumb-item">
                    <router-link to="/" style="color:#62ab00">Trang chủ</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ nameCategory }}</li>
            </ol>
        </nav>

        <!-- Navbar and content category -->
        <div class="row">
            <!-- Left_nav -->
            <div class="col-lg-3" id="left_nav" style="height:fit-content;">
                <ul>
                    <router-link @click="navigationCategory()" :to="{
                        name: 'CategoryBook',
                        params: { name: JSON.stringify('Tất Cả Sách') },
                    }">
                        <li>Tất cả sách</li>
                    </router-link>
                    <router-link @click="navigationCategory()" :to="{
                        name: 'CategoryBook',
                        params: { name: JSON.stringify('Văn Học') },
                    }">
                        <li>Văn Học</li>
                    </router-link>
                    <router-link @click="navigationCategory()" :to="{
                        name: 'CategoryBook',
                        params: { name: JSON.stringify('Kinh Tế') },
                    }">
                        <li>Kinh Tế</li>
                    </router-link>
                    <router-link @click="navigationCategory()" :to="{
                        name: 'CategoryBook',
                        params: { name: JSON.stringify('Tiểu Sử Hồi Ký') },
                    }">
                        <li>Tiểu Sử Hồi Ký</li>
                    </router-link>
                    <router-link @click="navigationCategory()" :to="{
                        name: 'CategoryBook',
                        params: { name: JSON.stringify('Tâm Lý - Kỹ Năng Sống') },
                    }">
                        <li>Tâm Lý - Kỹ Năng Sống</li>
                    </router-link>
                    <router-link @click="navigationCategory()" :to="{
                        name: 'CategoryBook',
                        params: { name: JSON.stringify('Sách Thiếu Nhi') },
                    }">
                        <li>Sách Thiếu Nhi</li>
                    </router-link>
                    <router-link @click="navigationCategory()" :to="{
                        name: 'CategoryBook',
                        params: { name: JSON.stringify('Sách Giáo Khoa - Tham Khảo') },
                    }">
                        <li>Sách Giáo Khoa</li>
                    </router-link>
                </ul>
            </div>
            <!-- Right_content -->
            <div class="col-lg" id="right_content">
                <h3 style="color:#62ab00;margin:10px;">{{ nameCategory }}</h3>
                <div class="container row">
                    <div class="col-lg-4 mt-3 mb-3" v-for="item in categoryProduct">
                        <div class="card" style="width: 18rem;">
                            <img :src="item.img_url[0]" class="card-img-top" alt="..." width="190" height="190" style="object-fit: contain;">
                            <div class="card-body">
                                <span class="card-title" style="height:48px">{{ item.title }}</span>
                                <p class="card-text"><span class="fw-bold"> Giá bán:</span> <span class="text-danger fw-bold"> {{ item.price.toLocaleString() }} đ</span></p>
                                <router-link :to="{
                                    name: 'Details',
                                    params: { id: item._id },
                                }">
                                    <button type="button" class="btn" id="btn_detail">Xem chi tiết</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
#category_book {
    margin-left: 170px;
    margin-top: 20px;
}

#left_nav,
#right_content {
    border: 1px solid #ccc;
    border-radius: 10px;
}

#left_nav ul li {
    list-style: none;
    margin-top: 20px;

}

#left_nav {
    margin-right: 20px;
}

.card-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}

#btn_detail {
    background-color: #62ab00;
    width: 100%;
    font-weight: bold;
    color: white;
}
</style>