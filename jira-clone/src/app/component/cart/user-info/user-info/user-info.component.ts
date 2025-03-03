import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  createForm!: FormGroup;
  submitted = false;
  @Output() userInfo = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required]],
      creditCard: ['', [Validators.required]]
    })
  }

  // sử dụng phương thức getter (get firstName, get address, get creditCard) để truy cập các form control trong FormGroup
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
    // this.createForm.value chứa tất cả dữ liệu của form, bao gồm các trường như firstName, address, và creditCard.
    // Khi gọi .emit(), bạn sẽ truyền dữ liệu này cho component cha, nơi component cha có thể xử lý các dữ liệu đó.
    this.userInfo.emit(this.createForm.value); // phat ra gia tri cua form khi nguoi dung nhan submit
  }

  // thuộc tính dirty được sử dụng để kiểm tra xem người dùng đã thay đổi giá trị của một form control hay chưa
}
