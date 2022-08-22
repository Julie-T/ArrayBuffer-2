export default class ArrayBufferConverter {
  constructor() {
    this.newBuffer = [];
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
    this.newBuffer = new Uint16Array(getBuffer());
    return this.newBuffer;
  }

  toString() {
    const arr = [];
    for (const elem of this.newBuffer) {
      const newelem = String.fromCharCode(elem);
      arr.push(newelem);
    }
    return arr.toString().split(',').join('');
  }
}

const arrayBufferConverter = new ArrayBufferConverter();
arrayBufferConverter.load();

// console.log(arrayBufferConverter.toString());
