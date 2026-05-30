export const profile = {
  name: "Aung Myo Thu",
  title: "Network Security Engineer",
  tagline: "Designing, securing, and defending enterprise networks at scale.",
  email: "aungmyothu@hi-link.com.mm",
  phone: "+95 9 673550955",
  location: "Myanmar",
  linkedin: "https://linkedin.com/in/aung-myo-thu-627474191",
  github: "",
  summary:
    "Seasoned Network Security Engineer with deep expertise across Cisco, Palo Alto Networks, and Check Point ecosystems. I architect secure perimeter and internal networks, implement zero-trust principles, and lead incident response for complex enterprise environments.",
  yearsExperience: 7,
  projectsDelivered: 45,
  networksSecured: 120,
};

export const vendors = [
  {
    name: "Cisco",
    color: "#049fd9",
    icon: "cisco",
    description:
      "Routing, switching, ASA/Firepower, ISE, and SD-WAN across multi-site enterprise deployments.",
    skills: [
      "Catalyst & Nexus",
      "ASA / Firepower",
      "Cisco ISE",
      "SD-WAN (Viptela)",
      "BGP / OSPF / MPLS",
      "Cisco ACI",
    ],
  },
  {
    name: "Palo Alto Networks",
    color: "#fa582d",
    icon: "paloalto",
    description:
      "Next-generation firewall design, Panorama management, and cloud-delivered security with Prisma.",
    skills: [
      "PA-Series NGFW",
      "Panorama",
      "App-ID & User-ID",
      "GlobalProtect",
      "Prisma Access",
      "Threat Prevention",
    ],
  },
  {
    name: "Check Point",
    color: "#e2231a",
    icon: "checkpoint",
    description:
      "Security Gateway clusters, SmartConsole policy, and unified threat management for regulated industries.",
    skills: [
      "Security Gateway",
      "SmartConsole",
      "ClusterXL / VRRP",
      "Threat Prevention",
      "VPN (IPSec / SSL)",
      "SandBlast Threat Emulation",
    ],
  },
];

export const coreSkills = [
  { name: "Firewall Architecture", level: 95 },
  { name: "Network Segmentation", level: 92 },
  { name: "VPN & Remote Access", level: 90 },
  { name: "Threat Detection", level: 88 },
  { name: "Incident Response", level: 85 },
  { name: "Compliance (PCI, ISO 27001)", level: 82 },
];

export const technologies = [
  "Cisco IOS / NX-OS",
  "Palo Alto PAN-OS",
  "Check Point Gaia",
  "Fortinet",
  "F5 BIG-IP",
  "Wireshark",
  "Splunk / SIEM",
  "Ansible",
  "Python",
  "Terraform",
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  skills: string[];
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Network Security Engineer",
    company: "Hi-link Company Limited",
    period: "Jul 2025 — Present",
    location: "Nay Pyi Taw, Mandalay Region, Myanmar · On-site",
    skills: ["Cisco Systems Products", "Palo Alto Networks"],
    highlights: [
      "Design and maintain enterprise network security using Cisco and Palo Alto platforms.",
      "Implement firewall policies, VPN access, and perimeter defense for on-site infrastructure.",
      "Collaborate with operations teams on network hardening, monitoring, and incident response.",
    ],
  },
  {
    role: "Network Engineer",
    company: "One Cloud Technology",
    period: "Jun 2024 — Jun 2025",
    location: "Yangon, Myanmar · On-site",
    skills: ["Palo Alto Networks", "Trend Micro"],
    highlights: [
      "Deployed and managed Palo Alto NGFW solutions for cloud and enterprise customers.",
      "Integrated Trend Micro endpoint and network security across client environments.",
      "Supported routing, switching, and security troubleshooting for production networks.",
    ],
  },
  {
    role: "Network Administrator",
    company: "Red lion Engineering",
    period: "May 2018 — Jul 2021",
    location: "Yangon, Myanmar · On-site",
    skills: [],
    highlights: [
      "Administered LAN/WAN infrastructure, switching, routing, and daily network operations.",
      "Maintained network availability, user access, backups, and documentation for engineering teams.",
      "Coordinated with vendors on hardware upgrades, fault resolution, and change management.",
    ],
  },
];

export const certifications = [
  {
    name: "CCNP Security",
    issuer: "Cisco",
    year: "2024",
    badge: "CCNP",
  },
  {
    name: "PCNSA",
    issuer: "Palo Alto Networks",
    year: "2023",
    badge: "PCNSA",
  },
  {
    name: "CCSA",
    issuer: "Check Point",
    year: "2022",
    badge: "CCSA",
  },
  {
    name: "CCNA",
    issuer: "Cisco",
    year: "2020",
    badge: "CCNA",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "2019",
    badge: "Sec+",
  },
];

export const navItems = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "expertise", label: "Expertise" },
  { key: "experience", label: "Experience" },
  { key: "certifications", label: "Certifications" },
  { key: "contact", label: "Contact" },
];
