export interface Room {
  id: string;
  name: string;
  type: 'suite' | 'cabana' | 'compartilhado' | 'camping';
  typeName: string;
  price: number;
  capacity: number;
  features: string[];
  description: string;
  images: string[];
  badge?: string;
}

export const ROOMS_DATA: Room[] = [
  {
    id: '361b8cbf-0882-40af-8622-4a166372d172',
    name: 'Chalet de 1 dormitorio',
    type: 'suite',
    typeName: 'Chalé Completo',
    price: 350,
    capacity: 4,
    badge: 'Mais Desejado',
    features: [
      'Pátio / Varanda Privativa com Rede & Vista para o Jardim',
      'Banheiro Privativo Completo com Amenidades',
      'Ar-Condicionado & TV de Tela Plana',
      'Cama Queen Size + Camas Extras (Roupas & Toalhas)',
      'Frigobar & Wi-Fi Grátis',
      'Café Colonial Incluso & Estacionamento Gratuito',
      '100% Pet Friendly'
    ],
    description: 'Chalé independente e aconchegante para até 4 pessoas. Varanda com rede e vista relaxante para a mata atlântica, ar-condicionado, TV de tela plana, banheiro privativo, frigobar e acesso plano às piscinas naturais do rio.',
    images: [
      'https://dqeprgxxrnhkneunhxmc.supabase.co/storage/v1/object/public/tenant-media/recanto-dos-passaros/unit_eff53df1-5047-4111-9765-fbae8222352b.jpg',
      '/recanto/quarto-chale.jpg',
      '/recanto/chales-individuais-jardim.jpg',
      '/recanto/hero-pousada-real.jpg'
    ]
  },
  {
    id: 'c4ac07ab-401b-422d-bc4c-2008196c24a5',
    name: 'Quarto Família com Vista para o Jardim',
    type: 'suite',
    typeName: 'Suíte Família',
    price: 300,
    capacity: 5,
    badge: 'Ideal para Famílias',
    features: [
      'Amplo Espaço para até 5 Pessoas',
      'Varanda com Rede & Vista Aberta para o Jardim',
      'Banheiro Privativo com Ducha Quente e Amenidades',
      'Ar-Condicionado & TV de Tela Plana',
      'Camas Casal e Solteiro com Enxoval Completo',
      'Frigobar, Wi-Fi & Estacionamento Gratuito',
      'Café da Roça Incluso & Pet Friendly'
    ],
    description: 'Espaço generoso e acolhedor especialmente preparado para famílias e grupos de até 5 pessoas. Varanda privativa com rede voltada para o gramado e jardins da pousada, ambiente fresco, silencioso e muito perto da área de lazer e rio.',
    images: [
      'https://dqeprgxxrnhkneunhxmc.supabase.co/storage/v1/object/public/tenant-media/recanto-dos-passaros/unit_783d12cf-f158-4ea3-bcd2-92e95bcdf49f.jpg',
      '/recanto/quarto-chale.jpg',
      '/recanto/chales-individuais-jardim.jpg'
    ]
  },
  {
    id: '1ead0d2f-85cd-4d34-a674-bec9fb698153',
    name: 'Suíte familiar com varanda',
    type: 'suite',
    typeName: 'Suíte com Varanda',
    price: 300,
    capacity: 4,
    badge: 'Varanda Privativa',
    features: [
      'Varanda Térrea com Rede e Vista Verde',
      'Banheiro Privativo Completo',
      'Ar-Condicionado & TV de Tela Plana',
      'Roupas de Cama e Banho Macias Inclusas',
      'Frigobar Abastecível & Wi-Fi Grátis',
      'Café da Manhã Excepcional Incluso (Buffet)',
      '100% Pet Friendly'
    ],
    description: 'Suíte térrea com excelente ventilação e varanda privativa equipada com rede. Ideal para casais com filhos ou amigos de até 4 pessoas que desejam sossego e integração com a natureza exuberante do Sana.',
    images: [
      'https://dqeprgxxrnhkneunhxmc.supabase.co/storage/v1/object/public/tenant-media/recanto-dos-passaros/unit_e627bbfc-23ee-40e5-bb27-7f9a00a71f66.jpg',
      '/recanto/chales-individuais-jardim.jpg',
      '/recanto/hero-pousada-real.jpg'
    ]
  },
  {
    id: '4cf3370e-393e-447b-b8f3-2c43835a3abc',
    name: 'Suíte Júnior com Varanda',
    type: 'suite',
    typeName: 'Suíte Romântica',
    price: 300,
    capacity: 2,
    badge: 'Casal & Romance',
    features: [
      'Suíte Privativa 23 m² com Varanda Térrea',
      'Vista do Jardim, das Montanhas e do Rio',
      'Cama de Casal com Enxoval Completo',
      'Ar-Condicionado & TV de Tela Plana',
      'Banheiro Privativo com Amenidades de Cortesia',
      'Frigobar, Wi-Fi & Estacionamento Grátis',
      'Café da Manhã Farto Incluso'
    ],
    description: 'Suíte privativa de 23 m² com varanda térrea e vista das montanhas, jardim e rio. Climatizada com ar-condicionado, TV de tela plana, frigobar e banheiro privativo. O refúgio romântico perfeito para casais.',
    images: [
      'https://dqeprgxxrnhkneunhxmc.supabase.co/storage/v1/object/public/tenant-media/recanto-dos-passaros/unit_73db6fe0-aaa3-45bd-8c6e-f4cf16ba6a39.jpg',
      '/recanto/piscina-natural-rio.jpg',
      '/recanto/quarto-chale.jpg'
    ]
  },
  {
    id: 'f9694f40-9391-4e89-9cc5-52f9f6cc1020',
    name: 'Suíte Júnior com Vista do Jardim',
    type: 'suite',
    typeName: 'Suíte Jardim',
    price: 300,
    capacity: 2,
    badge: 'Vista do Jardim',
    features: [
      'Suíte Privativa 23 m² com Vista Relaxante',
      'Varanda Térrea com Rede',
      'Ar-Condicionado & TV de Tela Plana',
      'Banheiro Privativo Espaçoso',
      'Frigobar, Wi-Fi Grátis & Estacionamento',
      'Café Colonial Incluso no Salão Panorâmico',
      'Pet Friendly'
    ],
    description: 'Confortável suíte privativa de 23 m² com vista para os jardins da pousada. Varanda térrea com rede, ar-condicionado, TV de tela plana, frigobar e enxoval completo, proporcionando noites de sono reparadoras ao som da natureza.',
    images: [
      'https://dqeprgxxrnhkneunhxmc.supabase.co/storage/v1/object/public/tenant-media/recanto-dos-passaros/unit_9626e0f9-8ccf-4a7d-a86c-5f85157793a2.jpg',
      '/recanto/chales-individuais-jardim.jpg',
      '/recanto/hero-pousada-real.jpg'
    ]
  }
];
