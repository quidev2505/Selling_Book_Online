<script>
import ProductService from '../services/Product.service';
import SliderIProduct from '../components/SliderProduct.vue'
export default {
    components: {
        SliderIProduct
    },
    data() {
        return {
            ProductData: [],
        }
    },
    methods: {
        async getDataProduct() {
            try {
                this.ProductData = await ProductService.getAllProduct();
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.getDataProduct();
    }
}
</script>

<template>
    <div class="container" id="main_page">
        <!-- Slider Image -->
        <SliderIProduct></SliderIProduct>

        <!-- Main_Content_Product-->
        <div class="row mt-5 item_product">
            <h4> <i class="fa-solid fa-fire"></i> XU HƯỚNG MUA SẮM</h4>
            <div class="col-lg-3" v-for="item in ProductData" v-show="item.categories === 'Văn Học'">
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
                            <button type="button" class="btn" id="btn_detail">Xem chi tiết</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>


        <!-- Img_Banner_Adv   -->
        <div class="row container mt-5">
            <div class="col">
                <img src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-with-text.jpg" class="img-fluid" alt="..." width="100%">
            </div>
            <div class="col">
                <img src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-with-text-2.jpg" class="img-fluid" alt="..." width="100%">
            </div>
        </div>


        <!-- Left_Product_Tâm Lý - Kỹ Năng Sống -->
        <!-- Right_Product_Tiểu Sử Hồi Ký -->
        <div class="row">
            <div class="col">
                <div class="row mt-5 item_product" style="margin-right:10px;">
                    <h4><i class="fa-solid fa-kitchen-set"></i> TÂM LÝ - KỸ NĂNG SỐNG</h4>
                    <div class="col-lg-6 mt-3" v-for="item in ProductData" v-show="item.categories === 'Tâm Lý - Kỹ Năng Sống'">
                        <div class="card" style="width: 18rem;">
                            <img :src="item.img_url" class="card-img-top" alt="..." width="190" height="190" style="object-fit: contain;">
                            <div class="card-body">
                                <span class="card-title" style="height:48px">{{ item.title }}</span>
                                <p class="card-text"><span class="fw-bold"> Giá bán:</span> <span class="text-danger fw-bold"> {{ item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                }}</span></p>
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
            <div class="col">
                <div class="row mt-5 item_product">
                    <h4><i class="fa-solid fa-landmark"></i> TIẾU SỬ HỒI KÝ</h4>
                    <div class="col-lg-6 mt-3" v-for="item in ProductData" v-show="item.categories === 'Tiểu Sử Hồi Ký'">
                        <div class="card" style="width: 18rem;">
                            <img :src="item.img_url" class="card-img-top" alt="..." width="190" height="190" style="object-fit: contain;">
                            <div class="card-body">
                                <span class="card-title" style="height:48px">{{ item.title }}</span>
                                <p class="card-text"><span class="fw-bold"> Giá bán:</span> <span class="text-danger fw-bold"> {{ item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                }}</span></p>
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
#main_page {
    height: 100%;
}

.item_product h4 {
    background-color: #62ab00;
    border-radius: 5px;
    text-align: center;
    color: white;
    padding: 5px;
    margin-bottom: 19px;
}

.item_product {
    border: 1.5px solid #62ab00;
    border-radius: 5px;
    padding: 5px;
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
}</style>