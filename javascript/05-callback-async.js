setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// Dans quel ordre s'affichent les lettres ?

// ^
// |                           lg                        lg lg                lg
// |st - st - st - st - lg .↺. => .↺.................... => => .↺............ => .↺.......
// 0---------------------------7ms---------------------------------------------------------->
//                      E      B                         A  D                 C

// file d'attente de callback (0ms) : () => console.log('B')
// file d'attente de callback (7ms) : 
// file d'attente de callback (500ms) : () => console.log('A') - () => console.log('D')
// file d'attente de callback (501ms) : () => console.log('D')
// file d'attente de callback (502ms) : 
// file d'attente de callback (1000ms) : () => console.log('C')
// file d'attente de callback (1001ms) : 

