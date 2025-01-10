const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Chat authentication service',
            version: '1.0.0',
            description: `Ini merupakan dokumentasi dari service authentication chat yang dibuat oleh Richie Leonardo
            18222071. Service ini bertujuan untuk memberikan layanan autentikasi kepada pengguna yang ingin masuk ke dalam
            chat yang disediakan. Service ini dapat melakukan register dan login pada pengguna dan 
            menghasilkan token JWT untuk mengautentikasi pengguna. Terdapat juga proxy enkripsi yang dapat dijalankan pada client
            side socket.io untuk mengimplementasikan end-to-end encryption pada chat.`,
            contact: {
                name: 'Richie Leonardo',
                email: '18222071@std.stei.itb.ac.id',
            }
        },
        servers: [
            {
                url: 'https://raylaidchat.codebloop.my.id',
                description: 'Express Auth API',
            },
            {
                url: 'https://chat-tst-production.up.railway.app',
                description: 'Websocket connection',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http', // Corrected 'https' to 'http' for bearer token
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            description: 'Unique identifier for the user',
                            example: 'cf6305a6-1f43-41fd-aa60-a8cd030ec342',
                        },
                        name: {
                            type: 'string',
                            description: 'Name of the user',
                            example: 'johndoe',
                        },
                        email: {
                            type: 'string',
                            description: 'Email of the user',
                            example: 'johndoe@example.com',
                        },
                        password: {
                            type: 'string',
                            description: 'Password of the user',
                            example: 'password123',
                        },
                    },
                    required: ['name', 'email', 'password'], // Moved outside 'properties'
                },
            },
        },
    },
    apis: ['./swagger/*.js', './routes/*.js', './swagger/websocket.js'], // Path to the API docs
};

const swaggerspecs = swaggerJsdoc(options);

module.exports = swaggerspecs;