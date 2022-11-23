import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screen/post";
import LoginScreen from "../screen/login/LoginScreen";

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                initialRouteName:"Dashboard",
                headerStyle: {
                    backgroundColor: '#F77737',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />

            
        </Stack.Navigator>
    );
};

export default StackNavigation;