import { LightningElement, api } from 'lwc';

export default class CaseListviewDatatable extends LightningElement {

    @api casesList;
    @api columns;
}