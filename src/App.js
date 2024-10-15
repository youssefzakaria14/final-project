import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Articles from './Components/articles/articles.jsx';
import Articles_2 from './Components/Articles.2/Articles.2.jsx';
import Articles_3 from './Components/Articles.3/Articles.3.jsx';
import Articles_4 from './Components/Articles.4/Articles.4.jsx';
import Articles_5 from './Components/Articles_5/Articles_5.jsx';
import Events_1 from './Components/Events_1/Events_1.jsx';
import Events_2 from './Components/Events_2/Events_2.jsx';
import Events_3 from './Components/Events_3/Events_3.jsx';
import Events_4 from './Components/Events_4/Events_4.jsx';
import Events_5 from './Components/Events_5/Events_5.jsx';

export default class App extends Component {

    render() {
        return (


            <div>

                


                <Router>
                    <Routes>




                        
                        <Route path="/Articles" element={<Articles />} />
                        <Route path="/Articles_2" element={<Articles_2 />} />
                        <Route path="/Articles_3" element={<Articles_3 />} />
                        <Route path="/Articles_4" element={<Articles_4 />} />
                        <Route path="/Events_1" element={<Events_1 />} />
                        <Route path="/Events_2" element={< Events_2 />} />
                        <Route path="/Events_3" element={<Events_3 />} />
                        <Route path="/Events_4" element={<Events_4 />} />
                        <Route path="/Events_5" element={<Events_5 />} />
                    </Routes>

                </Router>


                <Home />
                <Articles_3 />
                <Articles />
                <Articles_2 />
                <Articles_4 />
                <Articles_5 />

                <Events_1 />
                <Events_2 />
                <Events_3 />
                <Events_4 />
                <Events_5 />





            </div>



        )
    }
}