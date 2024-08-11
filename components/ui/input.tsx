import { InputProps, Input as RNEInput } from "@rneui/themed";
import { COLOR } from "@/constants/colors";
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { CalendarDays, LucideIcon, Search, X } from "lucide-react-native";
import React from "react";

export default function Input(props: InputProps) {
  return (
    <RNEInput
      selectionColor={COLOR.PRIMARY}
      underlineColorAndroid="transparent"
      autoCorrect={false}
      {...props}
    />
  );
}

interface InputSearchProps extends InputProps {
  control: [string, React.Dispatch<React.SetStateAction<string>>];
  customBorder?: boolean;
  hideX?: boolean;
  minimalInput?: string;
  cursorPos?: number;
  customLeftIcon?: LucideIcon;
  customFocused?: boolean;
  hideLeftIcon?: boolean;
  initFocus?: boolean;
}

export function InputCustom(props: InputSearchProps) {
  const Icon = props.customLeftIcon || Search;
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = props.control;
  const inputRef = React.useRef<TextInput>(null);

  React.useEffect(() => {
    if (props.initFocus) {
      inputRef.current?.focus();
    }
  }, []);

  const handleSelect = () => {
    setFocused(!focused);
  };

  const Xlen = props.minimalInput ? props.minimalInput.length : 0;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          position: "relative",
        }}
      >
        <RNEInput
          autoCapitalize="none"
          ref={inputRef}
          selectionColor={COLOR.PRIMARY}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          onFocus={() => handleSelect()}
          onBlur={() => handleSelect()}
          onChangeText={(value) => {
            setValue(value);
          }}
          value={value}
          {...props}
          style={[
            {
              paddingLeft: !props.hideLeftIcon ? 38 : 12,
            },
            props.style,
          ]}
          inputStyle={[
            {
              borderColor: props.customBorder
                ? COLOR.PRIMARY
                : focused || props.customFocused
                ? COLOR.PRIMARY
                : COLOR.IN_ACTIVE,
              borderWidth: !props.customBorder
                ? 1.5
                : focused || props.customFocused
                ? 2.5
                : 1.5,
            },
            props.inputStyle,
          ]}
        />
        {!props.hideLeftIcon && (
          <Icon
            style={{
              position: "absolute",
              top: 10,
              left: 10,
            }}
            size={21}
            color={COLOR.IN_ACTIVE}
          />
        )}
        {!props.hideX && value.length > Xlen && (
          <X
            style={{
              position: "absolute",
              top: 11,
              right: 10,
              paddingVertical: 10,
              paddingLeft: 28,
            }}
            size={18}
            color={COLOR.IN_ACTIVE}
            onPress={() => {
              setValue(props.minimalInput ? props.minimalInput : "");
              inputRef.current?.focus();
            }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
