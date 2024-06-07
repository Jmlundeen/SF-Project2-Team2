import { LightningElement } from 'lwc';

import IMAGES from '@salesforce/resourceUrl/Images';

export default class Logo extends LightningElement {
    imageUrl = IMAGES + '/eere_logo_vert_black_reversed.jpg';
}
