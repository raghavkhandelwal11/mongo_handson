const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const url = '';

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    language: {
        type: String
    },
    edition: {
        type: String
    },
    dateOfPublish: {
        type: Date
    },
    price: {
        type: Number
    }
});


async function main() {
    try{
        console.log("connecting...");

        await mongoose.connect(url);
        const BookModel = mongoose.model("book", bookSchema);

        //data for inserting

        const data1 = {
            "title": "dont count me in",
            "author": "raghav",
            "language": "English",
            "edition": "first",
            "dateOfPublish": new Date(),
            "price": 100
        }
        const data2 = {
            "title": "dont count me in 2",
            "author": "raghav",
            "language": "English",
            "edition": "first",
            "dateOfPublish": new Date(),
            "price": 150
        }
        const data3 = {
            "title": "dont count me in 3",
            "author": "raghav",
            "language": "English",
            "edition": "first",
            "dateOfPublish": new Date(),
            "price": 200
        }


        const book1 = new BookModel(data1);
        const book2 = new BookModel(data2);
        const book3 = new BookModel(data3);

        const response = await BookModel.insertMany([
            book1,
            book2,
            book3
        ])

    } catch(err) {
        console.log(err);
    }

}