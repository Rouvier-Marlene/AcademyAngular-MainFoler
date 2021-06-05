import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Reactive Forms';
  projectForm: FormGroup;
  //forbiddenName = 'Test';

  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbiddenProjectName),
      //'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable'),
    });
  }

  //forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
  //  if (this.forbiddenName.indexOf(control.value) !==1) {
  //    return {'projectnameIsForbidden': true};
  //  }
  //  return null;
  //}

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
 const promise = new Promise<any>((resolve, reject) => {
  setTimeout(() => {
    if (control.value === 'Test') {
      resolve ({'projectnameIsForbidden': true});
      } else {
        resolve(null);
      }
    }, 2000);
  });
  return promise;
 }

  onSaveProject() {
    //console.log(this.projectForm);
    console.log(this.projectForm. value);
  }
  
}
