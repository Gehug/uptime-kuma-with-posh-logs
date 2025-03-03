exports.up = function(knex) {
    return knex.schema.createTable("error", (table) => {
        table.increments("id");
        table.integer("monitor_id").unsigned().notNullable()
            .references("id").inTable("monitor")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.string("type", 255).notNullable();
        table.string("message", 255).notNullable();
        table.datetime("created_date").notNullable().defaultTo(knex.fn.now());
    });

};

exports.down = function(knex) {

};

// exports.config = { transaction: false };
