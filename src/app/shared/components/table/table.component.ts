import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() name: string;
  @Input('tableColumns') tableCols: string[] = [];
  @Input() tableData: {}[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  tableDataSrc: any;
  searchForm: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.tableDataSrc = new MatTableDataSource(this.tableData);
    this.tableDataSrc.sort = this.sort;
    this.tableDataSrc.paginator = this.paginator;
  }

  trackByFn(_index: number, item: any) {
    return item.id;
  }

  filterSearch(event: any) {
    this.tableDataSrc.filter = event;
  }

  redirect(id: any) {
    const url = `${this.name.toLowerCase()}/${id}`;
    this.router.navigateByUrl(`/${url}`);
  }
}
