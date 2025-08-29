import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import {SelectDropDown} from './SelectDropDown';
import TableComponent from  './TableComponent'

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>

      <div><SelectDropDown label="elo" placeholder="elo2" /></div>
      <div><SelectDropDown label="elo" placeholder="elo2" /></div>
      <div><TableComponent /> </div>
     
    </StyledEngineProvider>
  </React.StrictMode>
);