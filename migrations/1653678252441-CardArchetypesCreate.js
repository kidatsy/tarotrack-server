const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CardArchetypesCreate1653678252441 {
    name = 'CardArchetypeCreate1653678252441'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TYPE "public"."card_archetype_arcana_enum" AS ENUM('major', 'minor')
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."card_archetype_suit_enum" AS ENUM('cups', 'wands', 'swords', 'pentacles')
        `);
        await queryRunner.query(`
            CREATE TABLE "card_archetype" (
                "id" SERIAL NOT NULL,
                "arcana" "public"."card_archetype_arcana_enum" NOT NULL DEFAULT 'minor',
                "value" integer,
                "suit" "public"."card_archetype_suit_enum",
                CONSTRAINT "PK_4e44da15a55ebc683f223ace135" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "card" DROP COLUMN "arcana"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."card_arcana_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "card" DROP COLUMN "value"
        `);
        await queryRunner.query(`
            ALTER TABLE "card" DROP COLUMN "suit"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."card_suit_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "card"
            ADD "archetypeId" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "card"
            ADD CONSTRAINT "FK_97b6f534a0c35675c36631deb4e" FOREIGN KEY ("archetypeId") REFERENCES "card_archetype"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "card" DROP CONSTRAINT "FK_97b6f534a0c35675c36631deb4e"
        `);
        await queryRunner.query(`
            ALTER TABLE "card" DROP COLUMN "archetypeId"
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."card_suit_enum" AS ENUM('cups', 'wands', 'swords', 'pentacles')
        `);
        await queryRunner.query(`
            ALTER TABLE "card"
            ADD "suit" "public"."card_suit_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "card"
            ADD "value" integer
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."card_arcana_enum" AS ENUM('major', 'minor')
        `);
        await queryRunner.query(`
            ALTER TABLE "card"
            ADD "arcana" "public"."card_arcana_enum" NOT NULL DEFAULT 'minor'
        `);
        await queryRunner.query(`
            DROP TABLE "card_archetype"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."card_archetype_suit_enum"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."card_archetype_arcana_enum"
        `);
    }
}
