const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 */
router.get("/products", (req, res) => {
  res.json([
    { id: "1", name: "Painting", price: 100 },
    { id: "2", name: "Jewelry", price: 200 },
  ]);
});

module.exports = router;
