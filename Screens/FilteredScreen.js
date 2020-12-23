import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES, MEALS } from "../Data/dummy-data";
import Card from "../Components/Card";

const FilteredScreen = (props) => {
  const CatId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === CatId);

  const display = MEALS.filter((item) => item.categoryIds.indexOf(CatId) >= 0);
  const itemRender = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate({
            routeName: "Recipe",
            params: {
              MealId: itemData.item.id,
            },
          })
        }
      >
        <Card style={styles.Card}>
          <Text style={styles.title}>{itemData.item.title}</Text>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList data={display} renderItem={itemRender}></FlatList>
    </View>
  );
};

FilteredScreen.navigationOptions = (navigationData) => {
  const CategoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === CategoryId
  );

  return {
    headerTitle: selectedCategory.name,
  };
};
export default FilteredScreen;

const styles = StyleSheet.create({
  Card: {
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});
