<template>
    <!-- Header1 -->
    <nav class="navbar navbar-expand-lg navbar-light" id="top_nav">
        <div class="container" style="height: 82px;">
            <a class="navbar-brand" href="/" style="margin-right:150px;margin-top:37px;">
                <img src="@/assets/img/logo_ZBooks.png" class="img-fluid" alt="..." width="200" height="200">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="input-group mb-3">
                    <form action="" class="d-flex" style="width:500px;">
                        <input type="text" class="form-control" placeholder="Tìm sản phẩm..." aria-label="Recipient's username" aria-describedby="basic-addon2" style="border-radius:6px 0 0 6px;">
                        <button id="btn_search" type="submit" style="width:120px;height:50px;border-radius:0 6px 6px 0">Tìm Kiếm</button>
                    </form>
                </div>

                <div class="d-flex flex-column" style="width:120px;margin-left:-30%;margin-top:-20px;margin-right:20px;z-index:10">
                    <span class="fw-bold mb-1">
                        <a href="#" class="text-decoration-none text-dark">
                            <router-link to="/login" class="text-decoration-none text-dark"> Đăng Nhập</router-link>
                        </a>
                    </span>

                    <span>
                        <a href="www.google.com" class="text-decoration-none text-dark">
                            <router-link to="/register" class="text-decoration-none text-dark"> Đăng Ký</router-link>
                        </a>
                    </span>
                </div>

                <!-- cart_icon -->
                <div id="icon_cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p style="font-size:10px;">Giỏ hàng</p>
                </div>
            </div>
        </div>
    </nav>

    <!-- Header 2 -->
    <nav class="navbar navbar-expand-lg navbar-light" id="nav_bottom">
        <div class="container" style="height: 82px;">
            <div class="navbar-brand" href="#" style="    margin-right: 50px;
                            margin-left: 61px;">
                <div class="dropdown">
                    <button class="btn dropdown-toggle text-light fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                        style="border:2px solid white;padding:10px;z-index:10">
                        <i class="fa-solid fa-bars"></i>
                        &nbsp;
                        DANH MỤC SẢN PHẨM
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="www.google.com">SÁCH TRINH THÁM</a></li>
                        <li><a class="dropdown-item" href="#">SÁCH KHOA HỌC</a></li>
                        <li><a class="dropdown-item" href="#">SÁCH NGOẠI NGỮ</a></li>
                    </ul>
                </div>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="input-group mb-3 text-light" style="    align-items: center;
                                                margin-bottom: 0 !important;">
                    <div class="col-lg-1" style="font-size:35px ;margin-right: -23px;">
                        <i class="fa-solid fa-headphones-simple"></i>
                    </div>
                    <div class="col-lg-5">
                        <div>
                            Hỗ trợ miễn phí 24/7
                        </div>
                        <div class="fw-bold">
                            +84 907532754
                        </div>
                    </div>
                </div>

                <div style="    margin-left: -592px;z-index:10">
                    <ul class="nav d-flex">
                        <li class="nav-item" style="margin-right:15px;">
                            <router-link to="/" class="text-decoration-none text-white">
                                TRANG CHỦ
                            </router-link>
                        </li>
                        <li class="nav-item" style="margin-right:15px;">
                            <router-link to="/storesystem" class="text-decoration-none text-white">
                                HỆ THỐNG NHÀ SÁCH
                            </router-link>
                        </li>
                        <li class="nav-item" style="margin-right:15px;">
                            <router-link to="/introduce" class="text-decoration-none text-white">
                                GIỚI THIỆU
                            </router-link>
                        </li>
                        <li class="nav-item" style="margin-right:15px;">
                            <router-link to="/contact" class="text-decoration-none text-white">
                                LIÊN HỆ
                            </router-link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>
</template>

<style>
#btn_search {
    background-color: #62ab00;
    color: white;
    font-weight: bold;
    border: none;
}


#icon_cart {
    color: #62ab00;
    font-size: 30px;
}


#top_nav {
    height: 83px;
}

#nav_bottom {
    background-color: #62ab00;
    height: 76px;
}

#myBtn {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: #62ab00;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
}

#myBtn:hover {
    background-color: #555;
}
</style>

