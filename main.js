const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true

        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        deleteCart(id) {
            const index = this.cart.indexOf(id)
            if (this.cart.length > 0) {
                this.cart.splice(index, 1)
            }
        }

    },
    computed: {

    }

})
