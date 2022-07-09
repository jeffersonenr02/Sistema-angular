import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';

//modulo de HTTP
import { HttpClientModule } from "@angular/common/http";

// Este modulo se exporta de acá para el funcionamiento
// del componente crear-usuario
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        MatGridListModule,
        MatSelectModule,

        //modulo http
        HttpClientModule
    ],

    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        MatGridListModule,
        MatSelectModule,
        
        //modulo para el funcionamiento de crear-usuario
        ReactiveFormsModule,
        //modulo http
        HttpClientModule
    ]
})

export class MaterialModule{}