# Givebutter Frontend Take-home

## Overview

Our goal is to fix and enhance a Pokedex application. If you are unfamiliar with the world of Pokemon, here is a brief explanation:

> The Pokedex is an electronic device created and designed to catalog and provide information regarding the various species of Pokemon featured in the Pokemon video game, anime and manga series.
 
[Source](https://pokemon.fandom.com/wiki/Pokedex)
 
Our version of the Pokedex is able to list and search through Pokemon. However, our search is a bit buggy. Additionally, we want to add a feature that shows a selected Pokemon's details like its **type**, **moves**, and **evolution chain**.

Your time is valuable, and we are extremely appreciative of you participating in this assessment. We're looking to gauge your ability to read and edit code, understand instructions, and deliver features, just as you would during your typical day-to-day work. We expect this test to take no more than one to two hours and ask to complete this work within the next two days. Upon submit, we will review and provide feedback to you regardless of our decision to continue the process.

Please update and add code in `App.js` and `index.css` based on the requirements found below. Additionally, we ask you to edit the `readme.md` with answers to a few questions found in the `Follow-up Questions` section also found below.

When you are finished, please upload your completed work to your Github and invite `@gperl27` to view it. **Do not open a PR please.**

## Setup

- This repo was scaffolded using `create-react-app`. As such, this app requires a stable version of `node` to get up and running.
- Clone this repo and run `npm install`.
- To run the app, run `npm start`.
- Please reach out to the Givebutter team if you have any issues with the initial setup or have any problems when running the initial app.

## Requirements

### Search
- Typing in the search input should filter the existing Pokemon list and render only matches found
- Fix any bugs that prevent the search functionality from working correctly
- If there are no results from search, render "No Results Found"
- The search results container should be scrollable
- The UI should match the below mockup

![](mockup0.png)

### Details Card
     
- Clicking "Get Details" for any given Pokemon should render a card that has the Pokemon's `name`, `types`, `moves`, and `evolution chain`
- Use the api functions defined in `api.js` to retrieve this data. Adding new endpoints or editing existing ones are out of scope
- The details card should match the below mockup

![](mockup1.png)

## Follow-up Questions

Please take some time to answer the following questions. Your answers should go directly in this `readme`.

- Given more time, what would you suggest for improving the performance of this app?
    -  - I would like to add a search button so the search is done just when you click the button not for every word typed - would improve performance since you are only making a call once and can free up the event queue  
    - I would also like to add a debouncer which would improve the performance of the search functionality by adding a slight delay. Also for the "moves" section, I selected 5 items of the array - since every Pokemon has a lot of capabilities and I wanted to match the design and not have 100 moves. I would like to add a limit for those or even a search filter functionality within the pokemon details, this way a user can see all moves and can search for a specific one if needed

- Is there anything you would consider doing if we were to go live with this app? 
    - I would like to break the pieces into components. For example, the search results can be a component that takes the input of the data for the button and the name of the pokemon. The piece that appears on click of a button could also be its own component that is only rendered to the page when you click on the button. By adding these into separate components our app.js file stays clean and easy to read and it will make it easier if we were to add more features or scale the application
    - I would also like to improve the UX and design, to make it more sleek and modern would consider using tailwind or something simiar
    - I would like to add photos per item to improve the UX and would consider having the Pokemon details route to a new page instead of having everything on one page. For example, you would click on the button and get routed to a new page with all pokemon information nicely displayed
    - For the buttons and text in search results, I would edit the styles so that all buttons are in-line. The mockup had buttons and text align center within the boxes with the black borders but I feel it would look a lot nicer for a user if the buttons are aligned to one another

- What was the most challenging aspect of this work for you (if at all)?
     - I did not find this challenging it felt like a very reasonable and fair assessment of my react skills