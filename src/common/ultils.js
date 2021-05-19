export function debounce(func,delay){
  let timer = null;
  return function (...args) {
    if(timer){
      clearTimeout(timer)
    }
    timer=setTimeout(()=>{
      func()
    },delay)
  }

}
export function TimeFormat(date,format){
  if(typeof date=="string"){
    var mts=date.match(/(\/Date\((\d+)\)\/)/);
    if(mts&&mts.length>=3){
      date=parseInt(mts[2]);
    }
  }
  date=new Date(date);
  if(!date||date.toUTCString()=="Invalid Date"){
    return "";
  }
  var map={
    "M":date.getMonth()+1,
    "d":date.getDate(),
    "h":date.getHours(),
    "m":date.getMinutes(),
    "s":date.getSeconds(),
    "q":Math.floor((date.getMonth()+3)/3),//季度
    "S":date.getMilliseconds()//毫秒
  };
  format=format.replace(/([yMdhmsqS])+/g,function(all,t){
    var v=map[t];
    if(v!==undefined){
      if(all.length>1){
        v="0"+v;
        v=v.substr(v.length-2);
      }
      return v;
    }else if(t==="y"){
      return (date.getFullYear()+"").substr(4-all.length);
    }
    return all;
  });
  return format;
}
//存储localStorage
export const setScore = (name,content)=>{
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name,content)
}
//获取localStorage
export const getScore = name=>{
  if (!name) return
 return  window.localStorage.getItem(name)
}
//移除localStorage
export const removeScore = name=>{
  if (!name) return
  window.localStorage.removeItem(name)
}
