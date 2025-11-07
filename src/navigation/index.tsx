import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import { RootStackParamList } from "./types";
import { Image, StatusBar } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <>
    <StatusBar
        barStyle="light-content" 
        backgroundColor="#000"
      />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: "#010c29",
          },
          headerTitle: () => (
            <Image
              source={require("../assets/logo.png")}
              style={{ height: 40, width: 120 }}
              resizeMode="contain"
            />
          ),
          headerShadowVisible: false,
          headerTintColor: "#ffbf23",
          headerTitleAlign: "center"}}>
        <Stack.Screen name="Home" component={Home} options={{ title: "SpiritualData" }} />
        <Stack.Screen name="Detail" component={Detail} options={{ title: "Details" }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
