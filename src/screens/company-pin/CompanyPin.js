import React from 'react'
import {View,Text,TouchableOpacity,TextInput,ScrollView,SafeAreaView,Image,Alert} from 'react-native'
import Images from '../../constants/images'
import Colors from '../../constants/color'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DotIndicator, SkypeIndicator } from 'react-native-indicators';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../store/action'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import axios from 'axios'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService';
import Screens from '../../utils/screen';
import { API_URL } from '../../config';
const CELL_COUNT = 4;


const CompanyPin = ({Auth,signIn}) =>{
  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [loading,setLoading] = React.useState(false);

   const onContinue = () =>{
     
    if(value !==''){
       setLoading(true);
       axios.post(`${API_URL}/sendpin`,{
         "pinCode":Number(value)
       }).then(response=>{
          setLoading(false)
          if(response.data.status){
            signIn('c');
            NavigationService.navigate(Screens.Home);
          }
          else{
            Alert.alert(
              'Warning',
              'Please enter your pin code exactly.',
                [
                  {text: 'OK', onPress: () => console.log('Ask me later pressed'),style: 'ok'},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ]
            )
            setValue('')
          }
       })
    }
    else{
      Alert.alert(
        'Warning',
        'Please enter your pin code exactly.',
          [
            {text: 'OK', onPress: () => console.log('Ask me later pressed'),style: 'ok'},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          
          ]
      )
    }

   }
    return(
     <SafeAreaProvider>
      <ScrollView style={styles.scrollContainer}>
        <SafeAreaView style={{flex:1}}>
           <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <TouchableOpacity
                   onPress={()=>NavigationService.goBack()}
                  >
                    <Image source={Images.Back} style={styles.imageSize}/>
                  </TouchableOpacity>
               
                </View>
                <View style={styles.pinTitleContainer}>
                    <Text style={styles.pinTitle}>Enter your PIN.</Text>
                </View>
                <View style={styles.pinTitleContainer}>
                    <Text style={styles.contentTitle}>You have received a separate PIN code by e-mail.</Text>
                </View>
               <View style={styles.verificationCodeContainer}>
                <CodeField
                  ref={ref}
                  {...props}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({index, symbol, isFocused}) => (
                    <Text
                      key={index}
                      style={[
                        styles.cell,
                        {
                          borderColor: isFocused ? Colors.Blue : Colors.Black,
                        },
                      ]}
                      onLayout={getCellOnLayoutHandler(index)}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                 />
                </View>
                <View style={styles.symbolContainer}>
                  <Image source={Images.Logo} style={styles.logoSize}/>
                  <Text style={styles.symbolContent}>Career Day UiA</Text>
                </View>
                <View style={styles.footContainer}>
                  <TouchableOpacity
                   onPress={()=>onContinue()}
                  >
                    <View style={styles.button1}>
                     {
                     loading ? <SkypeIndicator color='white' size={35} animationDuration={1200} /> :
                      <Text style={styles.buttonText}>
                        Continue
                      </Text>
                     }

                     </View>
                  </TouchableOpacity>
                  <View style={styles.privacyContainer}>
                    <Text style={styles.privacyTitle}>When you click continue, you also accept the {"\n"} <Text style={styles.privacyContent}>privacy policy</Text> and <Text style={styles.privacyContent}>Terms and conditions</Text>.</Text>
                  </View>
                </View>
            
           </View>

        </SafeAreaView>
      </ScrollView>
      </SafeAreaProvider>
    )

}
const mapStateToProps = ({auth}) =>{
  return{
     Auth:auth
  }
}

const mapDispatchToProps =dispatch=>{
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanyPin);