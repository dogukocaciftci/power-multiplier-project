import React from 'react';

import BaseContainer from './src/BaseContainer';
import Box from "@mui/material/Box";
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <Box m={1}>
          <BaseContainer />
        </Box>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
