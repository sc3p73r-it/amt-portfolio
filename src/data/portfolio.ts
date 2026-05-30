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

export const experience = [
  {
    role: "Senior Network Security Engineer",
    company: "Enterprise Financial Services",
    period: "2021 — Present",
    highlights: [
      "Led migration from legacy ASA to Palo Alto PA-5200 series across 12 data centers.",
      "Designed zero-trust micro-segmentation using Cisco ISE and Firepower.",
      "Reduced security incidents by 40% through centralized logging and SIEM correlation.",
    ],
  },
  {
    role: "Network Security Engineer",
    company: "Telecommunications Provider",
    period: "2018 — 2021",
    highlights: [
      "Managed Check Point Security Gateway clusters serving 2M+ subscribers.",
      "Implemented IPSec and SSL VPN for remote workforce during scale-up.",
      "Automated firewall rule audits with Python and Check Point API.",
    ],
  },
  {
    role: "Network Engineer",
    company: "Managed Service Provider",
    period: "2016 — 2018",
    highlights: [
      "Deployed Cisco Catalyst switching and ASA firewalls for SMB clients.",
      "Configured BGP peering and MPLS WAN for multi-branch connectivity.",
      "Documented runbooks and change management procedures.",
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
