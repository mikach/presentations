module App {
  export class Hello {
    constructor() {
      console.log('Hello');
    }
  }
}

import { Hello } from App;

new Hello();