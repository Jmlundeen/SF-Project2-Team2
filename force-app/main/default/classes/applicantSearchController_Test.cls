@isTest
private class applicantSearchController_Test {
    @isTest
    static void testGetApplicantLead() {
        // Create test data
        String lastName = 'Doe';
        String email = 'john.doe@example.com';
        String company = 'Acme';
        Lead testLead = new Lead(LastName = lastName, Email = email, Company = company);
        insert testLead;
        
        // Call the method to be tested
        Lead result = applicantSearchController.getApplicantLead(lastName, email);
        
        // Verify the result
        System.assertEquals(testLead.Id, result.Id);
    }
    
    @isTest
    static void testGetApplicantLead_NoLeadFound() {
        // Create test data
        String lastName = 'Smith';
        String email = 'jane.smith@example.com';
        
        // Call the method to be tested
        try {
            applicantSearchController.getApplicantLead(lastName, email);
            System.assert(false, 'Expected AuraHandledException was not thrown');
        } catch (AuraHandledException ex) {
            // Verify the exception message
            System.assertEquals('Script-thrown exception', ex.getMessage());
        }
    }
    
    @isTest
    static void testGetStatusValues() {
        // Call the method to be tested
        List<String> result = applicantSearchController.getStatusValues();
        
        // Verify the result
        List<String> filteredValues = new List<String>{
            'Open - Not Contacted',
            'Working - Contacted',
            'Closed - Converted',
            'Closed - Not Converted'
        };
        for (String value : filteredValues) {
            Assert.isTrue(!result.contains(value));
        }
    }
}