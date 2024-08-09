
const x = () => {
    return "oi";
}

const y = () => {
    return "oi";
};

function z() {
    const a = x();
    const b = y();

    return a + b;
}

module.exports = z;

console.log(z());

function teste() {
  const a = 1;
  const b = 2;

  const x = a + b;

  console.log(x);
  console.log("teste");
}


setTimeout(() => {
    teste();
}, 1000);

setInterval(() => {
    teste();
    teste();
}, 1000);
