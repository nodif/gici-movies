import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const SearchBox: React.FC = props => {
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="movie"
              label="Movie"
              defaultValue="bad"
            />
          </div>
        </Box>
      );
};

export default SearchBox;
