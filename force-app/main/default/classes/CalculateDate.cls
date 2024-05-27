public class CalculateDate {
    @InvocableMethod(label='Add Days to Date' iconName='slds:standard:time_period')
    public static List<DateResult> getDateResult(List<ContractInfo> contractInfoList) {
        if (contractInfoList == null || contractInfoList.isEmpty()) {
            return new List<DateResult>();
        }
        ContractInfo contractInfo = contractInfoList[0];
        DateResult result = new DateResult();
        Date expirationDate = contractInfo.startDate.addDays(contractInfo.daysToAdd);
        Date warningDate = expirationDate.addDays(-30);
        Integer daysUntilExpiration = Date.today().daysBetween(expirationDate);
        String message = 'your contract will expire in ' + daysUntilExpiration + ' days.';
        result.expirationDate = expirationDate;
        result.warningDate = warningDate;
        result.message = message;
        return new List<DateResult>{result};
    }

    public class ContractInfo {
        @InvocableVariable(required = true)
        public Date startDate;
        @InvocableVariable(required = true)
        public Integer daysToAdd;
    }

    public class DateResult {
        @InvocableVariable
        public Date expirationDate;

        @InvocableVariable
        public Date warningDate;

        @InvocableVariable
        public String message;
    }
}