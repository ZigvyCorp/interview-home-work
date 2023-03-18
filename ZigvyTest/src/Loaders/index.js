import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeHeader from "../Screens/homeHeader";
import PostScreen from "../Screens/post";
import PostDetail from "../Screens/postDetail";

const ProjectStack = createNativeStackNavigator();

const Project = () => {
  return (
    <ProjectStack.Navigator screenOptions={{ headerShown: true }}>
      <ProjectStack.Screen
        name="Blogs"
        component={PostScreen}
        options={{ header: () => <HomeHeader /> }}
      />
      <ProjectStack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{ title: "Post Detail" }}
      />
    </ProjectStack.Navigator>
  );
};

export default Project;
