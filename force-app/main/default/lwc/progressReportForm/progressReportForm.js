import { LightningElement } from 'lwc';
import LightningModal from 'lightning/modal';

export default class ProgressReportForm extends LightningModal {
    handleSubmit(){
        this.close('Submit');
    }
}