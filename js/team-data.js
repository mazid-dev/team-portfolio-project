// ============================================
// TEAM DATA - 4 MEMBERS
// ============================================

var teamMembers = [
    // ===== 1. MD MAZID HOSSAIN =====
    {
        name: "Md Mazid Hossain",
        role: "DevOps Engineer & IT Executive",
        university: "Leading University, Sylhet",
        studentId: "12-232-00",
        bio: "4+ years in networking & infrastructure. Passionate about AWS, Docker, Kubernetes, Terraform, and automation. Currently working as IT Executive at VCube Soft and Tech.",
        skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Linux", "MikroTik", "Cisco", "GitHub Actions"],
        experience: [
            {
                company: "VCube Soft and Tech",
                role: "Executive – IT",
                period: "Aug 2023 – Present",
                description: "Maintained secure office LAN and VLAN infrastructure. Configured MikroTik routers, NAT, VPN, and routing. Provided support for 50+ users."
            },
            {
                company: "Tuhin Enterprise (ISP)",
                role: "Network Support Assistant",
                period: "May 2022 – Jul 2023",
                description: "Assisted with MikroTik and Cisco switch configuration. Supported ISP clients with troubleshooting and onsite technical support."
            }
        ]
    },

    // ===== 2. MD ABU SAYED =====
    {
        name: "Md. Abu Sayed",
        role: "Senior Network Engineer",
        university: "Anwer Khan Modern University",
        studentId: "12-232-0029",
        bio: "CCNA, MTCNA certified Network Engineer with 2+ years of experience. Expert in Cisco routing/switching, MikroTik, network security, and enterprise infrastructure.",
        skills: [
            "Cisco CCNA", "OSPF", "BGP", "EIGRP", "VLAN", "NAT", "ACL",
            "MikroTik MTCNA", "PPPoE", "DHCP", "VPN", "Load Balancing",
            "Network Monitoring", "Windows Server", "Hardware Troubleshooting"
        ],
        experience: [
            {
                company: "Windstream Communication Limited",
                role: "Senior Network Engineer",
                period: "Nov 2023 – Present",
                description: "Reseller & bandwidth client support, troubleshooting, and configuration. Network monitoring with Cacti, PRTG, Weathermap, Smokeping."
            },
            {
                company: "Zinzira Express (ISP), Dhaka",
                role: "Network Engineer",
                period: "Jan 2022 – Oct 2023",
                description: "Designed and implemented secure LAN and office networks. Configured MikroTik routers, Load Balancing, Failover, VPN. Installed CCTV (NVR/DVR)."
            },
            {
                company: "Amber IT Limited, Dhaka",
                role: "Assistant Network Engineer",
                period: "Oct 2021 – Dec 2021",
                description: "Troubleshot client issues: bandwidth slowness, website access, game ping latency, email issues. Configured MikroTik routers, PPPoE, DHCP, NAT, VLAN."
            },
            {
                company: "New Trizons IT, Dhaka",
                role: "Intern - Network Support",
                period: "Apr 2021 – Sep 2021",
                description: "Hands-on support with LAN setup, client PC, and printer installation. Basic Cisco router and switch configuration."
            }
        ]
    },

    // ===== 3. ROCHIN UDDIN =====
    {
        name: "Md Roich Uddin",
        role: "Network Security Engineer",
        university: "Daffodil International University",
        studentId: "12-232-0042",
        bio: "4+ years in security infrastructure. Specialized in Palo Alto, Fortinet Firewalls, IDS/IPS, and Vulnerability Assessment. Expert in network security and SIEM.",
        skills: ["Palo Alto", "Fortinet", "IDS/IPS", "Vulnerability Assessment", "Security Auditing", "SIEM", "Firewall Management"],
        experience: [
            {
                company: "SecureLink Technologies",
                role: "Network Security Engineer",
                period: "Mar 2020 – Present",
                description: "Implemented and managed Palo Alto and Fortinet firewalls. Conducted vulnerability assessments and security audits."
            },
            {
                company: "CyberShield Solutions",
                role: "Security Analyst",
                period: "Jan 2019 – Feb 2020",
                description: "Performed security assessments, penetration testing, and vulnerability scanning. Implemented SIEM solutions."
            }
        ]
    },

    // ===== 4. LOKMAN HOSSAIN =====
    {
        name: "Md Lokman Hossain",
        role: "Senior Network Engineer",
        university: "American International University-Bangladesh (AIUB)",
        studentId: "12-232-0016",
        bio: "3+ years in network design & implementation. Expert in MPLS, BGP, OSPF, and Network Monitoring. Cisco and MikroTik certified professional.",
        skills: [
            "Cisco CCNA", "MPLS", "BGP", "OSPF", "EIGRP", "VLAN", "NAT", "ACL",
            "MikroTik MTCNA", "PPPoE", "DHCP", "VPN", "Load Balancing",
            "Nagios", "Zabbix", "Network Design", "Windows Server"
        ],
        experience: [
            {
                company: "Global Network Solutions",
                role: "Senior Network Engineer",
                period: "Jun 2021 – Present",
                description: "Designed and maintained MPLS and BGP networks. Implemented network monitoring solutions using Nagios and Zabbix."
            },
            {
                company: "Zinzira Express (ISP), Dhaka",
                role: "Network Engineer",
                period: "Jan 2022 – Oct 2023",
                description: "Designed and implemented secure LAN and office networks. Configured MikroTik routers, Load Balancing, Failover, VPN. Installed CCTV (NVR/DVR)."
            },
            {
                company: "Amber IT Limited, Dhaka",
                role: "Assistant Network Engineer",
                period: "Oct 2021 – Dec 2021",
                description: "Troubleshot client issues: bandwidth slowness, website access, game ping latency, email issues. Configured MikroTik routers, PPPoE, DHCP, NAT, VLAN."
            },
            {
                company: "New Trizons IT, Dhaka",
                role: "Intern - Network Support",
                period: "Apr 2021 – Sep 2021",
                description: "Hands-on support with LAN setup, client PC, and printer installation. Basic Cisco router and switch configuration."
            }
        ]
    }
];

// ============================================
// PROJECTS
// ============================================

var projects = [
    {
        title: "🚀 Kubernetes Cluster on AWS",
        description: "Built a production-grade multi-node Kubernetes cluster using kubeadm and containerd on AWS EC2. Deployed a Task Manager application with full CI/CD pipeline using GitHub Actions and Jenkins.",
        tech: ["Kubernetes", "AWS EC2", "Docker", "Jenkins", "GitHub Actions", "Prometheus", "Grafana"]
    },
    {
        title: "☁️ Terraform AWS Infrastructure",
        description: "Automated complete AWS infrastructure provisioning using Terraform Infrastructure as Code. Managed EC2 instances, VPC, Subnets, Security Groups, IAM roles, and S3 buckets.",
        tech: ["Terraform", "AWS", "VPC", "IAM", "S3", "EC2", "Security Groups"]
    },
    {
        title: "🔄 3-Tier AWS Application",
        description: "Deployed a complete 3-tier application with Vite (Frontend), Node.js (Backend), and MongoDB (Database) on AWS. Used Nginx as reverse proxy, PM2 for process management.",
        tech: ["React/Vite", "Node.js", "MongoDB", "Nginx", "PM2", "AWS EC2"]
    },
    {
        title: "🌐 Enterprise Network Design",
        description: "Designed and implemented a full enterprise network with VLAN segmentation, OSPF routing, and redundant firewall configuration. Deployed Cisco switches and routers with MikroTik.",
        tech: ["Cisco", "MikroTik", "OSPF", "BGP", "VLAN", "Firewalls", "Nagios"]
    },
    {
        title: "📊 Network Monitoring Solution",
        description: "Implemented comprehensive network monitoring solution using Cacti, PRTG, Weathermap, and Smokeping. Monitored bandwidth usage, latency, packet loss, and uptime.",
        tech: ["Cacti", "PRTG", "Weathermap", "Smokeping", "SNMP"]
    },
    {
        title: "🔒 VPN & Security Infrastructure",
        description: "Designed and deployed secure VPN solutions using IPIP, GRE, EoIP, PPTP, and L2TP tunnels. Implemented firewall rules, NAT policies, and ACLs for network security.",
        tech: ["VPN", "IPIP", "GRE", "PPTP", "L2TP", "Firewall", "NAT", "ACL"]
    }
];

console.log("✅ Data loaded: " + teamMembers.length + " members, " + projects.length + " projects");
