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
    <div>
        Đây là trang giỏ hàng
    </div>
</template>