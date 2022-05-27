const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class ReadingsAndPositionsCreate1653681291668 {
    name = 'ReadingsAndPositionsCreate1653681291668'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "reading_card_position" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying,
                "description" text,
                "order" integer NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "readingId" uuid,
                "spreadPositionId" uuid,
                "cardId" uuid,
                CONSTRAINT "PK_373abab7a097ee45cbdd0e7c68f" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "reading" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying,
                "description" text,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "spreadId" uuid,
                "deckId" uuid,
                "readerId" uuid,
                CONSTRAINT "PK_f46a902bd4c9624c8b512174944" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "reading_card_position"
            ADD CONSTRAINT "FK_44c511e7af860e76924792d1df2" FOREIGN KEY ("readingId") REFERENCES "reading"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "reading_card_position"
            ADD CONSTRAINT "FK_caec22fe8994fc2e8ff0a48e695" FOREIGN KEY ("spreadPositionId") REFERENCES "spread_position"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "reading_card_position"
            ADD CONSTRAINT "FK_c37e63dbb7d28c256dbded2dff0" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "reading"
            ADD CONSTRAINT "FK_bf6f68dac4a282a7700913263da" FOREIGN KEY ("spreadId") REFERENCES "spread"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "reading"
            ADD CONSTRAINT "FK_4d66f27ac2cc0d21cddd3122dd0" FOREIGN KEY ("deckId") REFERENCES "deck"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "reading"
            ADD CONSTRAINT "FK_49a4e45edf1ff06d67e5b0076e5" FOREIGN KEY ("readerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "reading" DROP CONSTRAINT "FK_49a4e45edf1ff06d67e5b0076e5"
        `);
        await queryRunner.query(`
            ALTER TABLE "reading" DROP CONSTRAINT "FK_4d66f27ac2cc0d21cddd3122dd0"
        `);
        await queryRunner.query(`
            ALTER TABLE "reading" DROP CONSTRAINT "FK_bf6f68dac4a282a7700913263da"
        `);
        await queryRunner.query(`
            ALTER TABLE "reading_card_position" DROP CONSTRAINT "FK_c37e63dbb7d28c256dbded2dff0"
        `);
        await queryRunner.query(`
            ALTER TABLE "reading_card_position" DROP CONSTRAINT "FK_caec22fe8994fc2e8ff0a48e695"
        `);
        await queryRunner.query(`
            ALTER TABLE "reading_card_position" DROP CONSTRAINT "FK_44c511e7af860e76924792d1df2"
        `);
        await queryRunner.query(`
            DROP TABLE "reading"
        `);
        await queryRunner.query(`
            DROP TABLE "reading_card_position"
        `);
    }
}
