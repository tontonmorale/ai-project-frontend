import { NgModule } from '@angular/core';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatTabsModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
})
export class MaterialModule { }