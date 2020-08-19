import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <View style={styles.mealItem}>
        <TouchableOpacity>
          <View>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
              <ImageBackground source={{uri: itemData.item.imageUrl}} style={styles.backgroundImage}>
                <View style= {styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}> {itemData.item.title}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
              <Text>{itemData.item.duration}</Text>
              <Text>{itemData.item.complexity.toUpperCase()}</Text>
              <Text>{itemData.item.affordability.toUpperCase()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  const categoryId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);


  return (
    <View style={styles.screen}>
      <FlatList style={styles.list} data={displayedMeals} renderItem={renderMealItem} />
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
  },

  mealRow: {
    flexDirection: 'row'
  },

  mealHeader: {
    height: '85%',

  },

  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 12,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowOffset: { width: 2, height: 8 },
    shadowRadius: 10,
    elevation: 3,

  },

  list: {
    width: '90%',

  },

  backgroundImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',

  },

  titleContainer: {
    backgroundColor: 'rgba( 0, 0, 0, 0.5)',
    width: '100%'
  },

  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 12,


  }
})


export default CategoryMealScreen;
