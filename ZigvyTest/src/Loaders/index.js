import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PostScreen from "../Screens/post";
import PostDetail from "../Screens/postDetail";

const ProjectStack = createNativeStackNavigator();

const Project = () => {
  return (
    <ProjectStack.Navigator screenOptions={{ headerShown: true }}>
      <ProjectStack.Screen name="Blogs" component={PostScreen} />
      <ProjectStack.Screen name="PostDetail" component={PostDetail} />
    </ProjectStack.Navigator>
  );
};

export default Project;
