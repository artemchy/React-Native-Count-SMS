import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const NeedCountSMS = ({ requiredCountSms }) => {
  return (
    <View style={styled.needCountSms}>
      <Text style={{ paddingRight: 20, fontSize: 20 }}>Потрiбно смс:</Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {requiredCountSms}
      </Text>
    </View>
  );
};

const styled = StyleSheet.create({
  needCountSms: {
    flexDirection: "row",
  },
});
