import React, {useState,useEffect} from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

function Favourites(props) {

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${props.APP_ID}&units=imperial')
        .then(response => {
            console.log(response.data)
        })
    },[props.city])

    
    return (
        <div>
            <h1>Hello Favourites</h1>
            {
                props.cityAdded ? 
                    <ul>
                        {
                    props.favouriteCity.map((fav) => {
                        //console.log(fav);
                        <li>{fav}</li>
                        
                    })
                }
                    </ul>
                : null
            }
        </div>
    )
}

export default Favourites
