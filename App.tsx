/* eslint-disable prettier/prettier */
import React from 'react';
// 1. import `NativeBaseProvider` component
import { NavigationContainer } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/container/Home';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

    const theme = extendTheme({
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        baseStyle: {
          rounded: 'md',
        },
        defaultProps: {
          colorScheme: 'red',
        },
      },
      Heading: {
        // Can pass also function, giving you access theming tools
        // baseStyle: ({ colorMode }) => {
        //   return {
        //     color: colorMode === 'dark' ? 'red.300' : 'blue.300',
        //     fontWeight: 'normal',
        //   };
        // },
      },
      Box:{},
      Link: {
        baseStyle: {
          color: 'emerald.400'
        },
        defaultProps: {
          color: 'emerald.400',
        },
      },
      Text: {
        baseStyle: {},
        defaultProps: {
          size: 'lg'
        },
        sizes: {
          xl: {
            // fontSize: '64px'
          },
          lg: {
            // fontSize: '32px'
          },
          md: {
            fontSize: '16px'
          },
          sm: {
            fontSize: '12px'
          }
        }
      }
    },
  });

  return (
    <NativeBaseProvider theme={theme} >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

