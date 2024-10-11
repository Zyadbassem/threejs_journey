# Three.js journey

hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference

# elventh lesson

- here is what we will do in this lesson

  - learn how to deploy our project online

## setting up

you should be where i left you on the last project

### Deploying our project

first you'll create a vite.config.js file in your root directory and paste this code

```js
import restart from "vite-plugin-restart";

export default {
  root: "src/", // Sources files (typically where index.html is)
  publicDir: "../static/", // Path from "root" to static assets (files that are served as they are)
  server: {
    host: true, // Open to local network and display URL
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env), // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../dist", // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
  },
  plugins: [
    restart({ restart: ["../static/**"] }), // Restart server on static file change
  ],
};
```

now create a src folder move your index.html and main.js files there and run `npm install vite-plugin-restart --save-dev` dont forget to remove 'static' from your textures and font import sice vite now can read static directly

there are many ways to deploy your project but in this lesson we're gonna use Vercel but first you need to sign up so open their website and sign up with email
now you need to add vercel to your project `npm install vercel` and open your package.json file and paste this in the script property

```js
"deploy": "vercel --prod"
```

now open your terminal and run `npm run deploy` and go on the steps
