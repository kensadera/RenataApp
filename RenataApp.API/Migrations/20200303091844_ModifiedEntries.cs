using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Renata.API.Migrations
{
    public partial class ModifiedEntries : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Phone_Users_UserId",
                table: "Phone");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Phone",
                table: "Phone");

            migrationBuilder.DropColumn(
                name: "DateSold",
                table: "Phone");

            migrationBuilder.RenameTable(
                name: "Phone",
                newName: "Phones");

            migrationBuilder.RenameIndex(
                name: "IX_Phone_UserId",
                table: "Phones",
                newName: "IX_Phones_UserId");

            migrationBuilder.AddColumn<decimal>(
                name: "Cost",
                table: "Inventories",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "Imei",
                table: "Inventories",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateSupplied",
                table: "Phones",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "PhoneTypeId",
                table: "Phones",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SupplierId",
                table: "Phones",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Phones",
                table: "Phones",
                column: "Id");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Phones_Users_UserId",
                table: "Phones",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Phones_PhoneTypes_PhoneTypeId",
                table: "Phones");

            migrationBuilder.DropForeignKey(
                name: "FK_Phones_Suppliers_SupplierId",
                table: "Phones");

            migrationBuilder.DropForeignKey(
                name: "FK_Phones_Users_UserId",
                table: "Phones");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Phones",
                table: "Phones");

            migrationBuilder.DropIndex(
                name: "IX_Phones_PhoneTypeId",
                table: "Phones");

            migrationBuilder.DropIndex(
                name: "IX_Phones_SupplierId",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "Cost",
                table: "Inventories");

            migrationBuilder.DropColumn(
                name: "Imei",
                table: "Inventories");

            migrationBuilder.DropColumn(
                name: "DateSupplied",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "PhoneTypeId",
                table: "Phones");

            migrationBuilder.DropColumn(
                name: "SupplierId",
                table: "Phones");

            migrationBuilder.RenameTable(
                name: "Phones",
                newName: "Phone");

            migrationBuilder.RenameIndex(
                name: "IX_Phones_UserId",
                table: "Phone",
                newName: "IX_Phone_UserId");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateSold",
                table: "Phone",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Phone",
                table: "Phone",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Phone_Users_UserId",
                table: "Phone",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
