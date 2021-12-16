import 'react-native-gesture-handler';
import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';

import ButtonIntroScreen from './src/Buttonintro';
import CommissionScreen from './src/Commission';
import StampScreen from './src/Stamp'; 
import ConvertersScreen from './src/Converters';
import YieldScreen from './src/Yield';
import ContractScreen from './src/Contract';

import splashImg from './src/assets/img/Splash.jpg';

const Tab = createBottomTabNavigator();
const TabIcon = ({ icon, focused }) => (
  <Icon
    name={icon}
    size={26}
    color={focused ? 'grey' : 'black'}
  />
);

const Rectangle = (props) => (
  <View style={ styles.rectangle }>
    <Icon style={ styles.rectangleIcon } name={ props.icon }  size={ 36 } color="#164163"/>
    <Text style={ styles.rectangleText }> { props.text } </Text>
  </View>
);

function TabScreen(){
  return(
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
    >
    <Tab.Screen 
      name="Commission"
      component={ CommissionScreen } 
      // icon = {TabIcon('commission')}
      options={{
        tabBarLabel: 'Commission',
        tabBarIcon: ({ color }) => (
          <Icon 
            name="check" 
            size={25} 
            color= { color }
          />
      )
      }}
    />           
    <Tab.Screen 
      name="Stamp Duty" 
      component={StampScreen} 
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="flag" size={25} color={ color } />
      )
      }}          
    />
    <Tab.Screen 
      name="Converters" 
      component={ConvertersScreen} 
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="exchange" size={25} color={ color } />
      )
      }}          
    />
    <Tab.Screen 
    name="Yield" 
    component={YieldScreen} 
    options={{
      tabBarIcon: ({ color }) => (
        <Icon name="pie-chart" size={25} color={ color } />
      )
    }}        
    />
    <Tab.Screen 
      name="Contract Date" 
      component={ContractScreen} 
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="calendar" size={25} color={ color } />
        )
      }} 
    /> 
  </Tab.Navigator>    
  );
};

const NavigateStack = createStackNavigator();
function NavigateStackScreen(){
  return(
    <NavigateStack.Navigator>
      <NavigateStack.Screen 
        name="ButtonIntro" 
        component={ ButtonIntroScreen } 
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="Hello"
        component = { TabScreen }
        options={{headerShown:false}}
      />
    </NavigateStack.Navigator>
  )
};

export default class App extends Component{  
  constructor(){
    super();
    this.state={  
      isVisible : true,  
    }
  }
  Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });
  }
  componentDidMount(){
    var that = this;
    setTimeout(function(){
      that.Hide_Splash_Screen();
    }, 100);
  }

  render(){
    let Splash_Screen = (  
      <View style={styles.SplashScreen_RootView}>  
        <View style={styles.SplashScreen_ChildView}> 
          <Image source={ splashImg } ></Image>
        </View>  
      </View> 
    )
    return(
      <View style = { styles.MainContainer }>
        <NavigationContainer>

          {/* <NavigateStack.Screen name="ButtonIntro" component={ ButtonIntroScreen } /> */}
          <NavigateStackScreen />
        </NavigationContainer> 
        {/* {  
          (this.state.isVisible === true) ? Splash_Screen : null  
        }   */}
    </View>          
    );  
  }
}
const styles = StyleSheet.create(  
{  
    MainContainer: {  
        flex: 1,
        justifyContent: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 0 : 0,
    },  
    SplashScreen_RootView:{  
        justifyContent: 'center',  
        flex:1,  
        margin: 0,  
        position: 'absolute',  
        width: '100%',  
        height: '100%', 
      },  
   
    SplashScreen_ChildView:{  
        justifyContent: 'center',  
        alignItems: 'center',  
        flex:1,  
    },  
    bottomTabIcon: {
      width: 25,
      height: 25,
    },
});  