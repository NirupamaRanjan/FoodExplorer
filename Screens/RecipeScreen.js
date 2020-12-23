import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MEALS } from "../Data/dummy-data";
import Card from "../Components/Card";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
const RecipeScreen = (props) => {
  const mealId = props.navigation.getParam("MealId");
  const selectedMeal = MEALS.find((meals) => meals.id === mealId);

  return (
    <View>
      <View>
        <Text>ingredients</Text>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={selectedMeal.ingredients}
          renderItem={(itemData) => {
            return (
              <Card>
                <Text key={itemData.index}>({itemData.item}</Text>
              </Card>
            );
          }}
        />
      </View>
      <View>
        <Text>Recipe</Text>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={selectedMeal.steps}
          renderItem={(itemData) => {
            return (
              <Card>
                <Text key={itemData.index}>({itemData.item}</Text>
              </Card>
            );
          }}
        />
      </View>
      <Button
        title="go to Categories"
        onPress={() => props.navigation.popToTop("Categories")}
      />
    </View>
  );
};

RecipeScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("MealId");
  const selectedMeal = MEALS.find((meals) => meals.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => {
            console.log("meal is favourited");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});
export default RecipeScreen;
