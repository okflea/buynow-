import express from 'express';
import Car from '../models/car.js';
import mockData from '../mock.js';


const router = express.Router();


//seeding
router.get('/seed', async(req, res) => {
  try {
    console.log('Seeding...');
    console.log(mockData)
    const car = await Car.insertMany(mockData);
    res.json(car);
  } catch (err) {
    res.status(500).json(err);
  }
})

//getting all cars
router.get('/', async (req, res) => {
  // res.json('get all cars');
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json(err);    
  }
})
//getting one car by name
router.get('/name', async (req, res) => {
  try {
    const name = req.body.name;
    const car = await Car.findOne({name: name});
    res.json(car);
  } catch (err) {
    res.status(500).json(err);
  }
})
//getting one car by id 
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const car = await Car.findById(id);
    res.json(car);
  } catch (err) {
    res.status(500).json(err);
  }
})


//creating one car
router.post('/add',async (req, res) => {
  // res.json('create one car');
  try {
    // console.log(req.body);
    const newCar = await Car.create(req.body);

    // Return a success message with the new document
    res.status(201).json({ message: 'Document created successfully', doc: newCar });
  } catch (err) {
    res.status(500).json(err);
    console.log(err.message);
  }
})
//updating one car
router.put('/:id', async (req, res) => {
  // res.json('update one car');
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body);
    res.json(car);
  } catch (err) {
    res.status(500).json(err);
  }
})
//deleting one car
router.delete('/:id', async(req, res) => {
  // res.json('delete one car');
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    res.json(car);
  } catch (err) {
    res.status(500).json(err);
  }
})

export default router;
