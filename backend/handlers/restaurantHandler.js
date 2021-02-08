import { Restaurant } from "../models/restaurantModel.js";
import { NotFoundError } from "../utils/errorResponse.js";
import { Queue } from "../models/queueModel.js";

export const registerHandler = async (req, res, next) => {
  const {
    restaurantName,
    address1,
    address2,
    city,
    state,
    country,
    postCode,
    contact,
    email,
    openingHours,
    admin,
  } = req.body;
  // const openingHoursFormat = [
  //     [
  //         { opening: 5, closing: 5 },
  //         { opening: 10, closing: 10 }
  //     ],
  //     [
  //         { opening: 12, closing: 12 }
  //     ]
  // ]

  try {
    const newRestaurant = await Restaurant.create({
      restaurantName,
      address1,
      address2,
      city,
      state,
      country,
      postCode,
      contact,
      email,
      openingHours: JSON.stringify(openingHours),
      admin,
    });

    res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

export const retrieveHandler = async (req, res, next) => {
  const { restaurantName } = req.body;
  const restaurantObj = await Restaurant.findOne({ restaurantName });
  if (!restaurantObj)
    return next(
      new NotFoundError(`No restaurant with name ${restaurantName} found`)
    );

  res.json({
    ...restaurantObj._doc,
    openingHours: JSON.parse(restaurantObj._doc.openingHours),
    success: true,
  });
};

export const getQueueListHandler = async (req, res, next) => {
  const { restaurantID } = req.body;

  try {
    let queueList = await Queue.find({
      $and: [{ restaurant: restaurantID }, { state: { $lte: 1 } }],
    }).populate("user", ["email", "last_name", "first_name", "contact_no"]);

    if (!queueList) {
      return next(new NotFoundError("Failed to get queue list"));
    }

    res.status(200).json(queueList);
  } catch (error) {
    next(error);
  }
};
