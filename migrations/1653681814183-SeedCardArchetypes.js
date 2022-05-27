const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class SeedCardArchetypes1653681814183 {

    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO card_archetype (arcana, value, suit)
            VALUES
                ('major', 0, null),
                ('major', 1, null),
                ('major', 2, null),
                ('major', 3, null),
                ('major', 4, null),
                ('major', 5, null),
                ('major', 6, null),
                ('major', 7, null),
                ('major', 8, null),
                ('major', 9, null),
                ('major', 10, null),
                ('major', 11, null),
                ('major', 12, null),
                ('major', 13, null),
                ('major', 14, null),
                ('major', 15, null),
                ('major', 16, null),
                ('major', 17, null),
                ('major', 18, null),
                ('major', 19, null),
                ('major', 20, null),
                ('major', 21, null),
                ('minor', 1, 'cups'),
                ('minor', 2, 'cups'),
                ('minor', 3, 'cups'),
                ('minor', 4, 'cups'),
                ('minor', 5, 'cups'),
                ('minor', 6, 'cups'),
                ('minor', 7, 'cups'),
                ('minor', 8, 'cups'),
                ('minor', 9, 'cups'),
                ('minor', 10, 'cups'),
                ('minor', 11, 'cups'),
                ('minor', 12, 'cups'),
                ('minor', 13, 'cups'),
                ('minor', 14, 'cups'),
                ('minor', 1, 'pentacles'),
                ('minor', 2, 'pentacles'),
                ('minor', 3, 'pentacles'),
                ('minor', 4, 'pentacles'),
                ('minor', 5, 'pentacles'),
                ('minor', 6, 'pentacles'),
                ('minor', 7, 'pentacles'),
                ('minor', 8, 'pentacles'),
                ('minor', 9, 'pentacles'),
                ('minor', 10, 'pentacles'),
                ('minor', 11, 'pentacles'),
                ('minor', 12, 'pentacles'),
                ('minor', 13, 'pentacles'),
                ('minor', 14, 'pentacles'),
                ('minor', 1, 'swords'),
                ('minor', 2, 'swords'),
                ('minor', 3, 'swords'),
                ('minor', 4, 'swords'),
                ('minor', 5, 'swords'),
                ('minor', 6, 'swords'),
                ('minor', 7, 'swords'),
                ('minor', 8, 'swords'),
                ('minor', 9, 'swords'),
                ('minor', 10, 'swords'),
                ('minor', 11, 'swords'),
                ('minor', 12, 'swords'),
                ('minor', 13, 'swords'),
                ('minor', 14, 'swords'),
                ('minor', 1, 'wands'),
                ('minor', 2, 'wands'),
                ('minor', 3, 'wands'),
                ('minor', 4, 'wands'),
                ('minor', 5, 'wands'),
                ('minor', 6, 'wands'),
                ('minor', 7, 'wands'),
                ('minor', 8, 'wands'),
                ('minor', 9, 'wands'),
                ('minor', 10, 'wands'),
                ('minor', 11, 'wands'),
                ('minor', 12, 'wands'),
                ('minor', 13, 'wands'),
                ('minor', 14, 'wands')
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM card_archetype`);
    }
}
        