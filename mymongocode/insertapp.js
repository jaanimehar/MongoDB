const dbconnetion = require('./connectionapp');

const insertdata = async () => {
    const db = await dbconnetion();
    const result = await db.insertMany
        (
            [
                {
                    name: "rama",
                    roll_no: 7,
                    class: "4th"
                },
                {
                    name: "geeta",
                    roll_no: 5,
                    class: "7th"
                },
                {
                    name: "mohan",
                    roll_no: 9,
                    class: "4th"
                },
                {
                    name: "ramu",
                    roll_no: 5,
                    class: "7th"
                }
            ]
        );
    console.log(result);

}
insertdata();