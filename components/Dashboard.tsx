"use client"

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import CreateNodeCard from './CreateNodeCard';
import ServiceCard from './ServiceCard';
import SecurityNotifications from './SecurityNotifications';
import ActivityTimeline from './ActivityTimeline';
import LoginHistory from './LoginHistory';
import CostAnalysis from './CostAnalysis';
import MonitoringAlerts from './MonitoringAlerts';
import RecentTransactions from './RecentTransactions';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 overflow-auto md:ml-72">
        <Header openSidebar={() => setSidebarOpen(true)} />
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CreateNodeCard />
            <ServiceCard title="Create Bucket" icon="Database" />
            <ServiceCard title="Create DBaaS" icon="Server" />
            <ServiceCard title="Create LoadBalancer" icon="Network" />
            <ServiceCard title="No service is added" icon="HardDrive" />
            <ServiceCard title="No service is added" icon="Cloud" />
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SecurityNotifications />
            <ActivityTimeline />
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LoginHistory />
            <CostAnalysis />
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MonitoringAlerts />
            <RecentTransactions />
          </div>
        </main>
      </div>
    </div>
  );
}