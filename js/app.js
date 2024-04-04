const dt = luxon.DateTime;

import { contacts } from "./data.js"

const { createApp } = Vue;

createApp({
    data() {
        return {
            activeContact: 1,
            contacts,
            dateLastMsg: null,
            newMessage: "",
            searchName: "",
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

        enterMessage() {
            let enterMessage = {
                date: new Date(),
                message: this.newMessage,
                status: 'sent',
                delete: false,
            };
            this.activeContactChat.messages.push(enterMessage);
            console.log(enterMessage.message);
            console.log(enterMessage);
            setTimeout(() => { this.answerMsg(); }, 2000);
            this.newMessage = "";
            return enterMessage;
        },

        answerMsg() {
            let answerMessage = {
                date: new Date(),
                message: "ok",
                status: 'received',
                delete: false,
            };
            this.activeContactChat.messages.push(answerMessage);
            return answerMsg;
        }

    },
    computed: {
        activeContactChat() {
            return this.contacts.find((el) => el.id === this.activeContact)
        },
        filteredContacts() {
            return this.contacts.filter((el) => {
               return el.name.toLowerCase().includes(this.searchName.toLowerCase())
            })
        }

    },
    mounted() {

    }
}).mount('#app')