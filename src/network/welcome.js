import {request_1} from "@/network/requset_1";

//获取城市列表
export function cityGuess(type) {
  return request_1({
    method:'get',
    url:'/v1/cities',
    params:{
      type:type
    }
  })
}
//获取所选城市信息
export function cityInfo(id) {
  return request_1({
    method:'get',
    url:'/v1/cities/'+id
  })
}
//搜索地址
export function searchAddress(cityid,keyword) {
  return request_1({
    method:'get',
    url:'/v1/pois',
    params:{
      city_id:cityid,
      keyword:keyword
    }
  })
}

