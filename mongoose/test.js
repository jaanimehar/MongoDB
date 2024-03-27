const mongoose = require('mongoose');

const main = async () => {
    // connection
    await mongoose.connect("mongodb://127.0.0.1:27017")
        .then(() => {
            console.log("connecttion is successfull");

        })
        .catch((error) => {
            console.error(error);

        });
}
main();