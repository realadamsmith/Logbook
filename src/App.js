import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, BrowserRouter, Switch, HashRouter  } from 'react-router-dom';

import Page from './pages/Page';

setupIonicReact();

const App = () => {
  return (
    <div>
    <HashRouter>
      <Switch>
            <Route path="/" exact={true}>
              <Redirect to="/page/Inbox" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route>
      </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
