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
    },[])

    let [favouriteCity, setFavouriteCity] = useState([])
    const [cityAdded, setCityAdded] = useState(false)

    const handleFavourites = () => {
        if(props.mainTemp!==''){
            const updatedFavouriteCity = favouriteCity.push(props.city)
            setCityAdded(true)
            setFavouriteCity(...favouriteCity,updatedFavouriteCity)
            console.log(favouriteCity)
        }
    }
    return (
        <div>
            <Button variant = 'contained' color = 'primary' onClick = {handleFavourites}>ADD TO FAVOURITES</Button>
            {/* {
                cityAdded ? 
                    <ul>
                        {
                    favouriteCity.map((fav) => {
                        //console.log(fav);
                        <li>{fav}</li>
                        
                    })
                }
                    </ul>
                : null
            } */}
        </div>
    )
}

export default Favourites
