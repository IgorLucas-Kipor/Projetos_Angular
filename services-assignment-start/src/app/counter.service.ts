export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActive() {
    this.activeToInactiveCounter++;
    console.log("Active to inactive counter: " + this.activeToInactiveCounter)
  }

  incrementInactive() {
    this.inactiveToActiveCounter++;
    console.log("Inactive to Active counter: " + this.inactiveToActiveCounter)
  }

}