export function populateRowData( listOfObject ) {
    let rowData = [];

    for( let object of listOfObject ) {
        // Convert keywords in listOfObject to lowercase since data is not consistent.
        const keywordsLowerCase = object.keyword.map( word => {
            return word.toLowerCase();
        })
    
        const property = {
            title: object.title,
            identifier: object.identifier,
            publisher: object.publisher.name,
            contact: object.contactPoint.hasEmail.replace('mailto:', ''),
            bureauCode: object.bureauCode ? object.bureauCode[0] : 'null',
            programCode: object.programCode ? object.programCode[0] : 'null',
            theme: object.theme ? object.theme[0] : 'null',
            keyword: object.keyword ? keywordsLowerCase : 'null'
        };

        rowData.push( property );
    }

    return rowData;
}

export function searchFor( data, wordToSearch ) {
    // Ensure that we get all records back value when the search box is blank.
    if( !wordToSearch ) return data;

    /* 
        Iterate thru each object in our data, get all the keys of each object,
        then search if the keyword is in the value of each key-value pair.
    
    */
    let searchResult = data.filter( object => {
        return Object.keys( object ).some( key => {
            return object[key].includes( wordToSearch );
        })
    });

    return searchResult;
}