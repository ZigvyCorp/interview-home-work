import { body } from "express-validator";

export const createUserValidator = [
  body("name")
    .exists()
    .withMessage("Name is required"),
  body("username")
    .exists()
    .withMessage("Username is required"),
  body("email")
    .isEmail()
    .exists()
    .withMessage("Email is required"),
  body("password")
    .isLength({ min: 8 })
    .exists()
    .withMessage("Password is required"),
  body("address.street")
    .exists()
    .withMessage("Street is required"),
  body("address.suite")
    .exists()
    .withMessage("Suite is required"),
  body("address.city")
    .exists()
    .withMessage("City is required"),
  body("address.zipcode")
    .exists()
    .withMessage("Zipcode is required"),
  body("address.geo.lat")
    .exists()
    .withMessage("Latitude is required"),
  body("address.geo.lng")
    .exists()
    .withMessage("Longitude is required"),
  body("website")
    .exists()
    .withMessage("Website is required"),
  body("company.name")
    .exists()
    .withMessage("Company name is required"),
  body("company.catchPhrase")
    .exists()
    .withMessage("Catch phrase is required"),
  body("company.bs")
    .exists()
    .withMessage("Bs is required"),
];

export const updateUserValidator = [
  body("username")
    .optional()
    .withMessage("Username is required"),
  body("email")
    .isEmail()
    .optional()
    .withMessage("Email is required"),
  body("password")
    .isLength({ min: 8 })
    .optional()
    .withMessage("Password is required"),
  body("address.street")
    .optional()
    .withMessage("Street is required"),
  body("address.suite")
    .optional()
    .withMessage("Suite is required"),
  body("address.city")
    .optional()
    .withMessage("City is required"),
  body("address.zipcode")
    .optional()
    .withMessage("Zipcode is required"),
  body("address.geo.lat")
    .optional()
    .withMessage("Latitude is required"),
  body("address.geo.lng")
    .optional()
    .withMessage("Longitude is required"),
  body("website")
    .optional()
    .withMessage("Website is required"),
  body("company.name")
    .optional()
    .withMessage("Company name is required"),
  body("company.catchPhrase")
    .optional()
    .withMessage("Catch phrase is required"),
  body("company.bs")
    .optional()
    .withMessage("Bs is required"),
]