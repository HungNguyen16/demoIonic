import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'recharge-card',
    loadChildren: () => import('./pages/recharge-card/recharge-card.module').then( m => m.RechargeCardPageModule)
  },
  {
    path: 'utilities',
    loadChildren: () => import('./pages/utilities/utilities.module').then( m => m.UtilitiesPageModule)
  },
  {
    path: 'itel-game',
    loadChildren: () => import('./pages/itel-game/itel-game.module').then( m => m.ItelGamePageModule)
  },
  {
    path: 'itel-cinema',
    loadChildren: () => import('./pages/itel-cinema/itel-cinema.module').then( m => m.ItelCinemaPageModule)
  },
  {
    path: 'itel-sport',
    loadChildren: () => import('./pages/itel-sport/itel-sport.module').then( m => m.ItelSportPageModule)
  },
  {
    path: 'itel-music',
    loadChildren: () => import('./pages/itel-music/itel-music.module').then( m => m.ItelMusicPageModule)
  },
  {
    path: 'postage',
    loadChildren: () => import('./pages/postage/postage.module').then( m => m.PostagePageModule)
  },
  {
    path: 'payment-history',
    loadChildren: () => import('./pages/payment-history/payment-history.module').then( m => m.PaymentHistoryPageModule)
  },
  {
    path: 'register-history',
    loadChildren: () => import('./pages/register-history/register-history.module').then( m => m.RegisterHistoryPageModule)
  },
  {
    path: 'support-center',
    loadChildren: () => import('./pages/support-center/support-center.module').then( m => m.SupportCenterPageModule)
  },
  {
    path: 'application-rating',
    loadChildren: () => import('./pages/application-rating/application-rating.module').then( m => m.ApplicationRatingPageModule)
  },
  {
    path: 'log-out',
    loadChildren: () => import('./pages/log-out/log-out.module').then( m => m.LogOutPageModule)
  },
  {
    path: 'packs',
    loadChildren: () => import('./pages/packs/packs.module').then( m => m.PacksPageModule)
  },
  {
    path: 'promotions',
    loadChildren: () => import('./pages/promotions/promotions.module').then( m => m.PromotionsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
