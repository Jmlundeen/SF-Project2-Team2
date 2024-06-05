public without sharing class PartnerAccountInformationController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getPartnerAccountInformation(Id recordId) {
        List<Account> accounts = new List<Account>();
        accounts = [SELECT Name, Phone, NAICS_Code__c, NumberOfEmployees, AnnualRevenue, Time_In_Program__c, 
                            Budget_Share__c, Active__c, Funding_Opportunity_del__r.Name, Region__c, Approved_Funding__c,
                            State__c, Contract_Length__c, Enrollment_Date__c
                    FROM Account
                    WHERE Id = :recordId];
        return accounts;
    }
}