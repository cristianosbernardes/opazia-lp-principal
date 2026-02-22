import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { AppTopbar } from "./AppTopbar";

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-sidebar">
      <AppSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppTopbar />
        <main className="flex-1 overflow-auto bg-muted p-6">
          <div className="mx-auto max-w-[1600px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
