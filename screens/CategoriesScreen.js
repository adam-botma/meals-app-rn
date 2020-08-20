import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import { withOrientation } from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';



const CategoriesScreen = props => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={() => {
        props.navigation.navigate({
          routeName: 'CategoryMeals',
          params: {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
            categoryColor: itemData.item.color
          }
        })
      }}>
        <View style={{...styles.categoryContainer, backgroundColor: itemData.item.color}}>
          <Text numberOfLines={2} style={styles.title}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}></FlatList>
  );

};

CategoriesScreen.navigationOptions = navData=> {
  return{
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerLeft: ()=>(
    <HeaderButtons HeaderButtonComponent={HeaderButton} >
      <Item title='Menu' iconName='ios-menu' onPress={()=> {
        navData.navigation.toggleDrawer();
      }} />
    </HeaderButtons>
  )
}
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },

  categoryContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right'

  }
})


export default CategoriesScreen;
