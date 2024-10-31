const express = require("express");
const router = express.Router();

let cart = [];

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart operations
 */

/**
 * @swagger
 * /cart:
 *   get:
 *     tags: [Cart]
 *     summary: Get current user's cart
 *     responses:
 *       200:
 *         description: Current user's cart items.
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
 *                   quantity:
 *                     type: number
 */
router.get("/", (req, res) => {
  res.status(200).json(cart);
});

/**
 * @swagger
 * /cart/add:
 *   post:
 *     tags: [Cart]
 *     summary: Add an item to the cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Item added to cart successfully.
 */
router.post("/add", (req, res) => {
  const { id, quantity } = req.body;

  // Check if item is already in cart
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity += quantity; // Update quantity if already in cart
  } else {
    // Add new item to the cart
    cart.push({ id, name: "Product Name", price: 100, quantity });
  }

  res.status(200).json({ message: "Item added to cart successfully", cart });
});

/**
 * @swagger
 * /cart/update:
 *   put:
 *     tags: [Cart]
 *     summary: Update item quantity in the cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Item quantity updated successfully.
 */
router.put("/update", (req, res) => {
  const { id, quantity } = req.body;

  const item = cart.find((item) => item.id === id);
  if (!item) {
    return res.status(404).json({ message: "Item not found in cart" });
  }

  item.quantity = quantity; // Update the item's quantity
  res.status(200).json({ message: "Item quantity updated successfully", cart });
});

/**
 * @swagger
 * /cart/remove/{id}:
 *   delete:
 *     tags: [Cart]
 *     summary: Remove an item from the cart
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item ID
 *     responses:
 *       200:
 *         description: Item removed from cart successfully.
 */
router.delete("/remove/:id", (req, res) => {
  const { id } = req.params;

  const itemIndex = cart.findIndex((item) => item.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found in cart" });
  }

  cart.splice(itemIndex, 1); // Remove the item from the cart
  res
    .status(200)
    .json({ message: "Item removed from cart successfully", cart });
});

module.exports = router;
