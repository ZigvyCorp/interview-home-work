import { Text, View } from "antd-mobile-rn";
import { Image, StyleSheet } from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Image
          style={{
            width: 40,
            height: 40,
            position: "absolute",
            left: 16,
            bottom: 8,
          }}
          source={{
            uri: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/72db83902e7a0ab01d5f8cc6155aec46.png",
          }}
        />
        <Text style={styles.title}>Blogs</Text>
        <View style={styles.user}>
          <View style={[styles.avatar, { backgroundColor: "#3498db" }]}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              U
            </Text>
          </View>
          <Text style={styles.name}>User name</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    paddingBottom: 8,
    alignItems: "flex-end",
    borderBottomWidth: 2,
    borderBottomColor: "#A1A1AA",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    color: "#3498db",
    fontWeight: "bold",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 16,
    bottom: 8,
  },
  name: {
    fontSize: 12,
    color: "black",
    fontWeight: "500",
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeHeader;
