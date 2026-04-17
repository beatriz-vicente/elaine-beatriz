export interface GiftItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Italy' | 'Spain' | 'Home' | 'Family';
  suggestedValue?: number;
}

export const GIFT_LIST: GiftItem[] = [
  {
    id: 'brinde-noivas',
    title: 'Brinde às Noivas',
    description: 'Um brinde especial para celebrar o nosso amor e o início dessa jornada.',
    image: 'https://',
    category: 'Italy',
    suggestedValue: 60
  },
  {
    id: 'jantar-romantico',
    title: 'Jantar Romântico',
    description: 'Uma noite especial para desfrutarmos da culinária local em nossa lua de mel.',
    image: 'https://',
    category: 'Italy',
    suggestedValue: 250
  },
  {
    id: 'kit-quarto',
    title: 'Kit Renovação do Quarto',
    description: 'Um jogo de lençol macio para nossas noites de descanso e carinho.',
    image: 'https://',
    category: 'Home',
    suggestedValue: 200
  },
  {
    id: 'sache-gatinhos',
    title: 'Sachê dos Gatinhos',
    description: 'Porque nossos filhos de quatro patas também merecem um banquete!',
    image: 'https://',
    category: 'Family',
    suggestedValue: 35
  },
  {
    id: 'cegonha-caminho',
    title: 'Fundo de Reserva: Cegonha a caminho!',
    description: 'Um investimento no nosso sonho de aumentar a família no futuro.',
    image: 'https://',
    category: 'Family'
  },
  {
    id: 'enxoval-livros',
    title: 'Cota Enxoval de Livros pro Bebê',
    description: 'Para que nossos futuros pequenos cresçam rodeados de histórias.',
    image: 'https://',
    category: 'Family',
    suggestedValue: 100
  },
  {
    id: 'tapas-canas',
    title: 'Primeiros Tapas e Cañas',
    description: 'Nossa primeira parada gastronômica em terras espanholas.',
    image: 'https://',
    category: 'Spain',
    suggestedValue: 120
  },
  {
    id: 'passeio-como',
    title: 'Passeio de mãos dadas em Como',
    description: 'Um momento romântico às margens do Lago di Como, na Itália.',
    image: 'https://',
    category: 'Italy',
    suggestedValue: 200
  },
  {
    id: 'jantar-sevilha',
    title: 'Jantar à luz de velas em Sevilha',
    description: 'A magia da Andaluzia em uma noite inesquecível.',
    image: 'https://',
    category: 'Spain',
    suggestedValue: 300
  },
  {
    id: 'churros-madrid',
    title: 'Churros em Madrid',
    description: 'O clássico chocolate com churros na San Ginés.',
    image: 'https://',
    category: 'Spain',
    suggestedValue: 80
  },
  {
    id: 'bairro-gotico',
    title: 'Perdidas no Bairro Gótico',
    description: 'Explorando as ruelas históricas de Barcelona.',
    image: 'https://',
    category: 'Spain',
    suggestedValue: 100
  },
  {
    id: 'luminaria-beatriz',
    title: 'Luminária dos sonhos da Nani',
    description: 'Um toque de luz e tecnologia para o cantinho da nossa dev favorita.',
    image: 'https://',
    category: 'Home',
    suggestedValue: 220
  }
];

export const PIX_KEY = '15996625815'; 
export const ACCOUNT_HOLDER = 'Elaine e Beatriz';
