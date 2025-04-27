import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { DAMPING, SPACING, weekdays } from "@/app/constants/scheduler_constants";
import Day from "./Day";
import Animated, { FadeInDown, FadeOut, LinearTransition } from "react-native-reanimated";
export const ENTERING = FadeInDown.springify().damping(DAMPING);
export const EXITING = FadeOut.springify().damping(DAMPING);
export const LAYOUT_ANIMATION = LinearTransition.springify().damping(DAMPING);
export const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const Scheduler = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: SPACING, gap: SPACING }}
    >
      {weekdays.map((day: string) => (
        <Day key={`day=${day}`} day={day} />
      ))}
    </ScrollView>
  );
};

export default Scheduler;
