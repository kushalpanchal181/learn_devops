
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
  }
];
