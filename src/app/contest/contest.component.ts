import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContestService } from './contest.service';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule]
})
@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContestComponent implements OnInit {
  constructor(private contestService: ContestService) {}

  public contestForm: FormGroup;

  public hasError = (controlName: string, errorName: string) => {
    return this.contestForm.controls[controlName].hasError(errorName);
  };

  public emailUsed = status => {
    console.log(status, status === 200);
    return status === 200;
  };

  /**
   * submitForm(contestForm.value)  */
  public submitForm(contestFormvalue) {
    if (this.contestForm.valid) {
      this.postForm(contestFormvalue);
    }
  }

  private postForm = contestFormvalue => {
    this.contestService.createSlogan(contestFormvalue).subscribe(res => {
      console.log(res);
    });
  };

  ngOnInit() {
    this.contestForm = new FormGroup({
      first_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20)
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(40)
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      slogan: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ])
    });
  }
}
