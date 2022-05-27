const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CardsCreate1653667526474 {
    name = 'CardsCreate1653667526474'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TYPE "public"."card_arcana_enum" AS ENUM('major', 'minor')
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."card_suit_enum" AS ENUM('cups', 'pentacles', 'swords', 'wands')
        `);
        await queryRunner.query(`
            CREATE TABLE "card" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "arcana" "public"."card_arcana_enum" NOT NULL DEFAULT 'minor',
                "value" integer,
                "valueCustom" character varying,
                "suit" "public"."card_suit_enum",
                "suitCustom" character varying,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id")
            )
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "card"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."card_suit_enum"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."card_arcana_enum"
        `);
    }
}
