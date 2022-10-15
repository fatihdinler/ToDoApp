import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import color from '../colors/color';
import { useState } from 'react';



const AddNewFolderButton = (props) => {

    const handlePress = () => {
        return;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={handlePress}
            >
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <Text style={styles.informativeText}>Add New To Do Folder</Text>

        </View>
    )
}

export default AddNewFolderButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: color.green,
        borderRadius: 8,
    },
    text: {
        color: color.green,
        fontSize: 30,
        fontWeight: '200'
    },
    informativeText: {
        fontWeight: '300',
        marginTop: 20,
    }
})