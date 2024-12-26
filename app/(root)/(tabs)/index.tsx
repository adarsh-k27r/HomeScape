import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl font-rubik my-10">Welcome to the HomeScape</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href={{ pathname: "/properties/[id]", params: { id: "1" } }}>Property</Link>
    </View>
  );
}
