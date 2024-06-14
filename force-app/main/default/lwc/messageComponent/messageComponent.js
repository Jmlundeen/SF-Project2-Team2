import { LightningElement, track } from 'lwc';

export default class MessageComponent extends LightningElement {
    @track messages = []; // This array will store each message object
    appendText;
    messageContent;

    async createNewMsg(){
        // Push a new message object into the messages array
        this.messages.push({ 
            type: 'inbound',
            content: this.messageContent 
        });
        this.createOutboundMsg();
    }

    setMsg(event) {
        this.messageContent = event.target.value;
    }

    async createOutboundMsg(){


        fetch(URL, request)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
            */
       
        fetch(URL, request)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
            */
    }

}