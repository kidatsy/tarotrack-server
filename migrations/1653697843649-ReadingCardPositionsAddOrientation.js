const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class ReadingCardPositionsAddOrientation1653697843649 {
    name = 'ReadingCardPositionsAddOrientation1653697843649'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TYPE "public"."reading_card_position_orientation_enum" AS ENUM('upright', 'reversed', 'crossed')
        `);
        await queryRunner.query(`
            ALTER TABLE "reading_card_position"
            ADD "orientation" "public"."reading_card_position_orientation_enum" NOT NULL DEFAULT 'upright'
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."spread_position_defaultorientation_enum" AS ENUM('upright', 'reversed', 'crossed')
        `);
        await queryRunner.query(`
            ALTER TABLE "spread_position"
            ADD "defaultOrientation" "public"."spread_position_defaultorientation_enum"
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "spread_position" DROP COLUMN "defaultOrientation"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."spread_position_defaultorientation_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "reading_card_position" DROP COLUMN "orientation"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."reading_card_position_orientation_enum"
        `);
    }
}
