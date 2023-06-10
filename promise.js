function createPost()
{
   return new promise(()=>{
      updateLastUserActivityTime
   })
}

const user={
    username:"Piyush",
    LastUserActivityTime:'10th of june'
}


function updateLastUserActivityTime(){    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.LastUserActivityTime=new Date().getTime();
            resolve(user.LastUserActivityTime)
        },1000)
    }) 
}

function userUpdatespost()
{
    Promise.all([createPost(),updateLastUserActivityTime()])
    .then(([cr,ur])=>{
        console.log(ur)
    })
}