const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Deck }) {
      Card.belongsTo(Deck, { foreignKey: 'deckId' });
      // define association here
    }
  }
  Card.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cardName: {
        type: DataTypes.STRING,
      },
      question: {
        type: DataTypes.STRING,
      },
      answer: {
        type: DataTypes.STRING,
      },
      deckId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'decks',
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: 'cards',
      modelName: 'Card',
    }
  );
  return Card;
};
