#!/bin/bash

# Check if the model name is provided
if [ -z "$1" ]; then
  echo "Please provide a model name."
  exit 1
fi

REWRITE=false
if [ "$2" == "rewrite" ]; then
  REWRITE=true
fi

# Convert the first argument to the model name (PascalCase for the model)
MODEL_NAME=$(echo "$1" | sed -r 's/(^|_)([a-z])/\U\2/g')
# Convert the model name to lowercase for filenames
MODEL_FILENAME=$(echo "$1" | awk '{print tolower($0)}')

# Create directories if they do not exist
mkdir -p models controllers routes

# Generate the model file
MODEL_FILE="models/${MODEL_FILENAME}.model.js"
if [ ! -f "$MODEL_FILE" ] || [ "$REWRITE" = true ]; then
cat <<EOL > "$MODEL_FILE"
import mongoose from 'mongoose';

const ${MODEL_NAME}Schema = new mongoose.Schema(
  {
    // Define your model's schema here
  },
  { timestamps: true }
);

const ${MODEL_NAME} = mongoose.model('${MODEL_NAME}', ${MODEL_NAME}Schema);

export default ${MODEL_NAME};
EOL
  echo "Model file created: $MODEL_FILE"
else
  echo "Model file already exists: $MODEL_FILE"
fi

# Generate the controller file
CONTROLLER_FILE="controllers/${MODEL_FILENAME}.controller.js"
if [ ! -f "$CONTROLLER_FILE" ] || [ "$REWRITE" = true ]; then
cat <<EOL > "$CONTROLLER_FILE"
import ${MODEL_NAME} from '../models/${MODEL_FILENAME}.model.js';

// Get all ${MODEL_NAME}s
export const getAll${MODEL_NAME}s = async (req, res, next) => {
    try {
        const data = await ${MODEL_NAME}.find();
        res.status(200).json(data);
    } catch (error) {
        next(error)
    }
};

// Get a single ${MODEL_NAME} by ID
export const get${MODEL_NAME}ById = async (req, res, next) => {
    try {
        const item = await ${MODEL_NAME}.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: '${MODEL_NAME} not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        next(error)
    }
};

// Create a new ${MODEL_NAME}
export const create${MODEL_NAME} = async (req, res, next) => {
    try {
        const newItem = new ${MODEL_NAME}(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        next(error);
    }
};

// Update a ${MODEL_NAME} by ID (PUT)
export const update${MODEL_NAME}ById = async (req, res, next) => {
    try {
        const updatedItem = await ${MODEL_NAME}.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: '${MODEL_NAME} not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        next(error)
    }
};

// Partially update a ${MODEL_NAME} by ID (PATCH)
export const patch${MODEL_NAME}ById = async (req, res, next) => {
    try {
        const updatedItem = await ${MODEL_NAME}.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: '${MODEL_NAME} not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        next(error)
    }
};

// Delete a ${MODEL_NAME} by ID
export const delete${MODEL_NAME}ById = async (req, res, next) => {
    try {
        const deletedItem = await ${MODEL_NAME}.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: '${MODEL_NAME} not found' });
        }
        res.status(200).json({ message: '${MODEL_NAME} deleted successfully' });
    } catch (error) {
        next(error)
    }
};
EOL
  echo "Controller file created: $CONTROLLER_FILE"
else
  echo "Controller file already exists: $CONTROLLER_FILE"
fi

# Generate the route file
ROUTE_FILE="routes/${MODEL_FILENAME}.routes.js"
if [ ! -f "$ROUTE_FILE" ] || [ "$REWRITE" = true ]; then
cat <<EOL > "$ROUTE_FILE"
import express from 'express';
import {
  getAll${MODEL_NAME}s,
  get${MODEL_NAME}ById,
  create${MODEL_NAME},
  update${MODEL_NAME}ById,
  patch${MODEL_NAME}ById,
  delete${MODEL_NAME}ById
} from '../controllers/${MODEL_FILENAME}.controller.js';

const router = express.Router();

// Define routes for ${MODEL_NAME}
router.get('/', getAll${MODEL_NAME}s);
router.get('/:id', get${MODEL_NAME}ById);
router.post('/', create${MODEL_NAME});
router.put('/:id', update${MODEL_NAME}ById);
router.patch('/:id', patch${MODEL_NAME}ById);
router.delete('/:id', delete${MODEL_NAME}ById);

export default router;
EOL
  echo "Route file created: $ROUTE_FILE"
else
  echo "Route file already exists: $ROUTE_FILE"
fi

echo "MVC structure with full CRUD generated for model: $MODEL_NAME"
