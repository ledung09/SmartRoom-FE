import Button from "@/components/ui/button";
import React from "react";
import { Pressable, Text, View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { InputCustom } from "@/components/ui/input";
import TimeUtil from "@/util/time-util";
import { CalendarDays } from "lucide-react-native";

const timeZone = "Asia/Ho_Chi_Minh";

export const DatetimePicker = () => {
  const today = new Date();
  const todayISOstring = today.toISOString();

  const [date, setDate] = React.useState(today);
  const [dateString, setDateString] = React.useState(
    TimeUtil.convertUtcToLocalDate(todayISOstring, timeZone)
  );
  const [show, setShow] = React.useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate ? currentDate : today);
    setDateString(
      TimeUtil.convertUtcToLocalDate(
        currentDate ? currentDate.toISOString() : todayISOstring,
        timeZone
      )
    );
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <>
      <View
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <InputCustom
          customFocused={show}
          customLeftIcon={CalendarDays}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
          caretHidden
          control={[dateString, setDateString]}
          hideX
        />
        <Pressable
          onPress={showDatepicker}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "transparent",
            height: 41,
            width: "100%",
          }}
        />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </>
  );
};
