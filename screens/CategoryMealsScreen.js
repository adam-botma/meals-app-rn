import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';


const CategoryMealScreen = props => {

  const categoryId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);


  return (
    <MealList listData={displayedMeals} navigation={props.navigation}/>
  );

};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryName = navigationData.navigation.getParam('categoryTitle');

  return {
    headerTitle: categoryName,
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  }
}


const styles = StyleSheet.create({



})


export default CategoryMealScreen;
