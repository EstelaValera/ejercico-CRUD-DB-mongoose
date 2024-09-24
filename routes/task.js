const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

router.post('/create', async(req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).send(task);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'There was a problem trying to create a task.'});
    }
});

router.get('/', async(req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'There was a problem trying to retrieve the tasks.'});
    };
});

router.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        res.status(200).send(task);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'There was a problem trying to retrieve the task.'})    }
});

router.put('/markAsCompleted/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await Task.updateOne(
            { _id: id },
            {
                $set: { completed: 'false'},
                $currentDate: {lastModified: true}
            }
        );
        task = await Task.findById(id);
        res.status(200).send(task);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'There was a problem trying to update the task.'});
    };
});

router.put('/id/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const newTittle = req.body.tittle;
        await Task.updateOne(
            { _id: id },
            {
                $set: { tittle: newTittle},
                $currentDate: {lastModified: true}
            }
        );
        task = await Task.findById(id);
        res.status(200).send(task);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'There was a problem trying to update the task tittle.'})
    };
});

router.delete('/id/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await Task.deleteOne(
            { _id: id },
        );
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'There was a problem trying to remove the task.'});
    };
});



module.exports = router;