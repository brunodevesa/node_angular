var Product = require('../api/product/product');

// because i only want to run this seeding in development, and just once
// i will require mongoose from here and make the connection here too
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shoppingDB');


var products = [
    new Product({
        imagePath: 'http://othereden.co.uk/eng_pl_Obsessive-Subtelia-lingerie-set-14175_1.jpg',
        title: 'White Angel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at itaque iusto, molestias mollitia non obcaecatiofficiis omnis placeat porro, quaerat quos sed,voluptas. Dolorem doloribus exercitationem hic odioquasi.',
        price: 112
    }),
    new Product({
        imagePath: 'http://othereden.co.uk/eng_pl_Obsessive-Flores-Set-chemise-thongs-12506_2.jpg',
        title: 'Naughty Blond',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at itaque iusto, molestias mollitia non obcaecatiofficiis omnis placeat porro, quaerat quos sed,voluptas. Dolorem doloribus exercitationem hic odioquasi.',
        price: 98
    }),
    new Product({
        imagePath: 'http://othereden.co.uk/eng_pl_Obsessive-Bloom-Chemise-thong-12496_1.jpg',
        title: 'Black Devil',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at itaque iusto, molestias mollitia non obcaecatiofficiis omnis placeat porro, quaerat quos sed,voluptas. Dolorem doloribus exercitationem hic odioquasi.',
        price: 118
    })

];


var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        if (err) {
            throw err
        } else {
            done++;
            if (done === products.length) {
                exit();
            }
        }
    });
}


function exit() {
    mongoose.disconnect();

}