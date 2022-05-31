import { Component, OnInit } from '@angular/core';
import { <%= classify(featureName) %>FeatureManager } from '../<%= dasherize(featureName) %>.feature-manager';

@Component({
  selector: '<%= dasherize(featureName) %>-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(featureName) %>.<%= dasherize(name) %>.html',
  styleUrls: ['./<%= dasherize(featureName) %>.<%= dasherize(name) %>.<%= styleext %>'],
})
export class <%= classify(featureName) %><%= classify(name) %> implements OnInit {

  constructor(
    private fm: <%= classify(featureName) %>FeatureManager,
  ) { }

  ngOnInit() {}

}
