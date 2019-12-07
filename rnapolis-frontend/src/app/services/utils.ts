export default class Utils {
  static closeMenu() {
    const el = document.getElementById('close-menu') as HTMLInputElement;;
    el.checked = false;
  }
}
