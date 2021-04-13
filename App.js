import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { AppNavigation } from "./src/navigation/AppNavigation";
import AppBackground from "./src/theme/AppBackground";
import { Provider } from "react-redux";
import store from "./src/store/index";

const App = () => {
  const [loaded] = useFonts({
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
    DancingScriptRegular: require("./assets/fonts/DancingScript-Regular.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <AppBackground>
        <AppNavigation />
      </AppBackground>
    </Provider>
  );
};
export default App;
