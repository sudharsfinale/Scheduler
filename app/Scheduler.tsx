import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SPACING, weekdays } from "@/constants/scheduler_constants";
import Day from "./Day";

const Scheduler = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{padding:SPACING,gap:SPACING}}>
      {/* <Text>Scheduler</Text> */}
      {weekdays?.map((item: any) => (
        <Day day={item} />
      ))}
    </View>
    </ScrollView>
  );
};

export default Scheduler;
