import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { CircleInfoIcon, MenuIcon } from "./Icons";


export function Header() {
    return (
        <View className="flex-1 bg-white">
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: "#F8CC1B" },
              headerTintColor: "yellow",
              headerTitle: "",
              headerLeft: () => (
                <Link asChild href="/user">
                  <Pressable>
                    <MenuIcon />
                  </Pressable>
                </Link>
              ),
              headerRight: () => (
                <Link asChild href="/user">
                  <Pressable>
                    <CircleInfoIcon />
                  </Pressable>
                </Link>
              ),
            }}
          />
        </View>
      );
}