import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { Col, Layout, Row, Space, Typography } from "antd";
import { profile } from "@/data/portfolio";

const { Footer: AntFooter } = Layout;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <AntFooter
      style={{
        padding: "48px 24px 32px",
        borderTop: "1px solid #30363d",
      }}
    >
      <Row gutter={[24, 24]} justify="space-between" align="middle">
        <Col xs={24} md={12}>
          <Typography.Title level={5} style={{ margin: 0, color: "#00b4d8" }}>
            {profile.name}
          </Typography.Title>
          <Typography.Text type="secondary">{profile.title}</Typography.Text>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: "right" }}>
          <Space size="large">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailOutlined style={{ fontSize: 20, color: "#8b949e" }} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinOutlined style={{ fontSize: 20, color: "#8b949e" }} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubOutlined style={{ fontSize: 20, color: "#8b949e" }} />
            </a>
          </Space>
        </Col>
      </Row>
      <Typography.Paragraph
        type="secondary"
        style={{ marginTop: 32, marginBottom: 0, textAlign: "center", fontSize: 13 }}
      >
        © {year} {profile.name}. Network Security Engineer Portfolio.
      </Typography.Paragraph>
    </AntFooter>
  );
}
