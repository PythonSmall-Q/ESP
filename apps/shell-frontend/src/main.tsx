import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function Dashboard() {
  return (
    <div style={{ padding: 24 }}>
      <h1>EFP 企业灵活平台</h1>
      <p>这是壳应用占位页面。微前端与插件系统稍后接入。</p>
      <div style={{ marginTop: 16, display: 'grid', gap: 8 }}>
        <Link to="/approval">打开审批微应用</Link>
        <Link to="/project">打开项目微应用</Link>
        <Link to="/file">打开文件微应用</Link>
        <Link to="/calendar">打开日历微应用</Link>
        <Link to="/reporting">打开报表微应用</Link>
        <Link to="/communication">打开通讯微应用</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/approval" element={<Remote name="approval" module="./App" />} />
          <Route path="/project" element={<Remote name="project" module="./App" />} />
          <Route path="/file" element={<Remote name="file" module="./App" />} />
          <Route path="/calendar" element={<Remote name="calendar" module="./App" />} />
          <Route path="/reporting" element={<Remote name="reporting" module="./App" />} />
          <Route path="/communication" element={<Remote name="communication" module="./App" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

// 简单的远程加载器（Module Federation via vite-plugin-federation）
function Remote({ name, module }: { name: string; module: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = React.lazy<any>(() => (window as any)[name].get(module).then((factory: any) => ({ default: factory() })));
  return (
    <React.Suspense fallback={<div style={{ padding: 24 }}>加载 {name} ...</div>}>
      <Comp />
    </React.Suspense>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
