import {createStackNavigator} from '@react-navigation/stack';

import MainStack from 'navigators/main-stack';
import {RouteName} from 'navigators/types';

export type RootStackParamList = {
  [RouteName.MAIN_STACK]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteName.MAIN_STACK} component={MainStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
