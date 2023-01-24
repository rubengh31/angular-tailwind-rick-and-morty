import { CrudService } from './crud.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Product } from './crud.interface';
import { Observable, first } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudComponent implements OnInit {
  productsForm!: FormGroup;
  products$: Observable<Product[]>;
  productById$: Observable<Product>;

  editing: boolean = false;

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllProducts();

    this.productsForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: [''],
      images: [''],
    });
  }

  getAllProducts(): void {
    this.products$ = this.crudService.getAll();
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

    this.crudService.createProduct(body).pipe(first()).subscribe();
    this.resetForm();
    this.getAllProducts();
    this.cdr.detectChanges();
  }

  loadProductSelected(id: number): void {
    this.editing = true;
    this.productById$ = this.crudService.readProductById(id);

    this.productById$.pipe(first()).subscribe((product: Product) => {
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
    this.crudService.updateProduct(body.id, body).pipe(first()).subscribe();
    this.resetForm();
    this.getAllProducts();
    this.cdr.detectChanges();
  }

  delete(id: number): void {
    if (window.confirm('Are you sure to delete this product?')) {
      this.crudService.deleteProduct(id).pipe(first()).subscribe();
      this.getAllProducts();
      this.cdr.detectChanges();
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
}
