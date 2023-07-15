import {createStackNavigator} from '@react-navigation/stack';
import {RouteName} from 'navigators/types';

import HomeScreen from 'screens/home';

export type MainStackParamList = {
  [RouteName.HOME_SCREEN]: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RouteName.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
