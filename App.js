import { Navigation } from "react-native-navigation";

import MainScreen from "./src/screens/mainscreen";
import Resume from "./src/tabs/resume";
import Projects from "./src/tabs/projects";
import SocialLinks from "./src/tabs/sociallinks"

// Register Screens
Navigation.registerComponent("id.MainScreen", () => MainScreen);
Navigation.registerComponent("id.ResumeTab", () => Resume);
Navigation.registerComponent("id.ProjectsTab", () => Projects);
Navigation.registerComponent("id.SocialLinksTab", () => SocialLinks);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "id.MainScreen",
    title: "Babar's Resume"
  }
});