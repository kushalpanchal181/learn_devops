
export interface LearningModule {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  topics: string[];
  content: string;
}

export const learningModules: LearningModule[] = [
  // Beginner Level
  {
    id: 'devops-basics',
    title: 'DevOps Fundamentals',
    description: 'Understanding the core principles and culture of DevOps',
    difficulty: 'beginner',
    duration: '2 hours',
    topics: ['DevOps Culture', 'SDLC', 'Collaboration', 'Automation Basics'],
    content: `# DevOps Fundamentals

## What is DevOps?
DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery with high software quality.

## Core Principles
1. **Collaboration**: Breaking down silos between development and operations teams
2. **Automation**: Automating repetitive tasks to reduce errors and increase efficiency
3. **Continuous Integration**: Regularly merging code changes
4. **Continuous Delivery**: Ensuring code is always in a deployable state
5. **Monitoring**: Continuous monitoring of applications and infrastructure

## Benefits of DevOps
- Faster time to market
- Improved collaboration
- Higher quality software
- Better customer satisfaction
- Increased efficiency and productivity

## DevOps vs Traditional IT
Traditional IT operates in silos with separate teams for development, testing, and operations. DevOps promotes collaboration and shared responsibility across the entire software delivery pipeline.`
  },
  {
    id: 'version-control-git',
    title: 'Version Control with Git',
    description: 'Master Git fundamentals for collaborative development',
    difficulty: 'beginner',
    duration: '3 hours',
    topics: ['Git Basics', 'Branching', 'Merging', 'Remote Repositories'],
    content: `# Version Control with Git

## What is Version Control?
Version control is a system that records changes to files over time so you can recall specific versions later.

## Git Basics
- **Repository**: A directory containing your project files and Git history
- **Commit**: A snapshot of your project at a specific point in time
- **Branch**: A parallel version of your repository
- **Merge**: Combining changes from different branches

## Essential Git Commands
\`\`\`bash
git init                    # Initialize a new repository
git clone <url>             # Clone a remote repository
git add <file>              # Stage changes
git commit -m "message"     # Commit changes
git push origin main        # Push to remote repository
git pull origin main        # Pull from remote repository
git branch <name>           # Create a new branch
git checkout <branch>       # Switch to a branch
git merge <branch>          # Merge a branch
\`\`\`

## Best Practices
1. Write clear, descriptive commit messages
2. Commit frequently with logical chunks
3. Use branches for features and bug fixes
4. Always pull before pushing
5. Review code before merging`
  },
  {
    id: 'linux-basics',
    title: 'Linux Command Line Essentials',
    description: 'Essential Linux commands every DevOps engineer should know',
    difficulty: 'beginner',
    duration: '4 hours',
    topics: ['File System', 'Process Management', 'Permissions', 'Text Processing'],
    content: `# Linux Command Line Essentials

## File System Navigation
\`\`\`bash
pwd                 # Print working directory
ls -la              # List files with details
cd /path/to/dir     # Change directory
mkdir dirname       # Create directory
rmdir dirname       # Remove empty directory
rm -rf dirname      # Remove directory and contents
cp source dest      # Copy files
mv source dest      # Move/rename files
\`\`\`

## File Permissions
\`\`\`bash
chmod 755 file      # Change permissions
chown user:group    # Change ownership
ls -l               # View permissions
\`\`\`

## Process Management
\`\`\`bash
ps aux              # List all processes
top                 # Monitor system processes
kill PID            # Terminate a process
killall name        # Kill processes by name
nohup command &     # Run command in background
\`\`\`

## Text Processing
\`\`\`bash
cat file            # Display file content
grep pattern file   # Search for patterns
sed 's/old/new/g'   # Stream editor
awk '{print $1}'    # Text processing
tail -f file        # Follow file changes
\`\`\`

## System Information
\`\`\`bash
df -h               # Disk usage
free -h             # Memory usage
uname -a            # System information
whoami              # Current user
\`\`\``
  },

  // Intermediate Level
  {
    id: 'docker-containerization',
    title: 'Docker & Containerization',
    description: 'Learn containerization with Docker from basics to advanced concepts',
    difficulty: 'intermediate',
    duration: '6 hours',
    topics: ['Docker Basics', 'Dockerfile', 'Images', 'Containers', 'Docker Compose'],
    content: `# Docker & Containerization

## What is Docker?
Docker is a platform that uses containerization to package applications and their dependencies into lightweight, portable containers.

## Key Concepts
- **Image**: A read-only template used to create containers
- **Container**: A running instance of an image
- **Dockerfile**: Instructions to build an image
- **Registry**: A repository for Docker images

## Essential Docker Commands
\`\`\`bash
docker build -t myapp .         # Build an image
docker run -p 3000:3000 myapp   # Run a container
docker ps                       # List running containers
docker images                   # List images
docker stop container_id        # Stop a container
docker rm container_id          # Remove a container
docker rmi image_id             # Remove an image
\`\`\`

## Dockerfile Example
\`\`\`dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Docker Compose
Docker Compose allows you to define and run multi-container applications.

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:13
    environment:
      POSTGRES_PASSWORD: password
\`\`\``
  },
  {
    id: 'cicd-jenkins',
    title: 'CI/CD with Jenkins',
    description: 'Implement continuous integration and deployment pipelines',
    difficulty: 'intermediate',
    duration: '5 hours',
    topics: ['Jenkins Setup', 'Pipelines', 'Build Automation', 'Deployment'],
    content: `# CI/CD with Jenkins

## What is CI/CD?
- **Continuous Integration**: Automatically building and testing code changes
- **Continuous Deployment**: Automatically deploying validated changes to production

## Jenkins Pipeline Example
\`\`\`groovy
pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'docker build -t myapp .'
                sh 'docker run -d -p 3000:3000 myapp'
            }
        }
    }
}
\`\`\`

## Best Practices
1. Keep pipelines fast and reliable
2. Use parallel execution when possible
3. Implement proper error handling
4. Use environment-specific configurations
5. Monitor pipeline performance

## Common CI/CD Tools
- Jenkins
- GitLab CI/CD
- GitHub Actions
- Azure DevOps
- CircleCI`
  },

  // Advanced Level
  {
    id: 'kubernetes-orchestration',
    title: 'Kubernetes Container Orchestration',
    description: 'Master container orchestration with Kubernetes',
    difficulty: 'advanced',
    duration: '8 hours',
    topics: ['Pods', 'Services', 'Deployments', 'ConfigMaps', 'Secrets'],
    content: `# Kubernetes Container Orchestration

## Kubernetes Architecture
- **Master Node**: Controls the cluster
- **Worker Nodes**: Run application containers
- **Pods**: Smallest deployable units
- **Services**: Expose applications
- **Deployments**: Manage application lifecycle

## Essential kubectl Commands
\`\`\`bash
kubectl get pods                    # List pods
kubectl get services               # List services
kubectl apply -f deployment.yaml  # Apply configuration
kubectl describe pod <name>       # Get pod details
kubectl logs <pod-name>           # View pod logs
kubectl exec -it <pod> -- /bin/sh # Execute commands in pod
\`\`\`

## Sample Deployment
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
\`\`\`

## Service Example
\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer
\`\`\``
  },
  {
    id: 'infrastructure-as-code',
    title: 'Infrastructure as Code with Terraform',
    description: 'Manage infrastructure using code with Terraform',
    difficulty: 'advanced',
    duration: '6 hours',
    topics: ['Terraform Basics', 'Providers', 'Resources', 'State Management'],
    content: `# Infrastructure as Code with Terraform

## What is Infrastructure as Code?
IaC is the practice of managing and provisioning infrastructure through machine-readable definition files.

## Terraform Basics
\`\`\`hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1d0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "ExampleInstance"
  }
}
\`\`\`

## Essential Commands
\`\`\`bash
terraform init      # Initialize working directory
terraform plan      # Preview changes
terraform apply     # Apply changes
terraform destroy   # Destroy infrastructure
terraform fmt       # Format configuration files
terraform validate  # Validate configuration
\`\`\`

## Best Practices
1. Use version control for Terraform files
2. Implement remote state storage
3. Use modules for reusability
4. Plan before applying changes
5. Use meaningful resource names and tags`
  }
];
