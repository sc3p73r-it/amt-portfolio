import { CheckCircleOutlined } from "@ant-design/icons";
import { Card, Col, Progress, Row, Space, Tag, Typography } from "antd";
import { coreSkills, profile, technologies } from "@/data/portfolio";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <section id="about" className="page-section">
      <div className="section-inner">
        <Typography.Text className="section-label">About Me</Typography.Text>
        <Title level={2} className="section-title">
          Securing Networks with Precision
        </Title>

        <Row gutter={[32, 32]} style={{ marginTop: 40 }}>
          <Col xs={24} lg={14}>
            <Paragraph style={{ fontSize: 16, color: "#8b949e", lineHeight: 1.8 }}>
              {profile.summary}
            </Paragraph>
            <Space wrap style={{ marginTop: 8 }}>
              {[
                "Zero Trust",
                "Defense in Depth",
                "High Availability",
                "Change Management",
              ].map((item) => (
                <Tag key={item} icon={<CheckCircleOutlined />} color="processing">
                  {item}
                </Tag>
              ))}
            </Space>
          </Col>

          <Col xs={24} lg={10}>
            <Card title="Core Competencies" variant="borderless">
              <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
                {coreSkills.map((skill) => (
                  <div key={skill.name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 4,
                      }}
                    >
                      <span>{skill.name}</span>
                      <span style={{ color: "#00b4d8" }}>{skill.level}%</span>
                    </div>
                    <Progress
                      percent={skill.level}
                      showInfo={false}
                      strokeColor="#00b4d8"
                      trailColor="#21262d"
                    />
                  </div>
                ))}
              </Space>
            </Card>
          </Col>
        </Row>

        <Card
          title="Technologies & Tools"
          variant="borderless"
          style={{ marginTop: 32 }}
        >
          <Space wrap size={[8, 12]}>
            {technologies.map((tech) => (
              <Tag key={tech} style={{ padding: "6px 14px", fontSize: 13 }}>
                {tech}
              </Tag>
            ))}
          </Space>
        </Card>
      </div>
    </section>
  );
}
