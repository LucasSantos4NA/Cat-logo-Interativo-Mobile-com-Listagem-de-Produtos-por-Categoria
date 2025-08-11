import { TabBar } from "react-native-tab-view";
import { styles } from "./styles";
export function RenderTabBar(props) {
  return (
    <TabBar
      {...props}
      indicatorContainerStyle={{ backgroundColor: "white", color: "red" }}
      indicatorStyle={styles.indicatorStyle}
      style={styles.style}
      activeColor={styles.colorRender}
      inactiveColor={styles.colorRender}
    />
  );
}
