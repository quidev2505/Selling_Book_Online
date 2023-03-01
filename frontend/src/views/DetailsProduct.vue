<script>
import ProductService from '../services/Product.service';


export default {
    data() {
        return {
            DetailProductData: [],
            quantity_item: 1,
            RelatedProduct: [],
        }
    },
    methods: {
        reloadPage(){
            setTimeout(()=>{
                window.location.reload();
            },100)
        },
        async getDetailDataProduct() {
            try {
                this.DetailProductData = await ProductService.get(this.$route.params.id);
            } catch (error) {
                console.log(error)
            }
        },
        async getRelatedProduct() {
            try {
                let getDetailData = await ProductService.get(this.$route.params.id);
                let categories_related = getDetailData.categories;
                let ArrayProductRelated = await ProductService.getAllProduct();
                ArrayProductRelated.forEach((item, index) => {
                    if (item.categories === categories_related && item._id !== this.$route.params.id) {
                        this.RelatedProduct.push(item)
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
        ,
        async DecreaseNumber() {
            if (this.quantity_item < 1) {
                this.quantity_item = 1;
            } else {
                this.quantity_item -= 1
            }
        },
        async IncreaseNumber() {
            this.quantity_item += 1
        }
    },
    created() {
        this.getDetailDataProduct();
    },
    mounted() {
        this.getRelatedProduct();
    }
}
</script>

<template>
    <div class="container" id="main_page_detail_product">
        <!-- BreadCrumb -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/" style="color:#62ab00">Trang chủ</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
            </ol>
        </nav>

        <!-- Detail_Product -->
        <div class="row">
            <div class="col-4">
                <img :src="DetailProductData.img_url" class="img-fluid" alt="..." width="319" height="444" style="    border: 1px solid #ccc;
                                border-radius: 10px;
                                padding: 10px;box-shadow: 1px 2px 13px 0px;">
            </div>
            <div class="col-6">
                <div class="row">
                    <h2>{{ DetailProductData.title }}</h2>
                </div>
                <div class="row">
                    <p>Danh mục: <span class="fw-bold">{{ DetailProductData.categories }}</span></p>
                    <p>Tác giả: <span class="fw-bold">{{ DetailProductData.author }}</span></p>
                </div>
                <div class="row">
                    <p style="border:1px solid #62ab00;;width:fit-content;border-radius:10px;padding:20px">
                        Giá bán:
                    <h1 style="color:#62ab00;">
                        {{ DetailProductData.price.toLocaleString() }} đ
                    </h1>
                    </p>
                </div>
                <br>
                <div class="row">
                    <h5>Số lượng:</h5>
                    <br>
                    <br>
                    <div class="d-flex">
                        <button id="btn_decrease" @click="DecreaseNumber">-</button>
                        <input type="text" v-model="quantity_item" id="input_quantity">
                        <button id="btn_increase" @click="IncreaseNumber">+</button>
                    </div>
                </div>

                <div class="row">
                    <p id="cart_btn"><i class="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng</p>
                </div>
            </div>
        </div>


        <!-- Description Product -->
        <div class="row mt-5" id="description">
            <h5>MÔ TẢ SẢN PHẨM</h5>
            <hr>
            <div>
                <p>
                    {{ DetailProductData.description }}
                </p>
            </div>
        </div>


        <!-- Product_Related -->
        <div class="row mt-5" id="description">
            <h5>SẢN PHẨM LIÊN QUAN</h5>
            <hr>
            <div class="d-flex">
                <div class="col" v-for="item in RelatedProduct">
                    <div class="card" style="width: 18rem;">
                        <img :src="item.img_url" class="card-img-top" alt="..." width="190" height="190" style="object-fit: contain;">
                        <div class="card-body">
                            <span class="card-title" style="height:48px">{{ item.title }}</span>
                            <p class="card-text"><span class="fw-bold"> Giá bán:</span> <span class="text-danger fw-bold"> {{ item.price.toLocaleString('vi-VN', {
                                style: 'currency', currency: 'VND'
                            }) }}</span></p>
                            <router-link :to="{
                                name: 'Details',
                                params: { id: item._id },
                            }">
                                <button type="button" class="btn" id="btn_detail" @click="reloadPage()">Xem chi tiết</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
#main_page_detail_product {
    height: 100%;
    margin-left: 165px;
    margin-top: 50px;
}

#btn_detail {
    background-color: #62ab00;
    width: 100%;
    font-weight: bold;
    color: white;
}


#btn_decrease {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    border: none;
}

#btn_increase {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    border: none;
}


#btn_decrease:hover {
    background-color: #62ab00;
}


#btn_increase:hover {
    background-color: #62ab00;
}

#input_quantity {
    width: 100px;
    text-align: center;
}

#cart_btn {
    padding: 16px;
    border: 1px solid #62ab00;
    color: #62ab00;
    font-weight: bold;
    width: fit-content;
    border-radius: 10px;
    font-size: 17px;
    margin-top: 29px;
}

#description {
    width: 88%;
    border: 2px solid #62ab00;
    padding: 10px;
    border-radius: 10px;
}


.card-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>