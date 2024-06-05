@isTest
private class CalculateDate_Test {

    @isTest
    static void testGetDateResult() {
        // Create test data
        CalculateDate.ContractInfo contractInfo = new CalculateDate.ContractInfo();
        contractInfo.startDate = Date.today();
        contractInfo.daysToAdd = 10;
        List<CalculateDate.ContractInfo> contractInfoList = new List<CalculateDate.ContractInfo>{contractInfo};

        // Call the method to be tested
        List<CalculateDate.DateResult> results = CalculateDate.getDateResult(contractInfoList);

        // Verify the results
        Assert.areEqual(1, results.size());
        CalculateDate.DateResult result = results[0];
        Assert.areEqual(contractInfo.startDate.addDays(contractInfo.daysToAdd), result.expirationDate);
        Assert.areEqual(contractInfo.startDate.addDays(contractInfo.daysToAdd).addDays(-30), result.warningDate);
        Integer daysUntilExpiration = Date.today().daysBetween(contractInfo.startDate.addDays(contractInfo.daysToAdd));
        String expectedMessage = 'your contract will expire in ' + daysUntilExpiration + ' days.';
        Assert.areEqual(expectedMessage, result.message);
    }

    @isTest
    static void testGetDateResultWithNullContractInfo() {
        // Create test data
        List<CalculateDate.ContractInfo> contractInfoList = new List<CalculateDate.ContractInfo>();

        // Call the method to be tested
        List<CalculateDate.DateResult> results = CalculateDate.getDateResult(contractInfoList);

        // Verify the results
        Assert.areEqual(0, results.size());
    }

    @isTest
    static void testGetDateResultWithEmptyContractInfo() {
        // Create test data
        List<CalculateDate.ContractInfo> contractInfoList = new List<CalculateDate.ContractInfo>{};

        // Call the method to be tested
        List<CalculateDate.DateResult> results = CalculateDate.getDateResult(contractInfoList);

        // Verify the results
        Assert.areEqual(0, results.size());
    }

    @isTest
    static void testWarningDate() {
        // Create test data
        // Within warning period
        CalculateDate.ContractInfo contractInfoWarning = new CalculateDate.ContractInfo();
        contractInfoWarning.startDate = Date.today();
        contractInfoWarning.daysToAdd = 10;
        // Outside warning period
        CalculateDate.ContractInfo contractInfoNoWarning = new CalculateDate.ContractInfo();
        contractInfoNoWarning.startDate = Date.today();
        contractInfoNoWarning.daysToAdd = 31;
        
        List<CalculateDate.ContractInfo> contractInfoList = new List<CalculateDate.ContractInfo>{contractInfoWarning};
        List<CalculateDate.ContractInfo> contractInfoList2 = new List<CalculateDate.ContractInfo>{contractInfoNoWarning};

        // Call the method to be tested
        List<CalculateDate.DateResult> results = CalculateDate.getDateResult(contractInfoList);
        List<CalculateDate.DateResult> results2 = CalculateDate.getDateResult(contractInfoList2);

        // Verify the results
        CalculateDate.DateResult result = results[0];
        Assert.isTrue(result.warningDate < contractInfoWarning.startDate, 'Warning date should be before the start date');
        CalculateDate.DateResult result2 = results2[0];
        Assert.isTrue(result2.warningDate > contractInfoNoWarning.startDate, 'Warning date should be after the start date');
    }
}