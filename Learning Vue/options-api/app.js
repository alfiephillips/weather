// Create Vue App instance

const {createApp, ref} = Vue

const app = createApp({
    // You can either create the template during intialization or create it directly in the app. This is where dynamic data is defined to be accessed in html.
    
    data() { // The data function; serve data into the application.
        return {
            // Return an object of listed variables to use.
            title: "The Final Empire",
            author: "Alfie Phillips",
            age: 0
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
})

// Mount Vue component to an id of #app
app.mount("#app")