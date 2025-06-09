
export interface Question {
  id: string;
  question: string;
  answer: string;
  technology: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'text' | 'mcq';
  options?: string[];
  correctAnswer?: number;
}

export const sampleQuestions: Question[] = [
  {
    id: '1',
    question: 'What is Docker and how does it differ from virtual machines?',
    answer: `Docker is a containerization platform that allows you to package applications and their dependencies into lightweight, portable containers.

Key differences from VMs:
• Containers share the host OS kernel, VMs run their own OS
• Containers are much lighter and faster to start
• VMs provide better isolation but use more resources
• Containers are more portable across different environments
• Docker containers start in seconds, VMs take minutes`,
    technology: 'Docker',
    difficulty: 'beginner',
    type: 'text'
  },
  {
    id: '2',
    question: 'Which of the following is NOT a benefit of Infrastructure as Code (IaC)?',
    answer: 'Manual configuration for better control',
    technology: 'Infrastructure',
    difficulty: 'intermediate',
    type: 'mcq',
    options: [
      'Version control for infrastructure changes',
      'Consistent and repeatable deployments',
      'Manual configuration for better control',
      'Faster provisioning and scaling'
    ],
    correctAnswer: 2
  },
  {
    id: '3',
    question: 'What is the default port for SSH?',
    answer: '22',
    technology: 'Linux',
    difficulty: 'beginner',
    type: 'mcq',
    options: ['21', '22', '23', '80'],
    correctAnswer: 1
  },
  {
    id: '4',
    question: 'In Kubernetes, what is a Pod?',
    answer: 'The smallest deployable unit that can contain one or more containers',
    technology: 'Kubernetes',
    difficulty: 'intermediate',
    type: 'mcq',
    options: [
      'A cluster of nodes',
      'The smallest deployable unit that can contain one or more containers',
      'A type of service',
      'A configuration file'
    ],
    correctAnswer: 1
  },
  {
    id: '5',
    question: 'What does CI/CD stand for?',
    answer: 'Continuous Integration / Continuous Deployment',
    technology: 'CI/CD',
    difficulty: 'beginner',
    type: 'mcq',
    options: [
      'Code Integration / Code Deployment',
      'Continuous Integration / Continuous Deployment',
      'Custom Integration / Custom Development',
      'Central Integration / Central Deployment'
    ],
    correctAnswer: 1
  },
  {
    id: '6',
    question: 'Which Git command is used to create a new branch?',
    answer: 'git checkout -b',
    technology: 'Git',
    difficulty: 'beginner',
    type: 'mcq',
    options: [
      'git branch new',
      'git checkout -b',
      'git create branch',
      'git new-branch'
    ],
    correctAnswer: 1
  },
  {
    id: '7',
    question: 'What is the main purpose of a Load Balancer?',
    answer: 'Distribute incoming requests across multiple servers',
    technology: 'Infrastructure',
    difficulty: 'intermediate',
    type: 'mcq',
    options: [
      'Store user sessions',
      'Distribute incoming requests across multiple servers',
      'Monitor server performance',
      'Backup server data'
    ],
    correctAnswer: 1
  },
  {
    id: '8',
    question: 'Explain the concept of Infrastructure as Code (IaC) and its benefits.',
    answer: `Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure through machine-readable definition files.

Benefits:
• Version control for infrastructure changes
• Consistent and repeatable deployments
• Reduced manual errors and configuration drift
• Faster provisioning and scaling
• Better documentation and auditability
• Easy rollback capabilities

Popular tools: Terraform, CloudFormation, Ansible, Pulumi`,
    technology: 'Infrastructure',
    difficulty: 'intermediate',
    type: 'text'
  },
  {
  id: '9',
  question: 'Which command is used to build a Docker image?',
  answer: 'docker build',
  technology: 'Docker',
  difficulty: 'beginner',
  type: 'mcq',
  options: ['docker run', 'docker build', 'docker image', 'docker create'],
  correctAnswer: 1
},
{
  id: '10',
  question: 'How does Kubernetes achieve high availability?',
  answer: `Kubernetes achieves high availability through replication and self-healing features like ReplicaSets, multiple control plane nodes, and automated restarts, rescheduling, and scaling of pods.`,
  technology: 'Kubernetes',
  difficulty: 'advanced',
  type: 'text'
},
{
  id: '11',
  question: 'Which Git command stages all changes for commit?',
  answer: 'git add .',
  technology: 'Git',
  difficulty: 'beginner',
  type: 'mcq',
  options: ['git stage all', 'git commit', 'git push', 'git add .'],
  correctAnswer: 3
},
{
  id: '12',
  question: 'Name some popular CI/CD tools and explain their importance.',
  answer: `Popular CI/CD tools include Jenkins, GitHub Actions, GitLab CI, CircleCI, and Travis CI.

These tools automate the process of building, testing, and deploying code, which helps maintain software quality, speeds up delivery, and reduces manual errors.`,
  technology: 'CI/CD',
  difficulty: 'intermediate',
  type: 'text'
},
{
  id: '13',
  question: 'Which of the following Linux commands is used to list directory contents?',
  answer: 'ls',
  technology: 'Linux',
  difficulty: 'beginner',
  type: 'mcq',
  options: ['cd', 'ls', 'pwd', 'touch'],
  correctAnswer: 1
},
{
  id: '14',
  question: 'Why is Infrastructure as Code (IaC) preferred in DevOps?',
  answer: `IaC allows infrastructure to be versioned, tested, and reused, reducing manual configuration and ensuring consistency across environments. It also improves scalability, traceability, and disaster recovery.`,
  technology: 'Infrastructure',
  difficulty: 'intermediate',
  type: 'text'
},
{
  id: '15',
  question: 'What does the "docker ps" command do?',
  answer: 'Lists running Docker containers',
  technology: 'Docker',
  difficulty: 'beginner',
  type: 'mcq',
  options: [
    'Starts a Docker container',
    'Lists all Docker images',
    'Lists running Docker containers',
    'Removes a Docker container'
  ],
  correctAnswer: 2
},
{
  id: '16',
  question: 'Which Kubernetes object is used to expose a Pod to external traffic?',
  answer: 'Service',
  technology: 'Kubernetes',
  difficulty: 'intermediate',
  type: 'mcq',
  options: [
    'Deployment',
    'ReplicaSet',
    'Service',
    'ConfigMap'
  ],
  correctAnswer: 2
},
{
  id: '17',
  question: 'Which Git command is used to fetch and merge changes from a remote repository?',
  answer: 'git pull',
  technology: 'Git',
  difficulty: 'beginner',
  type: 'mcq',
  options: ['git fetch', 'git merge', 'git pull', 'git clone'],
  correctAnswer: 2
},
{
  id: '18',
  question: 'Which CI/CD tool is developed by HashiCorp?',
  answer: 'Waypoint',
  technology: 'CI/CD',
  difficulty: 'advanced',
  type: 'mcq',
  options: ['Jenkins', 'GitLab CI', 'Waypoint', 'Travis CI'],
  correctAnswer: 2
},
{
  id: '19',
  question: 'Which of the following commands is used to give execute permission to a script in Linux?',
  answer: 'chmod +x',
  technology: 'Linux',
  difficulty: 'intermediate',
  type: 'mcq',
  options: ['chown', 'chmod 755', 'chmod +x', 'chgrp'],
  correctAnswer: 2
},
{
  id: '20',
  question: 'Explain the role of a Deployment object in Kubernetes.',
  answer: `A Deployment in Kubernetes manages the creation and scaling of Pods. It ensures the desired number of Pods are running and handles rolling updates, rollbacks, and versioning of applications.`,
  technology: 'Kubernetes',
  difficulty: 'intermediate',
  type: 'text'
},
{
  id: '21',
  question: 'What are the benefits of using Git for version control?',
  answer: `Git allows distributed development, supports branching and merging, provides a complete history of changes, enables collaboration through platforms like GitHub, and helps in tracking bugs and rolling back code.`,
  technology: 'Git',
  difficulty: 'beginner',
  type: 'text'
},
{
  id: '22',
  question: 'Describe the role of Prometheus in DevOps monitoring.',
  answer: `Prometheus is an open-source monitoring tool that collects and stores metrics as time-series data. It allows querying using PromQL and integrates with Grafana for dashboards. It is widely used for monitoring Kubernetes clusters and cloud-native applications.`,
  technology: 'Infrastructure',
  difficulty: 'advanced',
  type: 'text'
},
{
  id: '23',
  question: 'What is the purpose of the Dockerfile?',
  answer: `A Dockerfile is a script containing instructions to build a Docker image. It defines the base image, environment variables, files to copy, dependencies to install, and the command to run the application.`,
  technology: 'Docker',
  difficulty: 'beginner',
  type: 'text'
}


];
