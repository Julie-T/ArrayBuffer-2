export default class ArrayBufferConverter {
  constructor() {
    this.newBuffer = new Uint16Array();
    this.newString = [];
  }

  load() {
    function getBuffer() {
      const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
      return ((input) => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        return buffer;
      })(data);
    }
    this.newBuffer = getBuffer();
    return this.newBuffer;
  }

  toString() {
    for (let i = 0; i < this.newBuffer.length - 1; i += 1) {
      this.newBuffer.forEach((elem) => {
        String.fromCharCode(elem);
      });
    }
    return this.newBuffer;
  }
}

const arrayBufferConverter = new ArrayBufferConverter();
console.log(arrayBufferConverter.load());

console.log(arrayBufferConverter.toString());
