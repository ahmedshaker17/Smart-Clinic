import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "ng2-translate";


@NgModule({
    declarations: [DropdownDirective],
    exports: [DropdownDirective, CommonModule,TranslateModule]
})
export class SharedModule {
}