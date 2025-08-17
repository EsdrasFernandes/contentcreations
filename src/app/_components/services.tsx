// src/components/ServicesSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Clapperboard, Zap } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900">Nossos Serviços</h2>
        <p className="mt-4 text-lg text-gray-600">
          Oferecemos soluções completas de conteúdo digital para criadores, streamers e marcas que querem se destacar no mundo digital.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <ServiceCard
            icon={<Gamepad2 size={40} className="text-green-500" />}
            title="Edições Épicas"
            description="Edições de gameplays, vlogs e vídeos em geral, transformando suas ideias em conteúdo envolvente e de alta qualidade."
          />
          <ServiceCard
            icon={<Clapperboard size={40} className="text-green-500" />}
            title="Vídeos Curtos"
            description="Conteúdo viral otimizado para TikTok, Instagram Reels e YouTube Shorts."
          />
          <ServiceCard
            icon={<Zap size={40} className="text-green-500" />}
            title="Overlays Live"
            description="Overlays personalizados e animados que elevam a qualidade visual das suas transmissões ao vivo."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="text-center hover:border-green-500 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-800">
      <CardContent className="py-10">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
