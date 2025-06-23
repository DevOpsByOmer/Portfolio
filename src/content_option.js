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
    // Project 1
    {
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&q=80",
        title: "InfraMorph: Dynamic AWS Infrastructure with CI/CD Automation",
        summary:
            "A highly modular infrastructure-as-code pipeline that provisions and configures containerized applications on AWS EC2, with full automation from code to deploy using Terraform, Ansible, Docker, and GitHub Actions. This project highlights multi-layer automation, from image builds to provisioning and remote configuration — the foundation of scalable cloud-native delivery.",
        tech: [
            "🐳 Docker (Containerization)",
            "⚙️ Ansible (Configuration Management)",
            "🌱 Terraform (Infrastructure as Code)",
            "🛠️ GitHub Actions (CI/CD Pipelines)",
            "☁️ AWS EC2 (Cloud Compute)",
            "🐍 Flask (Python Web Framework)"
        ],
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
        iframe: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.2em; margin-bottom: 1.5em; overflow: hidden; border-radius: 8px;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGrFuDtbFU/faFsKJtS_bBcsqQIeXRL5g/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>`
    },
    // Project 2
    {
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=800&q=80",
        title: "CloudPulse: Scalable Fullstack Delivery on AWS ECS",
        summary:
            "A fully containerized, production-ready React + FastAPI web application deployed on AWS ECS Fargate, orchestrated via a complete CI/CD pipeline powered by GitHub Actions and provisioned using Terraform. Implements blue/green deployments, dynamic API routing through ALB, and artifact delivery via ECR. Designed for speed, scalability, and zero-downtime releases on serverless infrastructure.",
        tech: [
            "⚛️ React (Frontend Framework)",
            "⚡ FastAPI (Backend Web Framework - Python)",
            "🐳 Docker (Containerization)",
            "🛠️ GitHub Actions (CI/CD Pipelines)",
            "🌱 Terraform (Infrastructure as Code)",
            "🐘 AWS ECR (Container Registry)",
            "☁️ AWS ECS Fargate (Serverless Containers)",
            "🕸️ AWS ALB (Load Balancer)"
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
        iframe: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.2em; margin-bottom: 1.5em; overflow: hidden; border-radius: 8px;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGrF7Y0K3w/poFjVnYNZtZGjfxMZWOTxw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>`
    },
    // Project 3
    {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80",
        title: "VaultStack — Secure, Scalable App Deployment on AWS",
        summary:
            "VaultStack is a production-grade deployment of a React + FastAPI fullstack application, architected for reliability, scalability, and security. The infrastructure is provisioned using Terraform modules, with seamless CI/CD pipelines powered by GitHub Actions.\n\nThe application is hosted on AWS ECS Fargate, backed by a managed PostgreSQL RDS database, and secured with HTTPS termination via ACM & ALB. Sensitive credentials are centrally managed using AWS Secrets Manager, and auto-scaling ensures efficient performance under variable workloads.",
        tech: [
            "⚛️ React (Frontend Framework)",
            "⚡ FastAPI (Backend Web Framework - Python)",
            "🐘 PostgreSQL (Database)",
            "☁️ AWS RDS (Managed Database)",
            "🔒 AWS Secrets Manager (Secrets Management)",
            "🕸️ AWS ALB (Load Balancer)",
            "🔐 AWS ACM (SSL Certificates)",
            "🐳 Docker (Containerization)",
            "🌱 Terraform (Infrastructure as Code)",
            "🛠️ GitHub Actions (CI/CD Pipelines)"
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
        iframe: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.2em; margin-bottom: 1.5em; overflow: hidden; border-radius: 8px;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGrIJQQMRo/82Hmro-5NtyBkrIsIFRyoQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>`
    },
    // Project 4
    {
        img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?fit=crop&w=800&q=80",
        title: "KubeView — GitOps-Driven CI/CD with Real-Time Monitoring",
        summary:
            "KubeView is a production-ready CI/CD platform for a fullstack React + FastAPI application, built on top of Kubernetes, and powered by Helm and ArgoCD for declarative, GitOps-based deployments. The CI/CD pipeline is fully automated using GitHub Actions, and real-time observability is enabled via Prometheus and Grafana, delivering robust operational insights.",
        tech: [
            "☸️ Kubernetes (Container Orchestration)",
            "📦 Helm (Kubernetes Package Management)",
            "🚀 ArgoCD (GitOps Continuous Delivery)",
            "🛠️ GitHub Actions (CI/CD Pipelines)",
            "📈 Prometheus (Metrics Monitoring)",
            "📊 Grafana (Dashboard & Visualization)",
            "⚛️ React (Frontend Framework)",
            "⚡ FastAPI (Backend Web Framework - Python)",
            "🐳 Docker (Containerization)"
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
        iframe: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.2em; margin-bottom: 1.5em; overflow: hidden; border-radius: 8px;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGrID3NS2w/dEqTxoZiM1ogA2bGXGn5Cg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>`
    },
    // Project 5
    {
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&q=80",
        title: "Resilient K8s App Stack with Secrets & Health",
        summary:
            "StackForge is a robust, fullstack deployment architecture featuring React (frontend), FastAPI (backend), PostgreSQL, and Redis, all containerized and orchestrated via Kubernetes. The stack is packaged using Helm, deployed with ArgoCD, and integrated with health checks, secret management, and CI/CD automation. This production-grade platform is engineered for resiliency, modularity, and operational",
        tech: [
            "🐳 Docker (Containerization)",
            "☸️ Kubernetes (Container Orchestration)",
            "📦 Helm (Kubernetes Package Management)",
            "🚀 ArgoCD (GitOps Continuous Delivery)",
            "🛠️ GitHub Actions (CI/CD Pipelines)",
            "📈 Prometheus (Metrics Monitoring)",
            "📊 Grafana (Dashboard & Visualization)",
            "⚛️ React (Frontend Framework)",
            "⚡ FastAPI (Backend Web Framework - Python)"
        ],
        architecture: `React ───▶ FastAPI ───▶ PostgreSQL
   │             │
   └────────────▶│
           Redis
(Deployed as containers on Kubernetes, managed by Helm & ArgoCD)`,
        link: "https://github.com/DevOpsByOmer/Projects",
        iframe: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.25%; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.2em; margin-bottom: 1.5em; overflow: hidden; border-radius: 8px;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGrIFENevw/LkOV2GRDBYlasRBkSSGCKw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>`
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
