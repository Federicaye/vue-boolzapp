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
        changeContact(id){
           return this.activeContact = id;
        }
      
    },
    computed: {
        activeContactChat() {
            return this.contacts.find((el) => el.id === this.activeContact)
        }
     },
    mounted() {
       
    }
}).mount('#app')