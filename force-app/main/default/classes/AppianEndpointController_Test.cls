@IsTest
public without sharing class AppianEndpointController_Test {
    private class RestMock implements HttpCalloutMock {

        public HTTPResponse respond(HTTPRequest req) {
            String fullJson = 'Test appian respond';

            HTTPResponse res = new HTTPResponse();
            res.setHeader('Content-Type', 'text/json');
            res.setBody(fullJson);
            res.setStatusCode(200);
            return res;
        }
    }

    @IsTest
    public static void testgetRequestWithCredentials() {
        Test.setMock(HttpCalloutMock.class, new RestMock() );
        Test.startTest();

        String result = AppianEndpointController.getRequestWithCredentials( true );

        Assert.isNotNull( result );

        Test.stopTest();

    }
}