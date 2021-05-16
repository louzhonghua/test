import {request} from "@/network/request";

export function homeRequset1(){
  return request({
    url:'/home/multidata'
  })
}
export function homeData(type,page){
  return request({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}
