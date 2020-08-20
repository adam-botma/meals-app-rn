import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';

const FavoritesScreen = props => {
  const favoriteMeals = useSelector(state  => state.meals.favoriteMeals);

  if(favoriteMeals.length === 0 || !favoriteMeals){
    return <View style={styles.noFaves}>
      <Text>You have not Favorites yet.... start adding some!</Text>
    </View>
  }

  return (
    <MealList listData={favoriteMeals} navigation={props.navigation} />
  );

};

FavoritesScreen.navigationOptions= navData => {
  return {
  headerTitle: 'Your Favorites',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
  },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerLeft: ()=>(
    <HeaderButtons HeaderButtonComponent={HeaderButton} >
      <Item title='Menu' iconName='ios-menu' onPress={() => {
        navData.navigation.toggleDrawer();
      }} />
    </HeaderButtons>
  )
}
};

const styles = StyleSheet.create({

  noFaves: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
})


export default FavoritesScreen;
