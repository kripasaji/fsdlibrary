const express = require("express");
const authorsRouter = express.Router();
function route(nav){
    var authors = [
        {
            name: 'John Green',
            life: '24 August 1977 – Present',
            genre:'	Young adult fiction, bildungsroman, romance, radio, video',
            about: "John Michael Green (born August 24, 1977) is an American author and YouTube content creator. He won the 2006 Printz Award for his debut novel, Looking for Alaska,[2] and his fourth solo novel, The Fault in Our Stars, debuted at number one on The New York Times Best Seller list in January 2012.",
            img: "johngreen.jpg"
        },
        {
            name: 'J. K. Rowling',
            life: '31 July 1965 - Present',
            genre:'Mystery',
            about: "Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. ",
            img: "jk.jpg"
        },
        {
            name: 'Paulo Coelho',
            life: '24 August 1947 - Present',
            genre:' World, New Age, Pop',
            about: "Paulo Coelho de Souza is a Brazilian lyricist and novelist, best known for his novel The Alchemist. In 2014, he uploaded his personal papers online to create a virtual Paulo Coelho Foundation.",
            img: "paulo.jpg"
        },
        {
            name: 'Dan Brown',
            life: '22 June 1964  - Present',
            genre:'Thriller, adventure, mystery, conspiracy',
            about: "Daniel Gerhard Brown is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons, The Da Vinci Code, The Lost Symbol, Inferno and Origin. His novels are treasure hunts that usually take place over a period of 24 hours.",
            img: "dan.jpg"
        }
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Authors',
            authors
        });
    });

    authorsRouter.get('/:id',function(req,res){
        const at = req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author: authors[at]
        })
    });

   return authorsRouter;

}

module.exports = route;
