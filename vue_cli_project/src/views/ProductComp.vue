<template>
<div>
    <section class="product">
        <div class="product__header">
            <h2 class="product__header_h2">Fetured Items</h2>
            <p class="product__header_p">Shop for items based on what we featured in this week</p>
        </div>
        <div class="items_up">
            <ul class="items_list">
                <li v-for="item of filtered.slice(0,8)" :key="item.id_product">
                    <a href="#">
                        <div class="items" >
                            <img class="Items_img" :src="`./img/${item.product_img}`" alt="">
                            <div class="items_content_block">
                                <h1 class="items__h1">{{item.product_name}}</h1>
                                <h1 class="items_price__h1">{{item.price}}₽</h1>
                            </div>
                            <p class="items_add_cart" @click="$parent.$parent.$refs.cart.addProduct(item)"><i class="fa fa-shopping-cart items_cart_icon"></i>Add to cart</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="product_button">
            <router-link to="/catalog" class="product_button_link">Browse All Product <i class="fas fa-arrow-right"></i></router-link>
        </div>
    </section>
    </div>
</template>

<script>

export default {
  data () {
    return {
      products: [],
      filtered: []
    }
  },
  components: {

  },
  methods: {
    filter (userSearch) {
      const regexp = new RegExp(userSearch, 'i')
      this.filtered = this.products.filter(el => regexp.test(el.product_name))
    }
  },
  mounted () {
    console.log(this)
    this.$parent.$parent.$refs.get.getJson('http://localhost:8888/api/products')
      .then(data => {
        for (const el of data) {
          this.products.push(el)
          this.filtered.push(el)
        }
      })
  }
}
</script>
