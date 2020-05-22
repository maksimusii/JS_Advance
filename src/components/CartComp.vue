<script>

export default {
  data () {
    return {
      cartItems: [],
      totalSum: 0,
      quantity: 1
    }
  },
  methods: {
    changeProduct (product, quantityProd = 1, isCard, isProd = false) {
      let newSum = 0
      let productQuantity = 0
      const find = this.cartItems.find(el => el.id_product === product.id_product)
      if (!find) {
        this.addProduct(product, quantityProd, true)
        return
      }
      if (isProd) {
        productQuantity = find.quantity + quantityProd
      } else {
        productQuantity = find.quantity
      }
      console.log(productQuantity)
      if (productQuantity >= 1) {
        this.$parent.$refs.get.putJson(`http://localhost:8888/api/cart/${product.id_product}`, { quantity: productQuantity, price: product.price, isCard: isCard })
        find.quantity = productQuantity
      } else {
        this.remove(find)
        return
      }
      for (const key in this.cartItems) {
        newSum += this.cartItems[key].price * this.cartItems[key].quantity
      }
      this.totalSum = newSum
    },
    addProduct (product, quantityProd = 1, isCard = false) {
      const find = this.cartItems.find(el => el.id_product === product.id_product)
      if (find) {
        this.$parent.$refs.get.putJson(`http://localhost:8888/api/cart/${find.id_product}`, { quantity: find.quantity + quantityProd, price: find.price, isCard: isCard })
        find.quantity++
        this.totalSum += find.price
      } else {
        const prod = Object.assign({ quantity: quantityProd }, product)
        this.$parent.$refs.get.postJson('http://localhost:8888/api/cart', prod)
          .then(data => {
            if (data.result === 1) {
              this.cartItems.push(prod)
              this.totalSum += prod.price
            }
          })
      }
    },
    remove (item) {
      console.log(item)
      if (item.quantity > 1) {
        this.$parent.$refs.get.putJson(`http://localhost:8888/api/cart/${item.id_product}`, { quantity: -1, price: item.price })
          .then(data => {
            if (data.result === 1) {
              item.quantity--
              this.totalSum -= item.price
            }
          })
      } else {
        this.$parent.$refs.get.deleteJson(`http://localhost:8888/api/cart/${item.id_product}`, { price: item.price })
          .then(data => {
            if (data.result === 1) {
              this.cartItems.splice(this.cartItems.indexOf(item), 1)
              this.totalSum -= item.price
            }
          })
      }
    }
  },
  render: h => h(this),
  mounted () {
    this.$parent.$refs.get.getJson('http://localhost:8888/api/cart')
      .then(data => {
        for (const el of data.contents) {
          this.cartItems.push(el)
        }
        this.totalSum = data.amount
      })
  }
}
</script>
