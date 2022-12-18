import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Location from './pages/Location';
import About from './pages/About';
import Error404 from './pages/Error404';
import reportWebVitals from './reportWebVitals';
import { housingsList } from './datas/housingsList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Router>
            <Routes>
            <Route exact path="/" element={<Home housing={housingsList.id} />} />
            <Route exact path="/location/:id" render={(props) => (<Location housingsList={housingsList}
                  {...props} />)} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
    </Router>
  </React.StrictMode>, 
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
