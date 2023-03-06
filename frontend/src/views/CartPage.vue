<script>
export default{
    beforeRouteEnter: (to) => {
        if (!localStorage.getItem('isloggin') && to.name!=='HomePage') {
            alert("Bạn cần phải đăng nhập để vào giỏ hàng !")
            return '/'
        }
    }
}
</script>

<template>
    <div class="container" id="cartPage">
        <h4>GIỎ HÀNG</h4>
    </div>
</template>

<style>
#cartPage{
    margin-left: 160px;
    margin-top: 50px;
}
</style>