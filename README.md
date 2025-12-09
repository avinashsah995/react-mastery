# React Mastery: Advanced Concepts Playground

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Motion](https://img.shields.io/badge/Motion-black?style=for-the-badge&logo=framer&logoColor=white)
![TanStack Virtual](https://img.shields.io/badge/TanStack%20Virtual-FF4154?style=for-the-badge&logo=react&logoColor=white)

A premium, modern React application designed to demonstrate and master advanced frontend concepts. This project features a rich, glassmorphic UI with smooth animations and practical implementations of performance optimization techniques.

## 🚀 Features

### 🔹 Virtualization
- **Efficient Rendering**: Renders a massive list of **10,000 items** without compromising performance.
- **Tech Stack**: Powered by `@tanstack/react-virtual`.
- **UI**: Facebook-style feed with glassmorphic cards, sticky headers, and smooth hover effects.

### 🔹 Performance Playbook
- **Interactive Guide**: A dedicated section to explore frontend performance best practices.
- **Visuals**: High-quality visual guide embedded directly into the application.

### 🔹 Modern Aesthetics
- **Glassmorphism**: Extensive use of backdrop filters and semi-transparent layers.
- **Animations**: Powered by `motion/react` for seamless page transitions, stagger effects, and micro-interactions.
- **Dark Theme**: A carefully curated deep blue/slate color palette for a premium look.

### 🔹 Upcoming Modules
- **Pagination**: Strategies for handling paginated data.
- **Infinite Scroll**: Seamless content loading patterns.

## 🛠️ Tech Stack

- **Core**: React 19
- **Routing**: React Router DOM v7
- **Animations**: Motion (formerly Framer Motion)
- **Virtualization**: TanStack Virtual
- **Icons**: React Icons
- **Styling**: CSS Modules with CSS Variables

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/avinashsah995/react-mastery.git
    cd react-mastery
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm start
    ```

4.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components (Header, Card)
├── pages/
│   ├── home/          # Landing page with feature showcase
│   ├── virtualization/# Virtualized list implementation
│   ├── performanceTips/# Performance guide viewer
│   ├── pagination/    # Pagination examples (WIP)
│   └── infiniteScroll/# Infinite scroll examples (WIP)
├── App.js             # Main application routing
└── index.css          # Global styles and theme variables
```

## 🎨 Design System

The project uses a global CSS variable system for consistent theming:

```css
:root {
  --bg-color: #0f172a;
  --text-color: #f8fafc;
  --primary-color: #3b82f6;
  --card-bg: rgba(30, 41, 59, 0.7);
  --card-border: rgba(255, 255, 255, 0.1);
}
```

## 🤝 Contributing

Contributions are welcome! If you have an idea for a new advanced React pattern to showcase:

1.  Fork the repo
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
