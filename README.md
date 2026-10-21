# RightPick - Precision Solar Energy Platform 🇳🇬

RightPick is a modern, fully responsive React application designed to eliminate uncertainty in solar energy adoption across Nigeria. It provides precise mathematical solar sizing, insured state-wide transport, and COREN/NEMSA compliant engineering installations.

## ✨ Features

- **Precision Solar Sizing:** Advanced calculation engine accounting for peak sun hours, inductive start-up surges (e.g., air conditioners), system derating, and battery depth of discharge (DoD).
- **Insured State-wide Transport:** GPS-tracked logistics with pre-dispatch IV curve and optical testing for zero transit loss.
- **Certified Engineering:** COREN & NEMSA compliant installation information covering copper earthing, lightning arresters, and automatic transfer switches (ATS).
- **Interactive Journey Steps:** A step-by-step onboarding guide from account creation to deployment.
- **Client Testimonials & FAQs:** Responsive feedback carousels and expandable FAQ sections.
- **Fully Responsive UI:** Built with Tailwind CSS and optimized for mobile phones, tablets, and desktops.
- **Modular Components:** Clean separation between the fixed navigation header, interactive sections, and footer.

## 🛠️ Tech Stack

- **React** (with Hooks: `useState`)
- **Tailwind CSS** (for responsive styling and gradients)
- **Lucide React** (for modern vector icons)

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation

1. Clone the repository or navigate to your project directory:
   ```bash
   cd rightpick
   ```

2. Install dependencies (including Lucide React):
   ```bash
   npm install lucide-react
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and view the app at `http://localhost:5173` (or your configured Vite/React port).

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header.jsx       # Fixed responsive navbar with mobile drawer
│   └── Index.jsx        # Main landing page containing hero, services, steps, testimonials, FAQs, and footer
├── assets/              # Images, logos, and badge icons (Google Play, Apple Store, etc.)
├── App.jsx              # Root component
└── main.css             # Tailwind CSS entry point
```

## 📄 License

This project is proprietary and built for RightPick Nigeria.