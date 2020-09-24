app.component('review-form',{
    template:
    '<form class="review-form" @submit.prevent="onSubmit">' +
        '<h3>Leave a review</h3>' +
        '<label for="name">Name:</label>' +
        '<input id="name" v-model="name"> ' +
        '<label for="review">Review:</label>      \n' +
        '<textarea id="review" v-model="review"></textarea>\n' +
        '\n' +
        '    <label for="rating">Rating:</label>\n' +
        '    <select id="rating" v-model.number="rating">\n' +
        '      <option>5</option>\n' +
        '      <option>4</option>\n' +
        '      <option>3</option>\n' +
        '      <option>2</option>\n' +
        '      <option>1</option>\n' +
        '    </select>' +
        '' +
        '<label for="rec">Do you reccomend&:</label>\n' +
        '    <select id="rec" v-model.number="rec">\n' +
        '      <option>YES</option>\n' +
        '      <option>NO</option>\n' +
        '    </select>'+
        '    <input class="button" type="submit" value="Submit">\n' +
        '  </form>',
    data() {
        return {
            name: '',
            review: '',
            rec: null,
            rating: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name==='' || this.review==='' || this.rating===null){
                alert('error. check fields')
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                rec: this.rec

            }
            this.$emit('review-sub', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
            this.rec = null
        }
    }
})