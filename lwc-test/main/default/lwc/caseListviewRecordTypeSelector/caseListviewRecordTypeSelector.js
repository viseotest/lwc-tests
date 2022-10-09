import { LightningElement, api } from 'lwc';

export default class CaseListviewRecordTypeSelector extends LightningElement {

    @api typologySelected;
    @api recordTypesList;

    handleChangeRecordType(event){
        const evt = new CustomEvent('changerecordtype', { detail: event.target.value });
        this.dispatchEvent(evt);
    }
}