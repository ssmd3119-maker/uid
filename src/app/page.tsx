import { AppHeader } from '@/components/app-header';
import { AppSidebar } from '@/components/app-sidebar';
import { AccountProgressCard } from '@/components/dashboard/account-progress-card';
import { AchievementsCard } from '@/components/dashboard/achievements-card';
import { JobStatusCard } from '@/components/dashboard/job-status-card';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function DashboardPage() {
  return (
    <SidebarProvider
      defaultOpen={true}
      style={{ '--sidebar-width': '280px' } as React.CSSProperties}
    >
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <AccountProgressCard />
            <JobStatusCard />
            <AchievementsCard />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
