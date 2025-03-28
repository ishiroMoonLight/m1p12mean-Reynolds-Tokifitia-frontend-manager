import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AccueilComponent } from 'app/garage/accueil/accueil.component';
import { ReparationComponent } from 'app/garage/reparation/reparation.component';
import { EditReparationComponent } from 'app/garage/reparation/edit-reparation/edit-reparation.component';
import { InfosComponent } from 'app/employee/infos/infos.component';
import { EditInfoComponent } from 'app/employee/infos/edit-info/edit-info.component';
import { PiecesComponent } from 'app/garage/pieces/pieces.component';
import { AffectPieceComponent } from 'app/garage/pieces/affect-piece/affect-piece.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'reparations', component: ReparationComponent },
    { path: 'reparations/edit/:id', component: EditReparationComponent },
    { path: 'employee', component: InfosComponent},
    { path: 'employee/edit/:id', component: EditInfoComponent},
    { path: 'pieces', component: PiecesComponent },
    { path: 'pieces/affect-reparation/:id', component: AffectPieceComponent },
];
