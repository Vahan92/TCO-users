import React, { Suspense } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './containers/routes';
import store from './store';

function Containers() {

  const registered = JSON.parse(localStorage.getItem('user'))?.data?.token;

  return (
    <Provider store={store}>
      <div className="app">
        <div>
          <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading</p>}>
            <BrowserRouter>
              <Switch>
                {(registered ? PRIVATE_ROUTES : PUBLIC_ROUTES).map((route) => (
                  <Route
                    key={route.key}
                    exact={route.exact}
                    path={`${route.path}`}
                    component={(props: any) => (
                      <route.component
                        {...props}
                      />
                    )}
                  />
                ))}
              </Switch>
            </BrowserRouter>
          </Suspense>
        </div>
      </div >
    </Provider>
  );
}

export default Containers;
