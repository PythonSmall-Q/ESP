import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>EFP Admin Panel</h1>
      <p>Manage site settings, packages, services, and users.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
        <Card title="Site Settings" description="Branding, theme, domains" />
        <Card title="Packages" description="Import/install, versions" />
        <Card title="Services" description="Status, restart, scale" />
        <Card title="Users" description="Roles, permissions" />
      </div>
    </div>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ color: '#6b7280' }}>{description}</p>
      <button style={{ padding: '8px 12px', borderRadius: 8, border: 'none', background: '#2563eb', color: 'white' }}>Open</button>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);