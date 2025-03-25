import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { AccueilComponent } from 'app/garage/accueil/accueil.component';
import { ReparationComponent } from 'app/garage/reparation/reparation.component';
import { ListReparationComponent } from 'app/garage/reparation/list-reparation/list-reparation.component';
import { CreateReparationComponent } from 'app/garage/reparation/create-reparation/create-reparation.component';
import { EditReparationComponent } from 'app/garage/reparation/edit-reparation/edit-reparation.component';
import { PiecesComponent } from 'app/garage/pieces/pieces.component';
import { CreatePieceComponent } from 'app/garage/pieces/create-piece/create-piece.component';
import { ListPieceComponent } from 'app/garage/pieces/list-piece/list-piece.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AccueilComponent,
    ReparationComponent,
    ListReparationComponent,
    CreateReparationComponent,
    EditReparationComponent,
    PiecesComponent,
    CreatePieceComponent,
    ListPieceComponent,
  ]
})

export class AdminLayoutModule { }
