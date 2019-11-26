import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import RootContainer from './containers/root'

class App extends React.Component {
    render() {
        return (
            <Router>
                <RootContainer>
                    
                </RootContainer>
            </Router>
        )
    }
}

export default App;