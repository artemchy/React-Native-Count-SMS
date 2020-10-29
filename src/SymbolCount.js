import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

export const SymbolCount = ({ requiredCount }) => {
  const [text, setText] = useState("");
  const [countSMS, setTcount] = useState();

  return (
    <View>
      <TextInput
        onChangeText={(text) => setText(text)}
        style={styled.input}
        numberOfLines={10}
        multiline={true}
      ></TextInput>
      <View style={styled.symbolCount}>
        <TextInput
          onChangeText={(count) => setTcount(count)}
          style={styled.symbolCountInput}
        ></TextInput>
        <Text style={styled.symbolCountText}>Символiв</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => requiredCount(text, countSMS)}
          style={styled.btn}
        >
          <Text style={styled.btnText}>Порахувати кiлькiсть SMS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styled = StyleSheet.create({
  input: {
    borderColor: "#ccc",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 4,
    paddingLeft: 10,
    paddingVertical: 40,
  },
  symbolCount: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  symbolCountInput: {
    borderColor: "#ccc",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 4,
    width: 65,
    height: 50,
    paddingLeft: 10,
    fontSize: 30,
  },
  symbolCountText: {
    fontSize: 22,
    textTransform: "uppercase",
    fontWeight: "500",
    marginLeft: 20,
  },
  btn: {
    maxWidth: "70%",
    marginTop: 30,
    backgroundColor: "#4169E1",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
