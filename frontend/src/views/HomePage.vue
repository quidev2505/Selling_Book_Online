<script>
    import ProductService from '../services/Product.service';
    import SliderIProduct from '../components/SliderProduct.vue'
    export default{
        components: {
            SliderIProduct
        },
        data(){
            return {
                ProductData: [],
            }
        },
        methods: {
            async getDataProduct(){
                try{
                    this.ProductData = await ProductService.getAllProduct();
                }catch(error){
                    console.log(error)
                }
            }
        },
        mounted(){
            this.getDataProduct();
        }
    }
</script>

<template>
    <div class="container" id="main_page">
        <SliderIProduct></SliderIProduct>
    </div>
</template>

<style>
    #main_page{
        height: 100vh;
    }
</style>