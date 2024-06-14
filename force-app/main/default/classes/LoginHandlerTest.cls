@IsTest
public with sharing class LoginHandlerTest {
    @IsTest
    public static void testGetUsersReturnNone() {
        String userName = 'TestUsername@testclass.com';
        String userPassword = 'testpassword@123';

        String results = LoginHandler.getUser( userName, userPassword );

        Assert.areEqual( 'No users found!', results );

    }

    @IsTest (SeeAllData=true)
    public static void testGetUsersInactive() {
        String userName = 'testuser@testuser.gmail.com';
        String userPassword = 'testpassword@123';

        String results = LoginHandler.getUser( userName, userPassword );

        Assert.areEqual( 
            'User is inactive, please contact Admin for more info!',
            results
        );
    }

    @IsTest (SeeAllData=true)
    public static void testGetUsersWrongPassword() {
        String userName = 'project2group2@eere.com';
        String userPassword = 'testpassword@123';

        String results = LoginHandler.getUser( userName, userPassword );

        Assert.areEqual( 
            'Login failed!',
            results
        );
    }
}