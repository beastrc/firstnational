import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TextInput,CheckBox, Image} from 'react-native';    
import Icon from 'react-native-vector-icons/FontAwesome';

const Converters = () => {

  const [squares, onChangeTextSquares] = React.useState('0');
  const [squaresMeters, onChangeTextSquaresMeters] = React.useState('0');
  const [Acres, onChangeAcres] = React.useState("0");
  const [Hectres, onChangeHectres] = React.useState("0");
  const [Metres, onChangeMetres] = React.useState("0");
  const [Feet, onChangeFeet] = React.useState("0");
  const [Sqmetresdown, onChangeSqmetresdown] = React.useState("0");
  const [Sqfeetdown, onChangeSqfeetdown] = React.useState("0");

  const [squareInput, setSquareInput] = React.useState(false);
  const [squareMetersInput, setSquareMetersInput] = React.useState(false);
  const [acressInput, setAcressInput] = React.useState(false);
  const [hectaresInput, setHectaresInput] = React.useState(false);
  const [metresInput, setMetresInput] = React.useState(false);
  const [feetInput, setFeetInput] = React.useState(false);
  const [sqMetresInput, setSqMetresInput] = React.useState(false);
  const [sqFeetInput, setSqFeetInput] = React.useState(false);
  
  function unformat(number) {
    // if(number.toString() == "" || number.toString() == "NaN") return "";
    
    number = number.toString().replace("NaN", "");
    number = number.toString().replace(".", "");
    number = number.replaceAll(",", "");
    return number;
  }
  function formartInt(number1) {
    // return number1;
    if(number1 == "") return "";
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
      if (temp < 100) temp = "0" + temp;
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
    if(number1 == "") return "";
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
      if (temp < 100) temp = "0" + temp;
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
            <View style={ styles.item }>
                <View >
                    <Text style={ styles.lefttitle }>Squares</Text>
                    <TextInput
                        style={ styles.input }
                        onChangeText={ squares => 
                          {
                            setSquareInput(true)
                            setSquareMetersInput(false)
                            onChangeTextSquares(unformat(squares))
                          }
                        }
                        value={
                          squareInput ? formartInt(squares) : formartInt((squaresMeters/9.290304))
                          // formartInt(squares)
                        }
                        placeholder='Type Here'
                        // onChangeText={ squares => onChangeTextSquares(squares) }
                        // value={ squares }
                        keyboardType='number-pad'
                        returnKeyType="done"
                    />
                </View>
                <View style={styles.iconStyle}>
                  <Icon name="circle" size={25} color="lightgrey" />
                </View>
                <View >
                    <Text style={ styles.righttitle }>Square Metres(m2)</Text>
                    <TextInput
                      style={ styles.inputRight }
                      onChangeText={ squaresMeters => 
                        {
                          setSquareInput(false)
                          setSquareMetersInput(true)
                          onChangeTextSquaresMeters(unformat(squaresMeters))
                        }   
                      }
                      placeholder='Type Here'
                      value={squareMetersInput ? formartInt(squaresMeters) : formartInt((squares*9.290304))}
                      // onChangeText={ squares => onChangeTextSquares(squares) }
                      // value={ squares }
                      keyboardType='number-pad'
                      returnKeyType="done"
                      />
                    {/* <Text style={ styles.resultText }>
                      {
                        
                      //  (squares*9.290304).toFixed(2)
                      }</Text> */}
                </View>
            </View>
            <View style={styles.item}>
                <View >
                    <Text style={styles.lefttitle}>Acres</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={ Acres => 
                        {
                          setAcressInput(true)
                          setHectaresInput(false)
                          onChangeAcres(unformat(Acres))
                        }
                      }
                      value={acressInput ? formartInt(Acres) : formartInt(Hectres/0.404686) }
                      // onChangeText={ Acres => onChangeAcres(Acres) }
                      // value={ Acres }
                      keyboardType='number-pad'
                      returnKeyType="done"
                      placeholder='Type Here'
                    />
                </View>
                <View style={styles.iconStyle}>
                  <Icon name="circle" size={25} color="lightgrey" />
                </View>               
                <View >
                    <Text style={styles.righttitle}>Hectares</Text>
                    <TextInput
                      style={ styles.inputRight }
                      onChangeText={ Hectres => 
                        {
                          setAcressInput(false)
                          setHectaresInput(true)
                          onChangeHectres(unformat(Hectres))
                        }
                      }
                      value={hectaresInput ? formartInt(Hectres) : formartInt(Acres*0.404686)}
                      keyboardType='number-pad'
                      returnKeyType="done"
                      placeholder='Type Here'
                      />
                    {/* <Text style={ styles.resultText }>{ (Acres*0.404686).toFixed(2) }</Text> */}
                </View>
            </View>
            <View style={styles.item}>
                <View >
                    <Text style={styles.lefttitle}>Metres</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={ Metres => {
                        {
                          setMetresInput(true)
                          setFeetInput(false)
                          onChangeMetres(unformat(Metres))
                        }
                      }
                      }
                      placeholder='Type Here'
                      value={metresInput ? formartInt(Metres) : formartInt((Feet/3.28084))}
                        keyboardType='number-pad'
                        returnKeyType="done"
                    />
                </View>
                <View style={styles.iconStyle}>
                  <Icon name="circle" size={25} color="lightgrey" />
                </View>
                <View >
                    <Text style={styles.righttitle}>Feet</Text>
                    <TextInput
                      style={styles.inputRight}
                      onChangeText={ Feet => {
                        {
                          setMetresInput(false)
                          setFeetInput(true)
                          onChangeFeet(unformat(Feet))
                        }
                      }  
                      }
                      placeholder='Type Here'
                      value={feetInput ? formartInt(Feet) : formartInt((Metres*3.28084))}
                      keyboardType='number-pad'
                      returnKeyType="done"
                    />
                    {/* <Text style={ styles.resultText }>{ (Metres*3.28084).toFixed(2) }</Text> */}
                </View>
            </View>
            <View style={styles.item}>
                <View >
                    <Text style={styles.lefttitle}>Sq.Metres</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={ Sqmetresdown => 
                        {
                          setSqMetresInput(true)
                          setSqFeetInput(false)
                          onChangeSqmetresdown(unformat(Sqmetresdown))
                        }
                      }
                      placeholder='Type Here'
                      value={sqMetresInput ? formartInt(Sqmetresdown) : formartInt(Sqfeetdown/10.7639)}
                      // onChangeText={ Sqmetresdown => onChangeSqmetresdown(Sqmetresdown) }
                      // value={ Sqmetresdown }
                      keyboardType='number-pad'
                      returnKeyType="done"
                    />
                </View>
                <View style={styles.iconStyle}>
                  <Icon name="circle" size={25} color="lightgrey" />
                </View>             
                <View >
                    <Text style={styles.righttitle}>Sq.Feet</Text>
                    <TextInput
                      style={styles.inputRight}
                      onChangeText={ Sqfeetdown => 
                        {
                          setSqMetresInput(false)
                          setSqFeetInput(true)
                          onChangeSqfeetdown(unformat(Sqfeetdown))
                        }
                      }
                      placeholder='Type Here'
                      value={sqFeetInput ? formartInt(Sqfeetdown) : formartInt(Sqmetresdown*10.7639)}
                      // onChangeText={ Sqmetresdown => onChangeSqmetresdown(Sqmetresdown) }
                      // value={ Sqmetresdown }
                      keyboardType='number-pad'
                      returnKeyType="done"
                    />
                    {/* <Text style={ styles.resultText }>{ (Sqmetresdown*10.7639).toFixed(2) }</Text> */}
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
  item: {
    backgroundColor: '#f9f9f9',
    paddingLeft: '6%',
    paddingRight: '6%',
    
    height: 65,
    borderColor: '#b1b1b5',
    borderBottomColor: '#b1b1b5',
    borderRadius: 16,
    borderWidth: 1,

    marginTop: 8,
    marginBottom: 8,
    marginLeft: 12,
    marginRight: 12,
    
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultPane: {
    
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultText: {
    paddingLeft: 150,
  },
  lefttitle: {
    marginBottom: 4,
    fontSize: 15,
    fontWeight: "bold",
    color:"#164163",
    textAlign: 'left',
  },
  righttitle: {
    marginBottom: 4,
    fontSize : 15,
    fontWeight : "bold",
    color : "#164163",
    textAlign : 'right',
  }, 
  inputRight: {
    textAlign : 'right',
    padding : 0,
    fontSize : 16,
    width : 135,
    // paddingRight: 
  },
  input: {
    padding:0,
    fontSize: 16,
    width: 135,
  },
  iconStyle: {
    position: 'absolute',
    left: '55%',
  },

});

export default Converters;