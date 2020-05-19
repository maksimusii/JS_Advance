<template>
<div>
    <breacrumb-comp/>
<section class="product_page__slider">
    <div class="product_page__slider_arrow">
        <a href="" class="product_page_slider__link"><p class="product_page__slider_arrow_p">&#60;</p></a>
    </div>
    <div class="product_page__slider_img"></div>
    <div class="product_page__slider_arrow">
        <a href="" class="product_page_slider__link"><p class="product_page__slider_arrow_p">&#62;</p></a>
    </div>
</section>
<section class="product__desc">
    <div class="product__desc_up">

        <div class="product__desc_up_h1">Women Collection</div>
        <div class="product__desc_up_line">
            <div class="product__desc_up_line_thin"></div>
            <div class="product__desc_up_line_center"></div>
            <div class="product__desc_up_line_thin"></div>
        </div>
        <div class="product__desc_up_h2">Moschino Cheap And Chic</div>
        <div class="product__desc_up_p">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.</div>
        <div class="product__desc_options">
            <div class="product__desc_option product__desc_option_left">MATERIAL: <span class="product__desc_option_span">COTTON</span></div>
            <div class="product__desc_option">DESIGNER: <span class="product__desc_option_span">BINBURHAN</span></div>
        </div>
        <div class="product__desc_price">
            <h1 class="product__desc_price_h1">$561</h1>
        </div>
    </div>
    <div class="product__desc_filter">
        <div class="product__desc_filter_color">
            <h1 class="product__desc_filter_header">CHOOSE COLOR</h1>

            <details class="product__desc_filter_details">
                <summary class="product__desc_filter_summary"> <i class="fas fa-square product__desc_filter_square"></i> Red</summary>
            </details>
        </div>
        <div class="product__desc_filter_size">
            <h1 class="product__desc_filter_header product__desc_filter_right">CHOOSE SIZE</h1>
            <details class="product__desc_filter_details">
                <summary class="product__desc_filter_summary product__desc_filter_summary_size"> XXL</summary>
            </details>
        </div>
        <div class="product__desc_filter_quantity">
            <h1 class="product__desc_filter_header product__desc_filter_right">QUANTITY</h1>
            <input type="text" class="product__desc_filter_input" placeholder="2">
        </div>
    </div>
    <div class="product__desc_button">
        <a href="#" class="product__desc_button_link"><i class="fa fa-shopping-cart product__desc_button_cart"></i>Add to Cart</a>
    </div>
</section>
<section class="product__like">
    <div class="product__like_header">
        <h2 class="product__like_header_h2">you may like also</h2>
    </div>
    <div class="product__like_items_block">
        <ul class="product__like_items_list">
            <li>
                <a href="#">
                    <div class="product__like_items">
                        <div class="product__like_items_img_block">
                            <img class="product__like_items_img" src="img/Product_page_1.png" alt="">
                        </div>
                        <div class="product__like_items_content_block">
                            <h1 class="product__like_items_h1">BLAZE LEGGINGS</h1>
                            <h1 class="product__like_items_price_h1">$52.00</h1>
                        </div>
                        <p class="product__like_items_add_cart"><i class="fa fa-shopping-cart"></i>Add to cart</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="product__like_items">
                        <div class="product__like_items_img_block">
                            <img class="product__like_items_img" src="img/Product_page_2.png" alt="">
                        </div>
                        <div class="product__like_items_content_block">
                            <h1 class="product__like_items_h1">ALEXA SWEATER</h1>
                            <h1 class="product__like_items_price_h1">$52.00</h1>
                        </div>
                        <p class="product__like_items_add_cart"><i class="fa fa-shopping-cart"></i>Add to cart</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="product__like_items">
                        <div class="product__like_items_img_block">
                            <img class="product__like_items_img" src="img/Product_page_3.png" alt="">
                        </div>
                        <div class="product__like_items_content_block">
                            <h1 class="product__like_items_h1">Mango People T-shirt</h1>
                            <h1 class="product__like_items_price_h1">$52.00</h1>
                        </div>
                        <p class="product__like_items_add_cart"><i class="fa fa-shopping-cart"></i>Add to cart</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="product__like_items items-rigth">
                        <img class="product__like_items_img" src="img/Product_page_4.png" alt="">
                        <div class="product__like_items_content_block">
                            <h1 class="product__like_items_h1">Mango People T-shirt</h1>
                            <h1 class="product__like_items_price_h1">$52.00</h1>
                        </div>
                        <p class="product__like_items_add_cart"><i class="fa fa-shopping-cart"></i>Add to cart</p>
                    </div>
                </a>
            </li>
        </ul>
        </div>
</section>
</div>
 </template>

<script>
import BreacrumbComp from '../views/BreadcrumbComp'

export default {
  data () {
    return {
      products: [],
      filtered: []
    }
  },
  components: {
    BreacrumbComp
  },
  methods: {
    filter (userSearch) {
      const regexp = new RegExp(userSearch, 'i')
      this.filtered = this.products.filter(el => regexp.test(el.product_name))
    }
  },
  mounted () {
    this.$refs.get.getJson('http://localhost:8888/api/products')
      .then(data => {
        for (const el of data) {
          this.products.push(el)
          this.filtered.push(el)
        }
        console.log(this.products)
      })
  }
}
</script>
