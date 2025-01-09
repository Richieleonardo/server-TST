/**
 * @swagger
 * tags:
 *   - name: Encryption
 *     description: Routes for encryption and decryption services
 */

/**
 * @swagger
 * /api/keys:
 *   post:
 *     summary: Generate API keys for the encryption service
 *     tags: [Encryption]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               service_name:
 *                 type: string
 *                 example: "ExampleService"
 *               expires_in_days:
 *                 type: integer
 *                 example: 30
 *     responses:
 *       200:
 *         description: Successfully retrieved API keys
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 api_key:
 *                   type: string
 *                   example: "your-generated-api-key"
 *                 expires_at:
 *                   type: string
 *                   example: "2025-01-31T12:00:00Z"
 *       400:
 *         description: Bad request (missing fields)
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/encrypt:
 *   post:
 *     summary: Encrypt data
 *     tags: [Encryption]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "Test"
 *               sensitivity:
 *                 type: string
 *                 example: "medium"
 *     parameters:
 *       - in: header
 *         name: furina-encryption-service
 *         required: true
 *         schema:
 *           type: string
 *           example: "your-api-key"
 *         description: API key for the encryption service
 *     responses:
 *       200:
 *         description: Successfully encrypted data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 encryptedData:
 *                   type: string
 *                   example: "U2FsdGVkX18..."
 *       401:
 *         description: Unauthorized (missing or invalid API key)
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/decrypt:
 *   post:
 *     summary: Decrypt data
 *     tags: [Encryption]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               key_id:
 *                 type: string
 *                 example: "cXu8auW0D0f7SiuMcJObqQ"
 *               cipher_text:
 *                 type: string
 *                 example: "0K/ZRw=="
 *               iv:
 *                 type: string
 *                 example: "9O+eaq2SWjZwp2ZorbcF2w=="
 *     parameters:
 *       - in: header
 *         name: furina-encryption-service
 *         required: true
 *         schema:
 *           type: string
 *           example: "your-api-key"
 *         description: API key for the decryption service
 *     responses:
 *       200:
 *         description: Successfully decrypted data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 text:
 *                   type: string
 *                   example: "Test"
 *       401:
 *         description: Unauthorized (missing or invalid API key)
 *       500:
 *         description: Server error
 */
