<template>
  <section class="header center">
        <div class="header__left">
            <router-link to="/" class="logo">
                <img class="logo__img" src="../img/18.png" alt="logo">BRAN<span class="logo_letter_D">D</span>
            </router-link>
            <form class="header__form" action="#">
                <details class="header__browse_details">
                        <summary class="header__browse_summary">Browse</summary>
                    <div class="drop drop_browse">
                        <div class="drop__flex ">
                            <h3 class="drop__h3">Women</h3>
                            <ul class="drop__ul">
                                <li><a href="" class="drop_link">Dresses</a></li>
                                <li><a href="" class="drop_link">Tops</a></li>
                                <li><a href="" class="drop_link">Sweaters/Knits</a></li>
                                <li><a href="" class="drop_link">Jackets/Coats</a></li>
                                <li><a href="" class="drop_link">Blazers</a></li>
                                <li><a href="" class="drop_link">Denim</a></li>
                                <li><a href="" class="drop_link">Leggings/Pants</a></li>
                                <li><a href="" class="drop_link">Skirts/Shorts</a></li>
                                <li><a href="" class="drop_link">Accessories </a></li>
                            </ul>
                            <h3 class="drop__h3">Men</h3>
                            <ul class="drop__ul">
                                <li><a href="" class="drop_link">Dresses</a></li>
                                <li><a href="" class="drop_link">Tops</a></li>
                                <li><a href="" class="drop_link">Sweaters/Knits</a></li>
                                <li><a href="" class="drop_link">Jackets/Coats</a></li>
                            </ul>
                        </div>
                    </div>
                </details>
                <input class="header__input" type="text" placeholder="Search for Item...">
                <a href="#" class="header__search_button"> <i class="fas fa-search"></i></a>
            </form>
        </div>
        <div class="header__cart" @click="showCart = !showCart">
            <router-link class="header__right_link" to="/cart"><i class="fas fa-shopping-cart header__cart_icon"></i></router-link>
            <div class="header_cart_drop" v-show="showCart">
                <div class="header_cart_drop_block" v-for="item of cartItems"
                :key="item.id_product">
                    <a href="">
                        <img :src="`./img/${item.product_img}`" alt="Product_cart_1" class="header_cart_drop_block_img" height="85" width="72">
                    </a>
                    <div class="header_cart_drop_block_desc">
                        <div class="header_cart_drop_block_desc_h1">
                          <a href="" class="header_cart_drop_block_desc_h1_link">Rebox Zane</a>
                        </div>
                        <div class="header_cart_drop_block_desc_stars">
                            <i class="fas fa-star header_cart_drop_block_desc_star_icon"></i>
                            <i class="fas fa-star header_cart_drop_block_desc_star_icon"></i>
                            <i class="fas fa-star header_cart_drop_block_desc_star_icon"></i>
                            <i class="fas fa-star header_cart_drop_block_desc_star_icon"></i>
                            <i class="fas fa-star header_cart_drop_block_desc_star_icon"></i>
                        </div>
                        <p class="header_cart_drop_block_desc_price">{{item.quantity}} x {{item.price}}₽</p>
                    </div>
                    <a class="header_cart_drop_block_desc_cancel_link" @click="$parent.$refs.cart.remove(item)"><i class="far fa-times-circle header_cart_drop_block_desc_cancel_icon"></i></a>
                </div>
                <div class="header_cart_drop_totalprice">
                    <p class="header_cart_drop_totalprice_p">TOTAL</p>
                    <p class="header_cart_drop_totalprice_p_price">{{totalSum}}₽</p>
                </div>
                    <router-link to="/checkout" class="header_cart_drop_button">Checkout</router-link>
                    <router-link to="/cart" class="header_cart_drop_button header_cart_drop_button_down">Go to cart</router-link>
            </div>
        </div>
        <div class="header__right">
            <details class="header__right_acc_details">
                <summary class="header__right_acc_summary">My Account</summary>
            </details>
        </div>
    </section>
</template>

<script>

export default {
  data () {
    return {
      cartItems: [],
      showCart: false,
      totalSum: 0
    }
  },
  mounted () {
    console.log(this)
    this.$parent.$refs.get.getJson('http://localhost:8888/api/cart')
      .then(data => {
        for (const el of data.contents) {
          this.cartItems.push(el)
          this.totalSum += el.price * el.quantity
        }
      })
  }
}
</script>
