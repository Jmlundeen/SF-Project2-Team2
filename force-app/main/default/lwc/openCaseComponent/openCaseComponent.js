import { LightningElement, wire} from 'lwc';
import getOpenServiceAppointments from '@salesforce/apex/ServiceAppointmentController.getOpenServiceAppointments';
import getClosedServiceAppointments from '@salesforce/apex/ServiceAppointmentController.getClosedServiceAppointments';

export default class OpenCaseComponent extends LightningElement {
    

    @wire(getOpenServiceAppointments) openServiceAppointments;
    @wire(getClosedServiceAppointments) closedServiceAppointments;

    get hasOpenServiceAppointments() {
        return this.openServiceAppointments && this.openServiceAppointments.length > 0;
    }

    get hasClosedServiceAppointments() {
        return this.openServiceAppointments && this.openServiceAppointments.length > 0;
    }
}