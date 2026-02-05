"use client"

export function ExternalLinksButtons() {
  const links = [
    {
      name: "Tableau de Bord Formspree",
      url: "https://formspree.io/forms/xkgbpvgw/overview",
      icon: "📝",
      description: "Voir les Soumissions de Formulaires",
    },
    {
      name: "Console Firebase",
      url: "https://console.firebase.google.com/u/0/project/showcase-store-69f3b/analytics/app/web:ZTM1ZWQ3ZTgtNjhjYy00NDFlLWI4ZWYtN2M2MTM0OWJiZWVl/overview/reports~2Fdashboard%3Fr%3Dfirebase-overview&fpn%3D63062058236",
      icon: "🔥",
      description: "Gérer la Base de Données et l'Authentification",
    },
    {
      name: "Référentiel GitHub",
      url: "https://github.com/Mohammad77Radwan/Morefix_WebStore",
      icon: "💻",
      description: "Code Source",
    },
  ]

  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Ressources d'Administration</h2>
        <p className="text-center text-muted-foreground mb-8">Accès rapide aux outils externes et tableaux de bord</p>
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
