# Author
Oliverio Francesca

# Assignment
## 1.Alien frogs
- On an alien planet you find alien frogs
  - Two types: green and orange
  - And two sizes: big and small
  - Small frogs have dark eyes 
  - Big frogs have bright eyes
  - When frogs are touched their eyes become black
- See frogs.gif animation for behaviors
- Create a page full of all possible combinations of alien frogs
- Frogs should fill the page from left to right
- Frogs should wrap if there isn't enough space
- All frogs should change their eye color to black when touched
- The HTML should be valid and complete
- In the readme.md explain your CSS code
- Do all the work in CSS, the HTML should only include elements of this type:
```html
<div class="frog type1 small">--</div>
<div class="frog type2 small">--</div>
```
# Solution
Explanation of my CSS:
1. I set box-sizing, text-align, font-family, font-weight for the whole page with html selector
2. I decided to put a header directly through `body::before` (to follow the instruction: only frog divs in the HTML)
3. For the DRY principle I decided to set default settings in big frogs rules and then change them for small ones (no "big" class needed)
4. I used `display: inline-block` on frogs main frame and eyes in order to be able to use block properties on the frogs, leaving them able to be inline elements
5. I set `position: relative` on the eyes, and then determined their position (relative to their div parent) using top/left/right properties
6. Colors are set according to the DRY principle, using cascading and specificity. I decided to set colors with hsl method so that I could keep the same hue while changing the saturation and lightness for brighter/darker colors
7. The hover effect on the eyes was quite tricky to reach: `.frog:hover` selects the hovered frog divs, while `.frog::before/::after` selects the ::before/::after pseudoelements in the frog divs. So `.frog:hover::before/::after`should be enough.  
But for a matter of specificity, this doesn't apply the rule to small frogs, as the rule for small frogs eyes background color has specificity 1-3-0. So I decided to write twice the class selector `.frog`, in order to have the needed specificity on the hovering rule to override the previous one. This brings us to `.frog.frog:hover::before, .frog.frog:hover::after`

Extra: I changed the heading to experiment with background properties.