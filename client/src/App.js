import React from 'react';
import './App.css';
import {
  // BrowserRouter as Router,
  // Routes,
  // Route,
} from "react-router-dom";

// import { ThemeProvider } from '@mui/material/styles';
// import theme from './config/theme.config';
import Dashboard from './pages/Dashboard';


export default function App() {
  return (
    <main>
  <Dashboard />
    </main>
  //   <Router>
  //   <ThemeProvider theme={theme}>
  //     <Routes>
  //       {/* <Route exact path="/">
  //         <SignIn />
  //       </Route> */}
  //       {/* <Route path="/sign-up">
  //         <SignUp />
  //       </Route> */}
  //       <Route path="/dashboard">
  //         <Dashboard />
  //       </Route>
  //     </Routes>
  //   </ThemeProvider>
  // </Router>
    // <main class ="flex">
    //   <Navbar />
    //   <Workout />
    //    </main>
    
   
  );
}

