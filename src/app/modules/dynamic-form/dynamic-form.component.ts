import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  orderForm!: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([this.createItem()]),
    });
  }

  get arrayFormData() {
    return <FormArray>this.orderForm.get('items');
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: '',
    });
  }

  addItem(e: any): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  deleteItemLine(e: any, i: any): void {
    e.preventDefault();
    this.items = this.orderForm.get('items') as FormArray;
    console.log(this.items);
    this.items.removeAt(i);
  }

  submitForm(data: any) {
    //event.preventDefault();
    console.log(data);
  }

  getTotalPrice(): any {
    this.items = this.orderForm.get('items') as FormArray;
    let items = this.items.value;
    let total = 0;
    for (let item of items) {
      total += parseFloat(item.price);
    }
    if (!isNaN(total)) {
      return total.toFixed(2);
    }
  }
}
