import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpanConflictTestComponent } from "./span-conflict-test/span-conflict-test.component";

const routes: Routes = [
  { path: 'span-conflict', component: SpanConflictTestComponent },
  { path: '', redirectTo: '/span-conflict', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
