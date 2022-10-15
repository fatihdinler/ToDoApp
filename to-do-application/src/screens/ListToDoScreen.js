import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Logo from '../components/Logo';
import AddNewFolderButton from '../components/AddNewFolderButton';

const ListToDoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <AddNewFolderButton whichPageToGo={""} />
    </SafeAreaView>
  )
}

export default ListToDoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
})