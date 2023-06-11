console.log("person 1 shows tictket");
console.log("person 2 shows tictket");

const preMovie = async()=>{

   const promiseWife  = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('tickets'),2000);
   })

   const getPopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));
   const addbutter = new Promise((resolve,reject)=>resolve(`butter`));
   const getcolddrink = new Promise((resolve,reject)=>resolve(`colddrinks`));

   let ticket = await promiseWife;
   
   console.log(`wife: i have the ${ticket}`);
   console.log("husband: we should go in");
   console.log("wife: no i am hungry");

   let popcorn = await getPopcorn;
   
   console.log(`husband: i got some ${popcorn}`);
   console.log("husband: we should go in");
   console.log("wife: no i need butter on my Popcorn");

   let butter = await addbutter;
   
   console.log(`husband: i got some ${butter} on popcons`);
   console.log("husband: we should go in");
   console.log("wife: no i need coldrinks");

   let coldrinks = await getcolddrink;

   console.log(`husband: i got some ${coldrinks}`);
   console.log("husband: now we should go in");
   console.log("wife: ok");

   return ticket;
}

preMovie().then((msg)=>console.log(`person 3 shows ${msg}`));

console.log("person 4 shows tictket");
console.log("person 5 shows tictket");