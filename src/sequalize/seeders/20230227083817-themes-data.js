'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('themes', [
      {
        color_hex_code: '#800080',
        isActive: true,
      },
      {
        color_hex_code: '#0000FF',
        isActive: false,
      },
      {
        color_hex_code: '#9B9999',
        isActive: false,
      },
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('themes', null, {});
  },
};
