# Rotor Challenge

## Notes about the font family
Since research was not allowed, I didn't browse for a custom font to match the reference design.

However, here's how I would go about it:

1. Download the `.ttf` file and place it in the `/public/fonts/` directory
2. Set up a `@font-face` with the URL to the file either in `/src/index.css`, or in the `DigitalClock` component itself
3. Set the font family 

## How to Run
1. Clone this repo
2. In the terminal, enter `npm install` to make sure that all the dependencies are installed
2. Enter `npm run dev` to start the server
3. Open the URL `http://localhost:5173/` (or whichever port it gives you) in the browser to load the project

## Tech Stack
- React
- Styled Components
- Context API

## Design Decisions
### Styling
I opted to use Styled Components as it is the CSS-in-JS tool I am familiar with, and also because it makes it easier to organise styles that are related to a given component.

### State Management
I used the React Context API to manage common states between the Analog and Digital Clocks and isolated it by using a custom hook.