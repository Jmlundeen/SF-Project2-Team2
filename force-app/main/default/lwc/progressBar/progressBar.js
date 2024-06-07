import { LightningElement } from 'lwc';

export default class ProgressBar extends LightningElement {
    steps = [
        {label: "Converted", value: "step-1"},
        { label: "Concept Paper", value: "step-2"},
        { label: "Full Application", value: "step-3"},
        { label: "Selection", value: "step-4"},
        { label: "Negotiation Stage", value: "step-5"},
        { label: "Rejected", value: "step-6"},
        { label: "Probation", value: "step-7"},
        { label: "Deactivated", value: "step-8"}
    ];
}