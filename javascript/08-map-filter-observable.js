const { interval } = require('rxjs');
const { filter, map, take } = require('rxjs/operators');

interval(1000)
  .pipe(
    filter((v) => v % 2 === 0),
    map((v) => v * 2),
    take(3),
  )
  .subscribe((v) => {
    console.log(v);
  });


// Marble Graph (un tiret = 250ms)
// interval(1000)
// ----(0)----(1)----(2)----(3)----(4)---...
// filter((v) => v % 2 === 0)
// ----(0)----   ----(2)----   ----(4)---...
// map((v) => v * 2)
// ----(0)----   ----(4)----   ----(8)---...
// take(3)
// ----(0)----   ----(4)----   ----(8)|