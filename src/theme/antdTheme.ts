import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#00b4d8",
    colorInfo: "#00b4d8",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorBgBase: "#0a0e17",
    colorTextBase: "#e6edf3",
    colorBorder: "#30363d",
    borderRadius: 8,
    fontFamily:
      "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  components: {
    Layout: {
      headerBg: "rgba(10, 14, 23, 0.85)",
      bodyBg: "#0a0e17",
      footerBg: "#060910",
    },
    Menu: {
      darkItemBg: "transparent",
      darkSubMenuItemBg: "#0a0e17",
      itemBorderRadius: 6,
    },
    Card: {
      colorBgContainer: "#111827",
    },
    Button: {
      primaryShadow: "0 2px 0 rgba(0, 180, 216, 0.15)",
    },
  },
  algorithm: undefined,
};
