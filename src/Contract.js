import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TextInput,CheckBox } from 'react-native';
import DatePicker from 'react-native-datepicker';
  
const Contract = props => {

    let settleDate = new Date();
    const [date, setConDate] = React.useState(new Date());
    const [daycount, setDays] = React.useState("");

    function addDays(date, days) {
        
        if(days == "") return "";
        var result = new Date(date);

        result.setTime( result.getTime() + (parseInt(days) + 0.5) * 86400000);
        let date1 = result.getDate();
        let day1 = result.getDay();
        let currentWeek = date1;//Math.ceil((date1 + 6 - day1) / 7);
        var show = result.getFullYear() + "-" + (result.getMonth() + 1) + "-" + result.getDate();
        if (currentWeek == 1) {
            currentWeek = currentWeek + "st";
        } else if (currentWeek == 2) {
            currentWeek = currentWeek + "nd";
        } else if (currentWeek == 3) {
            currentWeek = currentWeek + "rd";
        } else {
            currentWeek = currentWeek + "th";
        }
        var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
        "Saturday"
        ];
        show = weekdayNames[result.getDay()] + " " + currentWeek + " " + monthNames[result.getMonth()] + " " + result.getFullYear();
        return show;
    }

    settleDate = React.useState( settleDate.getDate() );

    return(
        <SafeAreaView style={{backgroundColor: 'white'}} >
         <View >
            <View style={styles.item}>
                <Text style={styles.titleDate}>Contract Date</Text>
                <DatePicker
                    style={styles.input}
                    date = {date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2020-05-01"
                    maxDate="2050-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"                    
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {setConDate(date);
                }}
                />
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Days</Text>
                <TextInput
                    style={styles.input}
                    onChangeText = { (daycount) => {setDays( daycount);} }
                    value = {daycount}
                    placeholder = "Type Days"
                    keyboardType='number-pad'
                    returnKeyType="done"
                />
            </View>
            <View style={ styles.downField }>
                <View style = {styles.itemColor}>
                    <Text style={styles.downTitle}>Settlement</Text>
                    <Text style={styles.downValue}>{ addDays(date, daycount).toString() }</Text>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
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
    title: {
      fontSize: 15,
      fontWeight: "bold",
      color:"#164163"
    },
    titleDate: {
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
      textAlign: 'right'
    },
    checkbox: {
        width: 15,
        height: 15
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },    
    downField: {
        backgroundColor: '#0c304c',
        paddingTop: 12,
        paddingBottom: 500,     
    },
    downTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
    },
    downValue: {
        fontSize: 14,
        fontWeight: "bold",
        color: 'white',
    },    
  });
  
export default Contract;