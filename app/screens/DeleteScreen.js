import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'


const DeleteScreen = (onDone, visible = false) => {
  return (
    <Modal visible={visible} style={{zIndex:3}}>
         <View style={styles.container}>
        
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
        backgroundColor:"black"
    },
    animation:{
        width:250,
    }
})