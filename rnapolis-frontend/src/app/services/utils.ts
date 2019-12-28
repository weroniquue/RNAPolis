export default class Utils {
  static closeMenu() {
    const el = document.getElementById('close-menu') as HTMLInputElement;
    if (el != null) {
      el.checked = false;
    }
  }
}
