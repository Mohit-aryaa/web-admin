import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from '../categories.service';
import { SubCategoriesService } from '../sub-Categories.service';

@Component({
  selector: 'app-sub-Categories',
  templateUrl: './sub-Categories.component.html',
  styleUrls: ['./sub-Categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {


  @ViewChild('content') content:any
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<any>();
  @ViewChild('Paginator') Paginator!: MatPaginator;
  subCategoriesForm:FormGroup;
  selectedCategory: any;
  previewImg: any;
  loading: boolean = false;
  subCategories: any[];
  getCategoriesList :any[];
  tablePaging = {
    offset: 0,
    limit: 5,
    previousSize: 0
  };
  userDataPromise: any;
  constructor(private http: HttpClient, private modalService: NgbModal, private _formBuilder: FormBuilder, private categoriesService: CategoriesService , private subCategoriesService: SubCategoriesService) { }

  displayedColumnsOne: string[] = ['name', 'description', 'action'];
  ngOnInit(): void {
    this.subCategoriesForm = this._formBuilder.group({
      subCategoryName:['', [Validators.required]],
      subCategoryDescription: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })
    this.getCategories();
    this.getData();
  }

  ngAfterViewInit() {
    this.getData()
  }

  getCategories() {
    this.categoriesService.listCategories().subscribe((res:any) => {
      this.getCategoriesList = res.Categories;
    },(errors:any) => {
       console.log(errors)
    })
  }

  getData() {
    this.subCategoriesService.getSubCategories({ params: this.tablePaging }).subscribe((res: any) => {
      //console.log('getdata', res);
      this.loading = false;
      this.subCategories = res.SubCategories;
      console.log('this.users', this.subCategories)
      this.subCategories.length = res.total;
      this.dataSource = new MatTableDataSource<any>(this.subCategories);
      this.dataSource.paginator = this.Paginator;
    })
  }

  getNextData() {
    this.loading = true
    if(this.userDataPromise){
      this.userDataPromise.unsubscribe();
    }
    this.userDataPromise = this.subCategoriesService.getSubCategories({ params: this.tablePaging }).subscribe((response: any) => {
        this.loading = false;
        console.log(response.SubCategories)
        this.subCategories.length = this.tablePaging['previousSize'];
        this.subCategories.push(...response.SubCategories);

        this.subCategories.length = response.total;
        this.dataSource = new MatTableDataSource<any>(this.subCategories);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.Paginator;

      })
  }


  pageChanged(event: any) {
    this.tablePaging['limit'] = event.pageSize;
    this.tablePaging['offset'] = event.pageIndex.toString();
    let pageIndex = event.pageIndex;
    let pageSize = event.pageSize;
    let previousIndex = event.previousPageIndex;
    let previousSize = pageSize * pageIndex;
    this.tablePaging['previousSize'] = previousSize;
    this.getNextData();
    //this.dataTableSize = event.pageSize
  }

  applyCategoryFilter(filterValue: string) {
    console.log('this.tablePaging', this.tablePaging);
    var filterData = filterValue.trim().toLowerCase();
    //this.getNextData();
    this.userDataPromise = this.subCategoriesService.filterSubCategories(filterData).subscribe((res: any) => {
      this.loading = false;
      this.subCategories = res.subCategories;
      console.log('this.Products', this.subCategories)
      this.subCategories.length = res.total;
      this.dataSource = new MatTableDataSource<any>(this.subCategories);
      this.dataSource.paginator = this.Paginator;
    })
  }

  openModal(id = null) {
    this.selectedCategory = id;
    //console.log(data);
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.subCategoriesForm.reset();
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });
  }

  openUpdateModal(data: any) {
    console.log(data);
    this.openModal(data._id);
    this.subCategoriesForm.patchValue(data);
  }

  postData() {
    this.subCategoriesForm.markAllAsTouched();
    if (this.subCategoriesForm.invalid) {
      console.log('this.subCategoriesForm', this.subCategoriesForm.value)
      return false;
    }
    if (this.selectedCategory) {
      this.subCategoriesService.updateSubCategories(this.selectedCategory, this.subCategoriesForm.value).subscribe(
        (results: any) => {
          //console.log(results);
          this.modalService.dismissAll();
          this.subCategoriesForm.reset();
          console.log(this.subCategories.length)
          
          this.getNextData()
          
        },
        errors => {
          console.log(errors);
        }
      )
    } else {
      this.subCategoriesService.addSubCategories(this.subCategoriesForm.value).subscribe(
        (res: any) => {
          console.log(res);
          this.modalService.dismissAll();
          this.subCategoriesForm.reset();
          console.log(this.subCategories.length)
          this.getNextData();
          
        },
        errors => {
          console.log(errors);
        }
      )
    }
  }

  deleteCategory(deleteUser: any) {
    //console.log(delsubsubCategories);
    if (confirm("Are you sure to delete ?")) {
      //console.log("Implement delete functionality here");
      this.subCategoriesService.deleteSubCategories(deleteUser).subscribe(
        (res: any) => {
         this.getNextData()
        }
      )
    }
  }

}
