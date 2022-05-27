const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class SeedRiderWaiteSmith1653683517243 {

    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO deck (name, creator, description)
            VALUES ('Rider-Waite-Smith', 'Arthur Edward Waite, Pamela Colman Smith', 'The classic Rider-Waite-Smith Tarot is the best known Tarot deck. The vibrant cards, featuring full scenes with figures and symbols, were drawn in 1909 by Pamela Colman Smith under direction of Arthur Edward Waite.')
        `);
        await queryRunner.query(`
            INSERT INTO card ("deckId", "archetypeId")
            VALUES
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 0)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 1)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 2)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 3)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 4)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 5)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 6)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 7)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 8)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 9)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 10)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 11)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 12)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 13)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 14)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 15)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 16)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 17)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 18)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 19)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 20)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'major' AND value = 21)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 1)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 2)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 3)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 4)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 5)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 6)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 7)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 8)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 9)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 10)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 11)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 12)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 13)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'cups' AND value = 14)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 1)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 2)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 3)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 4)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 5)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 6)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 7)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 8)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 9)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 10)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 11)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 12)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 13)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'pentacles' AND value = 14)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 1)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 2)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 3)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 4)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 5)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 6)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 7)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 8)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 9)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 10)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 11)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 12)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 13)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'swords' AND value = 14)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 1)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 2)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 3)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 4)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 5)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 6)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 7)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 8)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 9)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 10)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 11)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 12)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 13)),
                ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'), (SELECT id FROM card_archetype WHERE arcana = 'minor' AND suit = 'wands' AND value = 14))
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM card WHERE "deckId" = ((SELECT id FROM deck WHERE name = 'Rider-Waite-Smith'))`);
        await queryRunner.query(`DELETE FROM deck WHERE name = 'Rider-Waite-Smith'`);
    }
}
        