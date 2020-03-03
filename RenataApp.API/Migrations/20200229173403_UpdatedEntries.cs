using Microsoft.EntityFrameworkCore.Migrations;

namespace Renata.API.Migrations
{
    public partial class UpdatedEntries : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PaymentTypes");

            migrationBuilder.DropColumn(
                name: "SaleTypes",
                table: "SaleTypes");

            migrationBuilder.AddColumn<string>(
                name: "SaleName",
                table: "SaleTypes",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "PayTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PayName = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PayTypes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PayTypes_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PayTypes_UserId",
                table: "PayTypes",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PayTypes");

            migrationBuilder.DropColumn(
                name: "SaleName",
                table: "SaleTypes");

            migrationBuilder.AddColumn<string>(
                name: "SaleTypes",
                table: "SaleTypes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "PaymentTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PaymentTypes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentTypes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PaymentTypes_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PaymentTypes_UserId",
                table: "PaymentTypes",
                column: "UserId");
        }
    }
}
