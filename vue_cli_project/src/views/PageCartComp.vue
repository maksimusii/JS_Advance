<template>
<div>
<breacrumb-comp/>
    <section class="cart__page_cart">
        <div class="cart__page_cart_category">
            <h1 class="cart__page_cart_category_h1_1"><a href="" class="cart__page_cart_category_link cart__page_cart_category_link_1">Product Details</a></h1>
            <h1 class="cart__page_cart_category_h1_2"><a href="" class="cart__page_cart_category_link cart__page_cart_category_link_2">unite Price</a></h1>
            <h1 class="cart__page_cart_category_h1_3"><a href="" class="cart__page_cart_category_link">Quantity</a></h1>
            <h1 class="cart__page_cart_category_h1_4"><a href="" class="cart__page_cart_category_link">Shipping</a></h1>
            <h1 class="cart__page_cart_category_h1_5"><a href="" class="cart__page_cart_category_link">Subtotal</a></h1>
            <h1 class="cart__page_cart_category_h1_6"><a href="" class="cart__page_cart_category_link">ACTION</a></h1>
        </div>
        <div class="cart__page_cart_product" v-for="item of $parent.$refs.header.cartItems"
                :key="item.id_product">
            <img :src="`./img/${item.product_img}`" alt="cart_product_1" class="cart__page_cart_product_img" height="115" width="110">
            <div class="cart__page_cart_product_desc">
                <h1 class="cart__page_cart_product_desc_h1"><a class="cart__page_cart_product_desc_h1_link" href="#">Mango People T-shirt</a></h1>
                <p class="cart__page_cart_product_desc_p">Color: <span class="cart__page_cart_product_desc_span">Red</span></p>
                <p class="cart__page_cart_product_desc_p">Size: <span class="cart__page_cart_product_desc_span">Xll</span></p>
            </div>
            <h1 class="cart__page_cart_product_uprice">{{item.price}}₽</h1>
            <input type="number" class="cart__page_cart_product_input" :placeholder="item.quantity">
            <h1 class="cart__page_cart_product_ship">Free</h1>
            <h1 class="cart__page_cart_product_allprice">{{item.quantity * item.price}}₽</h1>
            <a class="cart__page_cart_product_action_link" href="" @click="$parent.$refs.cart.remove(item)"><i class="far fa-times-circle cart__page_cart_product_action_i"></i></a>
        </div>
        <div class="cart__page_cart_down_button">
            <a href="" class="cart__page_cart_down_button_link">cLEAR SHOPPING CART</a>
            <a href="catalog.html" class="cart__page_cart_down_button_link">cONTINUE sHOPPING</a>
        </div>
        <div class="cart__page_cart_action">
            <div class="cart__page_cart_action_ship">
                <h1 class="cart__page_cart_action_ship_h1">Shipping Adress</h1>
                <select class="cart__page_cart_action_ship_select" name="Shipping_adress">
                    <option class="cart__page_cart_action_ship_option" value="value1">Bangladesh</option>
                </select>
                <input type="text" class="cart__page_cart_action_ship_input" placeholder="State">
                <input type="text" class="cart__page_cart_action_ship_input" placeholder="Postcode / Zip">
                <a href="" class="cart__page_cart_action_button">get a quote</a>
            </div>
            <div class="cart__page_cart_action_discount">
                <h1 class="cart__page_cart_action_discount_h1">coupon discount</h1>
                <p class="cart__page_action_discount_p">Enter your coupon code if you have one</p>
                <input type="text" class="cart__page_cart_action_ship_input" placeholder="Cupon number">
                <a href="" class="cart__page_cart_action_button">Apply coupon</a>
            </div>
            <div class="cart__page_cart_action_check">
                <p class="cart__page_cart_action_check_p">Sub total   <span class="cart__page_cart_action_check_p_span"></span> $900</p>
                <h1 class="cart__page_cart_action_check_h1">GRAND TOTAL<span class="cart__page_cart_action_check_h1_span">$900</span></h1>
                <router-link to="/checkout" class="cart__page_cart_action_check_button">proceed to checkout</router-link>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import BreacrumbComp from '../views/BreadcrumbComp'

export default {
  components: {
    BreacrumbComp
  }
}
</script>
