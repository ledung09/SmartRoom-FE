import { COLOR } from "@/constants/colors";
import {
  Activity,
  ChevronsLeftRight,
  LucideIcon,
  PiggyBank,
  User,
  UsersRound,
} from "lucide-react-native";

export enum STATISTIC_NUMBER_ITEM {
  MEMBER_SUM = "MEMBER_SUM",
  ACTIVE_DAY_SUM = "ACTIVE_DAY_SUM",
  MONEY_MEMBER_SUM = "MONEY_SUM",
  MONEY_ACTIVITY_SUM = "MONEY_ACTIVITY_SUM",
  MONEY_DIFFERENCE = "MONEY_DIFFERENCE",
}

export interface STATISTIC_NUMBER_ITEM_CONTENT_ITEM_TYPE {
  title: string;
  icon: LucideIcon;
  bgColor: string;
  color: string;
}

export const STATISTIC_NUMBER_ITEM_CONTENT: {
  [key: string]: STATISTIC_NUMBER_ITEM_CONTENT_ITEM_TYPE;
} = {
  [STATISTIC_NUMBER_ITEM.MEMBER_SUM]: {
    title: "Thành viên",
    color: COLOR.SECONDARY,
    bgColor: COLOR.NEW_LIGHT_SECONDARY,
    icon: UsersRound,
  },
  [STATISTIC_NUMBER_ITEM.ACTIVE_DAY_SUM]: {
    title: "Đã sinh hoạt",
    color: COLOR.NEW_YELLOW,
    bgColor: COLOR.NEW_LIGHT_YELLOW,
    icon: UsersRound,
  },
  [STATISTIC_NUMBER_ITEM.MONEY_MEMBER_SUM]: {
    title: "Thu sinh hoạt",
    color: COLOR.NEW_ORANGE,
    bgColor: COLOR.NEW_LIGHT_ORANGE,
    icon: Activity,
  },
  [STATISTIC_NUMBER_ITEM.MONEY_ACTIVITY_SUM]: {
    title: "Thu/chi quỹ",
    color: COLOR.NEW_PURPLE,
    bgColor: COLOR.NEW_LIGHT_PURPLE,
    icon: PiggyBank,
  },
  [STATISTIC_NUMBER_ITEM.MONEY_DIFFERENCE]: {
    title: "Chênh lệch",
    color: COLOR.PRIMARY,
    bgColor: COLOR.NEW_LIGHT_BLUE,
    icon: ChevronsLeftRight,
  },
} as const;
