import React,{useState} from 'react'
import { StyleSheet, Text, View 
    ,Linking,TouchableOpacity} from 'react-native'

import QRCodeScanner from 'react-native-qrcode-scanner'

import {RNCamera} from 'react-native-camera'
const CodeScanner = () => {
const [qr,setQr]=useState('');
const [reac,setReac]=useState(false);

const func=()=>{
    setReac(true);
    setQr('');
}
const onSuccess = e => {
    setQr(e.data)
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <QRCodeScanner
           reactivate={reac}

    containerStyle={{justifyContent:'center',alignItems:'center'}}
           onRead={onSuccess}
           topContent={
            <Text style={styles.centerText}>
              Go{' '}
              and scan the QR code.
              <Text style={styles.textBold}>{qr}</Text>
            </Text>
          }
          bottomContent={
            <TouchableOpacity onPress={func} style={{backgroundColor:'mediumseagreen',width:100,height:50,justifyContent:'center',alignItems:'center',borderRadius:12,marginTop:30}}>
                <Text>Reactivate</Text>
            </TouchableOpacity>}
      />
      

    


        </View>
    )
}

export default CodeScanner

const styles = StyleSheet.create({

    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
      },
      textBold: {
        fontWeight: '500',
        color: '#000'
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
      },
      buttonTouchable: {
        padding: 16,

      }
})
