trigger ContactTrigger on Contact (after insert) {
    // if the contact is updated with a new account and previous account was null
    if(Trigger.isAfter) {
        if (Trigger.isInsert) {
            List<Contact> contacts = new List<Contact>();
            for(Contact contact : Trigger.new) {
                if(contact.AccountId != null) {
                    contacts.add(contact);
                }
            }
            ContactTriggerHandler.createAccessCode(contacts);
        }
    }
}