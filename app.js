const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'John@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/11.jpg'
        }
    },
    methods: {
       async getUser() {
        const res = await fetch('https://randomuser.me/api')
            this.firstName = 'Lara'
            this.lastName = 'Doe'
            this.email = 'Lara@gmail.com'
            this.gender = 'female',
            this.picture = 'https://randomuser.me/api/portraits/women/12.jpg'
        }
    }
})

app.mount('#app')