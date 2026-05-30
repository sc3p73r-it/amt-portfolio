import { SafetyCertificateOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Typography } from "antd";
import { certifications } from "@/data/portfolio";

const { Title, Text } = Typography;

const issuerColors: Record<string, string> = {
  Cisco: "#049fd9",
  "Palo Alto Networks": "#fa582d",
  "Check Point": "#e2231a",
  CompTIA: "#c8202f",
};

export default function Certifications() {
  return (
    <section id="certifications" className="page-section page-section-alt">
      <div className="section-inner">
        <Text className="section-label">Credentials</Text>
        <Title level={2} className="section-title">
          Certifications
        </Title>

        <Row gutter={[20, 20]} style={{ marginTop: 40 }}>
          {certifications.map((cert) => (
            <Col xs={24} sm={12} lg={8} key={cert.name}>
              <Card variant="borderless" className="cert-card" hoverable>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <Avatar
                    size={52}
                    style={{
                      background: `${issuerColors[cert.issuer] ?? "#00b4d8"}25`,
                      color: issuerColors[cert.issuer] ?? "#00b4d8",
                      flexShrink: 0,
                    }}
                    icon={<SafetyCertificateOutlined />}
                  >
                    {cert.badge}
                  </Avatar>
                  <div>
                    <Title level={5} style={{ margin: 0 }}>
                      {cert.name}
                    </Title>
                    <Text style={{ color: issuerColors[cert.issuer] ?? "#00b4d8" }}>
                      {cert.issuer}
                    </Text>
                    <br />
                    <Text type="secondary">{cert.year}</Text>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
