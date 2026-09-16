import {
  View,
  Text,
  Pressable,
  StyleSheet,
  LayoutChangeEvent,
} from "react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";
import { colors, fontFamily } from "@/constants/theme";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

const TAB_CONFIG: {
  name: string;
  label: string;
  icon: IoniconName;
  iconOutline: IoniconName;
}[] = [
  { name: "index", label: "Home", icon: "home", iconOutline: "home-outline" },
  { name: "learn", label: "Learn", icon: "book", iconOutline: "book-outline" },
  {
    name: "ai-teacher",
    label: "AI Teacher",
    icon: "sparkles",
    iconOutline: "sparkles-outline",
  },
  {
    name: "chat",
    label: "Chat",
    icon: "chatbubble",
    iconOutline: "chatbubble-outline",
  },
  {
    name: "profile",
    label: "Profile",
    icon: "person",
    iconOutline: "person-outline",
  },
];

const CIRCLE_SIZE = 50;
const TAB_HEIGHT = 50;

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const tabBarWidth = useSharedValue(0);
  const activeIndex = useSharedValue(state.index);

  useEffect(() => {
    activeIndex.value = withSpring(state.index, {
      damping: 18,
      stiffness: 250,
      mass: 0.7,
    });
  }, [state.index]);

  const circleAnimStyle = useAnimatedStyle(() => {
    if (tabBarWidth.value === 0) return {};
    const tabW = tabBarWidth.value / TAB_CONFIG.length;
    const x = activeIndex.value * tabW + tabW / 2 - CIRCLE_SIZE / 2;
    return { transform: [{ translateX: x }] };
  });

  const handleLayout = (e: LayoutChangeEvent) => {
    tabBarWidth.value = e.nativeEvent.layout.width;
  };

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom },
      ]}
      onLayout={handleLayout}
    >
      {/* Sliding active circle — rendered behind tab buttons */}
      <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
        <Animated.View style={[styles.circle, circleAnimStyle]} />
      </View>

      {state.routes.map((route, index) => {
        const tab = TAB_CONFIG[index];
        if (!tab) return null;
        const isActive = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isActive && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({ type: "tabLongPress", target: route.key });
        };

        return (
          <Pressable
            key={route.key}
            style={styles.tab}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityRole="button"
            accessibilityLabel={tab.label}
          >
            <Ionicons
              name={isActive ? tab.icon : tab.iconOutline}
              size={22}
              color={isActive ? colors.canvas : "#9ca3af"}
            />
            {!isActive && <Text style={styles.label}>{tab.label}</Text>}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.canvas,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 8,
    alignItems: "flex-start",
  },
  circle: {
    position: "absolute",
    top: 8,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: colors.primary,
  },
  tab: {
    flex: 1,
    height: TAB_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: fontFamily.regular,
    fontSize: 10,
    color: "#9ca3af",
    marginTop: 3,
    textAlign: "center",
  },
});
