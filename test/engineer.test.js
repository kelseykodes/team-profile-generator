const Arithmetic = require("../arithmetic");

describe("Arithmetic", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
      const obj = new Arithmetic();

      expect("number" in obj).toEqual(true);

      // i did this one myself -- test still passed
      // const newKeyword = new Arithmetic();
      // expect('number' in newKeyword).toEqual(true)
    });

    it("should set 'number' when created", () => {
      //original code
      // const numbers = 108;

      // const obj = new Arithmetic(numbers);

      // expect(obj.number).toEqual(numbers);

      const oneNumber = 99
      const newObj = new Arithmetic(oneNumber);
      expect(newObj.number).toEqual(oneNumber);
    });

    it("should default 'number' to 0", () => {
      // original code
      // const obj = new Arithmetic();
      // expect(obj.number).toEqual(0);

      const defaultNum = 0;
      const thisObj = new Arithmetic();
      expect(thisObj.number).toEqual(defaultNum)
    });
  });

  describe("plus", () => {
    it("should return a new 'Arithmetic' object", () => {
      // original code
      // const obj = new Arithmetic(3).plus(3);
      // expect(obj instanceof Arithmetic).toEqual(true);

      const plusObj = new Arithmetic(5).plus(3);
      expect(plusObj instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      // original code
      // const num = 8;
      // const added = 7;
      // const sum = num + added;

      // const { number } = new Arithmetic(num).plus(added);
      // expect(number).toEqual(sum);

        const usingNumber = 2;
        const addingNumber = 6;
        const sumNumber = usingNumber + addingNumber;
        const { number } = new Arithmetic(usingNumber).plus(addingNumber);

        expect(sumNumber).toEqual(number);

    });
  });

  describe("minus", () => {
    it("should return a new 'Arithmetic' object", () => {
      const obj = new Arithmetic(9).minus(4);

      expect(obj instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      const num = 10;
      const subtracted = 17;
      const difference = num - subtracted;

      const { number } = new Arithmetic(num).minus(subtracted);

      expect(number).toEqual(difference);
    });
  });

  describe("value", () => {
    it("should return the 'Arithmetic' object's 'number' value", () => {
      // original code
      // const num = 10;
      // const obj = new Arithmetic(num);

      // const result = obj.value();
      // expect(result).toEqual(num);

     const numberVal = 1;
     const arithmeticObj = new Arithmetic(numberVal)
     const value = arithmeticObj.value();
     expect(value).toEqual(numberVal)
    });
  });
});
