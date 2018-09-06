import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableColComponent } from './table-col/table-col.component';
import { FetchDataService } from './services/fetch-data.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search-pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    TableColComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
