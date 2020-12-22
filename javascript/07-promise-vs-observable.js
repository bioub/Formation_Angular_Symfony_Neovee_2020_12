// function timeout(delayMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// timeout(1000)
//   .then(() => console.log('timeout 1s'));

const { Observable } = require("rxjs");

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delayMs);
  });
}

interval(1000)
  .subscribe(() => console.log('interval 1s'));