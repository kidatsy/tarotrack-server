const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class SpreadPositionsCreate1653679129201 {
    name = 'SpreadPositionsCreate1653679129201'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "spread_position" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying,
                "description" text,
                "order" integer NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "spreadId" uuid,
                CONSTRAINT "PK_57e7ad0aa31457c43f84db4488d" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "spread"
            ADD "description" text
        `);
        await queryRunner.query(`
            ALTER TABLE "spread_position"
            ADD CONSTRAINT "FK_590fc185f4827c3f5f64b49e691" FOREIGN KEY ("spreadId") REFERENCES "spread"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "spread_position" DROP CONSTRAINT "FK_590fc185f4827c3f5f64b49e691"
        `);
        await queryRunner.query(`
            ALTER TABLE "spread" DROP COLUMN "description"
        `);
        await queryRunner.query(`
            DROP TABLE "spread_position"
        `);
    }
}
