# Author
Oliverio Francesca

# Assignment
## 1.[Grid Garden](https://cssgridgarden.com/)

#### Level 1
```css
#water {
  grid-column-start: 3;
}
```

#### Level 2
```css
#poison {
  grid-column-start: 5;
}
```

#### Level 3
```css
#water {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

#### Level 4
```css
#water {
  grid-column-start: 5;
  grid-column-end: 2;
}
```

#### Level 5
```css
#water {
  grid-column-start: 1;
  grid-column-end: -2;
}
```

#### Level 6
```css
#poison {
  grid-column-start: -3;
}
```

#### Level 7
```css
#water {
  grid-column-start: 2;
  grid-column-end: span 2;
}
```

#### Level 8
```css
#water {
  grid-column-start: 1;
  grid-column-end: span 5;
}
```

#### Level 9
```css
#water {
  grid-column-start: span 3;
  grid-column-end: 6;
}
```

#### Level 10
```css
#water {
  grid-column: -3 / -1;
}
```

#### Level 11
```css
#water {
  grid-column: 2 / span 3;
}
```

#### Level 12
```css
#water {
  grid-row: 3;
}
```

#### Level 13
```css
#water {
  grid-row: 3 / span 3;
}
```

#### Level 14
```css
#poison {
  grid-column: 2;
  grid-row: 5;
}
```

#### Level 15
```css
#water {
  grid-column: 2 / span 4;
  grid-row: span 5;
}
```

#### Level 16
```css
#water {
  grid-area: 1 / 2 / span 3 / -1;
}
```

#### Level 17
```css
#water-2 {
  grid-area: 2 / 3 / span 3 / span 3;
}
```

#### Level 18
```css
#poison {
  order: 1;
}
```

#### Level 19
```css
.poison {
  order: -1;
}
```

#### Level 20
```css
#garden {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

#### Level 21
```css
#garden {
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

#### Level 22
```css
#garden {
  display: grid;
  grid-template-columns: 100px 3em 40%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

#### Level 23
```css
#garden {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

#### Level 24
```css
#garden {
  display: grid;
  grid-template-columns: 50px repeat(3, 1fr) 50px;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

#### Level 25
```css
#garden {
  display: grid;
  grid-template-columns: 75px 3fr 2fr;
  grid-template-rows: 100%;
}
```

#### Level 26
```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: repeat(4, 12.5px) 1fr;
}
```

#### Level 27
```css
#garden {
  display: grid;
  grid-template: 60% 40% / 200px 1fr;
}
```

#### Level 28
```css
#garden {
  display: grid;
  grid-template: 1fr 50px / 1fr 4fr;
}
```
