import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContestSubmission } from './contest';

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
  constructor() {}

  public contestForm: FormGroup;

  public hasError = (controlName: string, errorName: string) => {
    return this.contestForm.controls[controlName].hasError(errorName);
  };

  /**
   * submitForm(contestForm.value)  */
  public submitForm(contestFormvalue) {
    if (this.contestForm.valid) {
      this.postForm(contestFormvalue);
    }
  }

  private postForm = contestFormvalue => {
    console.log(contestFormvalue);
  };

  ngOnInit() {
    this.contestForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20)
      ]),
      lastName: new FormControl('', [
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
