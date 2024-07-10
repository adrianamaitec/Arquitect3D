import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './Routes/LoginView';
import DashboardView from './Routes/dashboardView';
import SignUpView from './Routes/signOutView';
import PublicProfileView from './Routes/publicProfileView';
import ChooseUserNameView from './Routes/chooseUserNameView';
import EditProfileView from './Routes/editProfileView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="Login" element={<LoginView />}/>
    <Route path="dashboard" element={<DashboardView />}/>
    <Route path="dashboard/profile" element={<EditProfileView />}/>
    <Route path="signout" element={<SignUpView />}/>
    <Route path="u/:username" element={<PublicProfileView />}/>
    <Route path="choose-username" element={<ChooseUserNameView />}/>
  </Routes>
  </BrowserRouter>
    
  
);

