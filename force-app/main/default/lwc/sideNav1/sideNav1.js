import { LightningElement } from 'lwc';
import ApplicationModal from 'c/applicationModal';
import ConceptPaperModal from 'c/conceptPaperModal';
import ProgressReportForm from 'c/progressReportForm';
import { NavigationMixin} from 'lightning/navigation';

export default class SideNav1 extends NavigationMixin(LightningElement) {
   
    async handleClick(){
        const result = await ConceptPaperModal.open({
            size: "small",
            description: "Modal for application component"
        });
    }

    async handleClick2(){
        const result = await ApplicationModal.open({
            size: "small",
            description: "Modal for application component"
        });
    }

    async handleClick3(){
        const result = await ProgressReportForm.open({
            size: "small",
            description: "Modal for application component"
        });
    }

    navigateToHome() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Home'
            }
        });
    }
}