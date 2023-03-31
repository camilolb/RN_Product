import {Provider} from 'react-redux';
import {store} from './core/frameworks/redux';
import {Auth0Provider} from 'react-native-auth0';
import AppNavigation from './mobile/Navigation/AppNavigation';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useChangeTheme} from './core/hooks';
import {MainService} from './core/services/MainService';
import firebase from '@react-native-firebase/app';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGE_SENDER,
  FIREBASE_APPID,
  FIREBASE_MEASUREID,
} from '@env';

const queryClient = new QueryClient();
new MainService();

function App() {
  const {shouldRender} = useChangeTheme();

  if (firebase.apps.length) {
    firebase.initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      projectId: FIREBASE_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MESSAGE_SENDER,
      appId: FIREBASE_APPID,
      measurementId: FIREBASE_MEASUREID,
    });
  }

  if (shouldRender) {
    return (
      <Provider store={store}>
        <Auth0Provider
          domain={'dev-elkff7zl2xzxdf48.us.auth0.com'}
          clientId={'T71Yf81WH4xKud4DTtiuDzDFM7E5RYjd'}>
          <QueryClientProvider client={queryClient} contextSharing={true}>
            <AppNavigation />
          </QueryClientProvider>
        </Auth0Provider>
      </Provider>
    );
  } else {
    return null;
  }
}

export default App;
