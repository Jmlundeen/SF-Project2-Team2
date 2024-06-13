public without sharing class applicantSearchController {

    @AuraEnabled(cacheable=true)
    public static Lead getApplicantLead(String lastName, string email) {
        List<Lead> lead = [SELECT Id, Name, Region__c, State__c, Email, Budget_Share__c, NumberOfEmployees, Status
                    FROM Lead
                    WHERE LastName = :lastName AND Email = :email LIMIT 1];
        if(lead.size() > 0) {
            return lead[0];
        } else {
            throw new AuraHandledException('No lead found with the given details');
        }
    }   

    @AuraEnabled(cacheable=true)
    public static List<String> getStatusValues() {
        List<String> statusValues = new List<String>();
        List<String> filterValues = new List<String>{
            'Open - Not Contacted',
            'Working - Contacted',
            'Closed - Converted',
            'Closed - Not Converted'
        };
        Schema.DescribeFieldResult fieldResult = Lead.Status.getDescribe();
        List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
        for( Schema.PicklistEntry pickListVal : ple) {
            if(filterValues.contains(pickListVal.getLabel()))
            {
                continue;
            }
            statusValues.add(pickListVal.getLabel());
        }
        return statusValues;
    }
}