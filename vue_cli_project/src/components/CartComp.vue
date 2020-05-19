<script>

export default {
  data () {
    return {
      cartItems: []
    }
  },
  methods: {
    addProduct (product) {
      console.log(this)
      const find = this.$parent.$refs.header.cartItems.find(el => el.id_product === product.id_product)
      if (find) {
        this.$parent.$refs.get.putJson(`http://localhost:8888/api/cart/${find.id_product}`, { quantity: 1 })
        find.quantity++
      } else {
        const prod = Object.assign({ quantity: 1 }, product)
        this.$parent.$refs.get.postJson('http://localhost:8888/api/cart', prod)
          .then(data => {
            if (data.result === 1) {
              this.$parent.$refs.header.cartItems.push(prod)
            }
          })
      }
    },
    remove (item) {
      console.log(item)
      if (item.quantity > 1) {
        this.$parent.$refs.get.putJson(`http://localhost:8888/api/cart/${item.id_product}`, { quantity: -1 })
          .then(data => {
            if (data.result === 1) {
              item.quantity--
            }
          })
      } else {
        this.$parent.$refs.get.deleteJson(`http://localhost:8888/api/cart/${item.id_product}`)
          .then(data => {
            if (data.result === 1) {
              this.cartItems.splice(this.cartItems.indexOf(item), 1)
            }
          })
      }
    }
  }
}
</script>
