## Installation Guide

To get a local copy of this repository:
`git clone git@github.com:YozoraNoHoshi/Pokemon-Catcher.git`

Ensure you have cloned the backend server: `git@github.com:YozoraNoHoshi/pokesimbackend.git`

### Complete the following for both repositories.

Use `npm install` to install packages.

In both project directories, you can run:

`npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

## Known Issues

Hitting the back button after a redirect results in a blank page.  
The styling is nonexistent.
Checking a Pokedex entry while already on a Pokedex entry causes the new entry to not render properly.

## To-Dos

- ~~Improve home screen -> Some sort of landing page and UI rather than a random menu.~~
- ~~Make the main menu live in a modal~~.
- Store items in local storage as JWTs rather than raw JSON.
- Make Pokedex live in a modal so you can view it during a battle.
- Pokedex remembers previous searches globally, not just on the Pokedex page
- Pokedex UI
- Battle UI and logic
- Inventory
- Responsive Design
