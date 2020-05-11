Vue.component('error', {
    data() {
        return {
            strError: '',
        }
    },
    template: `
    <div>
        <p>{{strError}}</p> 
    </div>
    `
});