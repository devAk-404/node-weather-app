const express = require('express');
const path = require('path');
const hbs = require('hbs');
const weather = require('./utils/weather');
const geocode = require('./utils/geocode');


const app = express();

const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')
console.log(viewPath)
console.log(partialPath)
app.use(express.static(path.join(__dirname,'../public')))
app.set('view engine','hbs')

app.set('views',viewPath)
hbs.registerPartials(partialPath)
app.get('',(req,res,next)=>
{
    res.render('Home',{title:'Search Weather',name:'Adarsh Kumar'})
})
app.get('/contact',(req,res,next)=>
{
    res.render('Contact')
})
app.get('/about',(req,res,next)=>
{
    res.render('About')
})

app.get('/weather',(req,res,next)=>
{
    const address = req.query.loc;
    console.log(address)

    geocode(address,(error,{longitude,latitude,location})=>
    {
        if(error)
        return res.send({error})
        else
        {
            weather({longitude,latitude,location},(error,weatherResponse)=>
            {
                if(error)
                res.send({error})
                else
                {
                    res.send({weatherResponse});                
                }
            })
        }
    })
    
})




app.listen(8080);

