import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import AppText from '../components/heading/AppText'


const DeleteScreen = ({onDone, visible = false}) => {
  return (
    <Modal visible={visible} >
         <View style={styles.container}>
          <AppText style={styles.text}>Deleted Successfully....!</AppText>
        
       <LottieView
        onAnimationFinish={onDone}
            autoPlay loop={false} source={require('../assets/animations/animation_done.json')}
            style={styles.animation}/>
    
      </View>

    </Modal>    
  )
}

export default DeleteScreen

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    },
    text:{
        top:"8%"
    },
    animation:{
        // width:250,
        // borderWidth:1,
        objectFit:'fill'
    }
})