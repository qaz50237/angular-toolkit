import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { <%= classify(name) %>FeatureLoader } from './<%= dasherize(name) %>.feature-loader';

const routes: Routes = [
  {
    path: '',
    component: <%= classify(name) %>FeatureLoader
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class <%= classify(name) %>RoutingModule {}
