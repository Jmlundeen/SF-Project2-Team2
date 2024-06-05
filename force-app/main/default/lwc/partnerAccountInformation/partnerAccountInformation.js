import { LightningElement, api, wire } from 'lwc';
import getPartnerAccountInformation from '@salesforce/apex/PartnerAccountInformationController.getPartnerAccountInformation';

export default class PartnerAccountInformation extends LightningElement {
    @api recordId;
    account;
    errorMessage;

    @wire(getPartnerAccountInformation, { recordId: '$recordId'})
    getAccount(result) {
        if (result.data) {
            const record = result.data[0];
            console.log('record', record);
            const account = {
                name: record['Name'],
                phone: record['Phone'],
                naicsCode: record['NAICS_Code__c'],
                enrollmentDate: record['Enrollment_Date__c'],
                timeInProgram: record['Time_In_Program__c'],
                active: record['Active__c'],
                region: record['Region__c'],
                state: record['State__c'],
                // numberOfEmployees: record['NumberOfEmployees'],
                numberOfEmployees: 1600,
                annualRevenue: record['AnnualRevenue'],
                budgetShare: Number(record['Budget_Share__c']) / 100,
                fundingOpportunity: record['Funding_Opportunity_del__r'].Name,
                approvedFunding: record['Approved_Funding__c'],
                contractLength: record['Contract_Length__c'] + ' months'
            };
            this.account = account;
            console.log('account', this.account);
            this.error = null;
        } else if (result.error) {
            this.error = result.error.body.message;
            this.account = null;
        }
    }
}