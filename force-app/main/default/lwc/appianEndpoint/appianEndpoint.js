import { LightningElement, wire } from 'lwc';
import getRequestWithCredentials from '@salesforce/apex/AppianEndpointController.getRequestWithCredentials';
import { populateRowData, searchFor } from './appianEndpointHelper';

export default class AppianEndpoint extends LightningElement {

    appianObjects;
    errorMessage;
    isClicked = false;

    searchKeyWord;

    // Col Data holds the table headers.
    colData = [
        { label: 'Title', fieldName: 'title', type:'text' },
        { label: 'Identifer', fieldName: 'identifier', type:'text' },
        { label: 'Publisher', fieldName: 'publisher', type:'text' },
        { label: 'Contact', fieldName: 'contact', type:'text' },
        { label: 'Bureau Code', fieldName: 'bureauCode', type:'text' },
        { label: 'Program Code', fieldName: 'programCode', type:'text' },
        { label: 'Theme', fieldName: 'theme', type:'text' },
    ]

    // Row Data holds the actual records.
    rowData;
    rowDataCopy;

    @wire( getRequestWithCredentials, {
        clicked: '$isClicked'
    })
    getDataFromEndpoint( {data, error} ){
        if( data ){
            // returns a proxy. 
            // Can access proxy like regular array.
            this.appianObjects = JSON.parse( data ); 
        } 
        else if( error ){
            this.errorMessage = error.body.message;

        }
    }

    handleClick = ( event ) => {
        event.preventDefault();
        this.isClicked = !this.isClicked;

        this.rowData = populateRowData( this.appianObjects );

        // Making a deep copy to store the original when searching thru each
        // record since search requires constant updates to rowData.
        this.rowDataCopy = JSON.parse( JSON.stringify( this.rowData ) );

        this.errorMessage = null;

    }

    handleOnChange = ( event ) => {
        if( !this.rowData ) {
            this.errorMessage = 'No data found! Please generate data first!';
            return;
        }

        this.searchKeyWord = event.target.value;

        // If nothing is in search box, show all records.
        if( !this.searchKeyWord ) {
            this.rowData = JSON.parse( JSON.stringify( this.rowDataCopy ) );
        }

        this.rowData = searchFor( this.rowDataCopy, this.searchKeyWord );
        this.errorMessage = null;
 
    }

}