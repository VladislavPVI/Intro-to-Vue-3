app.component('product-display',{
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:

    ' <div class="product-display">\n' +
        '        <div class="product-container">\n' +
        '          <div class="product-image">\n' +
        '            <img :src="image" :class="{ \'out-of-stock-image\' : !inStock }">\n' +
        '          </div>\n' +
        '\n' +
        '          <div class="product-info">\n' +

        '            <h1>{{ title }}</h1>\n' +
        '            <p> {{ sale }} </p>\n' +
        '            <p v-if="inStock">In stock</p>\n' +
        '            <p v-else>Out of stock</p>\n' +
        '            <p>Shipping: {{ shipping }} </p>\n' +
        '            <button class="button" @click="addToCart" :disabled="!inStock" :class="{ disabledButton : !inStock }">ADD TO CART</button>\n' +
        '            <button class="button" @click="deleteFromCart">DELETE</button>\n' +
        '            <p>{{ description }}</p>\n' +
        '            <ul>\n' +
        '              <li v-for="detail in details">{{ detail }}</li>\n' +
        '            </ul>\n' +
        '            <div v-for="(c, index) in variants"\n' +
        '                 :key="c.id"\n' +
        '                 @mouseover="updateImage(index)"\n' +
        '                 class="color-circle"> {{c.country}}</div>\n' +
        '            <a :href="url">Info</a>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '<review-list v-if="reviews.length" :reviews="reviews"></review-list>' +
        '<review-form @review-sub = "addRev"></review-form>\n' +
        '      </div>',
    data() {
        return {
            isActive: true,
            onSale: true,
            brand: 'Mint',
            product: 'Coins',
            description: 'A coin is a small, ' +
                'flat, (usually, depending on the ' +
                'country or value) round piece of metal ' +
                'or plastic used primarily as a medium of ' +
                'exchange or legal tender. They are ' +
                'standardized in weight, and produced in ' +
                'large quantities at a mint in order to ' +
                'facilitate trade. They are most often ' +
                'issued by a government.',
            selectedimage: 0,
            url: 'https://en.wikipedia.org/wiki/Coin',
            details: ['10% nickel', '90% steel'],
            variants: [
                {id: 1, country: 'USA', img:'./assets/images/1.png', quantity:50},
                {id: 2, country: 'Russia', img: './assets/images/2.png', quantity: 0},
            ],
            reviews: []


        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedimage].id)
        },
        deleteFromCart(){
            this.$emit('delete-from-cart', this.variants[this.selectedimage].id)
        },
        updateImage(index) {
            this.selectedimage = index
            console.log(index)
        },
        addRev(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedimage].img
        },
        inStock() {
            return this.variants[this.selectedimage].quantity
        },
        sale() {
            if (this.onSale)
                return this.brand + ' ' + this.product + 'is on sale'
        },
        shipping() {
            if (this.premium) {
                return "free"
            }
            else return 2.99
        }
    }

})