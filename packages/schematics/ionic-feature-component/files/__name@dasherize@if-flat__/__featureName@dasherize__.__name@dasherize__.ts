import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(featureName) %>.<%= dasherize(name) %>.html',
  styleUrls: ['./<%= dasherize(featureName) %>.<%= dasherize(name) %>.<%= styleext %>'],
})
export class <%= classify(featureName) %><%= classify(name) %> implements OnInit {

  constructor() { }

  ngOnInit() {}

}
