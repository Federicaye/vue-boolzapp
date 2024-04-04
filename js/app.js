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
            searchName: ""
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
                status: 'sent'
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
                status: 'received'
            };
            this.activeContactChat.messages.push(answerMessage);
            return answerMsg;
        },

        searchNameContact(name1, name2) {
            return name2.forEach((el, i) => {
                name1.includes(this.name2[i])
            });

        }

    },
    computed: {
        activeContactChat() {
            return this.contacts.find((el) => el.id === this.activeContact)
        },
        filteredContacts() {
            return this.contacts.filter((el) => {
                if (searchName = " ") {
                    return true
                } else if (searchName != " ") {
                    searchName.forEach((el, i) => {
                        el.name.includes(this.searchName[i])
                    });
                }
            })
        }

    },
    mounted() {
searchNameContact("fede", "fra");
    }
}).mount('#app')