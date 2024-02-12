// parse data into an uncrompressed form
// for example we're going to take 1b2o1k and were going to expand it into 
// book.

//solution 
// const uncompress = (s) => {
//     let result = [];
//     const numbers = '0123456789';
//     let i = 0;
//     let j = 0;
//     while (j < s.length) {
//       if (numbers.includes(s[j])) {
//         j += 1;
//       } else {
//         const num = Number(s.slice(i, j));
//         for (let count = 0; count < num; count += 1) {
//           result.push(s[j]);
//         }
//         j += 1;
//         i = j;
//       }
//     }
//     return result.join('');
//   };

// uncompress("2c3a1t"); // -> 'ccaaat'
// uncompress("4s2b"); // -> 'ssssbb'
// uncompress("2p1o5p"); // -> 'ppoppppp'
// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
// uncompress("127y"); 