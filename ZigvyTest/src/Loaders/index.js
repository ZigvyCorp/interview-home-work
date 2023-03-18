import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PostScreen from "../Screens/post";

const ProjectStack = createNativeStackNavigator();

const Project = () => {
  return (
    <ProjectStack.Navigator screenOptions={{ headerShown: true }}>
      <ProjectStack.Screen name="Post" component={PostScreen} />
    </ProjectStack.Navigator>
  );
};

export default Project;
