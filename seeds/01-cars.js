
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 12345678, make: 'Ford', model: "Explorer", mileage: 40000, "transmission type": null, "title status": "clean"},
        {VIN: 23456789, make: 'Chevrolet', model: "Corvette", mileage: 400, "transmission type": "manual", "title status": "clean"},
        {VIN: 34567890, make: 'Dodge', model: "Ram 1500", mileage: 100000, "transmission type": "automatic", "title status": "salvage"},
        {VIN: 45678901, make: 'Ford', model: "Focus", mileage: 1000, "transmission type": null, "title status": null},
        {VIN: 56789012, make: 'Buick', model: "Enclave", mileage: 45600, "transmission type": null, "title status": null},
      ]);
    });
};
