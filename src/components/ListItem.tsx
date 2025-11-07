import React, { memo } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import type { Item } from "../types";

type Props = {
  item: Item;
  onPress: (item: Item) => void;
};

const ListItem: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      {item.thumbnail ? (
        <Image source={{ uri: item.thumbnail }} style={styles.thumb} />
      ) : (
        <View style={[styles.thumb, styles.thumbPlaceholder]} />
      )}
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        {item.meta ? <Text numberOfLines={1} style={styles.meta}>{item.meta}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

export default memo(ListItem, (prevProps, nextProps) => {
    return prevProps.item === nextProps.item && prevProps.onPress === nextProps.onPress;
});

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 12, alignItems: "center" },
  thumb: { width: 64, height: 64, borderRadius: 8, marginRight: 12 },
  thumbPlaceholder: { backgroundColor: "#eee" },
  content: { flex: 1 },
  title: { fontSize: 16, fontWeight: "600" },
  meta: { fontSize: 12, color: "#666", marginTop: 4 }
});
