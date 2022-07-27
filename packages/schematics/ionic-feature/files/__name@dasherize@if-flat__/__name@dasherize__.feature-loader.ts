import { Component, OnInit } from '@angular/core';<% if(routePath) { %>
import { ActivatedRoute, Params } from '@angular/router';<% } %>
import { ContentService } from '@ktbService/content.service';
import { <%= classify(name) %>FeatureManager } from './<%= dasherize(name) %>.feature-manager';

@Component({
  selector: 'feature-loader',
  templateUrl: '../feature-loader.html',
  styleUrls: ['../feature-loader.scss'],
})
export class <%= classify(name) %>FeatureLoader implements OnInit {<% if(routePath) { %>

  params: Params;<% } %>
  isSuccess = false;

  constructor(
    private fm: <%= classify(name) %>FeatureManager,
    private contentService: ContentService,
    <% if(routePath) { %>private route: ActivatedRoute<% } %>
  ) { }

  ngOnInit() {
    console.log('<%= classify(name) %>FeatureLoader ngOnInit');
    this.fm.initFeatureRouteHistory(this.contentService.featureParam);
    <% if(routePath) { %>
    this.params = this.route.snapshot.params;<% } %>

    setTimeout(()=>{this.Start()},1000);
  }

  Start(){
    this.isSuccess = true;
  }

}
