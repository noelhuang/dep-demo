import { Component } from '@angular/core';
import { CapitalTable } from "../../capital-table/capital-table/capital-table";
import { TemperatureView } from "../../temperature-view/temperature-view/temperature-view";

@Component({
  selector: 'app-capital-page',
  imports: [CapitalTable, TemperatureView],
  templateUrl: './capital-page.html',
  styleUrl: './capital-page.scss'
})
export class CapitalPage {

}
