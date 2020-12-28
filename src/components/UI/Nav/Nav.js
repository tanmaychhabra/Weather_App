import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import './Nav.css'

function Nav() {
    return (
        <div>
        <nav>
            {/* <AppBar className = 'Appbar'>
        <Typography variant = "h6" className = 'app-content'>Current Weather</Typography>
        <Typography variant = "h6" className = 'app-content'>Added Cities</Typography>
      </AppBar> */}
      <h3>Weather</h3>
      <ul className = 'nav-links'>
      <li><h3>Current Weather</h3></li>
      <li><h3>Added Cities</h3></li>
      </ul>
        </nav>
        <br />
        </div>
    )
}

export default Nav
