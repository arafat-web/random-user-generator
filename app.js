const app = Vue.createApp({
    data() {
        return {
            title: 'Mr',
            firstName: 'Arafat',
            lastName: 'Hossain',
            email: 'arafat.122260@gmail.com',
            phone: '01789404345',
            gender: 'male',
            age: 24,
            city: 'Dhaka',
            state: 'Dhaka',
            country: 'Bangladesh',
            picture: 'https://avatars.githubusercontent.com/u/26932301?v=4'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            this.title = results[0].name.title
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.phone = results[0].phone
            this.gender = results[0].gender
            this.age = results[0].dob.age
            this.city = results[0].location.city
            this.state = results[0].location.state
            this.country = results[0].location.country
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')