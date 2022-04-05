module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cards', [
      {
        cardName: 'Easy',
        question: 'Принцесса Селестия это..... ',
        answer: 'аликорн',
        deckId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardName: 'Easy',
        question: 'Скуталу сестра Радуги Дэш?',
        answer: 'нет',
        deckId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardName: 'Medium',
        question: 'Входит ли Эплл Блум в клуб метконосцев?',
        answer: 'да',
        deckId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardName: 'Hard',
        question: 'Как зовут собаку Эппл Джек?',
        answer: 'вайнона',
        deckId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardName: 'Hard',
        question: 'У кого из пони есть кошка?',
        answer: 'рарити',
        deckId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    const { Op } = Sequelize;
    await queryInterface.bulkDelete(
      'cards',
      {
        cardName: {
          [Op.in]: ['Easy', 'Medium', 'Hard'],
        },
      },
      {},
    );
  },
};
