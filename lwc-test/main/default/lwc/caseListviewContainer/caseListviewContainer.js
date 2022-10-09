import { LightningElement } from 'lwc';

//Service components
import {  getCasesByTypology, caseTypologies, columns } from 'c/utils';

export default class CaseListviewContainer extends LightningElement {

    //Boolean variables
    filterSelected = null;

    //String variables
    typologySelected = "all";

    //Array variables
    casesList = [];
    columns = columns;
    recordTypesList = caseTypologies;

    connectedCallback(){

        this.handleRefreshData(null);
    }

    handleRefreshData(event){
        
        this.typologySelected = (event !== null) ? event.detail :this.typologySelected;

        if(this.typologySelected){
            this.casesList = [];

            if(this.typologySelected === "all"){
                for(var typo in getCasesByTypology("all")){

                    this.buildCasesList(typo, getCasesByTypology("all")[typo]);
                }
            }
            else{

                this.buildCasesList(this.typologySelected, getCasesByTypology(this.typologySelected));
            }
        }
    }

    buildCasesList(recordType, cases){

        for(var cs of cases){

            if(this.filterSelected === null){
                this.casesList = [...this.casesList, this.mapFields(recordType, cs)];
            }
            else{
                if(cs.isActive === this.filterSelected){
                    this.casesList = [...this.casesList, this.mapFields(recordType, cs)];
                }
            }
        }
    }

    mapFields(recordType, cse){
        cse.recordType = recordType;
        cse.accountCompany = cse.account.company;
        cse.accountEmail = cse.account.email;
        cse.accountPhone = cse.account.phone;
        cse.accountAddress = cse.account.address;
        return cse;
    }

    handleFilter(event){
        this.filterSelected = event.detail;

        this.handleRefreshData(null);
    }
}