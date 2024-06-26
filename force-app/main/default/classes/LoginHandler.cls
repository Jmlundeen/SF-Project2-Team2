public without sharing class LoginHandler {
  @AuraEnabled(cacheable=true)
  public static String getUser(String userName, String password) {
    /**
     * This function checks if the user exists w/in the SF DB.
     * If user doesn't exist, return -1.
     * If user exists but inactive, return 0.
     * If user exists and active, login and return 1.
     *
     */
    try {
      List<User> users = [
        SELECT
          Id,
          Username,
          LastName,
          FirstName,
          isActive,
          Email,
          ProfileId,
          UserRoleId,
          UserType
        FROM USER
        WHERE Username = :userName
      ];

      // If no users exists, returns -1;
      if (users.size() <= 0) {
        return 'No users found!';
      }

      // If user exists but inactive, return 0.
      if (!users[0].isActive) {
        return 'User is inactive, please contact Admin for more info!';
      }

      // User exists and active, login.
      System.PageReference tempPage = Site.login(userName, password, Url.getOrgDomainUrl().toExternalForm().replace('salesforce', 'site'));
      if (tempPage == null) {
        return 'Login failed!';
      }
      return tempPage.getUrl();
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
