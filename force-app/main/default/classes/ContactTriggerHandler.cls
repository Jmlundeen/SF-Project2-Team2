public without sharing class ContactTriggerHandler {

    public static void createAccessCode(List<Contact> contacts) {
        
        List<Id> contactIds = new List<Id>();
        for (Contact contact : contacts) {
            contactIds.add(contact.Id);
        }

        // Prepare a list for bulk update
        List<Contact> contactsToUpdate = new List<Contact>();
        List<Messaging.Email> emails = new List<Messaging.Email>();

        for (Contact contact : [SELECT Id, Access_Code__c, Email FROM Contact WHERE Id IN :contactIds]) {
            String code = AccessCodeGenerator.generateAccessCode()[0];
            contact.Access_Code__c = code;
            contactsToUpdate.add(contact);
            // create emails if less than 10 made
            if (emails.size() < 10) {
                Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
                String siteUrl = Url.getOrgDomainUrl().toExternalForm().replace('salesforce', 'site') + '/SelfRegister';
                email.setToAddresses(new List<String>{contact.Email});
                email.setSubject('Access Code');
                email.setPlainTextBody('Your access code is: ' + code + '\nPlease use this code to access the portal.\n' + siteUrl);
                emails.add(email);
            }

        }

        if (!contactsToUpdate.isEmpty()) {
            update contactsToUpdate;
        }
        if (!emails.isEmpty()) {
            Messaging.sendEmail(emails);
        }

    }
}
