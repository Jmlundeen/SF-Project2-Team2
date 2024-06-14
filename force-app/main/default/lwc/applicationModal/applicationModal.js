import { api, track, wire } from 'lwc';
import lightningModal from 'lightning/modal';
import API_NAME from '@salesforce/schema/Lead';
import FIRST_NAME_FIELD from '@salesforce/schema/Lead.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Lead.LastName';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import PHONE_FIELD from '@salesforce/schema/Lead.Phone';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import EMPLOYEES_FIELD from '@salesforce/schema/Lead.NumberOfEmployees';
import REVENUE_FIELD from '@salesforce/schema/Lead.AnnualRevenue';
import NAICS_FIELD from '@salesforce/schema/Lead.NAICS_Code__c';
import REGION_FIELD from '@salesforce/schema/Lead.Region__c';
import STATE_FIELD from '@salesforce/schema/Lead.State__c';
import FUNDING_FIELD from '@salesforce/schema/Lead.Funding_Opportunity__c';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class ApplicationModal extends lightningModal {

   objectApiName = API_NAME;
    @api recordId;
    @track recordType;

    @wire(getObjectInfo, { objectApiName: API_NAME })
    objectInfo({ error, data }) {
        if (data) {
            const typeIds = data.recordTypeInfos;
            this.recordType = Object.keys(typeIds).find(type => typeIds[type].name === 'Small_Business_Program');
        } else if (error) {
            console.log(error);
        }
    }
   
   fields = [FIRST_NAME_FIELD, 
             LAST_NAME_FIELD, 
             EMAIL_FIELD, 
             PHONE_FIELD, 
             COMPANY_FIELD, 
             EMPLOYEES_FIELD, 
             REVENUE_FIELD, 
             NAICS_FIELD, 
             REGION_FIELD, 
             STATE_FIELD, 
             FUNDING_FIELD
            ];

    closeOnSave(event){
        this.close();
    }
    closeOnCancel(){
        this.close();
    }
    handleSubmit(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        fields.Status = 'Full Application';
        this.template.querySelector('lightning-record-form').submit(fields);
        this.close();
    }
}