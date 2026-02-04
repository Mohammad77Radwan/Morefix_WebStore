import { AppShell } from "@/components/stock-manager/app-shell"
import { Dashboard } from "@/components/stock-manager/dashboard"

export default function HomePage() {
  return (
    <AppShell>
      <Dashboard />
    </AppShell>
  )
}
