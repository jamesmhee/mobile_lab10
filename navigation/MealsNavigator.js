// import คอมโพเนนต์ที่จำเป็น
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer"; 
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { Ionicons } from '@expo/vector-icons'; 

const MealsNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "lightblue" },
      headerTintColor: "white",
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "lightblue" },
      headerTintColor: "white",
    },
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      // tabBarLabel: "Meals",
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
        return (<Ionicons name="ios-restaurant" size={24} color="black" />);
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
        return (<Ionicons name="ios-star" size={24} color="black" />);
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "darkblue",
      labelStyle: { fontSize: 18, },
      style: { backgroundColor: "lightblue", },
      },
  },
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Menu 1" },
      },
    Filters: FiltersNavigator,
  },
  { 
    contentOptions: { 
      activeTintColor: 'lightblue' 
    },
  }
);

// export default createAppContainer(MealsNavigator);
export default createAppContainer(MainNavigator);