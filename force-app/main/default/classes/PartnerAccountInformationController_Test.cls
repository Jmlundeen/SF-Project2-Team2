/**
 * This class contains unit tests for validating the behavior of Apex classes
 * and triggers.
 *
 * Unit tests are class methods that verify whether a particular piece
 * of code is working properly. Unit test methods take no arguments,
 * commit no data to the database, and are flagged with the testMethod
 * keyword in the method definition.
 *
 * All test methods in an org are executed whenever Apex code is deployed
 * to a production org to confirm correctness, ensure code
 * coverage, and prevent regressions. All Apex classes are
 * required to have at least 75% code coverage in order to be deployed
 * to a production org. In addition, all triggers must have some code coverage.
 * 
 * The @isTest class annotation indicates this class only contains test
 * methods. Classes defined with the @isTest annotation do not count against
 * the org size limit for all Apex scripts.
 *
 * See the Apex Language Reference for more information about Testing and Code Coverage.
 */
@isTest
private class PartnerAccountInformationController_Test {

    @TestSetup
    static void makeData(){
        // Create an Account
    Account acc = new Account();
    acc.Name = 'Test Account';
    acc.Phone = '123-456-7890';
    acc.NAICS_Code__c = '541611 - Administrative & General Management Consulting';
    acc.NumberOfEmployees = 1500;
    acc.AnnualRevenue = 1000000;
    acc.Budget_Share__c = 40;
    acc.Active__c = 'true';
    acc.Region__c = 'Great Lakes';
    acc.State__c = 'Illinois';
    acc.Contract_Length__c = 12;
    acc.Enrollment_Date__c = Date.today();
    insert acc;

    Contact contact = new Contact(LastName = 'Test', AccountId = acc.Id);
    insert contact;

    User user = new User(ContactId = contact.Id);
    user.Username = 'testuser' + System.currentTimeMillis() + '@test.com';
    user.Email = 'testuser@test.com';
    user.LastName = 'Test';
    user.FirstName = 'User';
    user.Alias = 'tuser';
    user.ProfileId = [SELECT Id FROM Profile WHERE Name='EERE Small Business Site User' LIMIT 1].Id;
    user.TimeZoneSidKey = 'America/Los_Angeles';
    user.LocaleSidKey = 'en_US';
    user.EmailEncodingKey = 'UTF-8';
    user.LanguageLocaleKey = 'en_US';
    insert user;
    }




    @isTest
    static void getAccountInformation() {
        User user = [SELECT Id FROM User WHERE Profile.Name = 'EERE Small Business Site User' LIMIT 1];
        Account account = PartnerAccountInformationController.getPartnerAccountInformation(user.Id);
        Assert.isNotNull(account);
        Assert.areEqual('Test Account', account.Name);
        Assert.areEqual('123-456-7890', account.Phone);
        Assert.areEqual('541611 - Administrative & General Management Consulting', account.NAICS_Code__c);
        Assert.areEqual(1500, account.NumberOfEmployees);
        Assert.areEqual(1000000, account.AnnualRevenue);
        Assert.areEqual('0 Days', account.Time_In_Program__c);
        Assert.areEqual(40, account.Budget_Share__c);
        Assert.areEqual('true', account.Active__c);
        Assert.areEqual('Great Lakes', account.Region__c);
        Assert.areEqual('Illinois', account.State__c);
        Assert.areEqual(12, account.Contract_Length__c);
        Assert.areEqual(Date.today(), account.Enrollment_Date__c);
    }

    @isTest
    static void getAccountInformationNoUser() {
        Account account = PartnerAccountInformationController.getPartnerAccountInformation(null);
        Assert.areEqual(null, account);
    }

    @isTest
    static void getAccountInformationNoAccount() {
        User user = [SELECT Id FROM User WHERE Profile.Name = 'System Administrator' LIMIT 1];
        Account account = PartnerAccountInformationController.getPartnerAccountInformation(user.Id);
        Assert.areEqual(null, account);
    }
}