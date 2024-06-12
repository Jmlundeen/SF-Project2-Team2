import { LightningElement } from 'lwc';
import ApplicationModal from 'c/applicationModal';
import ConceptPaperModal from 'c/conceptPaperModal';
import ProgressReportForm from 'c/progressReportForm';
import ServiceComponent from 'c/serviceComponent';
import { NavigationMixin} from 'lightning/navigation';

export default class SideNav1 extends NavigationMixin(LightningElement) {
   
    async handleClick(){
        const result = await ConceptPaperModal.open({
            size: 'small',
            description: "Modal for concept paper component"
        });
        console.log(result);
    }

    async handleClick2(){
        const result = await ApplicationModal.open({
            size: 'small',
            description: "Modal for application component"
        });
        console.log(result);
    }

    async handleClick3(){
        const result = await ProgressReportForm.open({
            size: 'small',
            description: "Modal for progress report component"
        });
        console.log(result);
    }

    async handleClick4(){
        const result = await ServiceComponent.open({
            size: "small",
            description: "Modal for service component"
        });
        console.log(result);
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