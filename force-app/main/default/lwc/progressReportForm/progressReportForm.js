import { api } from 'lwc';
import LightningModal from 'lightning/modal';
import FORM from '@salesforce/schema/Progress_Report__c';
import ACCOUNT_FIELD from '@salesforce/schema/Progress_Report__c.Account__c';
import AUTHOR_FIELD from '@salesforce/schema/Progress_Report__c.Author__c';
import COST_FIELD from '@salesforce/schema/Progress_Report__c.Cost_Budget_Information__c';
import PROGRESS_FIELD from '@salesforce/schema/Progress_Report__c.Progress_Summary__c';
import MANAGER_FIELD from '@salesforce/schema/Progress_Report__c.Project_Manager__c';
import OBJECTIVE_FIELD from '@salesforce/schema/Progress_Report__c.Project_Objective__c';
import TITLE_FIELD from '@salesforce/schema/Progress_Report__c.Project_Title__c';
import RISK_FIELD from '@salesforce/schema/Progress_Report__c.Risks_and_Issues__c';


export default class ProgressReportForm extends LightningModal {

    @api recordId;

    objectApiName = FORM;
    fields = [ACCOUNT_FIELD,
              AUTHOR_FIELD, 
              COST_FIELD, 
              PROGRESS_FIELD, 
              MANAGER_FIELD, 
              OBJECTIVE_FIELD, 
              TITLE_FIELD, 
              RISK_FIELD];

    closeOnSave(event){
        this.close(event.detail.id);
    }
    closeOnCancel(){
        this.close();
    }
    
}