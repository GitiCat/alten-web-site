import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import RootContainer from './containers/root'

import HomeContainer from './containers/pages/home/index'

class App extends React.Component {
    render() {
        return (
            <Router>
                <RootContainer>
                    <Switch>
                        <Route exact path="/" component={HomeContainer}/>
                    </Switch>
                </RootContainer>
            </Router>
        )
    }
}

export default App;