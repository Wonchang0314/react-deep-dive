interface BasicSyntheticEvent {
  isPropagationStopped: boolean;
}

class SyntheticEvent implements BasicSyntheticEvent {
  isPropagationStopped: boolean;
  constructor(public nativeEvent: Event) {
    this.isPropagationStopped = false;
  }

  stopPropagation() {
    this.isPropagationStopped = true;
  }

  preventDefault() {
    this.nativeEvent.preventDefault();
  }
}

export { SyntheticEvent };
