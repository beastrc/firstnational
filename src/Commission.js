import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TextInput, Image } from 'react-native';    
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';

const Commission = () => {

  const [saleprice, onChangePrice] = React.useState("");
  const [agentfee, onChangeFee] = React.useState("");
  const [advertising, onChangeAdvertising] = React.useState("");
  const [gst, setSelection] = React.useState(false);

  function unformat(number) {
    // if(number.toString() == "" || number.toString() == "NaN") return "";
    
    number = number.toString().replace("NaN", "");
    number = number.toString().replace(".", "");
    number = number.replaceAll(",", "");
    return number;
  }
  function formartInt(number1) {
    if(number1.toString() == "") return "";
    var isNegative = 1;
    if (number1 < 0) {
      isNegative = -1;
    }
    number1 = number1 * isNegative;
    var number = parseInt(number1, 10);
    var temp = number % 100;
    if (temp < 10) temp = "0" + temp;
    var result = ""; // "." + temp;
    number = parseInt(number, 10);
    while(number / 1000 > 1) {
      var temp = number % 1000;
      if (temp < 10) temp = "00" + temp;
      else if (temp < 100) temp = "0" + temp;
      result = "," + temp + result;
      number = parseInt(number / 1000, 10);
    }
    result = number + result;

    if(isNegative < 0) {
      result = "-" + result;
    }
    
    return result;
  }
  function formart(number1) {
    var isNegative = 1;
    if (number1 < 0) {
      isNegative = -1;
    }
    number1 = number1 * isNegative;
    var number = parseInt(number1 * 100, 10);
    var temp = number % 100;
    if (temp < 10) temp = "0" + temp;
    var result = "." + temp;
    number = parseInt(number / 100, 10);
    while(number / 1000 > 1) {
      var temp = number % 1000;
      if (temp < 10) temp = "00" + temp;
      else if (temp < 100) temp = "0" + temp;
      result = "," + temp + result;
      number = parseInt(number / 1000, 10);
    }
    result = number + result;

    if(isNegative < 0) {
      result = "-" + result;
    }
    
    return result;
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View >
        <View style={styles.itemTop}>
            <Text style={styles.title}>Sale Price($)</Text>
            <TextInput
                style={styles.input}
                onChangeText={ saleprice => onChangePrice(unformat(saleprice))  }
                value={formartInt(saleprice)}
                keyboardType='number-pad'
                returnKeyType="done"
                placeholder = "Type Heres"
            />
        </View>
        <View style={styles.itemTop}>
            <Text style={ styles.title }>Agent Fee(%)</Text>
            <TextInput
                style={styles.input}
                onChangeText={ agentfee => onChangeFee(unformat(agentfee))  }
                value={formartInt(agentfee)}
                keyboardType='number-pad'
                returnKeyType="done"
                placeholder = "Type Here"
            />
        </View>
        <View style={styles.itemTop}>
            <Text style={styles.title}>GST(10%)</Text>
            <CheckBox
              value={ gst }
              onValueChange={ setSelection }
              style={styles.checkbox} />
        </View>
        <View style={styles.itemTop}>
            <Text style={styles.title}>Advertising($)</Text>
            <TextInput
                style={styles.input}
                onChangeText={ advertising => onChangeAdvertising(unformat(advertising))  }
                value={formartInt(advertising)}
                keyboardType='number-pad'
                returnKeyType="done"
                placeholder = "Type Here"/>
        </View>

        <View style={ styles.downField }>
        <View style={ styles.item }>
              <Text style={styles.downTitle}>Commission</Text>
              <Text style={styles.downValue}>{ '$' + formart(saleprice*agentfee/100) }</Text>
          </View>
          <View style={ styles.item }>
              <Text style={styles.downTitle}>GST</Text>
              <View style={styles.iconStyle}>
              </View>
              <Text style={styles.downValue}>{ '$' + formart(gst?(saleprice*agentfee/1100).toFixed(2) : (saleprice*agentfee/1000).toFixed(2) )}</Text>
          </View>
          <View style={ styles.item }>
              <Text style={styles.downTitle}>Grand Total</Text>
              <Text style={styles.downValue}>{ '$' + formart(gst ? saleprice*agentfee/100+advertising/1 : advertising/1+saleprice*agentfee/1000+saleprice*agentfee/100) }</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  itemTop: {
    backgroundColor: '#f9f9f9',
    paddingLeft: '6%',
    paddingRight: '6%',

    height: 60,
    borderColor: '#b1b1b5',
    borderBottomColor: '#b1b1b5',
    borderRadius: 16,
    borderWidth: 1,

    marginTop: 4,
    marginBottom: 8,
    marginLeft: 12,
    marginRight: 12,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color:"#164163"
  },
  budgetDis: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333333"
  },
  input: {
    margin: 0,
    textAlign: 'right', 
    alignSelf: 'stretch'
  },
  checkbox: {
      width: 15,
      height: 15
  },
  iconStyle: {
    position: 'absolute',
    left: '55%'
  },
  downField: {
    backgroundColor: '#0c304c',
    height: '65%',
    paddingTop: 12,
  },
  item: {
    backgroundColor: '#164163',
    paddingLeft: '6%',
    paddingRight: '6%',

    height: 60,
    borderColor: '#164163',
    borderBottomColor: '#164163',
    borderRadius: 16,
    borderWidth: 1,

    marginTop: 4,
    marginBottom: 8,
    marginLeft: 12,
    marginRight: 12,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },  
  downTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color:"#ffffff" 
  },
  downValue: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default Commission;