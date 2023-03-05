const request = require('postman-request');

const geocode = (location,callback) => 
{
    const GEO_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?limit=1&access_token=pk.eyJ1Ijoia3VtYS1hZCIsImEiOiJjbGV2YzEyaXYwN3g0M3dqZG9xdWxneDZ0In0.PCoTwcU5K7deaQ0Vn-GvMg' 

    request({url:GEO_URL,json:true},(error,response)=>
    {
        if(error)
        callback('geocode services not available',undefined)
        else if(response.body.features.length==0)
        callback('Invalid location. Try Another search!',undefined)
        else
        callback(undefined,{
            longitude:response.body.features[0].center[0],
            latitude:response.body.features[0].center[1],
            location:response.body.features[0].place_name
        });
    })
}

module.exports = geocode;