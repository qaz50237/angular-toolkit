import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from '@ktbService/auth.service';

const routes: Routes = [
  {
    path: 'home',
    // canActivate: [AuthService],
    loadChildren: () => import('./features/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user-profile',
    canActivate: [AuthService],
    loadChildren: () => import('./features/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./features/transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'sample',
    loadChildren: () => import('./features/sample/sample.module').then( m => m.SamplePageModule)
  },
  {
    path: 'redirect',
    loadChildren: () => import('./features/redirect-feature/redirect-feature.module').then( m => m.RedirectFeaturePageModule)
  },
  {
    path: 'sample-route',
    loadChildren: () => import('./features/sample-route/sample-route.module').then( m => m.SampleRoutePageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./features/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'test',
    loadChildren: () => import('./features/test/test.module').then( m => m.TestModule)
  },
  {
    path: 'native-bridge-demo',
    loadChildren: () => import('./features/native-bridge-demo/native-bridge-demo.module').then( m => m.NativeBridgeDemoModule)
  },
  {
    path: 'ttttt',
    loadChildren: () => import('./ttttt/ttttt.module').then( m => m.TttttPageModule)
  },
  {
    path: 'native-bridge-demo',
    loadChildren: () => import('./features/native-bridge-demo/native-bridge-demo.module').then( m => m.NativeBridgeDemoModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
