import { Restaurant } from "../models/restaurantModel.js";
import { NotFoundError } from "../utils/errorResponse.js";

export const registerHandler = async (req, res, next) => {
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
            restaurantName: req.body["Restaurant Name"],
            address1: req.body["Address Line 1"],
            address2: req.body["Address Line 2"],
            city: req.body["City"],
            state: req.body["State"],
            country: req.body["Country"],
            postCode: req.body["Post Code"],
            contact: req.body["Contact Number"],
            email: req.body["Email"],
            openingHours: JSON.stringify(req.body["openingHours"]),
            admin: req.body["admin"]
        });

        res.sendStatus(200);
    }

    catch (error) {
        return next(error);
    }
}

export const retrieveHandler = async (req, res, next) => {
    const { restaurantName } = req.body;
    const restaurantObj = await Restaurant.findOne({ restaurantName });
    if (!restaurantObj)
        return next(new NotFoundError(`No restaurant with name ${restaurantName} found`));

    res.json({
        ...restaurantObj._doc,
        openingHours: JSON.parse(restaurantObj._doc.openingHours),
        success: true
    })
}

