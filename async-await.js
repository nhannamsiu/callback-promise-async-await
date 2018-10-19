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

//with catch block
async function main(){
  let name
  let password
  try{
    name = await getNameAPI()
  } catch(e){}

  try{
    password = await getPasswordAPI(name)
  } catch(e){}
  console.log(name,password)
}

//without catch block, not recommend
async function main1(){
  let name = await getNameAPI()
  let password = await getPasswordAPI(name)
  console.log(name,password)
}

main()
//main1()


/*
So the promise looks better, but we are coding repeative lines (boilerplate code)
and it still takes many lines to complete the function.
javascript evolves and comes up with async/await
Await will pause the execution of the function until it gets the result from that function

Rules:
We can only use await on a function that returns promise
we can only use await inside an async function

So instead of then().catch(), we have try{} catch(e){}
And the syntax is much better, it's readable and familiar to most languages.

Without the catch block, it is shorter and cleaner, but will crash
or throw warning/error when the "killer case" happens.
*/
