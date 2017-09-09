import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import Main from './src/components/Main';

const RouterComponent = () => {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="auth" >
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main" >
          <Scene
            key="mainscreen"
            component={Main}
            title="Main Screen"
            initial
          />
        </Scene>
      </Router>
    );
};

export default RouterComponent;
