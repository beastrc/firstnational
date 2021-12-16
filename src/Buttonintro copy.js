import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Button, FlatList, StyleSheet, Text, StatusBar,TextInput, Image, ImageBackground } from 'react-native';    
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import backImage from './assets/img/ButtonIntro.jpg';

const Buttonintro = () => {
  
  const Rectangle = (props) => (
      <TouchableOpacity  style={ styles.rectangle } onPress = { () => { navigate('Hello') } }>
        <Icon style={ styles.rectangleIcon } name={ props.icon }  size={ 36 } color="#164163"/>
        <Button style={ styles.rectangleText } title= { props.text } > </Button>
    </TouchableOpacity>
   );
    
    const { navigate } = useNavigation();
  return (
    <SafeAreaView 
        style={styles.container }
        
    > 
        <ImageBackground
            style = {styles.container}
            source = { backImage } >
            <View>
                <Text style={ styles.welcome }>Welcome to the</Text>
                <Text style={ styles.nation }>First National</Text>
                <Text style={ styles.toolkit }>Mobile Toolkit!</Text>
            </View>    
            {/*  */}
            <View style={ styles.rowElement } >
                <Rectangle icon="check" text="Commission" />
                <Rectangle icon="flag" text="Converters" />
            </View>
            <View style={ styles.rowElement }> 
                <Rectangle icon="exchange" text="Convert" />
                <Rectangle icon="pie-chart" text="Yield" />
            </View>
            <View style={ styles.rowElement }>
                <Rectangle icon="calendar" text="Contract Date" />
            </View>
        </ImageBackground> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
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
        fontSize: 10,
        paddingTop: 12,
        color: "#164163",
        tintColor: '#000'
    },
});

export default Buttonintro;