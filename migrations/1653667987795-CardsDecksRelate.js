const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CardsDecksRelate1653667987795 {
    name = 'CardsDecksRelate1653667987795'

    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "card"
            ADD "deckId" uuid
        `);
        await queryRunner.query(`
            ALTER TABLE "card"
            ADD CONSTRAINT "FK_673081effbabe22d74757339c60" FOREIGN KEY ("deckId") REFERENCES "deck"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "card" DROP CONSTRAINT "FK_673081effbabe22d74757339c60"
        `);
        await queryRunner.query(`
            ALTER TABLE "card" DROP COLUMN "deckId"
        `);
    }
}
