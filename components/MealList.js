import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { useSelector } from 'react-redux';


const MealList = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
    return (
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={() => {

          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFavorite: isFavorite,
            }
          })
        }}>
          <View>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
              <ImageBackground source={{ uri: itemData.item.imageUrl }} style={styles.backgroundImage}>
                <View style={styles.titleContainer}>
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



return (

  <View style={styles.listContainer}>
    <FlatList style={styles.list} data={props.listData} renderItem={renderMealItem} />
  </View>

)



}

const styles = StyleSheet.create({

  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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

export default MealList;
