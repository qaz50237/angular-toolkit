import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonComponentsModule } from '@ktbComponent/common-components.module';

import { <%= classify(name) %>PageRoutingModule } from './<%= dasherize(name) %>-routing.module';

import { <%= classify(name) %>FeatureLoader } from './<%= dasherize(name) %>.feature-loader';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    FormsModule,
    IonicModule,
    <%= classify(name) %>RoutingModule
  ],
  declarations: [<%= classify(name) %>FeatureLoader]
})
export class <%= classify(name) %>Module {}
