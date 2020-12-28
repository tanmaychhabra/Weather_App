import React from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import './Button.css'
import Favourites from './Favourites'
//import {TempProvider} from '../../Context/Context'

function ButtonDisplay(props) {
    
    return (
        // <TempProvider mainTemp = {temp} minTemp = {minTemp} maxTemp = {maxTemp}>
        <React.Fragment>
          <Button variant = 'contained' color = 'secondary' onClick = {props.clicked}>SEARCH</Button>

            {props.buttonPress ?
            
        <div>
            <Card variant = 'outlined' className = "card">
                <CardHeader title = {props.city} subheader = {Date()} >
                 </CardHeader>
              <CardContent>
                <Typography colour = 'text-secondary' variant = 'body1'>
            <h1 className = 'temp_main'> {props.temp}&#176;<sup>c</sup></h1>
            <img src = {"https://openweathermap.org/img/wn/"+props.iconId+"@2x.png"} />
            <b className = 'desc'>{props.description}</b>
            <br />
            <h2 className = 'temp_min'>Today:{props.minTemp}&#176;<sup>c</sup>/{props.maxTemp}&#176;<sup>c</sup></h2>


            <Favourites city = {props.city} APP_ID = {props.APP_ID} mainTemp = {props.temp}/>
            
            {/* <h2 className = 'temp_max'>Maximum:{maxTemp}&#176;<sup>c</sup></h2> */}
            
            
            </Typography>
            </CardContent>
            </Card>
        </div> : null
            }

        </React.Fragment>
        //</TempProvider>
    )
}

export default ButtonDisplay
