const logotext = "OMER";

const meta = {
    title: "Mohammed Omer | DevOps Engineer",
    description: "Experienced DevOps Engineer specializing in AWS, Kubernetes, Terraform, Python, and CI/CD automation.",
};

const introdata = {
    title: "I’m Mohammed Omer",
    animated: {
        first: "Automating Cloud Infrastructure",
        second: "Deploying Scalable AWS Apps",
        third: "Optimizing DevOps Workflows",
    },
    description: "DevOps Engineer passionate about automating cloud infrastructure, building scalable AWS solutions, and delivering robust CI/CD pipelines. Experienced in Kubernetes, Terraform, Docker, and cloud-native DevOps best practices.",
   your_img_url:require("./assets/images/photo-1514790193030-c89d266d5a9d.jpeg"),
};

const dataabout = {
    title: "A bit about myself",
    aboutme:
        "DevOps Engineer with a passion for building secure, scalable, and automated cloud solutions. Skilled in AWS, Docker, Kubernetes, Terraform, and CI/CD. Focused on continuous improvement and delivering value through automation.",
};

const worktimeline = [
    {
        jobtitle: "DevOps Engineer",
        where: "Cybersapient Technologies Pvt. Ltd., Bangalore",
        date: "Jan 2024 – May 2024",
    },
    {
        jobtitle: "DevOps Trainee",
        where: "Credo CyberTech Pvt. Ltd., Hyderabad",
        date: "Jan 2022 – Jan 2023",
    },
];

const skills = [
    { name: "AWS", value: 90 },
    { name: "Kubernetes", value: 85 },
    { name: "Docker", value: 85 },
    { name: "Terraform", value: 80 },
    { name: "GitHub Actions", value: 80 },
    { name: "Python", value: 75 },
    { name: "Git", value: 80 },
];

const services = [
    {
        title: "Cloud Infrastructure Automation",
        description:
            "Design, provision, and manage scalable AWS infrastructure with Terraform and DevOps practices.",
    },
    {
        title: "CI/CD Pipeline Implementation",
        description:
            "Develop and maintain robust CI/CD pipelines using GitHub Actions to streamline deployment workflows.",
    },
    {
        title: "Container Orchestration",
        description:
            "Deploy containerized apps using Docker and manage them efficiently with Kubernetes for high availability.",
    },
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&q=80",
        title: "Enterprise DevOps Project – CI/CD with Terraform, Ansible, Docker & GitHub Actions",
        summary:
            "A fullstack infrastructure automation and CI/CD deployment pipeline for containerized applications on AWS EC2. This project demonstrates building and pushing Docker images, provisioning AWS EC2 with Terraform, deploying apps with Ansible, and orchestrating all steps with GitHub Actions.",
        tech: ["GitHub Actions", "Docker", "Terraform", "Ansible", "AWS EC2", "Flask"],
        architecture: `GitHub Repo
    │
    ├── GitHub Actions CI (Build & Push Docker)
    │
    ├── GitHub Actions CD (Terraform)
    │           ↓
    │       AWS EC2 Instance
    │           ↓
    └── GitHub Actions CD (Ansible)
                ↓
       SSH into EC2 → Pull Docker Image → Run App Container`,
        link: "https://github.com/DevOpsByOmer/Projects",
        slides: "https://www.canva.com/design/DAGrFuDtbFU/mWwwjCszdWm_U5DzZbcwSA/view?utm_content=DAGrFuDtbFU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3b80f8d25d",
        iframe: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGrFuDtbFU/faFsKJtS_bBcsqQIeXRL5g/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https://www.canva.com/design/DAGrFuDtbFU/faFsKJtS_bBcsqQIeXRL5g/view?utm_content=DAGrFuDtbFU&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">Presentation - CI/CD with Terraform</a> by Omer Mohammed`
    },
    {
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=800&q=80",
        title: "DevOps Full-Stack ECS Project",
        summary:
            "A containerized React + FastAPI application deployed on AWS ECS Fargate with a complete CI/CD pipeline, blue/green deployments, and automated infrastructure. Features include ALB, ECR, and dynamic API routing.",
        tech: [
            "React",
            "FastAPI",
            "Docker",
            "GitHub Actions",
            "Terraform",
            "ECR",
            "ECS Fargate",
            "ALB",
        ],
        architecture: `User Browser
      │
      ▼
   AWS ALB
   /     \\
Frontend  Backend
  ▼         ▼
React   FastAPI
  ▼         ▼
ECS Fargate Cluster`,
        link: "https://github.com/DevOpsByOmer/Projects",
        slides: "https://www.canva.com/design/DAGrF7Y0K3w/poFjVnYNZtZGjfxMZWOTxw/view?utm_content=DAGrF7Y0K3w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=poFjVnYNZtZGjfxMZWOTxw",
        iframe: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGrF7Y0K3w/poFjVnYNZtZGjfxMZWOTxw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https://www.canva.com/design/DAGrF7Y0K3w/poFjVnYNZtZGjfxMZWOTxw/view?utm_content=DAGrF7Y0K3w&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">Presentation - DevOps Full-Stack ECS Project Overview</a> by Omer Mohammed`
    },
    {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80",
        title: "Fullstack App with RDS, HTTPS, Auto-scaling & Secrets",
        summary:
            "Production-ready FastAPI + React app, PostgreSQL (RDS), HTTPS via ACM+ALB, secrets in AWS Secrets Manager, ECS with auto-scaling. Managed by Terraform modules and GitHub Actions for CI/CD.",
        tech: [
            "React",
            "FastAPI",
            "PostgreSQL",
            "AWS RDS",
            "ACM",
            "ALB",
            "Secrets Manager",
            "ECS",
            "Terraform",
            "GitHub Actions",
        ],
        architecture: `Internet
   │
 ┌─▼─────┐
 │ HTTPS │  <- ACM + ALB
 └─┬─────┘
   │
┌──▼────┐     ┌─────▼───┐
│Frontend│     │Backend  │
└──┬────┘     └─────┬───┘
   │                 │
┌──▼────┐     ┌─────▼───┐
│React  │     │PostgreSQL│
└───────┘     └──────────┘`,
        link: "https://github.com/DevOpsByOmer/Projects",
    },
    {
        img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?fit=crop&w=800&q=80",
        title: "Enterprise-Grade Fullstack K8s CI/CD with Monitoring",
        summary:
            "React (Frontend) + FastAPI (Backend) deployed using Kubernetes, Helm, and ArgoCD, with CI/CD powered by GitHub Actions. Real-time monitoring via Prometheus and Grafana, GitOps workflow, and declarative deployments.",
        tech: [
            "Kubernetes",
            "Helm",
            "ArgoCD",
            "Prometheus",
            "Grafana",
            "React",
            "FastAPI",
            "GitHub Actions",
            "Docker",
        ],
        architecture: `GitHub Repo
   │
   ▼
GitHub Actions CI
   │
   ▼
ArgoCD CD
   │
   ▼
Kubernetes Cluster
   │
   ├─ Frontend & Backend Apps
   ├─ Ingress (domain routes)
   ├─ Services & Deployments
   └─ Monitored via Prometheus & Grafana`,
        link: "https://github.com/DevOpsByOmer/Projects",
    },
    {
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&q=80",
        title: "Fullstack DevOps Application Deployment",
        summary:
            "Production-grade workflow for React (frontend), FastAPI (backend), PostgreSQL, Redis. All containerized, orchestrated with Kubernetes, Helm, and ArgoCD. Managed secrets, health checks, and automated deployments.",
        tech: [
            "React",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker",
            "Kubernetes",
            "Helm",
            "ArgoCD",
        ],
        architecture: `React ───▶ FastAPI ───▶ PostgreSQL
   │             │
   └────────────▶│
           Redis
(Deployed as containers on Kubernetes, managed by Helm & ArgoCD)`,
        link: "https://github.com/DevOpsByOmer/Projects",
    },
    {
        img: "/images/resume.jpg",
        title: "Resume",
        summary:
            "Download my resume (PDF) for more details on my experience and projects.",
        tech: [],
        architecture: "",
        link: "/resume.pdf",
    },
];

const contactConfig = {
    YOUR_EMAIL: "dvop.omer@gmail.com",
    YOUR_FONE: "(+91) 832-825-0142",
    description:
        "For freelance DevOps projects, collaborations, or cloud consulting, feel free to get in touch!",
    YOUR_SERVICE_ID: "service_7rlpwx3",
    YOUR_TEMPLATE_ID: "template_t4t5q3n",
    YOUR_USER_ID: "P4p87CD--3VINdYcD",
};

const socialprofils = {
    github: "https://github.com/DevOpsByOmer",
    linkedin: "https://linkedin.com/in/omer-mohammed-x",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
