
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const PLAYER_STORAGE_KEY = "quoc_player"

    const modalSignUp = document.querySelector('.js-modal-sign-up');
    const modalLogIn = document.querySelector('.js-modal-login');

    const modalContainerSignUp = document.querySelector('.js-modal-container-sign-up');
    const modalContainerLogin = document.querySelector('.js-modal-container-login');

    const btnDk = document.querySelector('.js-dk')
    const btnDn = document.querySelector('.js-dn')

    const btnBackSignup = document.querySelector('.js-modal-close-sign-up')
    const btnBackLogin = document.querySelector('.js-modal-close-login')

    const backOverLay = document.querySelector('.js-overlay')
    const modalMain = document.querySelector('.js-main')

    const closeLoginSignUp = document.querySelector('.js-container_login_signup')
    const btnModalLogin = document.querySelector('.js-modal-login-btn')
    const logOut = document.querySelector('.js-log-out')
    const divAccount = document.querySelector('.js-account')

    // Danh mục
    const btnLaptop = $('.category-item.laptop')
    const btnMouse = $('.category-item.mouse')
    const btnAccessory = $('.category-item.accessory')
    const btnScreen = $('.category-item.screen')
    const btnHeadPhone = $('.category-item.headphone')
    const btnChair = $('.category-item.chair')

    // Detail
    // const back = $('.header__logo-link')
  
   
    const app = {
        items: [
            // item1
            {
                link: "./detail_1.html",
                img: "./assets/img/item1.jpg",
                name: "Laptop Apple Macbook Pro M1",
                price_old: "50.000.000đ",
                price_current: "43.500.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star",
                sold: "88 đã bán",
                brand: "Whoo",
                local: "Nhật Bản",
                favourite: "home-product-item__favourite",
                percent: "13%",
                label: "Giảm",
                num: "js1"
            },    
            // item2
            {
                link: "./detail_2.html",
                img: "./assets/img/item2.jpg",
                name: "Apple Macbook Air 13 2017",
                price_old: "34.990.000đ",
                price_current: "32.990.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star",
                star5: "fas fa-star",
                sold: "128 đã bán",
                brand: "Quoc",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "5%",
                label: "Giảm",
                num: "js2"
            },
            // item3
            {
                link: "./detail_3.html",
                img: "./assets/img/item3.jpg",
                name: "Surface Laptop 3",
                price_old: "27.000.000đ",
                price_current: "25.650.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star",
                sold: "18 đã bán",
                brand: "Thang",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "5%",
                label: "Giảm",
                num: "js3"
            },
            // item4
            {
                link: "./detail_4.html",
                img: "./assets/img/item4.jpg",
                name: "Acer Gaming Nitro 5",
                price_old: "30.000.000đ",
                price_current: "28.200.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star",
                sold: "17 đã bán",
                brand: "Hoang",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "6%",
                label: "Giảm",
                num: "js4"
            },
            // item5
            {
                link: "./detail_5.html",
                img: "./assets/img/item5.jpg",
                name: "Laptop MSI Gaming GF63-468VN",
                price_old: "20.999.000đ",
                price_current: "20.369.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star",
                star5: "fas fa-star",
                sold: "32 đã bán",
                brand: "VinhStore",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "3%",
                label: "Giảm",
                num: "js5"
            },
            // item6
            {
                link: "./detail_6.html",
                img: "./assets/img/item6.jpg",
                name: "Laptop Asus Zenbook UX425EA",
                price_old: "30.999.000đ",
                price_current: "29.759.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star",
                sold: "21 đã bán",
                brand: "Store",
                local: "Hà Nội",
                favourite: "home-product-item__favourite",
                percent: "4%",
                label: "Giảm",
                num: "js6"
            },
            // item7
            {
                link: "./detail_7.html",
                img: "./assets/img/item7.jpg",
                name: "Laptop Gaming MSI Katana GF66 11UC 676VN",
                price_old: "25.990.000đ",
                price_current: "24.179.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star",
                sold: "27 đã bán",
                brand: "Settime",
                local: "Hà Nội",
                favourite: "home-product-item__favourite",
                percent: "7%",
                label: "Giảm",
                num: "js7"
            },
            // item8
            {
                link: "./detail_8.html",
                img: "./assets/img/item8.jpg",
                name: "Laptop Acer Aspire 3 A315 56 37DV",
                price_old: "11.999.000đ",
                price_current: "11.759.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star home-product-item__star--gold",
                sold: "17 đã bán",
                brand: "Pitot",
                local: "Hà Nội",
                favourite: "home-product-item__favourite",
                percent: "2%",
                label: "Giảm",
                num: "js8"
            },
            // item9
            {
                link: "./detail_9.html",
                img: "./assets/img/item9.jpg",
                name: "Laptop Asus Vivobook A415EA EB360T",
                price_old: "17.500.000đ",
                price_current: "16.625.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "14 đã bán",
                brand: "tyty",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "5%",
                label: "Giảm",
                num: "js9"
            },
            // item10
            {
                link: "./detail_10.html",
                img: "./assets/img/item10.jpg",
                name: "Laptop ASUS TUF Gaming F15 FX506LH HN002T",
                price_old: "21.500.000đ",
                price_current: "20.425.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "48 đã bán",
                brand: "treat",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "5%",
                label: "Giảm",
                num: "js10"
            }

        ],

        accessories:[
            // item1
            {
                link: "./ac_1.html",
                img: "./assets/img/kb1.jpg",
                name: "AKKO Keycap set – Black Pink(PBT Double-Shot/ASA profile/158 nút)",
                price_old: "......................",
                price_current: "1.090.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "480 đã bán",
                brand: "treat",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item2
            {
                link: "./ac_2.html",
                img: "./assets/img/kb2.jpg",
                name: "AKKO Keycap set – Carbon Retro (PBT Double-Shot/ASA profile/158 nút)",
                price_old: "......................",
                price_current: "1.090.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "497 đã bán",
                brand: "AKKO",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item3
            {
                link: "./ac_3.html",
                img: "./assets/img/kb3.jpg",
                name: "AKKO Keycap set – Los Angeles (PBT Double-Shot/ASA profile/158 nút)",
                price_old: "......................",
                price_current: "1.090.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "120 đã bán",
                brand: "AKKO",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item4
            {
                link: "./ac_4.html",
                img: "./assets/img/kb4.jpg",
                name: "AKKO Keycap set – Macaw (PBT Double-Shot/Cherry profile/157 nút)",
                price_old: "......................",
                price_current: "1.090.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "1200 đã bán",
                brand: "AKKO",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item5
            {
                link: "./ac_5.html",
                img: "./assets/img/kb5.jpg",
                name: "AKKO Keycap set – Matcha Red Bean (PBT Double-Shot/ASA profile/158 nút)",
                price_old: "......................",
                price_current: "1.090.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "100 đã bán",
                brand: "AKKO",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item6
            {
                link: "./ac_6.html",
                img: "./assets/img/kb6.jpg",
                name: "AKKO Keycap set – Midnight (PBT Double-Shot/ASA profile/178 nút)",
                price_old: "......................",
                price_current: "1.090.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "235 đã bán",
                brand: "AKKO",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item7
            {
                link: "./ac_7.html",
                img: "./assets/img/kb7.jpg",
                name: "AKKO Keycap set – NEON (PBT Double-Shot/ASA profile/158 nút)",
                price_old: "......................",
                price_current: "1.090.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "154 đã bán",
                brand: "AKKO",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item8
            {
                link: "./ac_8.html",
                img: "./assets/img/kb8.jpg",
                name: "AKKO Keycap set – Silent (PBT Double-Shot/Cherry profile/177 nút)",
                price_old: "......................",
                price_current: "1.090.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "59 đã bán",
                brand: "AKKO",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item9
            {
                link: "./ac_9.html",
                img: "./assets/img/kb9.jpg",
                name: "AKKO Keycap set EVA-01 (PBT Double-Shot/ASA profile/158 nút)",
                price_old: "......................",
                price_current: "1.090.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star ",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "92 đã bán",
                brand: "AKKO",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item10
            {
                link: "./ac_10.html",
                img: "./assets/img/kb10.jpg",
                name: "Bàn phím Razer Blackwidow Green Switch",
                price_old: "......................",
                price_current: "2.690.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star home-product-item__star--gold",
                sold: "102 đã bán",
                brand: "Razer ",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            }
        ],

        mouse:[
            // item1
            {
                link: "./mouse_1.html",
                img: "./assets/img/mouse1.jpg",
                name: "Chuột Logitech G Pro Wireless",
                price_old: "......................",
                price_current: "2.690.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "48 đã bán",
                brand: "Logitech",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item2
            {
                link: "./mouse_2.html",
                img: "./assets/img/mouse2.jpg",
                name: "Chuột Razer Viper Ultimate (Bản không dock sạc)",
                price_old: "......................",
                price_current: "2.890.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "99 đã bán",
                brand: "Razer",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item3
            {
                link: "./mouse_3.html",
                img: "./assets/img/mouse3.jpg",
                name: "Chuột Logitech G Pro X Superlight Wireless Black",
                price_old: "......................",
                price_current: "2.990.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "19 đã bán",
                brand: "Logitech",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item4
            {
                link: "./mouse_4.html",
                img: "./assets/img/mouse4.jpg",
                name: "Chuột Logitech G Pro X Superlight Wireless White",
                price_old: "......................",
                price_current: "2.990.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "89 đã bán",
                brand: "Logitech",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item5
            {
                link: "./mouse_5.html",
                img: "./assets/img/mouse5.jpg",
                name: "Chuột Razer DeathAdder V2 Pro",
                price_old: "......................",
                price_current: "2.990.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "76 đã bán",
                brand: "Razer",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item6
            {
                link: "./mouse_6.html",
                img: "./assets/img/mouse6.jpg",
                name: "Chuột Logitech G502 Hero Lightspeed Wireless",
                price_old: "......................",
                price_current: "2.990.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star ",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "36 đã bán",
                brand: "Logitech",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item7
            {
                link: "./mouse_7.html",
                img: "./assets/img/mouse7.jpg",
                name: "Chuột Logitech G903 Hero Lightspeed Wireless",
                price_old: "......................",
                price_current: "2.990.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "86 đã bán",
                brand: "Logitech",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item8
            {
                link: "./mouse_8.html",
                img: "./assets/img/mouse8.jpg",
                name: "Chuột Razer Viper Ultimate with Charging Dock - Quartz",
                price_old: "......................",
                price_current: "3.490.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "16 đã bán",
                brand: "Razer",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item9
            {
                link: "./mouse_9.html",
                img: "./assets/img/mouse9.jpg",
                name: "Chuột Razer Naga Pro",
                price_old: "......................",
                price_current: "3.490.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star home-product-item__star--gold",
                sold: "56 đã bán",
                brand: "Razer",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item10
            {
                link: "./mouse_10.html",
                img: "./assets/img/mouse10.jpg",
                name: "Chuột Asus ROG Chakram",
                price_old: "......................",
                price_current: "3.790.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star home-product-item__star--gold",
                sold: "84 đã bán",
                brand: "ASUS",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
        ],

        screenCpt:[
            // item1
            {
                link: "./sc_1.html",
                img: "./assets/img/sc1.jpg",
                name: "Màn hình AORUS FV43U 43' VA QLED 4K 144Hz",
                price_old: "......................",
                price_current: "32.490.000đ",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "108 đã bán",
                brand: "GIGABYTE",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item2
            {
                link: "./sc_2.html",
                img: "./assets/img/sc2.jpg",
                name: "Màn hình Asus ROG SWIFT PG32UQX 32' IPS 4K 144Hz G-SYNC ULTIMATE",
                price_old: "......................",
                price_current: "98.900.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "10 đã bán",
                brand: "Asus",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item3
            {
                link: "./sc_3.html",
                img: "./assets/img/sc3.jpg",
                name: "Màn hình cong Asus ROG Strix XG49VQ 49' VA 144Hz",
                price_old: "......................",
                price_current: "26.490.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "55 đã bán",
                brand: "Asus",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item4
            {
                link: "./sc_4.html",
                img: "./assets/img/sc4.jpg",
                name: "Màn hình cong LG 34WK95C-W 34' Nano IPS 2K UltraWide",
                price_old: "......................",
                price_current: "25.500.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "95 đã bán",
                brand: "LG",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item5
            {
                link: "./sc_5.html",
                img: "./assets/img/sc5.jpg",
                name: "Màn hình cong LG 38GN950-B 38' Nano IPS 2K 160Hz Oc G-Sync HDR",
                price_old: "......................",
                price_current: "37.990.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "59 đã bán",
                brand: "LG",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item6
            {
                link: "./sc_6.html",
                img: "./assets/img/sc6.jpg",
                name: "Màn hình cong LG 38WN95C-W 38” IPS 2K 144Hz Gsync compatible",
                price_old: "......................",
                price_current: "35.290.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "16 đã bán",
                brand: "LG",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item7
            {
                link: "./sc_7.html",
                img: "./assets/img/sc7.jpg",
                name: "Màn hình cong SAMSUNG QLED LC49G95 49' VA 2K 240Hz Gsync",
                price_old: "......................",
                price_current: "45.990.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star ",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "8 đã bán",
                brand: "SAMSUNG",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item8
            {
                link: "./sc_8.html",
                img: "./assets/img/sc8.jpg",
                name: "Màn hình Dell UltraSharp UP3216Q 32' IPS UltraHD 4K",
                price_old: "......................",
                price_current: "27.190.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "81 đã bán",
                brand: "DELL",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item9
             {
                link: "./sc_9.html",
                img: "./assets/img/sc9.jpg",
                name: "Màn hình LG 32UL950-W 32' Nano IPS 4K with Thunderbolt™3 HDR",
                price_old: "......................",
                price_current: "26.790.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "156 đã bán",
                brand: "LG",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item10
            {
                link: "./sc_10.html",
                img: "./assets/img/sc10.jpg",
                name: "MMàn hình LG 27GP850-B UltraGear 27' Nano IPS 2K 180Hz 1ms HDR G-Sync",
                price_old: "......................",
                price_current: "11.490.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star home-product-item__star--gold",
                sold: "196 đã bán",
                brand: "LG",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            }
        ],

        headPhone:[
            // item1
            {
                link: "./hp_1.html",
                img: "./assets/img/hp1.jpg",
                name: "Tai nghe Asus ROG THETA 7.1",
                price_old: "......................",
                price_current: "5.990.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star home-product-item__star--gold",
                sold: "16 đã bán",
                brand: "ASUS",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item2
            {
                link: "./hp_2.html",
                img: "./assets/img/hp2.jpg",
                name: "Tai Nghe Audio Technica ATH - M60X",
                price_old: "......................",
                price_current: "5.290.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "13 đã bán",
                brand: "Audio Technica",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item3
            {
                link: "./hp_3.html",
                img: "./assets/img/hp3.jpg",
                name: "Tai nghe Audio-Technica Professional Hifi ATH - M50x",
                price_old: "......................",
                price_current: "4.500.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "23 đã bán",
                brand: "Audio Technica",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item4
            {
                link: "./hp_4.html",
                img: "./assets/img/hp4.jpg",
                name: "Tai nghe Bluetooth Audio-Technica ATH - ANC700BT",
                price_old: "......................",
                price_current: "4.900.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "180 đã bán",
                brand: "Audio Technica",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item5
            {
                link: "./hp_5.html",
                img: "./assets/img/hp5.jpg",
                name: "Tai nghe Bluetooth Audio-Technica ATH - SR50BT",
                price_old: "......................",
                price_current: "5.800.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "80 đã bán",
                brand: "Audio Technica",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
        ],
        
        chair:[
            // item1
            {
                link: "./chair_1.html",
                img: "./assets/img/c1.jpg",
                name: "Ghế Gaming Noble Chair - Epic Series Black/Gold",
                price_old: "......................",
                price_current: "10.490.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star home-product-item__star--gold",
                sold: "25 đã bán",
                brand: "Noblechair",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item2
            {
                link: "./chair_2.html",
                img: "./assets/img/c2.jpg",
                name: "Ghế Corsair TC60 Fabric - Black",
                price_old: "......................",
                price_current: "4.990.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star home-product-item__star--gold",
                sold: "145 đã bán",
                brand: "Corsair",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item3
            {
                link: "./chair_3.html",
                img: "./assets/img/c3.jpg",
                name: "Ghế Corsair TC60 Fabric - White",
                price_old: "......................",
                price_current: "4.990.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star home-product-item__star--gold",
                sold: "185 đã bán",
                brand: "Corsair",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item4
            {
                link: "./chair_4.html",
                img: "./assets/img/c4.jpg",
                name: "Ghế chơi game Warrior Raider Series – WGC206 Plus White/Pink",
                price_old: "......................",
                price_current: "3.690.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star ",
                star5: "fas fa-star ",
                sold: "15 đã bán",
                brand: "Warrior",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item5
            {
                link: "./chair_5.html",
                img: "./assets/img/c5.jpg",
                name: "Ghế Cougar Armor K",
                price_old: "......................",
                price_current: "4.890.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "50 đã bán",
                brand: "Cougar",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            },
            // item6
            {
                link: "./chair_6.html",
                img: "./assets/img/c6.jpg",
                name: "Ghế chơi game E-Dra Mars EGC202 Black",
                price_old: "......................",
                price_current: "2.990.000₫",
                heart: "home-product-item__like-icon-fill fas fa-heart",
                star1: "fas fa-star home-product-item__star--gold",
                star2: "fas fa-star home-product-item__star--gold",
                star3: "fas fa-star home-product-item__star--gold",
                star4: "fas fa-star home-product-item__star--gold",
                star5: "fas fa-star ",
                sold: "32 đã bán",
                brand: "E-Dra",
                local: "TP. Hồ Chí Minh",
                favourite: "home-product-item__favourite",
                percent: "Mới",
                label: ""
            }
        ],

        // detail:[
        //     {
               
        //         img: "assets/img/item1.jpg",
        //         name: "Laptop ASUS TUF Gaming F15 FX506LH HN002T",
        //         price_current: "20.425.000đ",
            
        //     }
        // ],

        renderAccessory: function(){
            const htmls = this.accessories.map(item =>{
                return `
                <div class="grid__column-2-4">
                <a class="home-product-item" href="${item.link}">
                    <div class="home-product-item__img" style="background-image: url(${item.img});"></div>
                    <h4 class="home-product-item__name">${item.name}</h4>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${item.price_old}</span>
                        <span class="home-product-item__price-current">${item.price_current}</span>
                    </div>
                    <div class="home-product-item__action">
                        <span class="home-product-item__like home-product-item__like--liked">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="${item.heart}"></i>
                        </span>
                        <div class="home-product-item__rating">
                            <i class="${item.star1}"></i>
                            <i class="${item.star2}"></i>
                            <i class="${item.star3}"></i>
                            <i class="${item.star4}"></i>
                            <i class="${item.star5}"></i>
                        </div>
                        <span class="home-product-item__sold">${item.sold}</span>
                    </div>
                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand">${item.brand}</span>
                        <span class="home-product-item__origin-name">${item.local}</span>
                    </div>
                    <div class="${item.favourite}">
                        <i class="fas fa-check"></i>
                        <span>Yêu thích</span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${item.percent}</span>
                        <span class="home-product-item__sale-off-label">${item.label}</span>
                    </div>
                </a> 
                </div>
                `
              })
              $('.home-product .grid__row').innerHTML = htmls.join('\n')
        },

        renderMouse: function(){
            const htmls = this.mouse.map(item =>{
                return `
                <div class="grid__column-2-4">
                <a class="home-product-item" href="${item.link}">
                    <div class="home-product-item__img" style="background-image: url(${item.img});"></div>
                    <h4 class="home-product-item__name">${item.name}</h4>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${item.price_old}</span>
                        <span class="home-product-item__price-current">${item.price_current}</span>
                    </div>
                    <div class="home-product-item__action">
                        <span class="home-product-item__like home-product-item__like--liked">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="${item.heart}"></i>
                        </span>
                        <div class="home-product-item__rating">
                            <i class="${item.star1}"></i>
                            <i class="${item.star2}"></i>
                            <i class="${item.star3}"></i>
                            <i class="${item.star4}"></i>
                            <i class="${item.star5}"></i>
                        </div>
                        <span class="home-product-item__sold">${item.sold}</span>
                    </div>
                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand">${item.brand}</span>
                        <span class="home-product-item__origin-name">${item.local}</span>
                    </div>
                    <div class="${item.favourite}">
                        <i class="fas fa-check"></i>
                        <span>Yêu thích</span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${item.percent}</span>
                        <span class="home-product-item__sale-off-label">${item.label}</span>
                    </div>
                </a> 
                </div>
                `
              })
              $('.home-product .grid__row').innerHTML = htmls.join('\n')
        },

        renderScreen: function(){
            const htmls = this.screenCpt.map(item =>{
                return `
                <div class="grid__column-2-4">
                <a class="home-product-item" href="${item.link}">
                    <div class="home-product-item__img" style="background-image: url(${item.img});"></div>
                    <h4 class="home-product-item__name">${item.name}</h4>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${item.price_old}</span>
                        <span class="home-product-item__price-current">${item.price_current}</span>
                    </div>
                    <div class="home-product-item__action">
                        <span class="home-product-item__like home-product-item__like--liked">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="${item.heart}"></i>
                        </span>
                        <div class="home-product-item__rating">
                            <i class="${item.star1}"></i>
                            <i class="${item.star2}"></i>
                            <i class="${item.star3}"></i>
                            <i class="${item.star4}"></i>
                            <i class="${item.star5}"></i>
                        </div>
                        <span class="home-product-item__sold">${item.sold}</span>
                    </div>
                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand">${item.brand}</span>
                        <span class="home-product-item__origin-name">${item.local}</span>
                    </div>
                    <div class="${item.favourite}">
                        <i class="fas fa-check"></i>
                        <span>Yêu thích</span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${item.percent}</span>
                        <span class="home-product-item__sale-off-label">${item.label}</span>
                    </div>
                </a> 
                </div>
                `
              })
              $('.home-product .grid__row').innerHTML = htmls.join('\n')
        },

        renderHeadPhone: function(){
            const htmls = this.headPhone.map(item =>{
                return `
                <div class="grid__column-2-4">
                <a class="home-product-item" href="${item.link}">
                    <div class="home-product-item__img" style="background-image: url(${item.img});"></div>
                    <h4 class="home-product-item__name">${item.name}</h4>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${item.price_old}</span>
                        <span class="home-product-item__price-current">${item.price_current}</span>
                    </div>
                    <div class="home-product-item__action">
                        <span class="home-product-item__like home-product-item__like--liked">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="${item.heart}"></i>
                        </span>
                        <div class="home-product-item__rating">
                            <i class="${item.star1}"></i>
                            <i class="${item.star2}"></i>
                            <i class="${item.star3}"></i>
                            <i class="${item.star4}"></i>
                            <i class="${item.star5}"></i>
                        </div>
                        <span class="home-product-item__sold">${item.sold}</span>
                    </div>
                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand">${item.brand}</span>
                        <span class="home-product-item__origin-name">${item.local}</span>
                    </div>
                    <div class="${item.favourite}">
                        <i class="fas fa-check"></i>
                        <span>Yêu thích</span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${item.percent}</span>
                        <span class="home-product-item__sale-off-label">${item.label}</span>
                    </div>
                </a> 
                </div>
                `
              })
              $('.home-product .grid__row').innerHTML = htmls.join('\n')
        },

        renderChair: function(){
            const htmls = this.chair.map(item =>{
                return `
                <div class="grid__column-2-4">
                <a class="home-product-item" href="${item.link}">
                    <div class="home-product-item__img" style="background-image: url(${item.img});"></div>
                    <h4 class="home-product-item__name">${item.name}</h4>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${item.price_old}</span>
                        <span class="home-product-item__price-current">${item.price_current}</span>
                    </div>
                    <div class="home-product-item__action">
                        <span class="home-product-item__like home-product-item__like--liked">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="${item.heart}"></i>
                        </span>
                        <div class="home-product-item__rating">
                            <i class="${item.star1}"></i>
                            <i class="${item.star2}"></i>
                            <i class="${item.star3}"></i>
                            <i class="${item.star4}"></i>
                            <i class="${item.star5}"></i>
                        </div>
                        <span class="home-product-item__sold">${item.sold}</span>
                    </div>
                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand">${item.brand}</span>
                        <span class="home-product-item__origin-name">${item.local}</span>
                    </div>
                    <div class="${item.favourite}">
                        <i class="fas fa-check"></i>
                        <span>Yêu thích</span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${item.percent}</span>
                        <span class="home-product-item__sale-off-label">${item.label}</span>
                    </div>
                </a> 
                </div>
                `
              })
              $('.home-product .grid__row').innerHTML = htmls.join('\n')
        },

        render: function(){
          const htmls = this.items.map(item =>{
            return `
            <div class="grid__column-2-4">
            <a class="home-product-item ${item.num}" href="${item.link}">
                <div class="home-product-item__img" style="background-image: url(${item.img});"></div>
                <h4 class="home-product-item__name">${item.name}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${item.price_old}</span>
                    <span class="home-product-item__price-current">${item.price_current}</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                        <i class="${item.heart}"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="${item.star1}"></i>
                        <i class="${item.star2}"></i>
                        <i class="${item.star3}"></i>
                        <i class="${item.star4}"></i>
                        <i class="${item.star5}"></i>
                    </div>
                    <span class="home-product-item__sold">${item.sold}</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">${item.brand}</span>
                    <span class="home-product-item__origin-name">${item.local}</span>
                </div>
                <div class="${item.favourite}">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">${item.percent}</span>
                    <span class="home-product-item__sale-off-label">Giảm</span>
                </div>
            </a> 
            </div>
            `
          })
          $('.home-product .grid__row').innerHTML = htmls.join('\n')
        },

        // renderItem: function(){
        //     const htmls = this.detail.map(dt =>{
        //       return `
        //             <div class="container_detail">
        //                 <div class="container_detail-head">
        //                     <!-- test -->
        //                     <div class="slider">
        //                         <div class="sliders">
        //                             <!-- Radio buttons start -->
        //                             <input type="radio" name="radio-btn" id="radio1">
        //                             <input type="radio" name="radio-btn" id="radio2">
        //                             <input type="radio" name="radio-btn" id="radio3">
        //                             <input type="radio" name="radio-btn" id="radio4">
        //                             <!-- Radio buttons end -->
                        
        //                             <!-- Slider images start -->
        //                             <div class="slide first">
        //                                 <img src="/assets/img/item1.jpg" alt="">
        //                             </div>
        //                             <div class="slide">
        //                                 <img src="/assets/img/item1_a.jpg" alt="">
        //                             </div>
        //                             <div class="slide">
        //                                 <img src="/assets/img/item1_b.jpg" alt="">
        //                             </div>
        //                             <div class="slide">
        //                                 <img src="/assets/img/item1_c.jpg" alt="">
        //                             </div>
        //                             <!-- Slider images end -->
                        
        //                             <!-- automatic navigation start -->
        //                             <div class="navigation-auto">
        //                                 <div class="auto-btn1"></div>
        //                                 <div class="auto-btn2"></div>
        //                                 <div class="auto-btn3"></div>
        //                                 <div class="auto-btn4"></div>
        //                             </div>
        //                             <!-- automatic navigation end -->
        //                         </div>
        //                             <!-- manual navigation start -->
        //                             <div class="navigation-manual">
        //                                 <label for="radio1" class="manual-btn"></label>
        //                                 <label for="radio2" class="manual-btn"></label>
        //                                 <label for="radio3" class="manual-btn"></label>
        //                                 <label for="radio4" class="manual-btn"></label>
        //                             </div>
        //                             <!-- manual navigation end -->
        //                     </div>

        //                     <div class="description_detail">
        //                         <h2 class="description_detail-heading">Laptop Apple Macbook Pro M1</h2>
        //                         <span class="description_detail-price">43.500.000đ</span>
        //                         <p class="description_detail-transport">Miễn phí vận chuyển</p>
        //                         <p class="description_detail-transport">Tốc hành vận chuyển</p>
        //                         <div class="quantity_detail">
        //                             <span class="quantity_detail--heading">Số lượng</span>
        //                             <a>1</a>
        //                         </div>
        //                         <div class="description_detail--button">
        //                             <button class="btn btn--normal auth-form__controls-back btn--detail js-btn-item-1-add">
        //                                 <i class="fas fa-cart-plus btn--detail--icon"></i>
        //                                 Thêm vào giỏ hàng
        //                             </button>
        //                             <button class="btn btn--primary">Mua ngay</button>
        //                         </div>
        //                     </div>
        //                 </div>
                        
        //                 <div class="footer_detail">
        //                     <h2 class="footer_detail-heading">MÔ TẢ SẢN PHẨM</h2>
        //                     <p class="footer_detail-description">- Bộ sản phẩm gồm: Sách hướng dẫn, Thùng máy, Cáp, Sạc Laptop Apple. <br>
        //                     - Macbook Pro 2020 được trang bị con chip Apple M1 độc quyền của Apple dành cho các dòng Mac. <br>
        //                     - CPU 8 lõi bao gồm 4 lõi tiết kiệm điện và 4 lõi hiệu suất cao. <br>
        //                     - Laptop sở hữu RAM 8 GB đáp ứng tốt khả năng đa nhiệm.<br>
        //                     - Ổ cứng SSD 256 GB cho tốc độ mở máy nhanh chóng.<br>
        //                     - Chiếc MacBook này được bao bọc bởi lớp vỏ kim loại nguyên khối sang trọng, trọng lượng 1.4 kg và mỏng 15.6 mm.<br>
        //                     - Thunderbolt 3 cho khả năng truyền tải dữ liệu siêu nhanh lên tới 40 Gb/s.<br>
        //                     - Bên cạnh đó còn được trang bị thêm 2 kết nối không dây là Wi-Fi 6 và Bluetooth v5.0 thế hệ mới nhất.<br>
        //                     - Magic Keyboard trên chiếc Macbook Pro này giúp bạn hoàn thành mọi thứ nhanh hơn chính xác hơn. <br>
        //                     - Màn hình Retina kích thước 13.3 inch hiển thị hình ảnh cực chi tiết và chân thực.<br>
        //                     - Công nghệ LED Backlit cho màn hình mỏng hơn, tiết kiệm điện năng cùng độ sáng 500 nits brightness.<br>
        //                     - Dải 3 Micro đạt chuẩn chất lượng phòng thu đảm bảo người ở đầu dây bên kia nghe được rõ ràng những gì bạn nói.<br>
        //                     - Mở máy nhanh chóng, bảo mật nâng cao với cảm biến vân tay.</p>

        //                 </div>
        //             </div>
                    
        //       `
        //     })
        //     $('.home-product .grid__row').innerHTML = htmls.join('\n')
        // },

        handleEvents: function(){
            const _this = this
            btnDk.onclick = function(){
                modalSignUp.classList.add('open');
                backOverLay.classList.add('open_overlay');
                modalMain.classList.add('modal_main');
            }

            btnDn.onclick = function(){
                modalLogIn.classList.add('open');
                backOverLay.classList.add('open_overlay');
                modalMain.classList.add('modal_main');
            }

            btnBackSignup.onclick = function(){
                modalSignUp.classList.remove('open');
                backOverLay.classList.remove('open_overlay');
                modalMain.classList.remove('modal_main');
            }

            btnBackLogin.onclick = function(){
                modalLogIn.classList.remove('open');
                backOverLay.classList.remove('open_overlay');
                modalMain.classList.remove('modal_main');
            }

            btnModalLogin.onclick = function(){

                closeLoginSignUp.classList.add('close_login_signup')
                divAccount.classList.remove('account')

                modalLogIn.classList.remove('open');
                backOverLay.classList.remove('open_overlay');
                modalMain.classList.remove('modal_main');
            }

            logOut.onclick = function(){
                divAccount.classList.add('account')
            }

            // Danh mục
            btnLaptop.onclick = function(){
                _this.render()
                btnLaptop.classList.add('category-item--active')
                btnMouse.classList.remove('category-item--active')
                btnAccessory.classList.remove('category-item--active')
                btnScreen.classList.remove('category-item--active')
                btnHeadPhone.classList.remove('category-item--active')
                btnChair.classList.remove('category-item--active')
            }

            btnAccessory.onclick = function(){
                _this.renderAccessory()
                btnAccessory.classList.add('category-item--active')
                btnMouse.classList.remove('category-item--active')
                btnLaptop.classList.remove('category-item--active')
                btnScreen.classList.remove('category-item--active')
                btnHeadPhone.classList.remove('category-item--active')
                btnChair.classList.remove('category-item--active')
            }

            btnMouse.onclick = function(){
                _this.renderMouse()
                btnMouse.classList.add('category-item--active')
                btnLaptop.classList.remove('category-item--active')
                btnAccessory.classList.remove('category-item--active')
                btnScreen.classList.remove('category-item--active')
                btnHeadPhone.classList.remove('category-item--active')
                btnChair.classList.remove('category-item--active')
            }

            btnScreen.onclick = function(){
                _this.renderScreen()
                btnScreen.classList.add('category-item--active')
                btnAccessory.classList.remove('category-item--active')
                btnMouse.classList.remove('category-item--active')
                btnLaptop.classList.remove('category-item--active')
                btnHeadPhone.classList.remove('category-item--active')
                btnChair.classList.remove('category-item--active')
            }

            btnHeadPhone.onclick = function(){
                _this.renderHeadPhone()
                btnHeadPhone.classList.add('category-item--active')
                btnScreen.classList.remove('category-item--active')
                btnAccessory.classList.remove('category-item--active')
                btnMouse.classList.remove('category-item--active')
                btnLaptop.classList.remove('category-item--active')
                btnChair.classList.remove('category-item--active')
            }

            btnChair.onclick = function(){
                _this.renderChair()
                btnChair.classList.add('category-item--active')
                btnHeadPhone.classList.remove('category-item--active')
                btnScreen.classList.remove('category-item--active')
                btnAccessory.classList.remove('category-item--active')
                btnMouse.classList.remove('category-item--active')
                btnLaptop.classList.remove('category-item--active')
            }

            // Detail
            
            // var btnItem1 = $('.home-product-item.js1')
            // const btnItem2 = $('.js2')
            
            // btnItem1.onclick = function(){
            //     _this.renderItem()
            //     console.log("da")
            // }
                
            // btnItem2.click = function(){
            //     _this.renderItem()
            //     console.log("da2")
            // }
         
            // back.onclick = function(){
            //     _this.render()
            //     console.log("nhan")
                
            // }
        },
      
        start: function(){
            this.render()
            this.handleEvents()
        }
      }

    app.start()

    
