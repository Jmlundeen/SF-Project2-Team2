import { LightningElement, track } from 'lwc';

export default class MessageComponent extends LightningElement {
    @track messages = []; // This array will store each message object
    appendText;
    messageContent;
    OPENAI_API_KEY = 'sk-proj-BxJDOL7xNZvC9QdLvaL1T3BlbkFJbdLSDyUnqlIPYrRkIq7Q';

    async createNewMsg(){
        // Push a new message object into the messages array
        this.messages.push({ 
            type: 'inbound',
            content: this.messageContent 
        });
        // const newNode = this.template.querySelector('newMsg');

        // this.appendText = 
        //         `<li class="slds-chat-listitem slds-chat-listitem_inbound">
        //             <div class="slds-chat-message">
        //                 <div class="slds-chat-message__body">
        //                     <div class="slds-chat-message__text slds-chat-message__text_inbound">
        //                     <span>${this.messageContent}</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </li>`;

        // console.log( this.messageContent );
        // if (this.appendText != null) {
        //     newNode.innerHTML.appendText(this.appendText); 
            
        //     newNode.appendChild( this.appendText );
        // }
        this.createOutboundMsg();
    }

    setMsg(event) {
        this.messageContent = event.target.value;
    }

    async createOutboundMsg(){
        const URL = 'http://localhost:3040/v1/chat/completions';

        try {
            // Make HTTP request to OpenAI API
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    prompt: this.messageContent,
                    max_tokens:  3896// Adjust as needed
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

        /*const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // Use a valid model identifier
                prompt: this.messageContent, // Adjust according to your use case
                max_tokens: 50 // Example parameter, adjust as needed
            })
        };
        */

         /*const request ={
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o',
                messages: [{role: 'user', content: this.messageContent}]
            })
        };

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

    /*createOutboundMsg(){

      const URL = 'https://api.openai.com/v1/chat/completions';

       appendText = 
            `<li class="slds-chat-listitem slds-chat-listitem_outbound">
                <div class="slds-chat-message">
                    <div class="slds-chat-message__body">
                        <div class="slds-chat-message__text slds-chat-message__text_outbound">
                            <span></span>
                        </div>
                    </div>
                </div>
            </li>`;
    
        newNode.innerHTML = this.appendText;

        request ={
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o',
                messages: [{role: 'user', content: 'newNode'}]
            })
        };

        fetch(URL, request)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch((error) =>{
                console.log(error);
            })
    }*/          
}