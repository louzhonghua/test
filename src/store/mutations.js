import {ADD_CART,ADD_COUNT} from './mutation-types'
export default {
  [ADD_COUNT](state,payload) {
    payload.count += 1;
  },
  [ADD_CART](state,payload) {
    state.cartList.push(payload)
  }
}
