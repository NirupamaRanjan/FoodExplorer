import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchablWithoutFeedback,
  Button,
  Platform,
} from "react-native";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import { CATEGORIES } from "../Data/dummy-data";
import Card from "../Components/Card";
import colors from "../Constants/Colors";
import { version } from "react";

const CategoriesScreen = (props) => {
  let TouchCmp = TouchableOpacity;

  const itemRender = (itemData) => {
    return (
      <TouchCmp
        onPress={() =>
          props.navigation.navigate({
            routeName: "Filtered",
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
      >
        <Card style={{ ...styles.Card, backgroundColor: itemData.item.color }}>
          <Text style={styles.title}>{itemData.item.name}</Text>
        </Card>
      </TouchCmp>
    );
  };

  return (
    <View>
      <FlatList data={CATEGORIES} renderItem={itemRender} numColumns={2} />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Categories",
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  Card: {
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    width: 175,
    height: 150,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});
