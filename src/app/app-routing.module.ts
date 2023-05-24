import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {FeaturesComponent} from "./features/features.component";
import {InputComponent} from "./common/input/input.component";

const routes: Routes = [
  {path: '', component: FeaturesComponent},
  {path: 'input', component: InputComponent},
];

const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
