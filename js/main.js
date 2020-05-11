const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then((result) => {
                    // if (!result.ok) {
                    //     this.$root.$refs.error.strError += ` Не удалось выполнит запрос ${result.url} к серверу. Ошибка:  ${result.statusText}${result.status}`;
                    // }
                    return result.json();
                })
                .catch(error => {
                    console.log(error);
                    this.$root.$refs.error.strError = ` Не удалось выполнит запрос к серверу. Ошибка: ${error}`;
                })
        },
       
    },
    mounted() {
        console.log(this);
    }
});

