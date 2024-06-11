public without sharing class PortalUserHandler {
    @AuraEnabled(cacheable=true)
    public static String createPortalUser(String email, String password, String accessCode) {
        List<Contact> contactQuery = [SELECT Id, FirstName, LastName, Email, AccountId FROM Contact 
                            WHERE Access_Code__c = :accessCode AND Email = :email LIMIT 1];
        if (contactQuery.size() == 0) {
            return 'false';
        }
        Contact contact = contactQuery[0];
        User user = new User(ContactId = contact.Id);
        user.Username = contact.FirstName + contact.LastName + System.currentTimeMillis() + '@EERE.com';
        user.Email = contact.Email;
        user.LastName = contact.LastName;
        user.FirstName = contact.FirstName;
        user.Alias = contact.FirstName.substring(0, 1) + contact.LastName;
        user.CommunityNickname = contact.FirstName + contact.LastName;
        user.ProfileId = [SELECT Id FROM Profile WHERE Name='EERE Small Business Site User' LIMIT 1].Id;
        user.TimeZoneSidKey = 'America/Los_Angeles';
        user.LocaleSidKey = 'en_US';
        user.EmailEncodingKey = 'UTF-8';
        user.LanguageLocaleKey = 'en_US';
        Site.createPortalUser(user, contact.AccountId, password, true);
        return user.Username;
    }
}