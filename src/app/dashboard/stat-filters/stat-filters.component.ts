import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss']
})
export class StatFiltersComponent implements OnInit {
  filterForm: FormGroup;
  regionOptions = [
    { displayValue: 'North America', value: 'north america' },
    { displayValue: 'Europe', value: 'europe' },
    { displayValue: 'Asia', value: 'asia' },
  ];
  ageOptions = [
    { displayValue: '10-19', value: 'age1' },
    { displayValue: '20-29', value: 'age2' },
    { displayValue: '30-39', value: 'age3' },
    { displayValue: '40 and over', value: 'age4' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: [''],
      region: ['', Validators.required],
      age1: [''],
      age2: [''],
      age3: [''],
      age4: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.filterForm.value);
  }

  onCancel() {
    this.filterForm.reset();
  }
}
