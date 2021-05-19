import {ADD_CART,ADD_COUNT} from './mutation-types'
export default {
  //为了能够跟踪每次state的变化，需要在actions中进行dispatch
  addCart(context,payload) {
    //state是之前购物车的商品，payload是新增加的商品
    //首先查看之前的购物车中的商品中与新添加的商品iid是否相同，如果相同的话代表该商品已经在购物车里面，
    //那么将购物车该商品的数量加一，否则往stata.cartList添加新的商品
    //假如想要在vuex里面知道我们内部商品的状态需要使用promise，然后我们就能够在dispatch中使用then来获取vuex内部的状态
    return new Promise((resolve, reject) => {
      let oldProduct =context.state.cartList.find(item=>
        {return item.iid === payload.iid}
      )
      console.log(oldProduct)
      if (oldProduct) {
        // oldProduct.count += 1;
        resolve('购物车已存在的商品数量加1')
        context.commit(ADD_COUNT,oldProduct)
      }else {
        payload.count = 1;
        payload.checked=true;
        // state.cartList.push(payload)
        resolve('添加了新的商品')
        context.commit(ADD_CART,payload)
      }
    })

  }
}
