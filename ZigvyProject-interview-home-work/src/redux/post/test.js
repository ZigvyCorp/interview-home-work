// let A = [
//   {
//     id: 1,
//   },
//   {
//     id: 2,
//   },
//   {
//     id: 3,
//   },
// ];
// let B = [
//   {
//     id: 1,
//   },
//   {
//     id: 4,
//   },
// ];
// // let C = B.map((element) => element.id);
// // console.log(C)
// let C = [...A, ...B];
// let D = {}
// C = C.filter((element)=> {
//     if (!element[C.id]) {
//         element[C.id] = true;
//         return true;
//     }
//     return false;
// })
// console.log(C)
const arr = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }, { id: 4 } ];

const uniqueIds = {};
const uniqueArray = arr.filter(obj => {
    if (!uniqueIds[obj.id]) {
        uniqueIds[obj.id] = true;
        return true;
    }
    return false;
});

console.log(uniqueArray); 