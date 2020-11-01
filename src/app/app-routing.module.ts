import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'features',
    loadChildren: () => import('./features/transaction/transaction.module').then(m => m.TransactionModule),
    // canActivate: [AuthGuard],
    data: { pageTitle: 'Dashboard' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
