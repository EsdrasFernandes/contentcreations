// src/components/AboutSection.tsx
export default function AboutSection() {
    return (
        <section id = "sobre"className="py-20 bg-muted text-center px-4">
            <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nós</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Na <strong>Content Creations</strong>, acreditamos no poder de transformar ideias em experiências visuais únicas. Com mais de 4 anos de atuação no mercado, somos uma agência criativa que se destaca por unir paixão, técnica e inovação em cada projeto.
                </p>
                <p className="text-base text-gray-600">
                    Nosso foco é simples: trazer impacto e valor ao seu conteúdo. Seja por meio de vídeos, designs ou estratégias criativas, trabalhamos para que suas ideias não apenas ganhem forma, mas também conquistem resultados.
                </p>
            </div>

            {/* Nossos Valores */}
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-10">Nossos Valores</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {valores.map((valor, i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-transparent hover:border-green-500 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-800"
                        >
                            <div className="flex justify-center mb-4">
                                <div className=" rounded-full w-12 h-12 flex items-center justify-center text-white text-xl">
                                    {valor.icon}
                                </div>
                            </div>
                            <h4 className="text-xl font-bold mb-2">{valor.titulo}</h4>
                            <p className="text-gray-600 text-sm">{valor.descricao}</p>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}

// Dados dos valores
const valores = [
    {
        titulo: "Foco na Qualidade",
        descricao: "Cada projeto é tratado com atenção aos detalhes e busca pela excelência criativa.",
        icon: "🎯",
    },
    {
        titulo: "Colaboração",
        descricao: "Trabalhamos em parceria com nossos clientes para entender e superar suas expectativas.",
        icon: "🤝",
    },
    {
        titulo: "Inovação",
        descricao: "Sempre explorando novas técnicas e tendências para manter o conteúdo fresco e relevante.",
        icon: "🏅",
    },
    {
        titulo: "Paixão",
        descricao: "Amamos o que fazemos e isso se reflete na qualidade de cada projeto entregue.",
        icon: "❤️",
    },
];
