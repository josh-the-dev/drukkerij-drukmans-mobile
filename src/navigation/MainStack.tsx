import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import FrituurStackNavigator from "./FrituurStack";
import { Ionicons } from "@expo/vector-icons";
import { MAIN_ROUTES } from "./constants/Navigation.constants";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case MAIN_ROUTES.HOME:
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
                break;
              case MAIN_ROUTES.FRITUUR:
                iconName = focused ? "fast-food" : "fast-food-outline";
                break;
              default:
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={MAIN_ROUTES.HOME} component={HomeScreen} />
        <Tab.Screen
          name={MAIN_ROUTES.FRITUUR}
          component={FrituurStackNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
