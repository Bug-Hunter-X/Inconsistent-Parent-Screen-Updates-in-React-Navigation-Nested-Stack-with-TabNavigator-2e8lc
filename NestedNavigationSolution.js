The solution employs the React Context API to efficiently manage state across the nested navigation hierarchy.  This addresses the inconsistencies by providing a centralized data source and ensuring all child components receive the most up-to-date information.

```javascript
// NestedNavigationSolution.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({ value: 'Initial Data' });
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

const HomeScreen = () => {
  const { data, setData } = useContext(DataContext);
  return (
    <View>
      <Text>{data.value}</Text>
    </View>
  );
};

const NestedScreen = ({ navigation }) => {
  const { data, setData } = useContext(DataContext);
  useEffect(() => {
    setData({ value: 'Updated Data' });
  }, []);
  return (
    <View>
      <Text>Nested Screen: {data.value}</Text>
    </View>
  );
};

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Nested">
            {() => (
              <Stack.Navigator>
                <Stack.Screen name="Nested1" component={NestedScreen} />
              </Stack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App; 
```