import { contacts } from "./data.js"

const { createApp } = Vue;

createApp({
    data() {
        return {
            activeContact: 1,
            contacts,
            dateLastMsg: null,
            newMessage: ""
        }
    },
    methods: {
        changeContact(id) {
            return this.activeContact = id;
        },
        lastMessage(id) {
            let user = this.contacts.find((el) => el.id === id);
            console.log(user);
            const { messages } = user;
            return messages[messages.length - 1].message;
        },
        lastMessageDate(id) {
            let user = this.contacts.find((el) => el.id === id);
            console.log(user);
            const { messages } = user;
            return messages[messages.length - 1].date;
        },

        enterMessage(id) {
            let enterMessage = {
                date: new Date(),
                message: this.newMessage,
                status: 'sent'
            };
            let user = this.contacts.find((el) => el.id === this.activeContact);
            const { messages } = user;
            messages.push(enterMessage);
            console.log(enterMessage.message);
            console.log(enterMessage);
            setTimeout(() => { this.answerMsg(messages); }, 3000);
            return enterMessage;
        },

        answerMsg(messages) {
            let answerMessage = {
                date: new Date(),
                message: "ok",
                status: 'received'
            };
            messages.push(answerMessage);
            return answerMsg;
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