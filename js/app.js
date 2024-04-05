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
            if (messages.length > 0) {
                return messages[messages.length - 1].message;
            } else { return "" }

        },
        lastMessageDate(id) {
            let user = this.contacts.find((el) => el.id === id);
            console.log(user);
            const { messages } = user;
            if (messages.length > 0) {
                return messages[messages.length - 1].data;
            } else { return "" };

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
            this.$refs.messages[this.$refs.messages.length - 1].scrollIntoView();
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
        },

        deleteMsg(msg) {
            const indexToDelete = this.activeContactChat.messages.indexOf(msg);
            if (indexToDelete !== -1) {
                this.activeContactChat.messages[indexToDelete].delete= false;
                this.activeContactChat.messages.splice(indexToDelete, 1);
                return indexToDelete;
            }
            
            return indexToDelete;
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
        /*  msgId() {
             const msgIdArray = this.activeContactChat().messages.map((msg) => {
                     ...msg,
           });
         } */
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
        console.log(this.msgId);
    }
}).mount('#app')