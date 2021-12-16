import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Button, FlatList, StyleSheet, Text, StatusBar,TextInput, Image, ImageBackground } from 'react-native';    
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import backImage from './assets/img/ButtonIntro.jpg';

const Buttonintro = () => {
  
  const Rectangle = (props) => (
      <TouchableOpacity  style={ styles.rectangle } onPress = { () => { navigate('Hello', {screen:props.screenName}) } }>
        <Icon style={ styles.rectangleIcon } name={ props.icon }  size={ 36 } color="#164163"/>
        <Text style={ styles.rectangleText } > { props.text }</Text>
    </TouchableOpacity>
   );

    const { navigate } = useNavigation();
    return (
        <ImageBackground
            resizeMode="cover"
            style = {styles.container}
            source = { backImage } 
        >
            <SafeAreaView style = {styles.incontainer}>
                <View>
                    <Text style={ styles.welcome }>Welcome to the</Text>
                    <Text style={ styles.nation }>First National</Text>
                    <Text style={ styles.toolkit }>Agent Calculator</Text>
                </View>    
                
                <View style={ styles.rowElement } >
                    <Rectangle icon="check" text="Commission" screenName="Commission"/>
                    <Rectangle icon="flag" text="Stamp Duty" screenName="Stamp Duty"/>
                </View>
                <View style={ styles.rowElement }> 
                    <Rectangle icon="exchange" text="Convert" screenName="Converters"/>
                    <Rectangle icon="pie-chart" text="Yield" screenName="Yield"/>
                </View>
                <View style={ styles.rowElement }>
                    <Rectangle icon="calendar" text="Contract Date" screenName="Contract Date"/>
                </View>
            </SafeAreaView>
        </ImageBackground> 
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    height: '100%',
   },
   incontainer: {
    flex: 1,
    display: 'flex',
    color:'black',
    width: '100%',
    height: '100%',
    // flexDirection: 'column',
    justifyContent: 'space-between',
},
    welcome: {
        color:'white',
        marginLeft:'12%',
        fontSize: 14,
        marginTop: 20,
    },
    nation: {
        color:'white',
        marginLeft:'12%',
        fontSize: 42,
        fontWeight: 'bold',
    },
    toolkit: {
        color:'white',
        marginLeft:'12%',
        fontSize: 42,
        // marginBottom: 12,
    },
    rowElement: {
        flexDirection: 'row',
    },
    rectangle: {
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 15,
        marginLeft: '10%',
        marginBottom: '8%',
        width: '35%',
        height: '95%',
        alignItems: 'center',
    },
    rectangleIcon: {
        paddingTop: 40,
    },
    rectangleText: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 12,
        color: "#164163",
        tintColor: '#000'
    },
});

export default Buttonintro;