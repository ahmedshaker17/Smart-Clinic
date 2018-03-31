import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { PhysiciansRouterModule } from './physicians-router.module';
import { PhysicianProfileComponent } from './physician-profile/physician-profile.component';
import { TranslateModule } from 'ng2-translate';

@NgModule({
    imports: [CommonModule, PhysiciansRouterModule, TranslateModule],
    declarations: [PhysicianProfileComponent]
})
export class PhysiciansModule {

}