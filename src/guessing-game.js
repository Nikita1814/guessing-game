class GuessingGame {
    constructor() {
      this.middle = null;
      this.range = null
    }
  
    setRange(min, max) {
      this.range = Array.from(Array(max).keys())
    }
  
    guess() {
     this.middle = Math.round(this.range.length / 2)
     return this.range[this.middle]
    }
  
    lower() {
      this.range = this.range.slice(0, this.middle);
    }
  
    greater() {
      this.range = this.range.slice(this.middle);
    }
  }
  

module.exports = GuessingGame;
