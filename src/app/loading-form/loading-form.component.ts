import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { LoaderService } from './../../services/loader.service';

@Component({
  selector: 'app-loading-form',
  templateUrl: './loading-form.component.html',
  styleUrls: ['./loading-form.component.css']
})
export class LoadingFormComponent {

  	public loaderForm: FormGroup;
	public minValue: Number = 0;
	public maxValue: Number = 100;
	public selectedValue: Number;
	public checked: Boolean;
	constructor(public builder: FormBuilder, public router: Router, public loader: LoaderService){
		this.loaderForm = builder.group({
			'SELECT_TIME': [null, Validators.compose([Validators.required])],
			'TIME_RANGE': [null, Validators.compose([Validators.required])]
		});
	}

	selectedTime(event){
		let range = event.target.value;
		let rangeArray = range.split('-');
		console.log(rangeArray);
		this.minValue = rangeArray[0];
		this.maxValue = rangeArray[1];
	}

	rangeValue(event){
		console.log(event.target.value);
		this.selectedValue = event.target.value * 1000;
	}

	selectToggle(event){
		console.log(event.target.checked);
		this.checked = event.target.checked;
	}

	loadComponent(){
		console.log(this.checked, this.selectedValue);
		let loadingTime = this.minValue * 1000;
		if(this.checked){
			this.loader.show();
			setTimeout(() => {
				this.router.navigateByUrl('landing');
			}, this.selectedValue);
		}else{
			this.loader.show();
			setTimeout(() => {
				this.router.navigateByUrl('landing');
			}, loadingTime);
		}
	}

}
