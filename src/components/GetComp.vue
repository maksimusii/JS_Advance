<script>
export default {
  data () {
    return {
      products: [],
      filtered: [],
      productEl: {}
    }
  },
  methods: {
    getJson (url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error)
          this.$refs.error.setError(error)
        })
    },
    postJson (url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
        .catch(error => {
          console.log(error)
          this.$refs.error.setError(error)
        })
    },
    putJson (url, data, isCard) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
        .catch(error => {
          console.log(error)
          this.$refs.error.setError(error)
        })
    },
    deleteJson (url, data) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(result => result.json())
        .catch(error => {
          console.log(error)
          this.$refs.error.setError(error)
        })
    },
    filter (userSearch) {
      const regexp = new RegExp(userSearch, 'i')
      this.filtered = this.products.filter(el => regexp.test(el.product_name))
    }
  },
  render: h => h(this),
  mounted () {
    this.getJson('http://localhost:8888/api/products')
      .then(data => {
        for (const el of data) {
          this.products.push(el)
          this.filtered.push(el)
        }
      })
  }
}
</script>
