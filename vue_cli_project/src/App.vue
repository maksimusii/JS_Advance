<template>
  <div id="app">
    <header-comp ref="header"></header-comp>
    <nav-comp/>
    <router-view/>
    <subscription-comp/>
    <footer-comp/>
    <error-el ref="error"></error-el>
    <get-el ref="get"></get-el>
    <cart-el ref="cart"></cart-el>
  </div>
</template>

<script>
import HeaderComp from './views/HeaderComp'
import NavComp from './views/NavComp'
import FooterComp from './views/FooterComp'
import SubscriptionComp from './views/SubscriptionComp'
import ErrorEl from './views/ErrorComp'
import GetEl from './components/GetComp'
import CartEl from './components/CartComp'

export default {
  components: {
    HeaderComp,
    FooterComp,
    SubscriptionComp,
    NavComp,
    ErrorEl,
    GetEl,
    CartEl
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap");
</style>
