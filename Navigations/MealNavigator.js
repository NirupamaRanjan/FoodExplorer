import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import CategoriesScreen from "../Screens/CategoriesScreen";
import FilteredScreen from "../Screens/FilteredScreen";
import RecipeScreen from "../Screens/RecipeScreen";
import FavouriteScreen from "../Screens/FavoriteScreen";

import colors from "../Constants/Colors";

const MealNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Filtered: FilteredScreen,
    Recipe: RecipeScreen,
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? colors.primaryColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : colors.primaryColor,
    },
  }
);

const MealFavTabNavigator = createBottomTabNavigator({
  Meals: MealNavigator,
  Favourite: FavouriteScreen,
});

export default createAppContainer(MealFavTabNavigator);
