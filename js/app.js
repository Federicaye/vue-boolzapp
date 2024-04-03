import { contacts } from "./data.js"

const { createApp } = Vue;

createApp({
    data() {
        return {
           activeContact: 1,
           contacts,
        }
    },
    methods: {
      
    },
    computed: {
        activeContactChat() {
            return this.contacts.find((el) => el.id === this.activeContact)
        }
     },
    mounted() {
       
    }
}).mount('#app')