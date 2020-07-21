
export default function ajax (type,url,data=null) {
  let	xhr = new XMLHttpRequest();
  xhr.open(type,url);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xhr.send(JSON.stringify(data));
  return new Promise((resolve, reject)=>{
    xhr.onreadystatechange = function(){
      if( xhr.readyState===4 ){
        if(xhr.status===200 || xhr.status===304){
          let msg = JSON.parse(xhr.responseText);
          resolve(msg);
        }else{
          reject("失败了")
        }
      }
    }
  })
}
