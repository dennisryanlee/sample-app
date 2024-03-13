import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

const WithNavigationContainer: React.FC = ({children}) => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FFF',
        },
      }}>
      {children}
    </NavigationContainer>
  );
};

export default WithNavigationContainer;
