import { CrudService } from './crud.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Product } from './crud.interface';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudComponent implements OnInit, OnDestroy {
  productsForm!: FormGroup;
  products$: Observable<Product[]>;
  productById$: Observable<Product>;
  private destroy$ = new Subject<void>();
  editing: boolean = false;

  //pagination
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.products$ = this.crudService.getAll();

    this.productsForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: [''],
      images: [''],
    });
  }

  create(): void {
    this.editing = false;

    let body = {
      title: this.productsForm.get('title')?.value,
      price: this.productsForm.get('price')?.value,
      description: this.productsForm.get('description')?.value,
      categoryId: 1,
      images: ['https://placeimg.com/640/480/any'],
    };

    this.crudService
      .createProduct(body)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.products$ = this.crudService.getAll();
        this.cdr.detectChanges();
      });
    this.resetForm();
  }

  loadProductSelected(id: number): void {
    this.editing = true;
    this.productById$ = this.crudService.readProductById(id);

    this.productById$
      .pipe(takeUntil(this.destroy$))
      .subscribe((product: Product) => {
        this.productsForm.patchValue({
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          images: product.images,
        });
      });
  }

  update(body: Product): void {
    this.crudService
      .updateProduct(body.id, body)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.products$ = this.crudService.getAll();
        this.cdr.detectChanges();
      });
    this.resetForm();
  }

  delete(id: number): void {
    if (window.confirm('Are you sure to delete this product?')) {
      this.crudService
        .deleteProduct(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.products$ = this.crudService.getAll();
          this.cdr.detectChanges();
        });
    }
  }

  cancel(): void {
    this.editing = false;
    this.resetForm();
  }

  resetForm(): void {
    this.productsForm.reset();
  }

  trackByFn(item: any): number {
    return item.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  //Pagination
  onTableDataChange(event: any) {
    this.page = event;
    this.products$ = this.crudService.getAll();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.products$ = this.crudService.getAll();
  }
}
