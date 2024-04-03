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
     },
    mounted() {
       
    }
}).mount('#app')