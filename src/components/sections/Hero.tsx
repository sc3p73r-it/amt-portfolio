"use client";

import {
  ArrowDownOutlined,
  DownloadOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, Row, Space, Tag, Typography } from "antd";
import { profile, vendors } from "@/data/portfolio";

const { Title, Paragraph, Text } = Typography;

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-bg" aria-hidden />
      <Row gutter={[48, 48]} align="middle" className="section-inner">
        <Col xs={24} lg={14}>
          <Space orientation="vertical" size="large" style={{ width: "100%" }}>
            <Tag
              icon={<SafetyCertificateOutlined />}
              color="cyan"
              style={{ padding: "4px 12px", fontSize: 13 }}
            >
              Cisco · Palo Alto · Check Point Expert
            </Tag>

            <div>
              <Text type="secondary" style={{ fontSize: 16, letterSpacing: 2 }}>
                NETWORK SECURITY ENGINEER
              </Text>
              <Title
                level={1}
                style={{
                  margin: "12px 0 0",
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  lineHeight: 1.15,
                }}
              >
                {profile.name}
              </Title>
            </div>

            <Paragraph
              style={{
                fontSize: 18,
                color: "#8b949e",
                maxWidth: 560,
                marginBottom: 0,
              }}
            >
              {profile.tagline}
            </Paragraph>

            <Space wrap size="middle">
              {vendors.map((v) => (
                <Tag
                  key={v.name}
                  style={{
                    borderColor: v.color,
                    color: v.color,
                    background: `${v.color}15`,
                    padding: "4px 14px",
                  }}
                >
                  {v.name}
                </Tag>
              ))}
            </Space>

            <Space wrap size="middle">
              <Button
                type="primary"
                size="large"
                icon={<MailOutlined />}
                onClick={() => scrollTo("contact")}
              >
                Get in Touch
              </Button>
              <Button
                size="large"
                icon={<DownloadOutlined />}
                onClick={() => scrollTo("contact")}
              >
                Request Resume
              </Button>
            </Space>
          </Space>
        </Col>

        <Col xs={24} lg={10}>
          <div className="hero-visual">
            <div className="hero-shield-ring" aria-hidden />
            <Avatar
              size={160}
              style={{
                background: "linear-gradient(135deg, #00b4d8 0%, #0077b6 100%)",
                fontSize: 48,
                fontWeight: 600,
              }}
            >
              AMT
            </Avatar>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>{profile.yearsExperience}+</strong>
                <span>Years</span>
              </div>
              <div className="hero-stat">
                <strong>{profile.projectsDelivered}+</strong>
                <span>Projects</span>
              </div>
              <div className="hero-stat">
                <strong>{profile.networksSecured}+</strong>
                <span>Networks</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <button
        type="button"
        className="scroll-indicator"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about section"
      >
        <ArrowDownOutlined />
      </button>
    </section>
  );
}
