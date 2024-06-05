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
    }
    @isTest
    static void getAccountInformation() {
        Account acc = [SELECT Id FROM Account WHERE Name = 'Test Account' LIMIT 1];
        List<Account> accounts = PartnerAccountInformationController.getPartnerAccountInformation(acc.Id);
        System.assertEquals(1, accounts.size());
        System.assertEquals('Test Account', accounts[0].Name);
        System.assertEquals('123-456-7890', accounts[0].Phone);
        System.assertEquals('541611 - Administrative & General Management Consulting', accounts[0].NAICS_Code__c);
        System.assertEquals(1500, accounts[0].NumberOfEmployees);
        System.assertEquals(1000000, accounts[0].AnnualRevenue);
        System.assertEquals('0 Days', accounts[0].Time_In_Program__c);
        System.assertEquals(40, accounts[0].Budget_Share__c);
        System.assertEquals('true', accounts[0].Active__c);
        System.assertEquals('Great Lakes', accounts[0].Region__c);
        System.assertEquals('Illinois', accounts[0].State__c);
        System.assertEquals(12, accounts[0].Contract_Length__c);
        System.assertEquals(Date.today(), accounts[0].Enrollment_Date__c);
    }
}