import { BORDER_RADIUS, COLOR, SPACING } from "@/constants/scheduler_constants";
import { Text, View } from "react-native";

const HourBlock = ({ block }: { block: number }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: COLOR,
        borderRadius: BORDER_RADIUS - SPACING,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        paddingVertical: SPACING / 4,
      }}
    >
      <Text>
        {block > 9 ? block : `0${block}`}:00{" "}
        {block > 11 && block < 24 ? "PM" : "AM"}
      </Text>
    </View>
  );
};

export default HourBlock;