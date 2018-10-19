function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function random(max){
  return Math.floor((Math.random() * max));
}


function doSomethingCallback(a,b,callback) {
  let max = a+b
  let param1 = random(max)
  let param2 = random(max)
  let param3 = random(max)
  callback(param1,param2,param3);
}

function doSomethingPromise(a,b) {
  return new Promise((resolve,reject)=>{
    if (a+b>10){
      let max = a+b
      let param1 = random(max)
      let param2 = random(max)
      let param3 = random(max)
      resolve([param1,param2,param3])
    }
    else{
      reject(['error',404])
    }
  })
}

async function main(){
  try{
    result = await doSomethingPromise(4,7)
    console.log(result)
  } catch(e){
    console.log(e)
  }
}

main()
