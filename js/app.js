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
            dropdownEliminateChat: false
        }
    },
    methods: {
        changeContact(id) {
            return this.activeContact = id;
        },
        lastMessage(id) {
            let user = this.contacts.find((el) => el.id === id);
            /*  console.log(user); */
            const { messages } = user;
            if (messages.length > 0) {
                return messages[messages.length - 1].message;
            } else { return "" }

        },
        lastMessageDate(id) {
            let user = this.contacts.find((el) => el.id === id);
            /*  console.log(user); */
            const { messages } = user;
            if (messages.length > 0) {
                return messages[messages.length - 1].date;
            } else { return "" };

        },

        enterMessage() {
            let enterMessage = {
                date: dt.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm'),
                message: this.newMessage,
                status: 'sent',
                delete: false,
            };
            this.activeContactChat.messages.push(enterMessage);
            /*   console.log(enterMessage.message);
              console.log(enterMessage); */
            setTimeout(() => { this.answerMsg(); }, 2000);
            this.newMessage = "";
            this.$nextTick(() => { this.$refs.messages[this.$refs.messages.length - 1].scrollIntoView(); });

            return enterMessage;
        },

        answerMsg() {
            let answerMessage = {
                date: dt.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm'),
                message: "ok",
                status: 'received',
                delete: false,
            };
            this.activeContactChat.messages.push(answerMessage);
            this.$nextTick(() => { this.$refs.messages[this.$refs.messages.length - 1].scrollIntoView(); });
            return answerMsg;
        },

        deleteMsg(msg) {
            const indexToDelete = this.activeContactChat.messages.indexOf(msg);
            if (indexToDelete !== -1) {
                this.activeContactChat.messages.splice(indexToDelete, 1);
                console.log(activeContactChat.messages);
                
            }
            this.activeContact.messages[indexToDelete].delete = false;
        },

        eliminateMessages() {
            this.activeContactChat.messages.splice(0, this.activeContactChat.messages.length);
            /*posso scrivere anche:  this.activeContactChat.messages.length = 0; */
        },

        eliminateChat() {
            const contactToDelete = this.filteredContacts.indexOf(this.activeContactChat);
            this.filteredContacts.splice(contactToDelete, 1);
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
        },

        msgId() {
            let idM = 1;
            const arrayMsgWhitId = this.activeContactChat.messages.map((msg) => {
                const msgWhitId = { ...msg, id: idM };
                idM++;
                return msgWhitId;

            });
            return arrayMsgWhitId;
        }

    },
    mounted() {

    }
}).mount('#app')