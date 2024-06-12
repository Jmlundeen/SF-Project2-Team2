import { LightningElement, track, api} from 'lwc';

export default class FileUpload extends LightningElement {
    @api
    recordId;

    @track files = [];

    handleUploadFinished(event) {
        const uploadedFiles = event.detail.files;
        this.files = uploadedFiles.map(file => ({
            name: file.name,
            url: file.documentId
        }));
    }
}