import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FrituurOverviewScreen from "../screens/FrituurOverview";

const FrituurStack = createNativeStackNavigator();

const FrituurStackNavigator = () => {
  return (
    <FrituurStack.Navigator screenOptions={{ header: () => null }}>
      <FrituurStack.Screen
        name="FrituurOverview"
        component={FrituurOverviewScreen}
      />
    </FrituurStack.Navigator>
  );
};

export default FrituurStackNavigator;
