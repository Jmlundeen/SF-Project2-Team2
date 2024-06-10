public with sharing class ServiceAppointmentController {
    @AuraEnabled(cacheable=true)
    public static List<ServiceAppointment> getOpenServiceAppointments() {
        return [SELECT Id, Description, SchedStartTime, SchedEndTime FROM ServiceAppointment WHERE Status ='Scheduled'];
    }

    @AuraEnabled(cacheable=true)
    public static List<ServiceAppointment> getClosedServiceAppointments() {
        return [SELECT Id, Description, SchedStartTime, SchedEndTime FROM ServiceAppointment WHERE Status IN ('Completed', 'Canceled', 'Cannot Complete')];
    }
}