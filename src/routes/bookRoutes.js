const express = require("express");
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
                    title:'Looking for Alaska',
                    author: 'John Green',
                    publisher:'Publisher : Dutton Juvenile',
                    genre: 'Contemporary Fiction',
                    details:'The unmissable first novel from bestselling and award-winning author of THE FAULT IN OUR STARS and TURTLES ALL THE WAY DOWN.\n "In the dark beside me, she smelled of sweat and sunshine and vanilla and on that thin-mooned night I could see little more than her silhouette, but even in the dark, I could see her eyes - fierce emeralds. And beautiful.\nPoignant, funny, heartbreaking and compelling, this novel will stay with you forever.',
                    img:'alska.jpg'
                },
                {
                    title:'Fault in our Stars',
                    author: 'John Green',
                    publisher:'Publisher : Dutton Books',
                    genre: 'Young adult novel, Realistic fiction',
                    details:'I fell in love the way you fall asleep: slowly, then all at once.\n Despite the tumour-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis.\n But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazels story is about to be completely rewritten.\n Insightful, bold, irreverent, and raw, The Fault in Our Stars brilliantly explores the funny, thrilling, and tragic business of being alive and in love.',
                    img:'fault.jpg'
                },
                {
                    title:'Harry Potter',
                    author: 'J. K. Rowling',
                    publisher:'Publisher : Bloomsbury Publishing (UK) \n Scholastic Press (USA)\n Pottermore (e-books; all languages)',
                    genre: 'Fantasy, drama, young adult fiction, mystery, thriller, Bildungsroman',
                    details:'Adaptation of the first of J.K. Rowlings popular children novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents mysterious deaths.',
                    img:'harrypotter.jpg'
                },
                {
                    title:'The Alchemist',
                    publisher:'Publisher : HarperCollins',
                    author: 'Paulo Coelho',
                    genre: 'Novel, Drama, Quest, Fantasy Fiction, Adventure fiction',
                    details:'The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
                    img:'alchemist.jpg'
                },
                {
                    title:'Da Vinci Code',
                    author: 'Dan Brown',
                    publisher:'	Publisher : Doubleday (US)\nTransworld & Bantam Books (UK)',
                    genre: 'Mystery, Detective fiction, Conspiracy fiction, Thriller',
                    details:'A murder in Paris Louvre Museum and cryptic clues in some of Leonardo da Vincis most famous paintings lead to the discovery of a religious mystery. For 2,000 years a secret society closely guards information that -- should it come to light -- could rock the very foundations of Christianity.',
                    img:'davinci.jpg'
                }
    ]

    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Books',
            books
        })
    });
    
    booksRouter.get('/:i',function(req,res){
         const id = req.params.i
         res.render('book',{
            nav,
            title:'Library',
            book: books[id]
         })
    });

    booksRouter.use('/add-book', function(req, res){
        // console.log(req.params)
        const body = []
        const bookData = {}
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const properties = parsedBody.split('&')
            properties.map(property => {
                const propertySplitted = property.split('=')
                const propKey = propertySplitted[0];
                const propValue = propertySplitted[1];
                bookData[propKey] = propValue
            })
            books.push(bookData)
            res.redirect('/')
        })
        console.log(bookData);
    })
     
    return booksRouter;

}

module.exports = router;