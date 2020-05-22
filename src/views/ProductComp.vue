<template>
<div>
    <section class="product">
        <div class="product__header">
            <h2 class="product__header_h2">Fetured Items</h2>
            <p class="product__header_p">Shop for items based on what we featured in this week</p>
        </div>
        <div class="items_up">
            <ul class="items_list">
                <li type="button" v-for="item of $parent.$parent.$refs.get.filtered.slice(0,8)" :key="item.id_product">
                        <div class="items" >
                          <router-link :to="{name: 'Product', params: {id: item.id_product, }}" type="button">
                            <img class="Items_img" :src="`./img/${item.product_img}`" alt="">
                            <div class="items_content_block">
                                <h1 class="items__h1">{{item.product_name}}</h1>
                                <h1 class="items_price__h1">{{item.price}}₽</h1>
                            </div>
                            </router-link>
                            <a class="items_add_cart" type="button" @click="$parent.$parent.$refs.cart.addProduct(item)"><i class="fa fa-shopping-cart items_cart_icon"></i>Add to cart</a>
                        </div>
                </li>
            </ul>
        </div>
        <div class="product_button">
            <router-link to="/catalog" class="product_button_link">Browse All Product <i class="fas fa-arrow-right"></i></router-link>
        </div>
    </section>
    </div>
</template>
