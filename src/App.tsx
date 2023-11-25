import { Box, SxProps, type Theme as ThemeType } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Events from './components/Events';
import Theme from './theme/theme';
import React from 'react';

const RootBoxStyles: SxProps<ThemeType> = {
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',

}

function App() {
  const theme = React.useMemo(() => createTheme(Theme()), []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={RootBoxStyles}>
        <Events />
      </Box>
    </ThemeProvider>
  );
}

export default App;
