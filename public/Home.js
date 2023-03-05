
const form = document.getElementById('form');

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    console.log('rendered');
    const p1 =  document.getElementById('result');
    const location = document.getElementById('location').value.trim();
    fetch(`http://localhost:8080/weather?loc=${location}`).then(res=>
    {
        res.json().then(({error,weatherResponse})=>
            {
                
                if(error)
                p1.innerHTML = error;
                else
                p1.innerHTML = weatherResponse;
            });
    })
    
   
    


})













