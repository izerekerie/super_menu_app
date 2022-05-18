import React from "react";
import { Text, TextInput, StyleSheet,View } from "react-native";
import { Octicons } from "@expo/vector-icons";

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <View style={styles.inputStyle}>
        <Octicons
          name="mail"
          size={24}
          color="grey"
          style={{ marginRight: 10 }}
        />
        <TextInput
          style={[
            styles.textInput,
            props.multiline && { height: props.numberOfLines * 40 },
            hasError && styles.errorInput,
          ]}
          value={value}
          onChangeText={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
        />
       
      </View>
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
      </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: "100%",
    margin: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    textAlignVertical: "top",
  },
  errorText: {
    fontSize: 10,
    color: "red",
  },
  errorInput: {
    borderColor: "red",
  },
  inputStyle: {
    alignItems: "flex-start",
    flexDirection: "row",
    color: "#858585",
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
    height: 50,
    paddingVertical: 10,
  },
});

export default CustomInput;
