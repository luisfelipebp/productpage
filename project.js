const thumbnailProduct_1 = document.querySelector('.thumbnailProduct_1')
const thumbnailProduct_2 = document.querySelector('.thumbnailProduct_2')
const thumbnailProduct_3 = document.querySelector('.thumbnailProduct_3')
const thumbnailProduct_4 = document.querySelector('.thumbnailProduct_4')

thumbnailProduct_1.addEventListener("click", activeImage);
function activeImage() {
        thumbnailProduct_1.classList.add("active")
        thumbnailProduct_2.classList.remove("active")
        thumbnailProduct_3.classList.remove("active")
        thumbnailProduct_4.classList.remove("active")
        product_1.classList.remove("invisible")
        product_2.classList.add("invisible")
        product_3.classList.add("invisible")
        product_4.classList.add("invisible")
        
}

thumbnailProduct_2.addEventListener("click", activeImage2);
function activeImage2() {
        thumbnailProduct_1.classList.remove("active")
        thumbnailProduct_2.classList.add("active")
        thumbnailProduct_3.classList.remove("active")
        thumbnailProduct_4.classList.remove("active")
        product_1.classList.add("invisible")
        product_2.classList.remove("invisible")
        product_3.classList.add("invisible")
        product_4.classList.add("invisible")
}

thumbnailProduct_3.addEventListener("click", activeImage3);
function activeImage3() {
        thumbnailProduct_1.classList.remove("active")
        thumbnailProduct_2.classList.remove("active")
        thumbnailProduct_3.classList.add("active")
        thumbnailProduct_4.classList.remove("active")
        product_1.classList.add("invisible")
        product_2.classList.add("invisible")
        product_3.classList.remove("invisible")
        product_4.classList.add("invisible")
}

thumbnailProduct_4.addEventListener("click", activeImage4);
function activeImage4() {
        thumbnailProduct_1.classList.remove("active")
        thumbnailProduct_2.classList.remove("active")
        thumbnailProduct_3.classList.remove("active")
        thumbnailProduct_4.classList.add("active")
        product_1.classList.add("invisible")
        product_2.classList.add("invisible")
        product_3.classList.add("invisible")
        product_4.classList.remove("invisible")
}


var counter = document.querySelector('.counter')
const button_plus = document.querySelector('.button_plus')
const button_less = document.querySelector('.button_less')

button_plus.addEventListener("click", counterPlus);
button_less.addEventListener("click", counterLess);


function counterPlus() {
        if(counter.innerHTML < 9) {
                counter.innerHTML++
        
}}
function counterLess() {
        if(counter.innerHTML > 0 ){
                counter.innerHTML--
        }
        
}


const button_openCart = document.querySelector('.button_openCart')
const container_cart = document.querySelector('.container_cart')


button_openCart.addEventListener('click', function() {
    
        if(container_cart.style.display === 'block') {
            container_cart.style.display = 'none';
            
        } else {
            container_cart.style.display = 'block';
        }
 });


 const button_cart = document.querySelector('.button_cart')
 const content_cart = document.querySelector('.content_cart')


const icon_delete = document.querySelector('.icon_delete')
const product_cart = document.querySelector('.product_cart')

icon_delete.addEventListener("click", clearCart);
function clearCart() {
        product_cart.classList.add("invisible")
        content_cart.classList.remove("invisible")
        cart_button.classList.add("invisible")
}

const price = document.querySelector('.price')
const amount_cart = document.querySelector('.amount_cart')
const price_cart = document.querySelector('.price_cart')
const cart_button = document.querySelector('.cart_button')


button_cart.addEventListener("click", addCart);
function addCart(){
        product_cart.classList.remove("invisible") 
        content_cart.classList.add("invisible")
        cart_button.classList.remove("invisible") 
        
        if(counter.innerHTML == 0){
                product_cart.classList.add("invisible") 
                content_cart.classList.remove("invisible") 
                cart_button.classList.add("invisible") 
        }
        else if(counter.innerHTML == 1) {
                amount_cart.innerHTML = 1
                price_cart.innerHTML = '$125.00'  
        }
        else if(counter.innerHTML == 2) {
                amount_cart.innerHTML = 2
                price_cart.innerHTML = '$250.00'      
        }
        else if(counter.innerHTML == 3) {
                amount_cart.innerHTML = 3
                price_cart.innerHTML = '$375.00'       
        }
        else if(counter.innerHTML == 4) {
                amount_cart.innerHTML = 4
                price_cart.innerHTML = '$500.00'      
        }
        else if(counter.innerHTML == 5) {
                amount_cart.innerHTML = 5
                price_cart.innerHTML = '$625.00'        
        }
        else if(counter.innerHTML == 6) {
                amount_cart.innerHTML = 6
                price_cart.innerHTML = '$750.00'       
        }
        else if(counter.innerHTML == 7) {
                amount_cart.innerHTML = 7
                price_cart.innerHTML = '$875.00'        
        }
        else if(counter.innerHTML == 8) {
                amount_cart.innerHTML = 8
                price_cart.innerHTML = '$1000.00'      
        }
        else if(counter.innerHTML == 9) {
                amount_cart.innerHTML = 9
                price_cart.innerHTML = '$1125.00'       
        }
}


const product_1 = document.querySelector('.product_1')
const product_2 = document.querySelector('.product_2')
const product_3 = document.querySelector('.product_3')
const product_4 = document.querySelector('.product_4')


const slider = document.querySelector('.slider')
const slider_image = document.querySelector('.slider_image')
const slider_image_1 = document.querySelector('.slider_image_1')
const slider_image_2 = document.querySelector('.slider_image_2')
const slider_image_3 = document.querySelector('.slider_image_3')
const slider_image_4 = document.querySelector('.slider_image_4')

const icon_close = document.querySelector('.icon_close')
const icon_next = document.querySelector('.icon_next')
const icon_previous = document.querySelector('.icon_previous')


product_1.addEventListener("click", openImage1); 
        function openImage1() {
                slider.classList.remove("invisible")
                slider_image_1.classList.remove("invisible")
                slider_image_2.classList.add("invisible")
                slider_image_3.classList.add("invisible")
                slider_image_4.classList.add("invisible")
        }

product_2.addEventListener("click", openImage2); 
function openImage2() {
        slider.classList.remove("invisible")
        slider_image_2.classList.remove("invisible")
        slider_image_1.classList.add("invisible")
        slider_image_3.classList.add("invisible")
        slider_image_4.classList.add("invisible")
}

product_3.addEventListener("click", openImage3); 
function openImage3() {
        slider.classList.remove("invisible")
        slider_image_3.classList.remove("invisible")
        slider_image_1.classList.add("invisible")
        slider_image_2.classList.add("invisible")
        slider_image_4.classList.add("invisible")

}

product_4.addEventListener("click", openImage4); 
function openImage4() {
        slider.classList.remove("invisible")
        slider_image_4.classList.remove("invisible")
        slider_image_1.classList.add("invisible")
        slider_image_2.classList.add("invisible")
        slider_image_3.classList.add("invisible")

}


icon_close.addEventListener("click",closeSlider);
        function closeSlider() {
                slider.classList.add("invisible")

        }



icon_next.addEventListener("click",slide_mobile);
function slide_mobile(){
        if(!slider_image_1.classList.contains("invisible")){
                slider_image_2.classList.remove('invisible')
                slider_image_1.classList.add('invisible')
        }else if(!slider_image_2.classList.contains("invisible")){
                slider_image_3.classList.remove('invisible')
                slider_image_2.classList.add('invisible')
        }else if(!slider_image_3.classList.contains("invisible")){
                slider_image_4.classList.remove('invisible')
                slider_image_3.classList.add('invisible')
        }else if(!slider_image_4.classList.contains("invisible")){
                slider_image_1.classList.remove('invisible')
                slider_image_4.classList.add('invisible') 
        }
}
  
icon_previous.addEventListener("click",slide2_mobile);
function slide2_mobile(){
        if(!slider_image_1.classList.contains("invisible")){
                slider_image_4.classList.remove('invisible')
                slider_image_1.classList.add('invisible')
        }else if(!slider_image_4.classList.contains("invisible")){
                slider_image_3.classList.remove('invisible')
                slider_image_4.classList.add('invisible')
        }else if(!slider_image_3.classList.contains("invisible")){
                slider_image_2.classList.remove('invisible')
                slider_image_3.classList.add('invisible')
        }else if(!slider_image_2.classList.contains("invisible")){
                slider_image_1.classList.remove('invisible')
                slider_image_2.classList.add('invisible') 
        }
}

const icon_next_mobile = document.querySelector('.icon_next_mobile')
const icon_previous_mobile = document.querySelector('.icon_previous_mobile')

icon_next_mobile.addEventListener("click",slide1);
function slide1(){
        if(!product_1.classList.contains("invisible")){
                product_2.classList.remove('invisible')
                product_1.classList.add('invisible')
        }else if(!product_2.classList.contains("invisible")){
                product_3.classList.remove('invisible')
                product_2.classList.add('invisible')
        }else if(!product_3.classList.contains("invisible")){
                product_4.classList.remove('invisible')
                product_3.classList.add('invisible')
        }else if(!product_4.classList.contains("invisible")){
                product_1.classList.remove('invisible')
                product_4.classList.add('invisible') 
        }
}
  
icon_previous_mobile.addEventListener("click",slide2);
function slide2(){
        if(!product_1.classList.contains("invisible")){
                product_4.classList.remove('invisible')
                product_1.classList.add('invisible')
        }else if(!product_4.classList.contains("invisible")){
                product_3.classList.remove('invisible')
                product_4.classList.add('invisible')
        }else if(!product_3.classList.contains("invisible")){
                product_2.classList.remove('invisible')
                product_3.classList.add('invisible')
        }else if(!product_2.classList.contains("invisible")){
                product_1.classList.remove('invisible')
                product_2.classList.add('invisible') 
        }
}

const icon_menu = document.querySelector('.icon_menu')
const ul_mobile = document.querySelector('.ul_mobile')
const icon_close_mobile = document.querySelector('.icon_close_mobile')

icon_menu.addEventListener("click", openNavbarMobile);
function openNavbarMobile() {
        ul_mobile.classList.remove("invisible")
}

icon_close_mobile.addEventListener("click", closeNavbarMobile);
function closeNavbarMobile() {
        ul_mobile.classList.add("invisible")
}
            

