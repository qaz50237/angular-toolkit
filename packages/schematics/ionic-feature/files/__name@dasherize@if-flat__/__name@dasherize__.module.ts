import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { CommonComponentsModule } from '@ktbComponent/common-components.module';

import { PipesModule } from '@ktbPipe/pipes.module';

import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';

import { <%= classify(name) %>FeatureLoader } from './<%= dasherize(name) %>.feature-loader';

import { <%= classify(name) %>FeatureManager } from './<%= dasherize(name) %>.feature-manager';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PipesModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    <%= classify(name) %>RoutingModule
  ],
  declarations: [<%= classify(name) %>FeatureLoader],
  providers:[<%= classify(name) %>FeatureManager]
})
export class <%= classify(name) %>Module {}
