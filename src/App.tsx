import AppNavigation from './mobile/Navigation/AppNavigation';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useChangeTheme} from './core/hooks';
import {MainService} from './core/services/MainService';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LoadingProvider} from './mobile/context/LoadingContext';
import {Provider} from 'jotai';
import {useDashoard} from './core/frameworks/jotai/atoms';
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';

const queryClient = new QueryClient();
new MainService();

function App() {
  const [dashboardInformation, setDashboardInformation] = useDashoard();
  const {shouldRender, toggleTheme} = useChangeTheme();

  useFocusEffect(
    React.useCallback(() => {
      if (dashboardInformation != null) toggleTheme();
    }, [toggleTheme, dashboardInformation]),
  );

  if (shouldRender) {
    return (
      <SafeAreaProvider>
        <Provider>
          <LoadingProvider>
            <QueryClientProvider client={queryClient} contextSharing={true}>
              <AppNavigation />
            </QueryClientProvider>
          </LoadingProvider>
        </Provider>
      </SafeAreaProvider>
    );
  } else {
    return null;
  }
}

export default App;
