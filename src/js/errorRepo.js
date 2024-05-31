export default class ErrorRepository {
    constructor() {
      this.errors = new Map([
        ["1", "SyntaxError"],
        ["2", "TypeError"],
        ["3", "ReferenceError"],
        ["4", "AggregateError"],
      ]);
    }
  
    translate(code) {
      if (!this.errors.has(String(code))) {
        return 'Unknown error';
      }
      return this.errors.get(String(code));
    }
  }
