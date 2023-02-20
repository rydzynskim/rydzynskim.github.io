## My personal webpage :)

As the only contributer I guess I'm just documenting this for my own reference.

### Linting and Prettier

`npm run lint`: lints the ./src directory with airbnb style guide (recommend installing ESLint plugin to see lint errors in editor)  
`npm run prettier`: fixes code style (recommend installing Prettier - code formatter plugin and configure format on save)

### Dev Workflow

#### For Local Developemnt:

`npm run dev`: builds code for development, opens app in browser, enables hot reloading

#### For Deploying:

1. `npm run prettier` for style fixes
2. `npm run lint` to make sure no lint errors
3. `npm run build` to make code work
4. push to master and changes will be live on github pages

Will eventually have github actions ci handle the above on push to master but this is fine for now.
