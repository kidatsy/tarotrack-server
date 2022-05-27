const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class UserAddingTimestamps1653630425677 {
    name = 'UserAddingTimestamps1653630425677'

    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "updatedAt"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "createdAt"
        `);
    }
}
