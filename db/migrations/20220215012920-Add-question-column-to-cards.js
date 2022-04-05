module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('cards', 'question', {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('question');
  },
};
