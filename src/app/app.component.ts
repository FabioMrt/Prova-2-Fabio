import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { runInThisContext } from 'vm';
import { ReqService } from './req.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Angular Form";
  angForm: FormGroup;
  bills = [];

  constructor(private fb: FormBuilder, private req: ReqService) {
    this.createForm();
  }

  ngOnInit() {
    this.getBills();
  }

  submit() {
    if (this.angForm.valid)
      this.req.newBills(this.angForm.value).subscribe((res) => {
        console.log(res);
      });
  }

  getBills() {
    this.req.selectBills().subscribe((res: any) => {
      console.log(res);
      this.bills = res;
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      amount: ["", Validators.required],
      product: ["", Validators.required],
      paymentMethod: ["", Validators.required],
      customer: ["", Validators.required],
    });
  }
}
