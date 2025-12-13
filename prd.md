# Product Requirements Document (PRD)
## Career Roadmap Web Application

### 1. Project Overview
**1.1 Purpose of the System**
The Career Roadmap Web Application is a frontend-only, highly interactive platform that guides users in exploring tech careers and viewing structured learning roadmaps.
All data (career lists, steps, learning topics) is stored in static JSON/JavaScript files, requiring no backend or database.

The system aims to provide a fast, visually appealing, animated, and engaging experience for students, job seekers, and career changers.

### 2. Goals & Objectives
**2.1 Primary Goals**
- Provide learning roadmaps for 10+ tech careers.
- Guide users from beginner → advanced skill levels.
- Deliver a modern, animated UI with smooth transitions and interactions.
- Allow users to quickly select careers and instantly visualize roadmaps.

**2.2 Secondary Goals**
- Support self-paced learning.
- Easy updates by editing JSON data files.
- Maintain a responsive, visually attractive interface suitable for students and professionals.
- Include additional pages: Contact, About, Home enhancements.

### 3. Target Users
- Students exploring future tech careers.
- Beginners who want a clear, structured learning path.
- Job seekers preparing for career progression.
- Individuals transitioning into IT.

### 4. Functional Requirements
**4.1 Career Selection**
- Users can choose from 10+ tech careers, e.g., Software Engineer, Web Developer, Data Scientist, AI/ML Engineer, UI/UX Designer, Mobile Developer, etc.
- **UI options:**
  - Dropdown menu
  - Grid of clickable career cards with hover animations and shadows
  - Smooth fade-in/fade-out transitions for career selection
  - No search bar for simplicity.

**4.2 Display Career Roadmap**
- Shows step-by-step roadmap with descriptions, key topics, and difficulty/time levels.
- **Stages:**
  - Introduction & Fundamentals
  - Core Programming Concepts
  - Tools, Frameworks & Technologies
  - Projects & Hands-on Practice
  - Portfolio Building
  - Interview Preparation
- **Enhanced UI Features:**
  - Vertical timeline or card-based layout with animations on scroll
  - Hover effects on roadmap cards
  - Smooth slide-in transitions between steps
  - Color-coded stages for better visual distinction

**4.3 Roadmap Visualization**
- Animated vertical timeline with expanding/collapsing sections
- Optional flowchart-style roadmap for a holistic view
- Progress indicators for roadmap completion (optional future enhancement)

**4.4 Navigation & Pages**
- **Main Pages:**
  - **Home Page**
    - Animated hero section introducing career roadmap concept
    - Quick-access career cards grid
    - Testimonials or tips section (optional)
  - **Career Page**
    - Selected career roadmap with animations
    - Expandable cards or steps
    - Interactive icons and smooth transitions
  - **Contact Page**
    - Contact form (Name, Email, Message)
    - Simple validation
    - Submit animation feedback (success/error message)
    - Optional: Email integration via static form service (e.g., Formspree)
  - **About Page**
    - Information about the app
    - Visual illustrations, icons, or animated SVGs
  - **Additional Features**
    - Sticky navigation bar with animated hover effects
    - Footer with social links and copyright info
    - Responsive hamburger menu for mobile devices

**4.5 Responsive Design**
- Fully responsive on mobile, tablet, and desktop
- Smooth animations maintained across all devices
- Tailwind CSS ensures consistent scaling and spacing

### 5. Non-Functional Requirements
**5.1 Usability**
- Clear layout and typography
- Intuitive navigation
- Smooth animated interactions enhance engagement

**5.2 Performance**
- Load time under 3 seconds
- Lightweight assets and JSON data for fast rendering

**5.3 Scalability**
- Can handle 10–50 career roadmaps
- Easy addition of new careers by updating JSON

**5.4 Security**
- No backend → no sensitive data stored
- Contact form handled via third-party static service

### 6. Technology Stack
**6.1 Frontend Technologies**
- React.js or Next.js
- Tailwind CSS for styling
- Framer Motion for animations
- Static JSON/JS files for career and roadmap data

**6.2 Deployment**
- Vercel
- Netlify
- GitHub Pages

**6.3 Version Control**
- Git & GitHub for code management

### 7. System Architecture
**Frontend-only Architecture Flow:**
User → UI Components (React/Next.js) → Fetch JSON → Render Animated Roadmap

**Data Flow:**
- Career list loaded from `careers.json`
- Roadmap data loaded from `roadmaps.json`
- Dynamic rendering based on user selection

### 8. Success Metrics
- Fast interaction (<3 seconds load)
- Users can select career & view roadmap within 2 clicks
- High UI responsiveness across devices
- Easy addition of new careers (<5 minutes)
