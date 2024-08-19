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
  TrainingScreen,
  UserProfileScree,
} from './screen';
import ExplorationScreen from './screen/ExplorationScreen';
import CompetitionScreen from './screen/CompetitionScreen';

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
          <Stack.Screen name="TrainingScreen" component={TrainingScreen} />
          <Stack.Screen
            name="ExplorationScreen"
            component={ExplorationScreen}
          />
          <Stack.Screen
            name="CompetitionScreen"
            component={CompetitionScreen}
          />
          <Stack.Screen name="QuizGridScreen" component={QuizGridScreen} />
          <Stack.Screen name="QuizPlayScreen" component={QuizPlayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
