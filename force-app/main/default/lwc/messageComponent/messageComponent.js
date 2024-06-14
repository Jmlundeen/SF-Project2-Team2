import { LightningElement, track } from 'lwc';

export default class MessageComponent extends LightningElement {
    @track messages = []; // This array will store each message object
    appendText;
    messageContent;
    API_KEY = 'pk-jcQwLzJsyiyiftoTSiDtEHVMMDVEAGJHjbwUMIDroenRepDi';

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
        const URL = 'https://api.pawan.krd/v1/chat/completions';

        try {
            // Make HTTP request to OpenAI API
            const response = await fetch(URL, {
                method: 'POST',
                location: this.URL,
                header: {
                    'Content-Type': "application/json",
                    'Authorization':  this.API_KEY,
                },
                data: JSON.stringify({
                    'messages': [{ role: 'user', content: this.messageContent }],
                    'model': 'gpt-3.5-turbo',
                })
            });

            let data = await response.json();
            
            
            this.messages.push(data.choices[0].text);

            
            this.messageContent= '';

            data = await response.json();
            
            
            this.messages.push(data.choices[0].text);

            
            this.messageContent = '';
        } catch(error) {
            console.error('Error:', error);
        }

        
    }         
}