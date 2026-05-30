import { Timeline, Typography } from "antd";
import { experience } from "@/data/portfolio";

const { Title, Text } = Typography;

export default function Experience() {
  return (
    <section id="experience" className="page-section">
      <div className="section-inner">
        <Text className="section-label">Career</Text>
        <Title level={2} className="section-title">
          Professional Experience
        </Title>

        <Timeline
          style={{ marginTop: 48, maxWidth: 800 }}
          items={experience.map((job) => ({
            color: "#00b4d8",
            content: (
              <div className="timeline-item">
                <Text type="secondary">{job.period}</Text>
                <Title level={4} style={{ margin: "4px 0 2px" }}>
                  {job.role}
                </Title>
                <Text style={{ color: "#00b4d8", fontWeight: 500 }}>
                  {job.company}
                </Text>
                <ul style={{ marginTop: 12, paddingLeft: 20, color: "#8b949e" }}>
                  {job.highlights.map((item) => (
                    <li key={item} style={{ marginBottom: 6 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}
