const weather = require('./weather');
const geocode = require('./geocode');

geocode('Boston', (err, { longitude, latitude, location }) => {
    if (err)
        console.log(err)
    else {
        weather({longitude, latitude, location},(err,res)=>
        {
            if(err)
            console.log(err)
            else
            console.log(res)
        })
    }
})