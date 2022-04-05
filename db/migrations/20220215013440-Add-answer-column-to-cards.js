module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('cards', 'answer', {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('answer');
  },
};
