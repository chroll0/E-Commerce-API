// const express = require("express");
// const router = express.Router();
// const { v4: uuidv4 } = require("uuid"); // For generating unique product IDs

// // Sample in-memory data for products
// let products = [
//   { id: "1", name: "Painting", price: 100, category: "Art" },
//   { id: "2", name: "Jewelry", price: 200, category: "Jewelry" },
//   { id: "3", name: "Gemstone", price: 150, category: "Gems" },
// ];

// /**
//  * @swagger
//  * /api/products:
//  *   get:
//  *     summary: Retrieve a list of all products
//  *     responses:
//  *       200:
//  *         description: A list of products.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 type: object
//  *                 properties:
//  *                   id:
//  *                     type: string
//  *                   name:
//  *                     type: string
//  *                   price:
//  *                     type: number
//  *                   category:
//  *                     type: string
//  */
// router.get("/", (req, res) => {
//   res.json(products);
// });

// /**
//  * @swagger
//  * /api/products/{id}:
//  *   get:
//  *     summary: Retrieve a single product by ID
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: The product ID
//  *     responses:
//  *       200:
//  *         description: A single product
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 id:
//  *                   type: string
//  *                 name:
//  *                   type: string
//  *                 price:
//  *                   type: number
//  *                 category:
//  *                   type: string
//  *       404:
//  *         description: Product not found
//  */
// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   res.json(product);
// });

// /**
//  * @swagger
//  * /api/products:
//  *   post:
//  *     summary: Add a new product
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *               price:
//  *                 type: number
//  *               category:
//  *                 type: string
//  *               description:
//  *                 type: string
//  *               images:
//  *                 type: array
//  *                 items:
//  *                   type: string
//  *     responses:
//  *       201:
//  *         description: Product created successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 id:
//  *                   type: string
//  *                 name:
//  *                   type: string
//  *                 price:
//  *                   type: number
//  *                 category:
//  *                   type: string
//  */
// router.post("/", (req, res) => {
//   const { name, price, category, description, images } = req.body;

//   if (!name || !price || !category) {
//     return res
//       .status(400)
//       .json({ message: "Name, price, and category are required" });
//   }

//   const newProduct = {
//     id: uuidv4(),
//     name,
//     price,
//     category,
//     description: description || "",
//     images: images || [],
//   };

//   products.push(newProduct);
//   res.status(201).json(newProduct);
// });

// /**
//  * @swagger
//  * /api/products/{id}:
//  *   delete:
//  *     summary: Delete a product by ID
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: The product ID
//  *     responses:
//  *       200:
//  *         description: Product deleted successfully
//  *       404:
//  *         description: Product not found
//  */
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   const productIndex = products.findIndex((p) => p.id === id);

//   if (productIndex === -1) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   // Remove product from the array
//   products.splice(productIndex, 1);
//   res.json({ message: "Product deleted successfully" });
// });

// module.exports = router;
