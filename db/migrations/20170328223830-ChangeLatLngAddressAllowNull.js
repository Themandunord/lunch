const db = require('../../src/models/db');
const Promise = require('bluebird');
const lzCoords = require('../../src/constants/lzCoords');

exports.up = (queryInterface, Sequelize) => {
  const Team = db.sequelize.define('team', {
    name: Sequelize.STRING,
    slug: Sequelize.STRING(63),
    lat: Sequelize.DOUBLE,
    lng: Sequelize.DOUBLE,
    address: Sequelize.STRING
  }, {
    underscored: true
  });

  return Team.update({
    ...lzCoords,
    address: '77 Battery Street, San Francisco, CA 94111, USA'
  }, {
    where: { slug: 'labzero' }
  }).then(() =>
    Promise.all(
      queryInterface.changeColumn('teams', 'lat', {
        type: Sequelize.DOUBLE,
        allowNull: false,
      }),
      queryInterface.changeColumn('teams', 'lng', {
        type: Sequelize.DOUBLE,
        allowNull: false,
      })
    )
  );
};

exports.down = (queryInterface, Sequelize) => Promise.all(
  queryInterface.changeColumn('teams', 'lat', {
    allowNull: true,
    type: Sequelize.DOUBLE
  }),
  queryInterface.changeColumn('teams', 'lng', {
    allowNull: true,
    type: Sequelize.DOUBLE
  })
);
