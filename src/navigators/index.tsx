import {NavigationContainer} from '@react-navigation/native';

import RootStack from './root-stack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
