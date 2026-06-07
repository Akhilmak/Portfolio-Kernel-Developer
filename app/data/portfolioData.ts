export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  location?: string;
  description: string;
  iconType: "code" | "laptop" | "terminal" | "university" | "microchip" | "certificate";
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  iconType: "cloud" | "timeline" | "chart" | "shield";
}

export const personalInfo = {
  name: "Akhil Kumar Madineni",
  label: "Linux Device Driver & Kernel Developer",
  headline: "Writing kernel-space software and device drivers.",
  tagline: "Linux Kernel & Device Driver Developer",
  description: "Computer Science graduate with hands-on experience in C programming, pointer manipulation, bit-level operations, and Linux internals — core competencies for Linux kernel and device driver development. Proficient in kernel module development, system-level programming, and backend engineering.",
  email: "akhilkumarmadineni@gmail.com",
  location: "Hyderabad, Telangana 500032",
  socials: {
    github: "https://github.com/Akhilmak",
    linkedin: "https://linkedin.com/in/akhil-kumar-madineni",
    email: "mailto:akhilkumarmadineni@gmail.com",
  }
};

export const workExperience: TimelineItem[] = [
  {
    id: "w1",
    date: "July 2025 — Present",
    title: "AI Engineer & Backend Engineer",
    subtitle: "Aunix AI",
    location: "Hyderabad, Telangana",
    description: "Engineered high-performance backend services in Python/Java with a focus on memory efficiency, concurrency, and low-latency data pipelines — principles directly applicable to kernel-space development. Designed fault-tolerant distributed workflows using Temporal, applying systems-level thinking around process scheduling and state management. Deployed Prometheus/Grafana monitoring, reducing client-reported incidents by 30% on Linux infrastructure. Built custom Docker images via Jenkins and GitHub Actions CI/CD, managing Linux-based container environments at the OS level. Strengthened SOC 2 compliance through RBAC, audit logging, and data access policies on Linux production servers. Integrated 20+ enterprise data sources via Pentaho ETL plugins, writing low-level data transformation for MariaDB, Redshift, NetSuite.",
    iconType: "code"
  },
  {
    id: "w2",
    date: "January 2025 — July 2025",
    title: "Software Engineer Trainee",
    subtitle: "Silicon Techlab Private Limited",
    location: "Bhubaneswar, Odisha",
    description: "Implemented full-stack user management with JWT authentication, supporting 100+ internal users with zero authentication failures. Optimized SQL query performance for student record management, reducing average query latency by 25% through index tuning and schema redesign. Administered production Linux-based databases, maintaining data integrity and validating backup/recovery procedures for 3 critical systems.",
    iconType: "terminal"
  }
];

export const educationHistory: TimelineItem[] = [
  {
    id: "e1",
    date: "2021 — 2025",
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "Centurion University of Technology and Management",
    location: "Vizianagaram, AP",
    description: "Specialized in Computer Networking. Graduated with a GPA of 9.0 / 10.0.",
    iconType: "university"
  }
];

export const projectsList: ProjectItem[] = [
  {
    id: "p1",
    title: "Linux Kernel Character Device Driver",
    description: "Developed loadable kernel module implementing character device driver under /dev with open, read, write, and release operations. Implemented custom ioctl() commands for device control, demonstrating kernel-userspace communication and privilege boundary handling. Used bit manipulation and bitmasks to manage device status flags and control registers, simulating hardware register interaction. Exposed driver statistics via /proc interface using procfs for real-time monitoring from userspace. Debugged using dmesg and printk; tested with custom userspace C test programs.",
    tech: ["C", "LKM", "procfs", "ioctl()", "GCC", "Makefile"],
    github: "https://github.com/Akhilmak",
    iconType: "timeline"
  },
  {
    id: "p2",
    title: "C Data Structures Library with Bit-Level Utilities",
    description: "Built reusable C library implementing linked lists, stack, queue, binary search tree, and hash map using raw pointer manipulation and dynamic memory allocation. Implemented bit manipulation utilities: popcount, bit reversal, power-of-two checks, flag setting/clearing, endianness detection — core for driver development. Applied pointer arithmetic, function pointers for generic callbacks, and void pointer casting for type-agnostic storage. Validated memory safety with Valgrind (zero leaks) and GDB for step-through debugging.",
    tech: ["C", "GCC", "Makefile", "GDB", "Valgrind"],
    github: "https://github.com/Akhilmak",
    iconType: "cloud"
  },
  {
    id: "p3",
    title: "IXGBE Tx-to-Rx Internal Loopback Support using ethtool -t",
    description: "Enhanced IXGBE Ethernet driver to support MAC/PHY internal loopback diagnostics via ethtool self-test framework, enabling hardware validation without external network infrastructure. Implemented MAC and PHY loopback self-tests within driver's ethtool callback, verifying data path integrity at different Ethernet stack layers. Supported diagnostics for Jumbo Frames, RSS, Split Header, and ARP Offload, ensuring high-throughput offload functionality under loopback. Debugged PHY loopback failures caused by external PHY configuration issues via low-level register dumps and kernel debugging. Improved early-stage Ethernet validation and fault isolation, reducing manual testing effort by 40%.",
    tech: ["C", "Linux Kernel", "ethtool", "IXGBE Driver", "PHY/MAC", "Jumbo Frames", "RSS", "Split Header"],
    github: "https://github.com/Akhilmak",
    iconType: "shield"
  },
  {
    id: "p4",
    title: "Intel SoC Hardware Resource Monitoring via Sysfs",
    description: "Developed Linux kernel driver to expose real-time hardware statistics (CPU/GPU temperature, clocks, frequency, power) through sysfs interfaces for user-space monitoring and telemetry. Implemented sysfs nodes with proper permissions and read callbacks fetching live data from hardware registers. Integrated driver with PMS firmware interfaces, establishing reliable communication channel for SoC telemetry. Ensured synchronization between firmware and kernel data paths using mutex locks and atomic operations to avoid stale metric reads. Developed GPU stress applications for runtime validation under high-load scenarios. Achieved stable read latencies below 50µs and confirmed zero resource leaks.",
    tech: ["C", "Linux Driver", "sysfs", "PMS Firmware", "SoC Telemetry", "ARM/Intel SoC"],
    github: "https://github.com/Akhilmak",
    iconType: "chart"
  }
];

export const skillsData = {
  summary: "Computer Science graduate with hands-on experience in C programming, pointer manipulation, bit-level operations, and Linux internals — core competencies for Linux kernel and device driver development. Proficient in kernel module development, system-level programming, and backend engineering. Seeking a Linux Device Driver Developer role to contribute to kernel-space software and embedded systems engineering.",
  categories: [
    {
      title: "Languages",
      skills: ["C (Primary)", "Python", "Java", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Linux & Kernel",
      skills: ["Linux Kernel Module Development", "Character Device Drivers", "procfs/sysfs", "ioctl()", "ethtool self-test", "IXGBE driver", "PMS firmware", "printk", "dmesg", "Makefile"]
    },
    {
      title: "Systems Programming",
      skills: ["Pointers & Pointer Arithmetic", "Bit Manipulation", "Memory Management (malloc, mmap)", "Endianness", "POSIX APIs", "GDB", "Valgrind"]
    },
    {
      title: "Data Structures & Algorithms",
      skills: ["Arrays", "Linked Lists", "Hash Maps", "Trees", "Sorting/Searching", "Complexity Analysis"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GCC", "Make", "Docker", "Kubernetes", "AWS", "CI/CD (Jenkins, GitHub Actions)", "Prometheus", "Grafana"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MariaDB", "Redshift"]
    }
  ]
};
