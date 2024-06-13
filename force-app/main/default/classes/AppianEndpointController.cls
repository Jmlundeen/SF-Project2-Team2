public class AppianEndpointController {

    @AuraEnabled( cacheable=true )
    public static String getRequestWithCredentials(Boolean clicked){
        HttpRequest req = new HttpRequest();
        req.setMethod( 'GET' );
        req.setEndpoint(
            'callout:Appian_EERE_Endpoint_Credentials/suite/webapi/articles' 
        );
        
        Http http = new Http();
        HttpResponse response = http.send( req );

        return response.getBody();

    }

}
