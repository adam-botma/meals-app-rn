import React from 'react';
import FiltersScreen from '../screens/FiltersScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen'
import  Colors  from '../constants/Colors';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,

  },
  MealDetail: MealDetailScreen

});


const FavoritesNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen,
});

const FiltersStack = createStackNavigator({
  Filters: FiltersScreen
})

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        tabBarLabel: 'Favorites!',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#ff6f00'
    }
  }




)
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {screen: MealsFavTabNavigator, navigationOptions:{drawerLabel: 'Meals'}},
    Filters: {screen: FiltersStack, navigationOptions:{drawerLabel: 'Filtered Search'}}
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans'
      }

    }
  }

);

export default createAppContainer(MainNavigator);
