import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Avatar extends LightningElement {
    imageUrl = IMAGES + '/avatar.png';
}