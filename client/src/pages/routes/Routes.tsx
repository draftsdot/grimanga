import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import { HomePage, LibraryPage } from '../routes';


const Routes = () => {
    return(
        <Switch>
            <Route path='/Inicio' element={<HomePage />} />
            <Route path='/Biblioteca' element={<LibraryPage />} />

            <Route path='*' element={<Navigate to='/Inicio' />} />
        </Switch>
    );
}

export default Routes;
