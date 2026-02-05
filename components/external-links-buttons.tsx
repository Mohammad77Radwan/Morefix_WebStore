"use client"

export function ExternalLinksButtons() {
  const links = [
    {
      name: "Formspree Dashboard",
      url: "https://formspree.io/forms/xkgbpvgw/overview",
      icon: "📝",
      description: "View Form Submissions",
    },
    {
      name: "Firebase Console",
      url: "https://console.firebase.google.com/u/0/project/showcase-store-69f3b/analytics/app/web:ZTM1ZWQ3ZTgtNjhjYy00NDFlLWI4ZWYtN2M2MTM0OWJiZWVl/overview/reports~2Fdashboard%3Fr%3Dfirebase-overview&fpn%3D63062058236",
      icon: "🔥",
      description: "Manage Database & Auth",
    },
    {
      name: "GitHub Repository",
      url: "https://github.com/Mohammad77Radwan/Morefix_WebStore",
      icon: "💻",
      description: "Source Code",
    },
  ]

  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Admin Resources</h2>
        <p className="text-center text-muted-foreground mb-8">Quick access to external tools and dashboards</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 px-6 py-6 bg-white border border-border rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{link.icon}</span>
              <div className="text-left">
                <div className="font-semibold text-foreground">{link.name}</div>
                <div className="text-sm text-muted-foreground">{link.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
