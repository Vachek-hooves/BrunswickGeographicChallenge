import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppProvider} from './store/context';
import {
  HiScreen,
  MainScreen,
  QuizAboutScreen,
  QuizGridScreen,
  QuizModeListScreen,
  QuizPlayScreen,
  UserProfileScree,
} from './screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'simple_push',
            animationDuration: 1000,
          }}>
          <Stack.Screen name="HiScreen" component={HiScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="UserProfileScreen" component={UserProfileScree} />
          <Stack.Screen name="QuizAboutScreen" component={QuizAboutScreen} />
          <Stack.Screen
            name="QuizModeListScreen"
            component={QuizModeListScreen}
          />
          <Stack.Screen name="QuizGridScreen" component={QuizGridScreen} />
          <Stack.Screen name="QuizPlayScreen" component={QuizPlayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
