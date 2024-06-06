public without sharing class LoginHandler {

    @AuraEnabled( cacheable=true )
    public static Integer getUserByUserName( String userName, String password ){
        /**
         * This function checks if the user exists w/in the SF DB.
         * If user doesn't exist, return -1.
         * If user exists but inactive, return 0.
         * If user exists and active, login and return 1.
         * 
         */
        try {
            List<User> users = [
                    SELECT Id, Username, LastName, FirstName, isActive, 
                    Email, ProfileId, UserRoleId, UserType
                    FROM USER
                    WHERE Username = :userName
                ];

            // Check if user exists w/in SF DB.
            // If exists, is it an active user?
                // login using email and password.
            // if not prevent login.
            if( users.size() <= 0 ){
                return -1;
            }

            if( !users[0].isActive ){
                return 0;
            }

            // User exists and active, login.
            System.PageReference redirectPage = Site.login( 
                userName, password, ''
            );
            return 1;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}