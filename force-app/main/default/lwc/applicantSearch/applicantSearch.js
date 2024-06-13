import { LightningElement, wire, track } from 'lwc';
import ApplicationModal from 'c/applicationModal';
import ConceptPaperModal from 'c/conceptPaperModal';
import getApplicantLead from '@salesforce/apex/applicantSearchController.getApplicantLead';
import getStatusValues from '@salesforce/apex/applicantSearchController.getStatusValues';

export default class ApplicantSearch extends LightningElement {
    @track statusValues = [];
    email;
    lastName;
    tempEmail;
    tempLastName;
    applicant;
    applicantSearchError;
    pathError;
    spinner = false;

    @wire(getApplicantLead, { lastName: '$lastName', email: '$email' })
    wiredApplicant({ data, error}) {
        if (data) {
            this.applicant = data;
            this.applicantSearchError = null;
        } else if (error) {
            this.applicantSearchError = "No applicant found.";
            this.applicant = null;
        }
        this.spinner = false;
    }

    @wire(getStatusValues)
    leadStatusValues({ data, error }) {
        if (data) {
            this.statusValues = data.map(status => ({
                label: status,
                value: status
            }));
        } else if (error) {
            this.pathError = error;
        }
    }

    get applicantCanSubmitApps() {
        return this.applicant?.Status == 'Concept Paper' || 
                this.applicant?.Status == 'Full Application'
    }

    handleEmailChange(event) {
        this.tempEmail = event.target.value;
    }

    handleLastNameChange(event) {
        this.tempLastName = event.target.value;
    }

    handleSearch(event) {
        event.preventDefault();
        if (!this.tempEmail) {
            this.applicantSearchError = "Please enter an email address.";
            return;
        }
        if (!this.tempLastName) {
            this.applicantSearchError = "Please enter a last name.";
            return;
        }
        this.email = this.tempEmail;
        this.lastName = this.tempLastName;
        this.spinner = true;
    }

    async launchConceptPaperModal() {
        await ConceptPaperModal.open({
            size: 'small',
            recordId: this.applicant.Id
        });
    }

    async launchApplicationModal() {
        await ApplicationModal.open({
            size: 'small',
            recordId: this.applicant.Id
        });
    }
}