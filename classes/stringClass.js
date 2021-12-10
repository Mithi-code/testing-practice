 export default class Stringtest  {
    constructor (stringValue){
       this.string = stringValue
    }
    stringReverse(){
        return this.string.split('').reverse().join('')
    }
    stringLength() {
        const length = this.string.length;
        const error = 'invalid string length'
        if (length < 1) throw error
        if (length > 10) throw error
        return length;
    }

   stringcapitalize(){
        const initial = this.string.toLowerCase();
        const firstCap = initial[0].toUpperCase();
        return firstCap + this.string.slice(1);
      };
      

}


