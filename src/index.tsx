import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import {SelectDropDown} from './SelectDropDown';
import {TableComponent} from  './TableComponent'
import CompaniesData from './CompaniesData';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>

    <div style={{ 
        display: 'flex', 
        gap: '16px',
        alignItems: 'flex-start' 
    }}>
        <SelectDropDown label="elo" placeholder="elo2" />
        <SelectDropDown label="elo" placeholder="elo2" />
        <SelectDropDown label="elo" placeholder="elo2" />
    </div>
      
      
      <div><TableComponent dataSet={CompaniesData} columnName1="provider" columnName2="region" columnName3="type"/> </div>
     
    </StyledEngineProvider>
  </React.StrictMode>
);