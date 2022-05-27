const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class SpreadsCreate1653676990429 {
    name = 'SpreadsCreate1653676990429'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "spread" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "userId" uuid,
                CONSTRAINT "PK_b3375ab9b97440481c4e6a5f7f7" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "spread"
            ADD CONSTRAINT "FK_6c7153d4f321dbb60039c9cc98c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "spread" DROP CONSTRAINT "FK_6c7153d4f321dbb60039c9cc98c"
        `);
        await queryRunner.query(`
            DROP TABLE "spread"
        `);
    }
}
