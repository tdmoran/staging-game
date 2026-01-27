# Head & Neck Cancer Staging Game

## Project Overview
An educational React application for practicing AJCC 8th Edition Head and Neck Cancer staging. The game uses drag-and-drop mechanics to help medical students and healthcare professionals learn cancer staging criteria.

## Tech Stack
- **Framework**: React 18 with Vite
- **Drag & Drop**: @dnd-kit/core, @dnd-kit/sortable
- **Styling**: CSS (index.css)
- **Deployment**: GitHub Pages (gh-pages)

## Project Structure
```
src/
├── App.jsx              # Main app with menu and game routing
├── main.jsx             # React entry point
├── index.css            # Global styles
├── components/
│   ├── Game.jsx         # Game container component
│   ├── GameBoard.jsx    # Main game board with drag-drop zones
│   ├── DraggableCard.jsx # Draggable staging criteria cards
│   ├── DropTarget.jsx   # Drop zones for categories
│   ├── Explanation.jsx  # Staging explanations display
│   ├── ResultsScreen.jsx # End-of-game results
│   ├── ScoreBoard.jsx   # Score tracking display
│   └── Timer.jsx        # Game timer component
├── data/
│   └── stagingData.js   # All AJCC staging data and game logic
└── hooks/
    └── useGameState.js  # Game state management hook
```

## Key Features
- **Challenge Types**: T-staging, N-staging, Site Identification, Stage Grouping
- **Anatomic Sites**: Oral Cavity, Larynx (Supraglottic/Glottic/Subglottic), Oropharynx (p16-), Hypopharynx, Nasopharynx
- **Difficulty Levels**: Easy (3 items), Medium (5 items, 120s), Hard (7 items, 90s)
- **Options**: Timer mode, Explanation mode, Progress tracking

## Common Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
npm run lint     # Run ESLint
```

## Staging Data
All staging criteria are in `src/data/stagingData.js`. This file contains:
- T and N staging criteria for each anatomic site
- Stage grouping tables (non-nasopharynx and nasopharynx)
- Challenge generation functions
- Difficulty settings

When updating staging data, ensure criteria match AJCC 8th Edition guidelines.

## Code Conventions
- Functional components with hooks
- State management via custom hooks (useGameState)
- CSS class naming: kebab-case (e.g., `menu-header`, `progress-grid`)
- Component files use PascalCase

## Medical Disclaimer
This is for educational purposes only. Always refer to official AJCC guidelines for clinical practice.
