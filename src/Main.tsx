import React from 'react';
import RootNavigation from './navigation/RootNavigation';
import WithNavigationContainer from './navigation/WithNavigationContainer';
const Main: React.FC = () => {
  return (
    <WithNavigationContainer>
      <RootNavigation />
    </WithNavigationContainer>
  );
};

export default Main;
