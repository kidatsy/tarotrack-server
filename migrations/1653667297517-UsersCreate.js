const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class UsersCreate1653667297517 {
    name = 'UserCreate1653667297517'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "email" character varying NOT NULL,
                "firstName" character varying,
                "lastName" character varying,
                "isActive" boolean NOT NULL DEFAULT true,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }
}
