import { Routes, Route, Link } from "react-router-dom";

const modules = import.meta.glob<{
  default: React.ComponentType;
  meta: { title: string; path: string };
}>("./experiments/*/index.tsx", { eager: true });

const experiments = Object.values(modules).map((m) => ({
  ...m.meta,
  Component: m.default,
}));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {experiments.map((exp) => (
        <Route key={exp.path} path={exp.path} element={<exp.Component />} />
      ))}
    </Routes>
  );
}

function Index() {
  return (
    <nav style={{ padding: 32 }}>
      <h1>Component Playground</h1>
      <ul>
        {experiments.map((exp) => (
          <li key={exp.path}>
            <Link to={exp.path}>{exp.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default App;
