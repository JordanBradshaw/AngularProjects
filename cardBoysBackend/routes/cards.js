const express = require('express');
const router = express.Router();
const Card = require('../models/card')

//Getting all
router.get('/', async (req,res) => {
    try{
        const cards = await Card.find()
        res.json(cards);
    } catch (err){
        res.status(500).json({message: err.message});
    }
})

//Getting one
router.get('/:id', getCard, (req,res) => {
    res.json(res.card)
})
//Creating one
router.post('/',async (req,res) => {
    const card = new Card({
        name: req.body.name,
        genre: req.body.genre,
        count: req.body.count,
    })
    try{
        const newCard = await card.save()
        res.status(201).json(newCard)
    } catch (err){
        res.status(400).json({message: err.message})
    }
})
//Updating one
router.patch('/:id',getCard,async (req,res) => {
    if(req.body.name != null){
        res.card.name = req.body.name
    }
    if(req.body.genre != null){
        res.card.genre = req.body.genre
    }
    try{
        const updatedCard = await res.card.save()
        res.json(updatedCard)
    } catch (err) {
        res.json({message: err.message})
    }
})
//Deleting one
router.delete('/:id', getCard, async (req,res) => {
    try {
        await res.card.remove()
        res.json({message: 'Card successfully removed'})
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

async function getCard(req,res,next){
    let card
    try{
        card = await Card.findById(req.params.id)
        if (card== null) {
            return res.status(404).json({message: 'Sub Not Found'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.card = card
    next()
}

module.exports = router
