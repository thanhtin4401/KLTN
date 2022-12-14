const KhuVuc = require('../KhuVuc');

const faker = require('@faker-js/faker').faker;

let items = [];

for(let i = 0; i < 15; i++){
    items.push(
        {
            TenKhuVuc: faker.address.cityName(),
            HinhAnh : faker.image.image(720, 480, true),
            MoTa: faker.datatype.number({min: 1, max:5})
        }
    )
}

const seed = async () => {
    for (const item in items) {
        await KhuVuc(item).save();
    }
}

seed();
