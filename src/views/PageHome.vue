<template>
<div>
    <promo-comp/>
    <category-comp/>
    <product-comp/>
    <offer-comp/>
</div>
</template>

<script>
import PromoComp from '../views/PromoComp'
import CategoryComp from '../views/CategoryComp'
import ProductComp from '../views/ProductComp'
import OfferComp from '../views/OfferComp'
export default {
  components: {
    PromoComp,
    CategoryComp,
    ProductComp,
    OfferComp
  }
}
</script>
