exports.up = function(knex, Promise) {
    return knex.schema.createTable("cars", (tbl) => {
        tbl.integer("VIN", 10).primary().unique().notNullable();
        tbl.text("make", 15).notNullable();
        tbl.text("model").notNullable();
        tbl.integer("mileage").notNullable();
        tbl.text("transmission type", 10).defaultTo(null);
        tbl.text("title status", 10).defaultTo(null);
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists("cars");
  };
