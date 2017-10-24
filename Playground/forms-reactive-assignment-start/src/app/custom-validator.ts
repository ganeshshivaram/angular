import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

export class CustomValidator {
  static nameValidator(control: FormControl): { [str: string]: boolean } {
    if (control.value === 'test') {
      return {'isProjectNameInvalid': true};
    } else {
      return null;
    }
  }

  static asyncNameValidator(control: FormControl): Observable<any> | Promise<any> {
    const prmse = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test123') {
          resolve({'isProjectNameInvalid': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return prmse;
  }

}
