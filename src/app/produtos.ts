export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagePath: string;
}

export const produtos = [
  {
    id: 1,
    nome: 'Anel Solitário de Prata',
    preco: 799,
    descricao:
      'O acessório feminino perfeito para trazer um toque de sofisticação para sua composição de joias de prata. Feito em metal prata 925, formato da pedra central redonda, tipo da pedra zircônia.',
    imagePath: '../assets/images/anel1.jpg',
  },
  {
    id: 2,
    nome: 'Anel Chuveirinho de Ouro',
    preco: 1499,
    descricao:
      'O anel de ouro é um clássico na lista de acessórios femininos! Não há dúvidas de que seu mix de anéis de ouro ficará ainda mais poderoso por meio desse anel chuveiro rainha cravejado com zircônias!',
    imagePath: '../assets/images/anel2.jpg',
  },
  {
    id: 3,
    nome: 'Brinco de Zircônia Coração Lilás',
    preco: 99,
    descricao: '',
    imagePath: '../assets/images/brinco1.jpg',
  },
];
