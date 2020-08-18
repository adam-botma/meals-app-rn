import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import Colors from '../constants/Colors'

const CategoryMealScreen = props => {

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Button title='Get Details' onPress={()=>{
        props.navigation.navigate('MealDetail');
      }}></Button>
    </View>
  );

};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryName = navigationData.navigation.getParam('categoryTitle');

  return {
    headerTitle: categoryName,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default CategoryMealScreen;
