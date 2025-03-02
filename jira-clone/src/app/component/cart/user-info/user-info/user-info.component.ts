import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  createForm!: FormGroup;
  @Output() userInfo = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required]],
      creditCard: ['', [Validators.required]]
    })
  }

  get firstName() {
    return this.createForm.get('firstName');
  }

  get address() {
    return this.createForm.get('address');
  }

  get creditCard() {
    return this.createForm.get('creditCard');
  }

  obSubmit() {
    this.userInfo.emit(this.createForm.value);
  }

}
