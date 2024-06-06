import { LightningElement } from 'lwc';
import ApplicationModal from 'c/applicationModal';
import ConceptPaperModal from 'c/conceptPaperModal';
import ProgressReportForm from 'c/progressReportForm';

export default class SideNav1 extends LightningElement {
   
    async handleClick(){
        const result = await ConceptPaperModal.open({
            size: "Medium",
            description: "Modal for application component"
        });
    }

    async handleClick2(){
        const result = await ApplicationModal.open({
            size: "Medium",
            description: "Modal for application component"
        });
    }

    async handleClick3(){
        const result = await ProgressReportForm.open({
            size: "Medium",
            description: "Modal for application component"
        });
    }
}