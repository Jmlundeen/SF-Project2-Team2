import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Banner extends LightningElement {
    bannerUrl = IMAGES + '/banner1.jpg';
}