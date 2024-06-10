import LightningModal from 'lightning/modal';

export default class ServiceComponent extends LightningModal {

    isContact = false;
    isMessage =false; 
    isKnowledge1 = false; 
    isKnowledge2 = false;
    isKnowledge3 = false;
    isKnowledge4 =false;
    isKnowledge5 = false;

    showContact(){
        this.isContact = true;
    }

    showMessenger(){
        this.isMessage = true;
    }

    showKnow1(){
        this.isKnowledge1 = true;
    }

    showKnow2(){
        this.isKnowledge2 = true;
    }

    showKnow3(){
        this.isKnowledge3 = true;
    }

    showKnow4(){
        this.isKnowledge4 = true;
    }

    showKnow5(){
        this.isKnowledge5 = true;
    }
}