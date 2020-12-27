export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    showWarning: boolean;
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){ 
        this.name = name;
        this.type =  type;
        this.launchDate = launchDate;
        this.orbitType = orbitType
        this.operational = false;
    };
    shouldShowWarning(){
        let satType = this.type.toUpperCase()
        if(satType === "SPACE DEBRIS"){
            return true
        }else{
            return false;
        }; 
    };

    
};


