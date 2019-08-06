import {add} from './add'

export const total = (shipping, subTotal) => {  // Integration test
  return '$' + add(shipping, subTotal)
}