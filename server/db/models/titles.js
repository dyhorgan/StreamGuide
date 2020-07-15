const Sequelize = require('sequelize')
const db = require('../db')

const Title = db.define('title', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imdbScore: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  rottenTomatoes: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  genreTag: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  whereWatch: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  pop: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  contentTag: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  languages: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  }
})

module.exports = Title
