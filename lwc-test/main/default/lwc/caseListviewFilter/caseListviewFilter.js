import { LightningElement } from 'lwc';

export default class CaseListviewFilter extends LightningElement {

    //Object variable
    btnVariant = {
        allBtn: "brand",
        activeBtn: "neutral",
        inactiveBtn: "neutral"
    };

    handleClick(event){
        let btnId = event.target.dataset.id;

        switch(btnId) {
            case "all":
                
                this.btnVariant = {
                    allBtn: "brand",
                    activeBtn: "neutral",
                    inactiveBtn: "neutral"
                };

                this.filterCases(null);

                break;
            case "active":
                
                this.btnVariant = {
                    allBtn: "neutral",
                    activeBtn: "brand",
                    inactiveBtn: "neutral"
                };

                this.filterCases(true);

                break;
            
            default:
                this.btnVariant = {
                    allBtn: "neutral",
                    activeBtn: "neutral",
                    inactiveBtn: "brand"
                };

                this.filterCases(false);

                break;
        }
    }

    filterCases(state){
        const evt = new CustomEvent('filtercases', { detail: state });
        this.dispatchEvent(evt);
    }
}