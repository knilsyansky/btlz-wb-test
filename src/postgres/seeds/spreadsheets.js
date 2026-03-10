/**
 * Сидер добавляет одну таблицу с id "some_spreadsheet". При конфликте
 * уникального значения пропускает выполнение операции
 *
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export async function seed(knex) {
    await knex("spreadsheets")
        .insert([{ spreadsheet_id: "some_spreadsheet" }])
        .onConflict(["spreadsheet_id"])
        .ignore();
}
