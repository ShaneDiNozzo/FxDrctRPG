class Randoms {
  constructor(minimum, maximum) {
    this.minimum = minimum;
    this.maximum = maximum;
  }
  
  static Half(value) {
    var minimum = 50 / 100 * value;
    return Math.floor(Math.random() * (value - minimum + 1)) + minimum;
  }
  
  static MaxMin(maximum, minimum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
}
