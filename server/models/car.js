import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  OEMspec: {
    manufacturer: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    transmission: {
      type: String,
      required: true
    },
    fuel: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    power: {
      type: String,
      required: true
    },
    torque: {
      type: String,
      required: true
    },
    topSpeed: {
      type: String,
      required: true
    }
  },
  MarketPlaceSpec: {
    price: {
      type: Number,
      required: true
    },
    odometer: {
      type: Number,
      required: true
    },
    majorDamage: {
      type: String,
      required: true
    },
    priorAccident: {
      type: String,
      required: true
    },
    condition: {
      type: String,
      required: true
    }
  },
  img: {
    type: String,
    required: true
  }
});

const Car = mongoose.model('Car', carSchema);

export default Car;
