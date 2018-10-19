function random(max){
  return Math.floor((Math.random() * max));
}

function getNameAPI(){
  return new Promise((resolve,reject) => {
    if (random(2)==1){
      return setTimeout(()=>{resolve('Carl')},1000)
    }
    return setTimeout(()=>{reject('function failed')},2000)
  })
}

function getPasswordAPI(name){
  return new Promise((resolve,reject) => {
    if (name=='Carl'){
      return setTimeout(()=>{resolve('handsomeCarl')},1000)
    }
    return setTimeout(()=>{reject('function failed')},2000)
  })
}

//single promise call
getNameAPI()
.then((result)=>{
  console.log('single call: ',result)
})
.catch((error) => {
  console.log(error)
})

//promise chain
getNameAPI()
//of getNameAPI
.then(result=>{
  return getPasswordAPI(result)
})
.catch((error) => {
  console.log(error)
})
//of getPasswordAPI
.then(result=>{
  console.log('chain calls: ',result)
})
.catch((error) => {
  console.log(error)
})
/*
If we use  callback inside callback for too much time, we are creating
a callback hell. Which means it is really hard to read and maintain.
So javascript evolves and creates Promise.

You can make a function return a promise with this syntax:
function foo(){
  return new Promise((resolve,reject) => {
    ....
  })
}

to return actually value for each case resolve, reject. we can put in
value we want to return like:
resolve(3)
resolve(3,1,'aaaa',{id: 'aaa',password: 'bbb'})
resolve(3,5)
resolve() or resolve

Same with reject()

So now if we want to use a function that returns a promise we do:
foo()
.then(data=>{
  ...
})
catch(error=>{
  ...
})
data is the thing you put inside resolve()
error is the thing you put inside reject()

the catch block is not mandatory, but we should have it


So for the above code
The getNameAPI() single call will wait until the function resolves to start
execute the "then" block.

the chain calls will wait until the getNameAPI() returns, then use the name
to make another password query getPasswordAPI()
*/
