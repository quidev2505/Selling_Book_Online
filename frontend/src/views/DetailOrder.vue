<script>
import OrderService from '../services/Order.service';
export default {
    data() {
        return {
            detailOrder: '',
            dataShow:{
                title: '',
                img_url:'',
                price:'',

            }
        }
    },
    methods: {
        async loadDataOrderDetail() {
            const data = await OrderService.getOrderWithID(this.$route.params.id)
            this.detailOrder = data.detail_cart;
        }
    },
    created() {
        this.loadDataOrderDetail()
    }
}
</script>
<template>
    <div class="container">
        <h2>ĐƠN HÀNG:</h2>
        <!-- <button @click="backPage()" type="button" class="btn btn-primary"><i class="fa-solid fa-arrow-left"></i> Trở về</button> -->

        <h1>CHI TIẾT ĐƠN HÀNG</h1>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng cộng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in detailOrder">
                    <td>{{ ++index }}</td>
                    <td>{{ item.title_product }}</td>
                    <td>
                        <img v-bind:src="item.img_product" alt="">
                    </td>
                    <td>{{item.price_product}}</td>
                    <td>{{item.quantity_product}}</td>
                    <td>{{(item.price_product*item.quantity_product).toLocaleString()}} dd</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>