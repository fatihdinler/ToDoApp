import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import color from '../colors/color';

const Logo = () => {
  return (
    <View>
      <View style={styles.logoContainer}>
        <View style={styles.dashLeft}></View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {fontWeight : '300'}]}>TO </Text>
          <Text style={[styles.text, {color : color.green, fontWeight : '300'}]}>DO</Text>
        </View>
        <View style={styles.dashRigth}></View>
      </View>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 60,
      },
      dashLeft: {
        flex: 1,
        // width : 50,
        height: 0.8,
        backgroundColor: 'green'
      },
      dashRigth: {
        flex: 1,
        // width : 50,
        height: 0.8,
        backgroundColor: 'green',
        right: 0,
      },
      textContainer : {
        flexDirection : 'row',
        margin : 25,
      },
      text : {
        fontSize : 30,
      }
})