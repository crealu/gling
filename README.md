# WebGL Cube & Texture

This projects makes use of WebGL shaders to render a rotating cube that is styled with the texture of a 2D image. It is served using Node and Express.

## Usage

Clone and develop in this repo to use the template for experimenting with different texture styles and/or various cube transformations.

## Available Scripts

Run the following command in the terminal:
### `npm run dev`

You will see a message that says 'listening on 8400'.
Navigate to localhost:8400 in your web browser and you will see the application running.

## Expand

You can replace the image used on the cube by placing a png or jpg file in the assets folder and changing the string value of the texture.
### `const texture = loadTexture(gl, 'assets/your_image');`
