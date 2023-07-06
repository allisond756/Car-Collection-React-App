import { HashRouter, Routes, Route } from 'react-router-dom';
import routes from './config/routes';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';
import AuthChecker from './auth/AuthChecker';
// import { auth0Config } from './config/auth0.config';

function App() {
  return (
    <Auth0Provider
      domain="dev-2octiplbwtfgs5c1.us.auth0.com"
      clientId="bTB2XyBlRaN8HiLZfR9GlkDM7OUN4IeG"
      authorizationParams={{
        redirect_uri: "https://coruscating-klepon-1e0b9f.netlify.app"
      }}
    >
      <HashRouter>
        <Navbar />
          <Provider store={store}>
            <Routes>
              { routes.map((route: any, index: any) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route.protected ? (
                    <AuthChecker>
                      <route.component />
                    </AuthChecker>
                    ) : (
                      <route.component />
                    )
              }
              />
            )) }
          </Routes>
        </Provider>
      </HashRouter>
    </Auth0Provider>
  );
}

export default App;