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

## 📦 Installation

### Prerequisites
- **Node.js** 20.x or higher
- **npm** or **yarn** package manager

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/Career-Roadmap-Web-Application.git
cd Career-Roadmap-Web-Application
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
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

## 🌐 Deployment

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Other Platforms**
- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Deploy from Git
- **Railway**: One-click deployment

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

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

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

## 📞 Support

For support, email your.email@example.com or open an issue in the GitHub repository.

## 🗺️ Roadmap

- [ ] Add user authentication
- [ ] Implement progress tracking
- [ ] Add resource bookmarking
- [ ] Create community forum
- [ ] Add video tutorials
- [ ] Implement AI career recommendations
- [ ] Add certification tracking
- [ ] Create mobile app

---

**Made with ❤️ using Next.js, React, and Tailwind CSS**
