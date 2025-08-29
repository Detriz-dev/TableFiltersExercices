import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import {SelectDropDown} from './SelectDropDown';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>

      <div><SelectDropDown label="elo" placeholder="elo2" /></div>
      <div><SelectDropDown label="elo" placeholder="elo2" /></div>
     
    </StyledEngineProvider>
  </React.StrictMode>
);