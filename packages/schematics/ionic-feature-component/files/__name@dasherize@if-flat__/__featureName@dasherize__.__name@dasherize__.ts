import { Component, OnInit, ViewChild } from '@angular/core';
import { BasePage } from '@ktbComponent/base-page/base-page';
import { <%= classify(featureName) %>FeatureManager } from '../<%= dasherize(featureName) %>.feature-manager';

@Component({
  selector: '<%= dasherize(featureName) %>-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(featureName) %>.<%= dasherize(name) %>.html',
  styleUrls: ['./<%= dasherize(featureName) %>.<%= dasherize(name) %>.<%= styleext %>'],
})
export class <%= classify(featureName) %><%= classify(name) %> implements OnInit {
  @ViewChild(BasePage) basePage: BasePage;

  constructor(
    private fm: <%= classify(featureName) %>FeatureManager,
  ) { }

  ngOnInit() {
    console.log('<%= classify(featureName) %> ngOnInit')
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter')
    this.basePage.FeatureManager = this.fm;
  }

}
