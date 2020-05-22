<template>
<div>
    <breacrumb-comp/>
<section class="checkout">
        <details class="checkout_block_details">
                <summary class="checkout_block_summary checkout_block_first">01. Shipping Adress</summary>
                    <div class="checkout_block">
                        <div class="checkout_block_left">
                            <h1 class="checkout_block_left_h1">Check as a guest or register</h1>
                            <p class="checkout_block_left_p">Register with us for future convenience</p>
                            <p class="checkout_block_left_input_p"><input type="radio" class="checkout_block_left_input_radio" name="type_reg">checkout as guest</p>
                            <p class="checkout_block_left_input_p" ><input type="radio" class="checkout_block_left_input_radio" checked name="type_reg">register</p>
                            <h1 class="checkout_block_left_h1">register and save time!</h1>
                            <p class="checkout_block_left_p">Register with us for future convenience</p>
                            <p class="checkout_block_left_p_text "><i class="fas fa-chevron-right checkout_block_left_p_icon"></i><i class="fas fa-chevron-right checkout_block_left_p_icon_right"></i>Fast and easy checkout</p>
                            <p class="checkout_block_left_p_text "><i class="fas fa-chevron-right checkout_block_left_p_icon"></i><i class="fas fa-chevron-right checkout_block_left_p_icon_right"></i>Easy access to your order history and status</p>
                            <a href="" class="checkout_block_left_button">Continue</a>
                        </div>
                        <div class="checkout_block_right">
                            <h1 class="checkout_block_left_h1">Already registed?</h1>
                            <p class="checkout_block_left_p">Please log in below</p>
                            <h1 class="checkout_block_left_h1">EMAIL ADDRESS<span class="checkout_block_left_h1_span">*</span></h1>
                            <input type="email" class="checkout_block_right_input">
                            <h1 class="checkout_block_left_h1">PASSWORD<span class="checkout_block_left_h1_span">*</span></h1>
                            <input type="password" class="checkout_block_right_input">
                            <p class="checkout_block_right_p">* Required Fileds</p>
                            <div class="checkout_block_right_login"></div>
                                <a href="" class="checkout_block_left_button">Log in</a>
                                <a class="checkout_block_right_link">Forgot Password ?</a>
                            </div>
                    </div>
            </details>
            <details class="checkout_block_details">
                <summary class="checkout_block_summary checkout_block_first">02. BILLING INFORMATION</summary>
            </details>
            <details class="checkout_block_details">
                <summary class="checkout_block_summary checkout_block_first">03. SHIPPING INFORMATION</summary>
            </details>
            <details class="checkout_block_details">
                <summary class="checkout_block_summary checkout_block_first">04. SHIPPING METHOD</summary>
            </details>
            <details class="checkout_block_details">
                <summary class="checkout_block_summary checkout_block_first">05. PAYMENT METHOD</summary>
            </details>
            <details class="checkout_block_details checkout_block_details_last">
                <summary class="checkout_block_summary checkout_block_first">06. ORDER REVIEW</summary>
            </details>
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
