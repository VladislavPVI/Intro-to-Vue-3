const app = Vue.createApp({
    data() {
        return {
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
            image: './assets/images/1.png',
            url: 'https://en.wikipedia.org/wiki/Coin',
            inStock: false,
            details: ['10% nickel', '90% steel'],
            variants: [
                {id: 1, country: 'USA'},
                {id: 2, country: 'Russia'},
            ]


        }
    }
})
