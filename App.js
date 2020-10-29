import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SymbolCount } from "./src/SymbolCount";
import { NeedCountSMS } from "./src/NeedCountSMS";

export default function App() {
  const [requiredCountSms, setRequiredCount] = useState();
  const requiredCountFordispatch = (text, countSymbols) => {
    const symbols = text.split("");
    const countSMS = symbols.reduce((acc, el, i, arr) => {
      if (i < Math.ceil(arr.length / countSymbols)) {
        acc[i] = arr.slice(i * countSymbols, i * countSymbols + countSymbols);
      }
      return acc;
    }, []);
    // console.log(countSMS);
    setRequiredCount(countSMS.length);
  };

  return (
    <View style={styles.app}>
      <View style={styles.wrapper}>
        <SymbolCount requiredCount={requiredCountFordispatch} />
      </View>
      <View style={{ paddingTop: 40, alignItems: "center" }}>
        <NeedCountSMS requiredCountSms={requiredCountSms} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
});
