import {
  BarChartBig,
  Home,
  LucideIcon,
  QrCode,
  Users,
  Settings,
  Heart,
} from "lucide-react-native";

export const routeMain = "payments";
export const routeMainIndex = 2;

export const routeDetailObject = {
  ["index"]: {
    id: 0,
    label: "Home",
    name: "index",
    icon: Home,
  },
  ["members"]: {
    id: 1,
    label: "Wishlist",
    name: "members",
    icon: Heart,
  },
  ["payments"]: {
    id: 2,
    label: "Thanh toán",
    name: "payments",
    icon: QrCode,
  },
  ["statistics"]: {
    id: 3,
    label: "Thống kê",
    name: "statistics",
    icon: BarChartBig,
  },
  ["settings"]: {
    id: 4,
    label: "Cài đặt",
    name: "settings",
    icon: Settings,
  },
};

export const routeDetailsArray = Object.values(routeDetailObject).sort(
  (a, b) => a.id - b.id
);
