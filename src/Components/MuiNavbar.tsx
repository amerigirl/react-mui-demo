import React from 'react'
import { AppBar, Toolbar, IconButton, Typography} from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'

const MuiNavbar = () => {
  return (
<AppBar position='static'>
    <Toolbar>
    <IconButton size='large' edge="start" color='inherit' aria-label="logo">
        <CatchingPokemon />
    </IconButton>
    <Typography variant='h6' component='div'>PokemonApp</Typography>
    </Toolbar>
</AppBar>
  )
}

export default MuiNavbar
