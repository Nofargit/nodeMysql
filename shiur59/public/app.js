document.getElementById('Add').addEventListener('click' , Addnewemp);

function Addnewemp()
{
const emp = createEmp();
const options= {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(emp)
}
fetch('http://localhost:3000/api/Employee', options)
.then( (res) => res.json() )
.then((data)=>
{
    console.log('hi' + data)
   document.getElementById("empId").value = data.insertId;
   sayMessage('msgPanel' , `new employee creted: ${data.insertId}` )
})
.catch((err)=>
{
    document.getElementById('msgPanel').innerHTML = err.message;
})
}

function createEmp()
{
    o = {}
    o.first_name = document.getElementById('first_name').value;
    o.last_name = document.getElementById('last_name').value;
    o.email = document.getElementById('email').value;
    o.password = document.getElementById('password').value;
    return o;
}

function sayMessage(elid , msg)
{
    document.getElementById(elid).innerHTML= "" + msg
    setTimeout( ()=>
    {
        document.getElementById(elid).innerHTML= ''
    },2000)
}