// GET REQUEST
function getTodos() {
    //console.log('GET Request');
     axios({
        method:'get',
        url:"https://jsonplaceholder.typicode.com/todos"
        /*params: {
           _limit: 8
        }*/
    })

    /*axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=3")*/
    .then((msg)=>showOutput(msg))
    .catch((err)=>console.log(err))
  }
  
  // POST REQUEST
  function addTodo() {
   // console.log('POST Request');
   /*axios({
    method: 'post',
    url:"https://jsonplaceholder.typicode.com/todos",
    data:{
        title: 'new todo list',
        completed: false
          
    }
   })*/
   axios
    .post("https://jsonplaceholder.typicode.com/todos",{
           title:"new-todos",
           completed: false
          })
   .then((msg)=>showOutput(msg))
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    //console.log('PUT/PATCH Request');
    axios
    .patch("https://jsonplaceholder.typicode.com/todos/1",{
           title:"news-todos",
           completed: true
          })
   .then((msg)=>showOutput(msg))
  }
  
  // DELETE REQUEST
  function removeTodo() {
    //console.log('DELETE Request');
    axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
   .then((msg)=>showOutput(msg))
  
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    //console.log('Simultaneous Request');
    axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    ])
   
    /*.then((msg)=>{
         console.log(msg[0])
         console.log(msg[1])
         showOutput(msg[1])
    })*/
    .then(axios.spread((todos,posts)=>showOutput(posts)))

    .catch((err)=>console.log(err));
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    //console.log('Custom Headers');
    const config={
      headers:{
        'Content-type':'application/json',
        Authorization: 'sometoken'
      }
    }
    axios
    .post("https://jsonplaceholder.typicode.com/todos",{
           title:"new-todos",
           completed: false
          },config)
   .then((msg)=>showOutput(msg))
   .catch((err)=>console.log(err));
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    //console.log('Transform Response');
    const options={
      method:'post',
      url: "https://jsonplaceholder.typicode.com/todos",
      data:{
        title:'hello world'
      },
      transformResponse: axios.defaults.transformResponse.concat(data=>{
        data.title=data.title.toUpperCase();
        return data;
      })
    }
    
    axios(options).then((msg)=>showOutput(msg));
  }
  
  // ERROR HANDLING
  function errorHandling() {
    //console.log('Error Handling');
    axios
    .get("https://jsonplaceholder.typicode.com/todospp")
    .then((msg)=>showOutput(msg))
    .catch(err=>{
      if(err.response)
      {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
  
      if(err.response.status===404)
      {
        alert('Error: Page not found');
      }

     }
    })
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    //console.log('Cancel Token');
    const source = axios.CancelToken.source();

    axios
    .get("https://jsonplaceholder.typicode.com/todos",{
      cancelToken: source.token
    })
    .then((msg)=>showOutput(msg))
    .catch(thrown=>{
      if(axios.isCancel(thrown))
      {
        console.log('Request Canceled',thrown.message)
      }
    })

    if(true)
    {
      source.cancel('Request is Canceled!')
    }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
   axios.interceptors.request.use(
    config=>{
      console.log(
        `${config.method.toUpperCase()} request sent to ${config.url}`
      );
      return config
    },
     error=>{
      return Promise.reject(error)}
   )

  // AXIOS INSTANCES
  const axiosInstance = axios.create({
    baseURL :"https://jsonplaceholder.typicode.com"
  })
  
  axiosInstance.get('/comments').then((msg)=>showOutput(msg));

  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);