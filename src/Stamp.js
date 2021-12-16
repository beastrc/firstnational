import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const Stamp = () => {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 7000)
    }, []);

    return(
        <View style={styles.container}>
            {
                show && <WebView 
                    source={{ uri: 'https://www.visionabacus.net/Tools/B3/SuiteA/A200/Stamp_Duty_Calculator/FirstNational' }} 
                    style={{ marginTop: 4 }} 
                />  
            }
            {
                !show && <ActivityIndicator
                    size='small'
                    color='0000ff'
                    style={styles.activity}
                    animating='true'
                />
            }
        </View>
    );
}

const styles =StyleSheet.create ({
    container: {
        flex: 1,
      },
      activity: {
        paddingTop: 64,
      },
})

export default Stamp;