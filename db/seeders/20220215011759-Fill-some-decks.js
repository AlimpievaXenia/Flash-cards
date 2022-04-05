module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('decks', [
      {
        deckName: 'My Little Pony',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckName: 'Игра Престолов',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckName: 'JS и всё такое',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        deckName: 'Комедии и ситкомы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    const { Op } = Sequelize;
    await queryInterface.bulkDelete(
      'decks',
      {
        deckName: {
          [Op.in]: [
            'My Little Pony',
            'Игра Престолов',
            'JS и всё такое',
            'Комедии и ситкомы',
          ],
        },
      },
      {},
    );
  },
};
