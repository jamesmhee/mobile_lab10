import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FiltersScreen = (props) => {
  const [isGlutenFree, setisGlutenFree] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegetarian, setisVegetarian] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.title}>Gluten-free</Text>
        <Switch
          trackColor={{true: 'green', false: "red"}}
          thumbColor="white"
          value={isGlutenFree}
          onValueChange={() => {
            setisGlutenFree(!isGlutenFree);
          }}
        ></Switch>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.title}>Lactose-free</Text>
        <Switch
          trackColor={{true: 'green', false: "red"}}
          thumbColor="white"
          value={isLactoseFree}
          onValueChange={() => {
            setisLactoseFree(!isLactoseFree);
          }}
        ></Switch>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.title}>Vegan-free</Text>
        <Switch
          trackColor={{true: 'green', false: "red"}}
          thumbColor="white"
          value={isVegan}
          onValueChange={() => {
            setisVegan(!isVegan);
          }}
        ></Switch>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.title}>Gluten-free</Text>
        <Switch
          trackColor={{true: 'green', false: "red"}}
          thumbColor="white"
          value={isVegetarian}
          onValueChange={() => {
            setisVegetarian(!isVegetarian);
          }}
        ></Switch>
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) =>  {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => {
      return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
            }
          }
        />
    </HeaderButtons>)
    },
    headerRight: () => {
      return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
        />
    </HeaderButtons>)
    }
  }
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
