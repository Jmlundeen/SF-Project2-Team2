import {LightningElement, api } from 'lwc';
import LightningModal from 'lightning/modal';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import PHONE_FIELD from '@salesforce/schema/Lead.Phone';
import FUNDING_FIELD from '@salesforce/schema/Lead.Funding_Opportunity__c';
import NAICS_FIELD from '@salesforce/schema/Lead.NAICS_Code__c';
import REGION_FIELD from '@salesforce/schema/Lead.Region__c';
import STATE_FIELD from '@salesforce/schema/Lead.State__c';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import REVENUE_FIELD from '@salesforce/schema/Lead.AnnualRevenue';
import EMPLOYEES_FIELD from '@salesforce/schema/Lead.NumberOfEmployees';
import BUDGET_FIELD from '@salesforce/schema/Lead.Budget_Share__c';
import CONCEPT_PAPER from '@salesforce/schema/Lead';

export default class ConceptPaperModal extends LightningModal {
    
    objectApiName = CONCEPT_PAPER;
    @api recordId;

    fields = [NAME_FIELD, 
              PHONE_FIELD, 
              FUNDING_FIELD, 
              NAICS_FIELD, 
              REGION_FIELD, 
              STATE_FIELD, 
              COMPANY_FIELD, 
              REVENUE_FIELD, 
              EMPLOYEES_FIELD, 
              BUDGET_FIELD
            ];

    closeOnSave(event){
        this.close(event.detail.id);
    }
    closeOnCancel(){
        this.close();
    }
    handleSubmit(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        fields.Status = 'Concept Paper';
        this.template.querySelector('lightning-record-form').submit(fields);
        this.close();
    }

}