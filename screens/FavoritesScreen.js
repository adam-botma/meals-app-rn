import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {

  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return (
    <MealList listData={favoriteMeals} navigation={props.navigation} />
  );

};

FavoritesScreen.navigationOptions= {
  headerTitle: 'Your Favorites',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default FavoritesScreen;
