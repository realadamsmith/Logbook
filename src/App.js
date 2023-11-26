import { setupIonicReact } from '@ionic/react';
import { Redirect, Route, Switch, HashRouter  } from 'react-router-dom';
import Page from './pages/Page';
import { datadogLogs } from '@datadog/browser-logs'

datadogLogs.init({
  clientToken: 'pub280761d29375b98b7514caf93f9615ac',
  site: 'us5.datadoghq.com',
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
})


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
