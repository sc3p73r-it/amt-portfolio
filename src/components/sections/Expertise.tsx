import { CloudServerOutlined, FireOutlined, GlobalOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Tag, Typography } from "antd";
import type { ReactNode } from "react";
import { vendors } from "@/data/portfolio";

const { Title, Paragraph } = Typography;

const vendorIcons: Record<string, ReactNode> = {
  cisco: <GlobalOutlined />,
  paloalto: <FireOutlined />,
  checkpoint: <CloudServerOutlined />,
};

export default function Expertise() {
  return (
    <section id="expertise" className="page-section page-section-alt">
      <div className="section-inner">
        <Typography.Text className="section-label">Vendor Expertise</Typography.Text>
        <Title level={2} className="section-title">
          Cisco · Palo Alto · Check Point
        </Title>
        <Paragraph
          style={{ color: "#8b949e", maxWidth: 640, fontSize: 16, marginBottom: 40 }}
        >
          Deep, hands-on experience across the three leading enterprise security
          platforms — from design and deployment to optimization and lifecycle
          management.
        </Paragraph>

        <Row gutter={[24, 24]}>
          {vendors.map((vendor) => (
            <Col xs={24} md={8} key={vendor.name}>
              <Card
                variant="borderless"
                className="vendor-card"
                style={{ height: "100%", borderTop: `3px solid ${vendor.color}` }}
              >
                <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
                  <div className="vendor-header">
                    <span
                      className="vendor-icon"
                      style={{ background: `${vendor.color}20`, color: vendor.color }}
                    >
                      {vendorIcons[vendor.icon]}
                    </span>
                    <Title level={4} style={{ margin: 0 }}>
                      {vendor.name}
                    </Title>
                  </div>
                  <Paragraph style={{ color: "#8b949e", marginBottom: 0 }}>
                    {vendor.description}
                  </Paragraph>
                  <Space wrap size={[6, 8]}>
                    {vendor.skills.map((skill) => (
                      <Tag
                        key={skill}
                        style={{
                          borderColor: `${vendor.color}55`,
                          color: vendor.color,
                          background: `${vendor.color}10`,
                        }}
                      >
                        {skill}
                      </Tag>
                    ))}
                  </Space>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
