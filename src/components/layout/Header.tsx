"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu, Typography } from "antd";
import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";

const { Header: AntHeader } = Layout;

export default function Header() {
  const [activeKey, setActiveKey] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navItems.map((item) => item.key);
      let current = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }

      setActiveKey(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (key: string) => {
    document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  const menuItems = navItems.map((item) => ({
    key: item.key,
    label: item.label,
    onClick: () => scrollTo(item.key),
  }));

  return (
    <>
      <AntHeader
        className="site-header"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #30363d" : "1px solid transparent",
          transition: "border-color 0.3s ease",
        }}
      >
        <Typography.Text
          strong
          style={{
            fontSize: 18,
            color: "#00b4d8",
            cursor: "pointer",
            letterSpacing: 0.5,
          }}
          onClick={() => scrollTo("home")}
        >
          AMT<span style={{ color: "#e6edf3", fontWeight: 400 }}>.sec</span>
        </Typography.Text>

        <Menu
          mode="horizontal"
          selectedKeys={[activeKey]}
          items={menuItems}
          className="desktop-nav"
          style={{
            flex: 1,
            justifyContent: "flex-end",
            minWidth: 0,
            background: "transparent",
            border: "none",
          }}
        />

        <Button
          type="text"
          icon={<MenuOutlined />}
          className="mobile-nav-toggle"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation menu"
        />
      </AntHeader>

      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        styles={{ body: { padding: 0 } }}
      >
        <Menu mode="vertical" selectedKeys={[activeKey]} items={menuItems} />
      </Drawer>
    </>
  );
}
