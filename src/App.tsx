import { Box } from '@chakra-ui/react';
import React from 'react';
import HomePage from './Containers/HomePage';


const App= (): JSX.Element => {
  return (
    <Box className="App" py={2}>
      <HomePage /> 
    </Box>
  );
}

export default App;
