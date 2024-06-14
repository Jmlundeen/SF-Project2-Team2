public class AccessCodeGenerator {
    @InvocableMethod(label='Generate Access Code' iconName='slds:standard:password')
    public static List<String> generateAccessCode() {
        String chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        String accessCode = '';
        Integer codeLength = 8; // Length of the access code

        for(Integer i = 0; i < codeLength; i++) {
            Integer idx = Math.mod(Math.abs(Crypto.getRandomInteger()), chars.length());
            accessCode += chars.substring(idx, idx + 1);
        }

        return new List<String>{accessCode};
    }
}
