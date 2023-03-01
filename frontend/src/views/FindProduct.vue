<script>
import ProductService from '../services/Product.service';

export default {
    data() {
        return {
            productfind: [],
        }
    },
    methods: {
        async getDataProductSearch() {
            try {
                this.productfind = await ProductService.findproductwithName(JSON.parse(this.$route.params.name));
            } catch (error) {
                console.log(error)
            }
        },
    },
    created() {
        this.getDataProductSearch();
    }

}
</script>
<template>
    <div class="container mt-5">
        <div class="d-flex">
            <div class="col" v-for="item in productfind">
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
</template>