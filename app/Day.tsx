import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import {
  BORDER_RADIUS,
  COLOR,
  LAYOUT_ANIMATION,
  PRIMARY_COLOR,
  SPACING,
} from "@/constants/scheduler_constants";
import DayBlock from "./DayBlock";
import Animated from "react-native-reanimated";
interface DayProps {
  day: string;
}
const Day = (props: DayProps) => {
  const { day } = props;
  const [isOn, setIsOn] = useState(false);
  return (
    <Animated.View
    layout={LAYOUT_ANIMATION}
      style={{
        padding: SPACING,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS,
        borderColor: COLOR,
        backgroundColor: isOn ? "transparent" : COLOR,
        gap:SPACING
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>{day}</Text>
        <Switch
          trackColor={{ true: PRIMARY_COLOR }}
          value={isOn}
          onValueChange={(value) => setIsOn(value)}
          style={{
            transform: [{ scale: 0.7 }],
            transformOrigin: ["100%", "50%", 0],
          }}
        />
      </View>
      {isOn ? <DayBlock /> : null}
    </Animated.View>
  );
};

export default Day;
