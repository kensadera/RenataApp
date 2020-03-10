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

            migrationBuilder.AddColumn<decimal>(
                name: "Cost",
                table: "Sales",
                nullable: false,
                defaultValue: 0m);

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
                name: "PayType",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SaleType",
                table: "Sales",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TypeName",
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
                name: "Name",
                table: "Phones",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TypeName",
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
                name: "Cost",
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
                name: "PayType",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "SaleType",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "TypeName",
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
                name: "Name",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "TypeName",
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

            migrationBuilder.CreateIndex(
                name: "IX_Phones_PhoneTypeId",
                table: "Phones",
                column: "PhoneTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Phones_SupplierId",
                table: "Phones",
                column: "SupplierId");

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
