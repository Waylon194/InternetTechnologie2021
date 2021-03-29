import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormSubmissionsService } from '../services/form-submissions.service';
import { BankService } from '../services/bank-service.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})

export class UserInputComponent implements OnInit {
  inputForm = new FormGroup({
    zender: new FormControl(''),
    ontvanger: new FormControl(''),
    bedrag: new FormControl(''),
  });

  constructor(public bankService: BankService, public formSubmissionsService: FormSubmissionsService) { }

  onSubmit(): void {
    if(this.bankService.betaal(this.inputForm.value.zender, this.inputForm.value.ontvanger, this.inputForm.value.bedrag)){
      this.formSubmissionsService.addPaymentLog(this.inputForm.value.zender, this.inputForm.value.ontvanger, this.inputForm.value.bedrag);
    }
    else {
      this.formSubmissionsService.addToLog(this.inputForm.value.zender, this.inputForm.value.ontvanger, this.inputForm.value.bedrag);
    }
    console.warn(this.inputForm.value);
  }

  //Reset knop voor de form
  onReset(): void {
    this.inputForm.reset();
  }

  ngOnInit(): void {

  }
}