// zeroPad adds a leading '0' if input is less than 10 and returns it
const zeroPad = input => `${+input < 10 ? '0' : ''}${input}`;

export default zeroPad;
