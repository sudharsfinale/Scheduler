import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Animated from "react-native-reanimated"
import {
  BORDER_RADIUS,
  SPACING,
  START_HOUR,
  COLOR,
  ENTERING,
  EXITING,
  LAYOUT_ANIMATION,
  AnimatedPressable,
} from "@/constants/scheduler_constants";
// import { Plus } from 'lucide-react-native';
import { Plus, X } from "lucide-react-native";
import HourBlock from "./HourBlock";

const DayBlock = () => {
  const [hours, setHours] = useState([START_HOUR]);
  return (
    <Animated.View style={{ gap: SPACING }} entering={ENTERING}
    layout={LAYOUT_ANIMATION}
    exiting={EXITING}>
      {hours?.map((hour) => (
        <Animated.View
          style={{ flexDirection: "row", alignItems: "center", gap: SPACING }}
          key={`hour-${hour}`}
          entering={ENTERING}
          layout={LAYOUT_ANIMATION}
          exiting={EXITING}
        >
          <Text>From:</Text>
          {/* <Text>{hour}:00</Text> */}
          <HourBlock block={hour} />
          <Text>To:</Text>
          <HourBlock block={hour + 1} />
          {/* <Text>{hour + 1}:00</Text> */}
          <Pressable
            
            onPress={() => {
              setHours((prev) => [...prev.filter((_hour) => _hour !== hour)]);
            }}
          >
            <View style={{
              backgroundColor: COLOR,
              aspectRatio: 1,
              height: 24,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: BORDER_RADIUS - SPACING,
            }}>
            <X size={14} color={"#333"} />
            </View>
          </Pressable>
        </Animated.View>
      ))}
      <AnimatedPressable
      layout={LAYOUT_ANIMATION}
        onPress={() => {
          if (hours.length === 0) {
            setHours([START_HOUR]);
            return;
          }
          setHours((prev) => [...prev, prev[prev.length - 1] + 1]);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: SPACING / 2,
            padding: SPACING,
            borderRadius: BORDER_RADIUS - SPACING / 2,
            backgroundColor: COLOR,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: SPACING / 2,
          }}
        >
          <Plus size={18} color={"#333"} />
          <Text style={{ fontSize: 14, color: "#333" }}>Add More</Text>
        </View>
      </AnimatedPressable>
    </Animated.View>
  );
};

export default DayBlock;
