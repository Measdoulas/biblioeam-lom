
import { Search, BookOpen, Video, FileText, Link, Users, Award, Library } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const departments = [
    {
      name: "Anesthésie-Réanimation",
      description: "Protocoles MAPAR, techniques spécialisées",
      icon: "🏥",
      resources: 245
    },
    {
      name: "Instrumentation du Bloc Opératoire", 
      description: "Guides techniques, vidéos de manipulation",
      icon: "🔧",
      resources: 189
    },
    {
      name: "Santé Mentale",
      description: "Ressources en psychiatrie et psychologie",
      icon: "🧠", 
      resources: 156
    },
    {
      name: "Ophtalmologie Clinique",
      description: "Exploration de la vision, techniques cliniques",
      icon: "👁️",
      resources: 203
    }
  ];

  const resourceTypes = [
    { name: "Livres & Documents", icon: BookOpen, count: 487, color: "bg-emerald-500" },
    { name: "Vidéos Formation", icon: Video, count: 156, color: "bg-blue-500" },
    { name: "Documents Officiels", icon: FileText, count: 89, color: "bg-amber-500" },
    { name: "Liens Utiles", icon: Link, count: 124, color: "bg-purple-500" }
  ];

  const recentResources = [
    {
      title: "Protocoles d'Anesthésie Pédiatrique 2024",
      type: "Document",
      department: "Anesthésie-Réanimation",
      author: "Dr. Amévi Koffi",
      date: "15 Nov 2024"
    },
    {
      title: "Manipulation des Instruments de Microchirurgie",
      type: "Vidéo", 
      department: "Instrumentation BO",
      author: "Pr. Kossi Mensah",
      date: "12 Nov 2024"
    },
    {
      title: "Guide de Rédaction - Mémoire Master",
      type: "Canevas",
      department: "Tous départements",
      author: "Direction EAM",
      date: "08 Nov 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-600 rounded-lg">
                <Library className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-800">BiblioEAM</h1>
                <p className="text-xs text-emerald-600">École des Assistants Médicaux - Lomé</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-emerald-700 hover:text-emerald-800">
                Accueil
              </Button>
              <Button variant="ghost" className="text-emerald-700 hover:text-emerald-800">
                Ressources
              </Button>
              <Button variant="ghost" className="text-emerald-700 hover:text-emerald-800">
                À Propos
              </Button>
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                Connexion
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Créer un compte
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 mb-4">
              Université de Lomé - EAM
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Bibliothèque Numérique
              <span className="text-emerald-600 block">BiblioEAM</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Votre portail d'accès aux ressources académiques et professionnelles 
              pour tous les départements de l'École des Assistants Médicaux de Lomé.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Rechercher des mémoires, cours, vidéos, protocoles..."
                className="pl-12 pr-4 py-4 text-lg border-2 border-emerald-200 focus:border-emerald-500 rounded-xl"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 rounded-lg">
                Rechercher
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Connectez-vous pour accéder à toutes les ressources exclusives
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">856</div>
              <div className="text-gray-600">Ressources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">4</div>
              <div className="text-gray-600">Départements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">2,140</div>
              <div className="text-gray-600">Étudiants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">85</div>
              <div className="text-gray-600">Enseignants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types de Ressources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Accédez à une large gamme de contenus pédagogiques adaptés à votre parcours
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-l-4 border-l-emerald-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${type.color} bg-opacity-10`}>
                      <type.icon className={`h-6 w-6 ${type.color.replace('bg-', 'text-')}`} />
                    </div>
                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                      {type.count}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-gray-900 mb-1">{type.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Départements EAM</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorez les ressources spécialisées par département de formation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{dept.icon}</div>
                      <div>
                        <CardTitle className="text-lg text-gray-900 mb-1">{dept.name}</CardTitle>
                        <CardDescription className="text-gray-600">{dept.description}</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                      {dept.resources} ressources
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ressources Récentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les dernières ressources ajoutées à la bibliothèque
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="border-emerald-300 text-emerald-700">
                      {resource.type}
                    </Badge>
                    <span className="text-sm text-gray-500">{resource.date}</span>
                  </div>
                  <CardTitle className="text-lg text-gray-900 leading-snug">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{resource.department}</p>
                    <p className="text-sm font-medium text-emerald-700">{resource.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="h-16 w-16 mx-auto mb-6 text-emerald-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez la Communauté BiblioEAM
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Accédez dès maintenant à plus de 856 ressources académiques exclusives 
            et rejoignez 2,140 étudiants dans leur parcours d'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100 font-semibold px-8">
              Créer mon compte étudiant
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-200 text-white hover:bg-emerald-700 px-8">
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-emerald-600 rounded-lg">
                  <Library className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">BiblioEAM</h3>
                  <p className="text-sm text-gray-400">École des Assistants Médicaux - Lomé</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Plateforme numérique dédiée aux ressources académiques et professionnelles 
                de l'École des Assistants Médicaux de l'Université de Lomé.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Ressources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Départements</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mon Cursus</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aide</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Université de Lomé</li>
                <li>École des Assistants Médicaux</li>
                <li>Lomé, Togo</li>
                <li><a href="mailto:contact@eam.univ-lome.tg" className="hover:text-white transition-colors">
                  contact@eam.univ-lome.tg
                </a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2024 BiblioEAM - École des Assistants Médicaux, Université de Lomé. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
