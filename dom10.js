<html>
<body>
    <form onsubmit="save(event)">
        <label>Name</label>
        <input type="text" name="username" required/>
        <label>EmailID</label>
        <input type="email" name="emailid" required/>
        <button>Submit</button>
    </form>
    <script>
        function save(event)
        {
            event.preventDefault();
            const name =event.target.username.value;
            const email=event.target.emailid.value;
            
            const obj={
                 name,
                 email
            }
             localStorage.setItem('userDetails',JSON.stringify(obj));
           
        }
    </script>
</body>
</html>