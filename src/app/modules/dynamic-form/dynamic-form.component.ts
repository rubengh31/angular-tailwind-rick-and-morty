import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  form!: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      items: this.formBuilder.array([this.createItem()]),
    });
  }

  get arrayFormData() {
    return <FormArray>this.form.get('items');
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: '',
    });
  }

  addItem(): void {
    this.items = this.form.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  deleteItemLine(i: any): void {
    this.items = this.form.get('items') as FormArray;
    this.items.removeAt(i);
  }

  submitForm(data: any) {
    console.log(data);
  }
}
