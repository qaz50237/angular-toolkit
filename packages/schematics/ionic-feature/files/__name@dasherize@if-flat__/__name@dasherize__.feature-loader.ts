import { Component, OnInit } from '@angular/core';<% if(routePath) { %>
import { ActivatedRoute, Params } from '@angular/router';<% } %>

@Component({
  selector: 'feature-loader',
  templateUrl: '../feature-loader.html',
  styleUrls: ['../feature-loader.scss'],
})
export class <%= classify(name) %>FeatureLoader implements OnInit {<% if(routePath) { %>

  params: Params;<% } %>
  isSuccess = false;

  constructor(<% if(routePath) { %>private route: ActivatedRoute<% } %>) { }

  ngOnInit() {<% if(routePath) { %>
    this.params = this.route.snapshot.params;<% } %>
  }

  Start(){
    this.isSuccess = true;
  }

}
