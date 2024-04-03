import { contacts } from "./data.js"

const { createApp } = Vue;

createApp({
    data() {
        return {
            activeContact: 1,
            contacts,
            dateLastMsg: null,
        }
    },
    methods: {
        changeContact(id) {
            return this.activeContact = id;
        },
        lastMessage(id) {
            let user = this.contacts.find((el) => el.id === id);
            console.log(user);
            const { messages} = user;
            return messages[messages.length-1].message;
        },
        lastMessageDate(id) {
            let user = this.contacts.find((el) => el.id === id);
            console.log(user);
            const { messages } = user;
            return messages[messages.length-1].date;
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