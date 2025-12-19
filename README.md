# 🚀 Career Roadmap Web Application

A modern, interactive web application that helps aspiring tech professionals navigate their career journey with structured roadmaps, curated resources, and clear guidance across 20+ technology career paths.

![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 **20+ Career Paths**
Comprehensive roadmaps for diverse tech careers including:
- **Development**: Frontend, Backend, Full Stack, Mobile, Game, Blockchain, AR/VR, IoT
- **Data & AI**: Data Scientist, ML Engineer, AI Engineer, Database Administrator
- **Infrastructure**: DevOps Engineer, Cloud Architect, Site Reliability Engineer
- **Security**: Cybersecurity Analyst
- **Design**: UI/UX Designer
- **Management**: Product Manager
- **Quality**: QA Engineer
- **Content**: Technical Writer

### 🎨 **Stunning UI/UX**
- **Animated Gradients** - Smooth, flowing color transitions
- **Floating Particles** - Dynamic background animations
- **Glassmorphism** - Modern frosted glass effects
- **Micro-interactions** - Delightful hover and click animations
- **Responsive Design** - Perfect on all devices
- **Dark Mode Support** - Automatic theme switching

### 📚 **Structured Learning**
- **Multi-stage Roadmaps** - Clear progression paths
- **Detailed Steps** - Specific learning objectives
- **Time Estimates** - Realistic learning timelines
- **Difficulty Levels** - Beginner, Intermediate, Advanced
- **Category Organization** - Easy navigation by field

### 🔍 **Smart Search**
- Real-time career search
- Filter by title and description
- Instant results with smooth animations

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 15.1.0** - React framework with App Router
- **React 19.2.1** - Latest React with Server Components
- **TypeScript 5** - Type-safe development

### **Styling**
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Advanced animations
- **Custom CSS** - Gradient animations and effects

### **UI Components**
- **Lucide React** - Beautiful icon library
- **Custom Components** - Reusable, animated components

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 📦 How to Clone and Run the Project

### Prerequisites Installation

Before you can run this project, you need to install the following software:

#### 1. **Install Git** (Version Control)

**For Windows:**
1. Download Git from [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Run the installer (git-installer.exe)
3. Follow the installation wizard:
   - Select "Use Git from the Windows Command Prompt"
   - Choose "Checkout Windows-style, commit Unix-style line endings"
   - Click "Next" and complete the installation
4. Verify installation:
   ```bash
   git --version
   ```
   You should see something like: `git version 2.x.x`

**For macOS:**
```bash
# Using Homebrew
brew install git

# Verify installation
git --version
```

**For Linux (Ubuntu/Debian):**
```bash
# Install Git
sudo apt update
sudo apt install git

# Verify installation
git --version
```

#### 2. **Install Node.js** (JavaScript Runtime)

**For Windows:**
1. Download Node.js LTS (Long Term Support) from [https://nodejs.org/](https://nodejs.org/)
2. Download the **Windows Installer (.msi)** - Choose the **LTS version** (20.x or higher)
3. Run the installer:
   - Accept the license agreement
   - Choose installation path (default is fine)
   - **Important**: Make sure "Add to PATH" is checked
   - Click "Install"
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```
   You should see:
   - Node: `v20.x.x` or higher
   - npm: `10.x.x` or higher

**For macOS:**
```bash
# Using Homebrew (recommended)
brew install node@20

# Or download from nodejs.org
# Visit https://nodejs.org/ and download the LTS installer

# Verify installation
node --version
npm --version
```

**For Linux (Ubuntu/Debian):**
```bash
# Using NodeSource repository (recommended for latest LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

#### 3. **Install a Code Editor** (Optional but Recommended)

- **Visual Studio Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- **WebStorm**: [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/)

### Project Setup

#### Step 1: Clone the Repository

Open your terminal (Command Prompt, PowerShell, or Git Bash on Windows) and run:

```bash
# Clone the repository
git clone https://github.com/yourusername/Career-Roadmap-Web-Application.git

# Navigate into the project directory
cd Career-Roadmap-Web-Application
```

**Alternative**: If you don't have Git installed, you can download the ZIP file:
1. Go to the GitHub repository
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file
5. Open terminal in the extracted folder

#### Step 2: Install Project Dependencies

This will install all required packages listed in `package.json`:

```bash
npm install
```

**What gets installed:**
- **Next.js** (15.1.0) - React framework
- **React** (19.2.1) - UI library
- **TypeScript** (5.x) - Type safety
- **Tailwind CSS** (4.x) - Styling
- **Framer Motion** (12.x) - Animations
- **Lucide React** - Icons
- And other dependencies...

**This may take 2-5 minutes depending on your internet speed.**

#### Step 3: Run the Development Server

```bash
npm run dev
```

You should see output like:
```
  ▲ Next.js 15.1.0
  - Local:        http://localhost:3000
  - Environments: .env

 ✓ Ready in 2.5s
```

#### Step 4: Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

🎉 **You should now see the Career Roadmap Web Application running!**

### Troubleshooting

#### Problem: `npm install` fails

**Solution 1**: Clear npm cache
```bash
npm cache clean --force
npm install
```

**Solution 2**: Delete `node_modules` and reinstall
```bash
# Windows
rmdir /s /q node_modules
del package-lock.json

# macOS/Linux
rm -rf node_modules package-lock.json

# Then reinstall
npm install
```

**Solution 3**: Use a different registry (if behind firewall)
```bash
npm install --registry=https://registry.npmmirror.com
```

#### Problem: Port 3000 is already in use

**Solution**: Run on a different port
```bash
# Windows
set PORT=3001 && npm run dev

# macOS/Linux
PORT=3001 npm run dev
```

#### Problem: `node` or `npm` command not found

**Solution**: Node.js is not in your PATH
- **Windows**: Restart your terminal/computer after installing Node.js
- **macOS/Linux**: Add Node.js to PATH:
  ```bash
  export PATH="/usr/local/bin:$PATH"
  ```

#### Problem: Permission errors on macOS/Linux

**Solution**: Don't use `sudo` with npm. Fix permissions:
```bash
sudo chown -R $USER /usr/local/lib/node_modules
```

### Alternative Package Managers

#### Using Yarn
```bash
# Install Yarn globally
npm install -g yarn

# Install dependencies
yarn install

# Run dev server
yarn dev
```

#### Using pnpm (faster alternative)
```bash
# Install pnpm globally
npm install -g pnpm

# Install dependencies
pnpm install

# Run dev server
pnpm dev
```

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
Career-Roadmap-Web-Application/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── career/[slug]/     # Dynamic career pages
│   │   ├── error.tsx          # Error boundary
│   │   └── global-error.tsx   # Global error handler
│   ├── components/            # React components
│   │   ├── CareerCard.tsx     # Career card component
│   │   ├── RoadmapStep.tsx    # Roadmap step component
│   │   ├── RoadmapTimeline.tsx # Timeline component
│   │   ├── TechTicker.tsx     # Tech stack marquee
│   │   ├── layout/            # Layout components
│   │   │   ├── Navbar.tsx     # Navigation bar
│   │   │   └── Footer.tsx     # Footer
│   │   └── ui/                # UI components
│   │       └── Button.tsx     # Button component
│   ├── data/                  # JSON data files
│   │   ├── careers.json       # Career metadata
│   │   └── roadmaps.json      # Roadmap data
│   └── types/                 # TypeScript types
│       └── index.ts           # Type definitions
├── public/                    # Static assets
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.mjs         # ESLint configuration
└── package.json              # Dependencies
```

## 🎨 Key Components

### **Home Page**
- Hero section with animated gradients
- Stats cards with hover effects
- Search functionality
- Career grid with staggered animations

### **Career Detail Page**
- Interactive roadmap timeline
- Expandable learning stages
- Progress tracking
- Resource links

### **Contact Page**
- Contact information display
- Email, phone, and address
- Animated cards with hover effects

### **About Page**
- Platform information
- Mission and vision
- How it works guide

## 🎯 Features in Detail

### **Animations**
- **Gradient Orbs**: Pulsing background elements
- **Floating Particles**: Subtle movement effects
- **Card Animations**: Lift, shine, and rotate effects
- **Text Gradients**: Flowing color transitions
- **Stagger Effects**: Sequential element appearances

### **Responsive Design**
- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Touch-friendly interactions

### **Performance**
- Server-side rendering
- Optimized images
- Code splitting
- Lazy loading


## 📊 Data Structure

### **Career Object**
```typescript
{
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  timeToLearn: string;
  slug: string;
}
```

### **Roadmap Object**
```typescript
{
  careerId: string;
  title: string;
  stages: [
    {
      id: string;
      title: string;
      steps: [
        {
          id: string;
          title: string;
          description: string;
          resources: string[];
        }
      ]
    }
  ]
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Vercel** - Hosting and deployment
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide** - Beautiful icons


**Made with ❤️ using Next.js, React, and Tailwind CSS**
