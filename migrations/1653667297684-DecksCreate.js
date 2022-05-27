const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class DecksCreate1653667297684 {
    name = 'DecksCreate1653667297684'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "deck" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "creator" character varying,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "submittedById" uuid,
                CONSTRAINT "PK_99f8010303acab0edf8e1df24f9" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "deck"
            ADD CONSTRAINT "FK_21f37564aa39b2f840d6d49c276" FOREIGN KEY ("submittedById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "deck" DROP CONSTRAINT "FK_21f37564aa39b2f840d6d49c276"
        `);
        await queryRunner.query(`
            DROP TABLE "deck"
        `);
    }
}
