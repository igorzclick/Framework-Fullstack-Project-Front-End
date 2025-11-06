import { atom } from 'jotai';

export const cartAtom = atom([
  { id: 1, name: 'Camiseta', quantity: 1 },
  { id: 2, name: 'Calça Jeans', quantity: 2 },
  { id: 3, name: 'Tênis', quantity: 0 },
]);

// map of productId to quantity
// [
//     {
//         productId: 1,
//         quantity: 2
//     },
//     {
//         productId: 2,
//         quantity: 1
//     }
// ]
