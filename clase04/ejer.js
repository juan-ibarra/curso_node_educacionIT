let contador = 123;

let refTimer = setInterval(function () {
  let obj = { contador: contador++, fyh: new Date().toLocaleString() };
  console.log(obj);
}, 2000);

setTimeout(function () {
  clearInterval(refTimer);
}, 20000);

process.on("exit", function () {
  console.log("chau!!!");
});
