import { Pressable } from "react-native";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const SPACING = 10;
const COLOR = "#e7e7e7";
const BORDER_RADIUS = 16;
const PRIMARY_COLOR = "#dcb2ff";
const START_HOUR = 8;
const DAMPING = 14;
const ENTERING = FadeInDown.springify().damping(DAMPING);
const EXITING = FadeOut.springify().damping(DAMPING);
const LAYOUT_ANIMATION = LinearTransition.springify().damping(DAMPING);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export {
  weekdays,
  SPACING,
  COLOR,
  BORDER_RADIUS,
  PRIMARY_COLOR,
  START_HOUR,
  ENTERING,
  EXITING,
  LAYOUT_ANIMATION,
  AnimatedPressable,
};
