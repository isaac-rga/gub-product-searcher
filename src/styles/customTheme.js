import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ef9a9a',
    },
    secondary: {
      main: '#f3e5f5',
    },
    background: {
      default: '#F0E7DD',
    },

    info: {
      main: '#2196F3',
      dark: '#0B79D0',
      light: '#64B6F7',
      contrastText: '#fff',
    },
    success: {
      main: '#4CAF50',
      dark: '#3B873E',
      light: '#7BC67E',
      contrastText: '#fff',
    },
    grey: {
      50: '#F9FAFB',
      100: '#F4F4F7',
      200: '#E9EBEF',
      300: '#DDDFE7',
      400: '#BDC2D0',
      500: '#9199B0',
      600: '#7B85A1',
      700: '#4F5C81',
      800: '#394772',
      A100: '#BDC2D0',
      A200: '#9199B0',
      A400: '#4F5C81',
      A700: '#233362',
      contrastText: '#233362',
    },
    text: {
      primary: '#000C2E',
      secondary: '#58668F',
      disabled: '#828AA1',
      body1: '#4F5C81',
      dark: '#031256',
    },
    divider: '#DDDFE7',
    action: {
      active: '#DDDFE7',
      hover: '#2333620F',
      hoverOpacity: 'rgba(35, 51, 98, 0.06)',
      selected: '#23336214',
      selectedOpacity: 'rgba(35, 51, 98, 0.08)',
      disabled: '#828AA1',
      disabledBackground: '#C6CAD7',
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '15px',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(4px)',
          borderRadius: '5px',
        },
        columnHeaders: {},
        columnHeadersInner: {
          background: '#FFFFFF',
          borderRadius: '6px',
        },
        columnHeaderTitle: {
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '17px',
          display: 'flex',
          alignItems: ' center',
          letterSpacing: '0.25px',
          color: '#031256',
          flex: 'none',
          order: 0,
          flexGrow: 0,
        },
        columnHeader: {
          height: '35px',
          background: '#FFFFFF',
          borderRadius: '6px',
        },
        cell: {},
        row: {
          marginBottom: '16px',
          borderRadius: '6px',
          border: '1px solid #E5E9F8',
          borderLeft: 'none',
          height: '80px',
          color: '#58668F',
          fontSize: '13px',
          background: '#FFFFFF',
        },
      },
    },
  },
});

export default theme;
