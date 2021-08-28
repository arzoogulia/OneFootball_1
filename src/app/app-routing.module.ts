import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchInputComponent} from './search-input/search-input.component';
import {SearchOutputComponent} from './search-output/search-output.component';

const routes: Routes = [
  {
    path: '',
    component: SearchInputComponent,
  },
  {
    path: 'detail/:list',
    component: SearchOutputComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
