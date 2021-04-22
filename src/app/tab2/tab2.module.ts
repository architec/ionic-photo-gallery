import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HeaderComponent } from '../components/header/header.component'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [HeaderComponent,Tab2Page]
})
export class Tab2PageModule {
}
