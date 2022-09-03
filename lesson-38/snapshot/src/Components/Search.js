import React from 'react';
import { Button, TextField } from '@mui/material';

function Search() {
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Search</Button>
    </div>
  )
}

export default Search
