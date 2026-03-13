# Vision LM — Industrial AI Dashboard

A React dashboard for industrial AI operations: OEE, workforce productivity, savings value, and activity tracking.

## Stack

- **React 19** + **Vite 8**
- **Chart.js** + **react-chartjs-2** for sparklines and line charts
- Fonts: [Outfit](https://fonts.google.com/specimen/Outfit), [DM Sans](https://fonts.google.com/specimen/DM+Sans)

## Commands

```bash
# Install dependencies
npm install

# Dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project structure

- `src/App.jsx` — Main layout and dashboard grid
- `src/components/` — Sidebar, TopBar, OverviewCard, WorkersCard, SavingsCard, ActivityTable, InsightsPanel, OeeRing, LineChart, Spark, Ico
- `src/constants.js` — Colors, nav items, mock data (ROWS, WK, MODS, etc.)
- `src/index.css` — Global and glass/button styles, keyframes

## License

Private.
