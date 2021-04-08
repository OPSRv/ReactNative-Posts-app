import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { AppNavigation } from "./src/navigation/AppNavigation";
import AppBackground from "./src/theme/AppBackground";

const App = () => {
  const [loaded] = useFonts({
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <AppBackground>
      <AppNavigation />
    </AppBackground>
  );
};
export default App;
