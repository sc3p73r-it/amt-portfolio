"use client";

import {
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { App, Button, Card, Col, Form, Input, Row, Space, Typography } from "antd";
import { profile } from "@/data/portfolio";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { message } = App.useApp();
  const [form] = Form.useForm<ContactFormValues>();

  const onFinish = (values: ContactFormValues) => {
    const body = encodeURIComponent(
      `From: ${values.name} (${values.email})\n\n${values.message}`,
    );
    const subject = encodeURIComponent(values.subject);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    message.success("Opening your email client…");
    form.resetFields();
  };

  return (
    <section id="contact" className="page-section">
      <div className="section-inner">
        <Text className="section-label">Contact</Text>
        <Title level={2} className="section-title">
          Let&apos;s Connect
        </Title>
        <Paragraph style={{ color: "#8b949e", maxWidth: 520, fontSize: 16 }}>
          Available for security architecture consulting, firewall migrations, and
          enterprise network hardening engagements.
        </Paragraph>

        <Row gutter={[32, 32]} style={{ marginTop: 40 }}>
          <Col xs={24} lg={10}>
            <Space orientation="vertical" size="large" style={{ width: "100%" }}>
              <Card variant="borderless">
                <Space orientation="vertical" size="middle">
                  <Space>
                    <MailOutlined style={{ color: "#00b4d8", fontSize: 18 }} />
                    <a href={`mailto:${profile.email}`} style={{ color: "#e6edf3" }}>
                      {profile.email}
                    </a>
                  </Space>
                  <Space>
                    <PhoneOutlined style={{ color: "#00b4d8", fontSize: 18 }} />
                    <Text>{profile.phone}</Text>
                  </Space>
                  <Space>
                    <EnvironmentOutlined style={{ color: "#00b4d8", fontSize: 18 }} />
                    <Text>{profile.location}</Text>
                  </Space>
                  <Space size="large" style={{ marginTop: 8 }}>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedinOutlined style={{ fontSize: 22, color: "#8b949e" }} />
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <GithubOutlined style={{ fontSize: 22, color: "#8b949e" }} />
                    </a>
                  </Space>
                </Space>
              </Card>
            </Space>
          </Col>

          <Col xs={24} lg={14}>
            <Card title="Send a Message" variant="borderless">
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark="optional"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[{ required: true, message: "Please enter your name" }]}
                    >
                      <Input placeholder="Your name" size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Please enter a valid email" },
                      ]}
                    >
                      <Input placeholder="you@company.com" size="large" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: "Please enter a subject" }]}
                >
                  <Input placeholder="Project inquiry" size="large" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: "Please enter a message" }]}
                >
                  <TextArea rows={5} placeholder="Tell me about your project…" />
                </Form.Item>
                <Form.Item style={{ marginBottom: 0 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<SendOutlined />}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
