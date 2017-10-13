export class CounterService {

  activeToInactive = 0
  inactiveToActive = 0;

  onactiveToInactive() {
    this.activeToInactive++;
    console.log("Active to Inactive: " + this.activeToInactive);

  }

  onInactiveToActive() {
    this.inactiveToActive++;
    console.log("Inactive to Active: " + this.inactiveToActive);
  }
}
