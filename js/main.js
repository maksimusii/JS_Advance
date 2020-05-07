const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        products: [],
        cartProducts: [],
        imgCatalog: 'https://placehold.it/200x150',
        imgCartProduct: 'https://placehold.it/50x100',
        searchLine: '',
        filtered: [],
        isVisibleCart: true,
        noProductCart: true,
        noCatalogData: true
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
            console.log(product.id_product);
        },
        filterGoods(value) {
            const regexp = new RegExp(value, 'i');
            return this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },
        isVisible(productId) {
            if (this.filtered.length != 0) {
                return !this.filtered.find(product => product.id_product === productId);
            }
            return false;
        }
        
        
    },
    
    mounted(){
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                if (data.length == 0) {
                    return this.noCatalogData = false
                }
                for (let el of data) {
                    this.products.push(el)
                }
            });
            
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                if (data.contents.length == 0) {
                    return this.noProductCart = false
                }
                for (let el of data.contents) {
                    this.cartProducts.push(el);
                }
            });
            
    }
    
});
