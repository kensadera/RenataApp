using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Renata.API.Migrations
{
    public partial class ModifiedEntries : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateSold",
                table: "Phone");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateSupplied",
                table: "Phone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "PhoneTypeId",
                table: "Phone",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SupplierId",
                table: "Phone",
                nullable: true);

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

            migrationBuilder.CreateIndex(
                name: "IX_Phone_PhoneTypeId",
                table: "Phone",
                column: "PhoneTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Phone_SupplierId",
                table: "Phone",
                column: "SupplierId");

            migrationBuilder.AddForeignKey(
                name: "FK_Phone_PhoneTypes_PhoneTypeId",
                table: "Phone",
                column: "PhoneTypeId",
                principalTable: "PhoneTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Phone_Suppliers_SupplierId",
                table: "Phone",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Phone_PhoneTypes_PhoneTypeId",
                table: "Phone");

            migrationBuilder.DropForeignKey(
                name: "FK_Phone_Suppliers_SupplierId",
                table: "Phone");

            migrationBuilder.DropIndex(
                name: "IX_Phone_PhoneTypeId",
                table: "Phone");

            migrationBuilder.DropIndex(
                name: "IX_Phone_SupplierId",
                table: "Phone");

            migrationBuilder.DropColumn(
                name: "DateSupplied",
                table: "Phone");

            migrationBuilder.DropColumn(
                name: "PhoneTypeId",
                table: "Phone");

            migrationBuilder.DropColumn(
                name: "SupplierId",
                table: "Phone");

            migrationBuilder.DropColumn(
                name: "Cost",
                table: "Inventories");

            migrationBuilder.DropColumn(
                name: "Imei",
                table: "Inventories");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateSold",
                table: "Phone",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
