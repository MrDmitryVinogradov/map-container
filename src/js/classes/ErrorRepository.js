export default class ErrorRepository {
  constructor(errors) {
    this.errors = new Map;
    for (let error of errors) {
      this.errors.set(error[0], error[1]);
    }
  }
  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
  }
  else {
    return 'Unknown error'
  }
}

}