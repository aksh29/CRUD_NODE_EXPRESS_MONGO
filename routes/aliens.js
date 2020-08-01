const express = require('express');
const router = express.Router();
const Alien = require('../models/aliens');

router.get('/', async(req , res) => {
    try{
        const aliens = await Alien.find();
        res.json(aliens)
    }
    catch(err){
        res.send('Error occured' + err)
    }
})

router.get('/:id', async(req , res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        res.json(alien)
    }
    catch(err){
        res.send('Error occured' + err)
    }
})

router.post('/', async(req ,res) => {
    console.log(req.body);
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const success = await alien.save()
        res.json(success)
    }
    catch(err){
        res.send('Error occured' + err)
    }
})


router.patch('/:id', async(req , res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        alien.sub= req.body.sub;
        const success = await alien.save();
        res.json(success)
    }
    catch(err){
        res.send('Error occured' + err)
    }
})

router.delete('/:id', async(req , res) => {
    try{
        const alien = await Alien.findByIdAndDelete(req.params.id);
    }
    catch(err){
        res.send('Error occured' + err)
    }
})

router.delete('/', async(req , res) => {
    try{
        const alien = await Alien.findByIdAndDelete();
    }
    catch(err){
        res.send('Error occured' + err)
    }
})

module.exports = router;