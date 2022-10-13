type Stars = {
  id: number;
  isStarFill: boolean;
};

type Testimonial = {
  id: number;
  name: string;
  office: string;
  deposition: string;
  stars: Stars[];
};

export const testimonial: Testimonial[] = [
  {
    id: 1,
    name: "Leandro Vieira",
    office: "Operacional Fedex",
    deposition:
      "Desde que a Nettracker entrou em nossa operação, muitos problemas emergenciais foram resolvidos em tempo recorde, realizando socorros em vias, estabelecimentos e em filiais aos finais de semana e feriados.",
    stars: [
      { id: 1, isStarFill: true },
      { id: 2, isStarFill: true },
      { id: 3, isStarFill: true },
      { id: 4, isStarFill: true },
      { id: 5, isStarFill: true },
    ],
  },

  {
    id: 2,
    name: "Alisson Silva",
    office: "Gerente de Riscos Raça Transportes",
    deposition:
      "Nos da Raça Transportes agradecemos a parceria e o excelente trabalho de manutenção e reposição de peças da Nettracker no que tange a manutenção dos equipamentos de Rastreamento de nossas Frotas.",
    stars: [
      { id: 1, isStarFill: true },
      { id: 2, isStarFill: true },
      { id: 3, isStarFill: true },
      { id: 4, isStarFill: true },
      { id: 5, isStarFill: true },
    ],
  },
  {
    id: 3,
    name: "Roberto Silva",
    office: "CEO Voltz Transportes",
    deposition:
      "A Nettracker me ofereceu total apoio e suporte e por isso recomendo! Além de um trabalho qualificado tem total atenção com o cliente, muitos atenciosos e prestativos.",
    stars: [
      { id: 1, isStarFill: true },
      { id: 2, isStarFill: true },
      { id: 3, isStarFill: true },
      { id: 4, isStarFill: true },
      { id: 5, isStarFill: true },
    ],
  },
  {
    id: 4,
    name: "Arnaldo Seixas",
    office: "Surpervisor MaxTransportes",
    deposition:
      "Um atendimento exclente, com um exclente suporte atendendo todas as minhas demandas. Obrigado Nettracker por todo apoio e comprometimento com minha equipe. Continuem assim, atenciosos e dedicados!",
    stars: [
      { id: 1, isStarFill: true },
      { id: 2, isStarFill: true },
      { id: 3, isStarFill: true },
      { id: 4, isStarFill: true },
      { id: 5, isStarFill: true },
    ],
  },
];
