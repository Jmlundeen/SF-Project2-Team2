
@isTest
private class ContactTriggerHandler_Test {

    @isTest
    static void testAccountTriggerAccessCode() {
        // Create test data
        Lead testLead = new Lead(FirstName = 'First', LastName = 'Test', Company = 'Test Company', Email = 'mahoco2261@morxin.com', Approved_Funding__c = 1000000);
        Funding_Opportunity__c testFundingOpportunity = new Funding_Opportunity__c(Type__c = 'Test Funding Opportunity');
        insert testFundingOpportunity;
        testLead.Funding_Opportunity__c = testFundingOpportunity.Id;
        insert testLead;
        // convert lead
        Database.LeadConvert lc = new database.LeadConvert();
        lc.setLeadId(testLead.Id);
        lc.setConvertedStatus('Project Performance');
        
        // Call the trigger
        Test.startTest();
        Database.LeadConvertResult lcr = Database.convertLead(lc);
        Assert.isTrue(lcr.isSuccess());
        Test.stopTest();
        Contact contact = [SELECT Id, FirstName, LastName, Email, Access_Code__c FROM Contact WHERE Id = :lcr.getContactId()];
        Assert.areEqual('First', contact.FirstName);
        Assert.isTrue(contact.Access_Code__c != null);
    }
}
    