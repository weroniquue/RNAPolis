import {FormControl} from '@angular/forms';

export default class Utils {
  static closeMenu() {
    const el = document.getElementById('close-menu') as HTMLInputElement;
    if (el != null) {
      el.checked = false;
    }
  }

  static noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {whitespace: true};
  }
}
