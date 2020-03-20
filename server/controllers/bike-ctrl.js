const Bike = require("../models/bike-model");

const createBike = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a bike"
    });
  }

  const bike = new Bike(body);

  if (!bike) {
    return res.status(400).json({ success: false, error: "Bad request" });
  }

  bike
    .save()
    .then(() =>
      res.status(201).json({
        success: true,
        id: bike._id,
        message: "Bike created!"
      })
    )
    .catch(error =>
      res.status(400).json({
        error,
        message: "Bike not created!"
      })
    );
};

const updateBike = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update"
    });
  }

  Bike.findOne({ _id: req.params.id }, (err, bike) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Bike not found!"
      });
    }
    bike.rented = body.rented;
    bike.rentedTime = body.rentedTime || bike.rentedTime;
    bike
      .save()
      .then(() =>
        res.status(200).json({
          success: true,
          id: bike._id,
          message: "Bike updated!"
        })
      )
      .catch(error =>
        res.status(404).json({
          error,
          message: "Bike not updated!"
        })
      );
  });
};

const deleteBike = async (req, res) => {
  await Bike.findOneAndDelete({ _id: req.params.id }, (err, bike) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!bike) {
      return res.status(404).json({ success: false, error: `Bike not found` });
    }

    return res.status(200).json({ success: true, data: bike });
  }).catch(err => console.log(err));
};

const getBikes = async (req, res) => {
  await Bike.find({}, (err, bikes) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!bikes.length) {
      return res.status(404).json({ success: false, error: `Bikes not found` });
    }
    return res.status(200).json({ success: true, data: bikes });
  }).catch(err => console.log(err));
};

module.exports = {
  createBike,
  updateBike,
  deleteBike,
  getBikes
};
