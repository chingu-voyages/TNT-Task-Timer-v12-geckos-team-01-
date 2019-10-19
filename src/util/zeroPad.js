// ZeroPad adds a leading '0' if input is less than 10 and returns it
const ZeroPad = input => `${+input < 10 ? '0' : ''}${input}`;

export default ZeroPad;
