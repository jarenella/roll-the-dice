# Roll The Dice

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Description

This package contains simple functions related to random number generation with table top RPG systems such as D&D in mind. It features the ability to not just roll a die of the side-count of your choosing, but also the ability to add modifiers such as proficiency, advantage, and disadvantage. This readme exists to also serve the purpose of documentation for the project.

# Table of Contents

- [Description](#Description)

- [Installation](#Installation)

- [Usage Information](#Usage-Information)

- [Contribution guidelines](#Contribution-guidelines)

- [Test instructions](#Test-instructions)

- [License](#License)

# Installation

N/A for now

# Usage Information
### RTD function
- Probably the most basic staple of this package is the rtd() function. This function allows you to pick any number you want in the first paramter. This is the number of sides your virtual die will have. The second parameter is your character's ability score, and the third parameter is a string specificying that you are either rolling with "advantage" or "disadvantage." Take a look at the following example.
- rtd(100, 7, "advantage")
- In this example, you are rolling a 100 sided die for a character with an ability score of 7. This roll is also rolled with advantage. To roll a 20 sided die for a character with an ability score of 5, this time at disadvantage, you would do the following:
- rtd(20, 5, "disadvantage")
### rtdProf function
- This is another simple dice rolling function. The only difference between this one and the basic rtd() function is that it rolls with proficiency. The first parameter is the number of sides on your virtual die. The second parameter is the proficiency level. The third is the ability score, and the fourth parameter is the type, which is a string either reading "advantage" or "disadvantage." This is the basic syntax:
- rtdProf(dieSize, proficiencyLevel, abilityScore, type)
- If we were rolling a 100 sided die at a proficiency level of 5 and an ability score of 7, at disadvantage, it would look like the following:
- rtdProf(100, 5, 7, "disadvantage")
- If this roll were at advantage, we would simply replace "disadvantage" with "advantage"

# Contribution guidelines

N/A for now

# Test instructions

Jest tests to come in the future

# License
    
- [MIT] https://www.mit.edu/~amini/LICENSE.md


# Questions?

- GitHub: jarenella

- Email: jamesa122333@gmail.com


