import { Injectable } from '@angular/core';<% if(routePath) { %>
import { ActivatedRoute, Params } from '@angular/router';<% } %>
import { KTBWUFeatures } from "@ktbConstants/ktbwufeatures";
import { KtbFeatureManager } from "@ktbService/ktb-feature-manager";

@Injectable()
export class <%= classify(name) %>FeatureManager extends KtbFeatureManager {<% if(routePath) { %>

  params: Params;<% } %>
  //提供BasePage存取featureId
  get featureId(): string {
    return KTBWUFeatures.<%= classify(name) %>;
  }

  init() {
    console.log('<%= classify(name) %>FeatureManager init');

  }

  reset() {

  }



}
