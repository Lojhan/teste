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