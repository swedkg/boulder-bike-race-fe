import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContestService } from './contest.service';
import { MatSnackBar } from '@angular/material';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, MatSnackBar]
})
@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContestComponent implements OnInit {
  constructor(
    private contestService: ContestService,
    private snackBar: MatSnackBar
  ) {}

  public contestForm: FormGroup;

  public hasError = (controlName: string, errorName: string) => {
    return this.contestForm.controls[controlName].hasError(errorName);
  };

  public emailUsed = res => {
    let message =
      res.status === 200
        ? res.body.email
        : 'Thank you for participating to our contest!';
    this.snackBar.open(message, '', {
      duration: 3000
    });
    return res === 200;
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

    this.contestService.createSlogan(contestFormvalue).subscribe(res => {
      this.emailUsed(res);
    });
  };

  //         pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"

  ngOnInit() {
    this.contestForm = new FormGroup({
      first_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
        )
      ]),
      slogan: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])
    });
  }
}
