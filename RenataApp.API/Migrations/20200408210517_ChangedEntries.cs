using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Renata.API.Migrations
{
    public partial class ChangedEntries : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Phones_PhoneTypes_PhoneTypeId",
                table: "Phones");

            migrationBuilder.DropForeignKey(
                name: "FK_Phones_Suppliers_SupplierId",
                table: "Phones");

            migrationBuilder.DropTable(
                name: "PayTypes");

            migrationBuilder.DropTable(
                name: "SaleTypes");

            migrationBuilder.DropTable(
                name: "Stores");

            migrationBuilder.DropIndex(
                name: "IX_Phones_PhoneTypeId",
                table: "Phones");

            migrationBuilder.DropIndex(
                name: "IX_Phones_SupplierId",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "DateSold",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "IsSold",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "SalePrice",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "DateSupplied",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "PhoneTypeId",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "SupplierId",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "DateStocked",
                table: "Inventories");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Inventories");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Sales",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Imei",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsPaid",
                table: "Sales",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ModelName",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Order",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "Sales",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "SaleType",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TypeName",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "User",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Sales",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "Imei",
                table: "Phones",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Phones",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "ModelName",
                table: "Phones",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SupplierName",
                table: "Phones",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TypeName",
                table: "Phones",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "User",
                table: "Phones",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Imei",
                table: "Inventories",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Inventories",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "ModelName",
                table: "Inventories",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StoreName",
                table: "Inventories",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TypeName",
                table: "Inventories",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "User",
                table: "Inventories",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sales_UserId",
                table: "Sales",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sales_Users_UserId",
                table: "Sales",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sales_Users_UserId",
                table: "Sales");

            migrationBuilder.DropIndex(
                name: "IX_Sales_UserId",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "Imei",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "IsPaid",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "ModelName",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "Order",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "SaleType",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "TypeName",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "User",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "ModelName",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "SupplierName",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "TypeName",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "User",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "Inventories");

            migrationBuilder.DropColumn(
                name: "ModelName",
                table: "Inventories");

            migrationBuilder.DropColumn(
                name: "StoreName",
                table: "Inventories");

            migrationBuilder.DropColumn(
                name: "TypeName",
                table: "Inventories");

            migrationBuilder.DropColumn(
                name: "User",
                table: "Inventories");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateSold",
                table: "Sales",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Sales",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsSold",
                table: "Sales",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<decimal>(
                name: "SalePrice",
                table: "Sales",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AlterColumn<int>(
                name: "Imei",
                table: "Phones",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateSupplied",
                table: "Phones",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "PhoneTypeId",
                table: "Phones",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SupplierId",
                table: "Phones",
                type: "int",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Imei",
                table: "Inventories",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateStocked",
                table: "Inventories",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Inventories",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "PayTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: false)
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

            migrationBuilder.CreateTable(
                name: "SaleTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SaleName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SaleTypes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SaleTypes_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Stores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StoreName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stores", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Stores_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Phones_PhoneTypeId",
                table: "Phones",
                column: "PhoneTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Phones_SupplierId",
                table: "Phones",
                column: "SupplierId");

            migrationBuilder.CreateIndex(
                name: "IX_PayTypes_UserId",
                table: "PayTypes",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_SaleTypes_UserId",
                table: "SaleTypes",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Stores_UserId",
                table: "Stores",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Phones_PhoneTypes_PhoneTypeId",
                table: "Phones",
                column: "PhoneTypeId",
                principalTable: "PhoneTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Phones_Suppliers_SupplierId",
                table: "Phones",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
