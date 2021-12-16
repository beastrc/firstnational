import React from 'react';
import { ScrollView, View, FlatList, StyleSheet, Text, StatusBar,TextInput,CheckBox } from 'react-native';    

const Yield = () => {

  const [propertyprice, onChangeprice] = React.useState("");
  const [rentweek, onChangerentweek] = React.useState("");
  const [rates, onChangerate] = React.useState("");
  const [insurance, onChangeinsurance] = React.useState("");
  const [bodycorporate, onChangebodycorporate] = React.useState("");

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
    var number = parseInt(number1 * 100, 10);
    var temp = number % 100;
    if (temp < 10) temp = "0" + temp;
    var result = ""; // "." + temp;
    number = parseInt(number / 100, 10);
    while(number > 1000 - 1) {
      var temp = number % 1000;
      if (temp < 10) temp = "00" + temp;
      else if (temp < 100) temp = "0" + temp;
      result = "," + temp + result;
      number = parseInt(number / 1000);
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
    <ScrollView style={{backgroundColor: 'white'}}>
        <View >
            <View style={styles.item}>
                <Text style={styles.title}>Property Price($)</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={ propertyprice => onChangeprice( propertyprice ) }
                    onChangeText={ propertyprice => onChangeprice(unformat(propertyprice))  }
                    value={formartInt(propertyprice)}
                    // value={ propertyprice }
                    placeholder='Type Here'
                    keyboardType='number-pad'
                    returnKeyType="done"
                />
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Estimated Rent/Week</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ rentweek => onChangerentweek(unformat(rentweek))  }
                    value={formartInt(rentweek)}
                    // onChangeText={ rentweek => onChangerentweek(rentweek) }
                    // value={ rentweek }
                    placeholder='Type Here'
                    keyboardType='number-pad'
                    returnKeyType="done"
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.title}>Rates(Yearly)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ rates => onChangerate(unformat(rates))  }
                    value={formartInt(rates)}
                    // onChangeText={ rates => onChangerate(rates) }
                    // value={ rates }
                    placeholder='Type Here'
                    keyboardType='number-pad'
                    returnKeyType="done"
                />
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Insurance(Yearly)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ insurance => onChangeinsurance(unformat(insurance))  }
                    value={formartInt(insurance)}
                    // onChangeText={ insurance => onChangeinsurance(insurance) }
                    // value={ insurance }
                    placeholder='Type Here'
                    keyboardType='number-pad'
                    returnKeyType="done"
                />
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Body Corporate(Yearly)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ bodycorporate => {
                        onChangebodycorporate(unformat(bodycorporate))  
                      }
                    }
                    value={formartInt(bodycorporate)}
                    // onChangeText={ bodycorporate => onChangebodycorporate(bodycorporate) }
                    // value={ bodycorporate }
                    placeholder='Type Here'
                    keyboardType='number-pad'
                    returnKeyType="done"
                />
            </View>
            <View style={ styles.downField }>
              <View style={styles.itemColor}>
                  <Text style={styles.downtitle}>Annual Rental Income</Text>
                  <Text style={styles.downValue}>{ '$' + formart(rentweek*52) }</Text>
              </View>            
              <View style={styles.itemColor}>
                  <Text style={styles.downtitle}>Annual costs</Text>
                  <Text style={styles.downValue}>{ '$' + formart(rates/1 + insurance/1 + bodycorporate/1) }</Text>
              </View>
              <View style={styles.itemColor}>
                  <Text style={styles.downtitle}>Net Income</Text>
                  <Text style={styles.downValue}>{ '$' + formart(rentweek*52 - rates/1 - insurance/1 - bodycorporate/1) }</Text>
              </View>
              <View style={styles.itemColor}>
                  <Text style={styles.downtitle}>Rental Yield</Text>
                  <Text style={styles.downValue}>{formart((rentweek*52 - rates/1 - insurance/1 - bodycorporate/1)/propertyprice*100) + '%' }</Text>
              </View>
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  FlatListColor: {
    backgroundColor: '#f2f2f2'
  },
  itemColor: {
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
  item: {
    backgroundColor: '#f9f9f9',
    paddingLeft: '6%',
    paddingRight: '6%',

    height: 60,
    borderColor: '#b1b1b5',
    borderBottomColor: '#b1b1b5',
    borderRadius: 16,
    borderWidth: 1,

    marginTop: 8,
    marginBottom: 8,
    marginLeft: 12,
    marginRight: 12,

    borderBottomColor: '#b1b1b5',
    borderBottomWidth: 1,
    marginBottom: 5,

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
    padding:0,
    textAlign: 'right', 
    alignSelf: 'stretch'
  },
  checkbox: {
      width: 15,
      height: 15
  },
  downField: {
    backgroundColor: '#0c304c',
    paddingTop: 12,
    paddingBottom: 72,
  },
  downtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold",
  },
  downValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Yield;