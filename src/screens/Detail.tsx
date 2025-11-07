import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableOpacity } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;


const Detail: React.FC<Props> = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {item.thumbnail ? <Image source={{ uri: item.thumbnail }} style={styles.image} /> : null}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.meta}>{item.meta}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: { height: 200, borderRadius: 12, marginTop: 12 },
  title: { fontSize: 20, fontWeight: "700", marginTop: 12 },
  meta: { fontSize: 13, color: "#666", marginVertical: 6 },
  content: { fontSize: 16, lineHeight: 22, marginTop: 12 },
});

export default Detail;
