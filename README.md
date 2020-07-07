# Heirloom Acres

Heirloom Acres is a pen and paper solo farming RPG made by [Jeff Ellis](https://manyeyedmonster.itch.io/heirloom-acres) for the [Short Rest](https://itch.io/jam/short-rest) "Cozy Game" jam on itch.io. 

> Your grandparents have bequeathed to you their farm, along with their dying wish: to see the farm returned to its former glory. Like it was when you were young.
You begin on Monday the 1st, Year 1. You have a Rundown Farmhouse, a Small Garden with four plots, and 12 gold.
You win the game by constructing all of the renovations.

This is a quick and dirty (hopefully) implementation of the game to demonstrate React and Redux. If you're interested in the actual game, please go buy it. :)

## Technical Details

Here's the model for the game, that we'll eventually be storing in a Redux store:

* Player Name
* Current Date
* Gold
* Farm Buildings
  1. Rundown Farmhouse
  1. Small Garden
    * Four plots
  1. Composting Pile
  1. Large Garden (replaces Small Garden)
    * Eight plots
  1. Cute Greenhouse
    * Four plots
  1. Cozy Farmhouse (replaces Rundown Farmhouse)
  1. Fairy Shrine
* Current Visiting Friend
* Current Active Bonuses

The game begins on Monday, the 1st of Spring, year 1. The player begins with the Rundown Farmhouse, a Small Garden, and 12 Gold.

The player may choose to plant a crop in any empty plot. When the crop reaches maturity, they may harvest it and sell the crop for 1 Gold per Yield, and empty out the plot again. There are five types of crops that may be planted in a plot:

* Bumpertato: costs 2 Gold, matures in 4 days, Yields 1d4
* Learnip: costs 4 gold, matures in 6 days, Yields 1d6
* Cobb-bob: costs 6 gold, matures in 8 days, Yields 1d8
* Pupkin: costs 8 gold, matures in 10 days, Yields 1d10
  * Reduce maturation time of any planted Pupkins by 1 day when a Pupkin reaches maturity
* Drawberry: costs 10 gold, matures in 12 days, Yields 1d12 (sells for 1.5 times Yield)

The player may also produce Flirtilizer, which costs 5 gold and adds an additional Yield die to any crop planted that day.

The Small Garden has four plots to plant in; the Large Garden has four more (for a total of eight). The Greenhouse provides four additional plots, each of which gives an extra Yield for the crop planted in it. Crops do not grow during the weekend, but a Friend will visit on Saturday and Sunday, giving some kind of bonus to the farm. Details of the effects of the various buildings and friends are detailed in the game pdf.