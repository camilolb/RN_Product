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
import {Provider} from 'jotai';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const queryClient = new QueryClient();
new MainService();

function App() {
  const {shouldRender} = useChangeTheme();

  console.log('firebase', firebase);

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
      <SafeAreaProvider>
        <Provider>
          <QueryClientProvider client={queryClient} contextSharing={true}>
            <AppNavigation />
          </QueryClientProvider>
        </Provider>
      </SafeAreaProvider>
    );
  } else {
    return null;
  }
}

export default App;
