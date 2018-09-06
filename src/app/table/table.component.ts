import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FetchDataService } from "../services/fetch-data.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  characters;
  tableChoosed = false;
  columns: string[];
  
  
  data = [
    // [
    //   {
    //     id: 1,
    //     name: "Aneri Vala",
    //     token: "rti949375345",
    //     accnum: "xyzu45435"
    //   }
    // ],
    // [
    //   {
    //     id: 2,
    //     name: "Aneri patel",
    //     token: "rytiyeirt5345",
    //     accnum: "y4343534"
    //   }
    // ],
    // [
    //   {
    //     id: 3,
    //     name: "Aneri Shukla",
    //     token: "rti94ewr795",
    //     accnum: "dsfdeiur"
    //   }
    // ],
    // [{
    //   id: 3,
    //   name: "Aneri Shukla",
    //   token: "rti94ewr795",
    //   accnum: "dsfdeiur"
    // }],
    // [{
    //   id: 3,
    //   name: "Aneri Shukla",
    //   token: "rti94ewr795",
    //   accnum: "dsfdeiur"
    // }]
  ];
  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit() {
    this.columns = this.fetchDataService.getColumns();
    this.fetchDataService.getCharacters().subscribe(data => {
      this.characters = data;
    });
  }
  addColumn(row) {
    this.data.forEach(item => {
      item.push({
        id: 3,
        name: "Aneri Shukla",
        token: "rti94ewr795",
        accnum: "dsfdeiur"
      });
    });
  }
  removeColumn(index) {
    this.data.forEach(item => {
      item.splice(index, 1);
      if (item.length === 0) {
        this.data = [];
      }
    });
  }
  removeRow(index) {
    this.data.splice(index, 1);
    // if no rows left in the array create a blank array
    // if (this.data.length() === 0) {
    //   this.data = [];
    // }
  }

  addRow() {
    this.tableChoosed = true;
    // create a blank array
    var newrow = [];

    // if array is blank add a standard item
    if (this.data.length === 0) {
      newrow = [
        {
          id: 3,
          name: "Aneri Shukla",
          token: "tyju7t",
          accnum: "dsfdeiur"
        }
      ];
    } else {
      // else cycle thru the first row's columns
      // and add the same number of items
      this.data[0].forEach(function(row) {
        newrow.push({
          id: 3,
          name: "Aneri Shukla",
          token: "ffht",
          accnum: "dsfdeiur"
        });
      });
    }
    // add the new row at the end of the array
    this.data.push(newrow);
  }
  addCell(val){
    console.log(this.characters.filter(item => item.name.indexOf(val) !== -1)) ;
  }
}
