import { Text, View } from "react-native";
import Scheduler from "./Scheduler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <Scheduler />
      </View>
    </SafeAreaView>
  );
}
