import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { JPG, toCamelCase, tousePrimaryImage } from "../../_shared/enums/warriors-constants";
import { WarriorsLegendsDetails } from "../../_shared/models/warriors-legends-models/warriors-legends-models";
import { ANNO_IMAGES_BASE_URL } from "../../_shared/warriors-api-endpoints";

@Injectable({
    providedIn: 'root',
})

export class WarriorsLegendsDetailsService {

    private warriorsDetails = new BehaviorSubject(new WarriorsLegendsDetails());
    public selectedWarriorDetails: any = this.warriorsDetails.asObservable();

    constructor() {
    }

    setLegendToDisplay(legend: any) {
        this.selectedWarriorDetails = this.convertAnyToWarriorsDetails(legend);
    }

    getLegendDisplayDetails(): any {
        return this.selectedWarriorDetails;
    }

    convertAnyToWarriorsDetails(legend: any): any {
        let localWarriorsDetails = new WarriorsLegendsDetails();
        localWarriorsDetails.name = legend.name;
        localWarriorsDetails.kingdom = legend.kingdom;
        localWarriorsDetails.image = this.composeOfficerImageUrl(legend.name, legend.kingdom, true);
        localWarriorsDetails.state = legend.state;
        localWarriorsDetails.weapon = legend.weaponType;
        return this.warriorsDetails.next(localWarriorsDetails);
    }

    private composeOfficerImageUrl(name: string, kingdom: string, isPrimary: boolean): string {
        const primaryText: string = tousePrimaryImage(isPrimary);
        const officerContextPath: string = "Officers/";
        const kindomContext: string = toCamelCase(kingdom);
        const officerName: string = name.replaceAll(" ", "_");
        let url = ANNO_IMAGES_BASE_URL + officerContextPath + kindomContext + "/" + officerName + primaryText + JPG;
        let size = "w=500&h=500";
        return url + "&" + size;
    }

    public resetOfficerImage() {
        this.warriorsDetails.next(new WarriorsLegendsDetails());
    }

}