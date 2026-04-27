# Author
Oliverio Francesca

# [Flexbox Defense](http://www.flexboxdefense.com/)
#### Level 1
```css
.tower-group-1 {
  display: flex;
  justify-content: center;
}
```
#### Level 2
```css
.tower-group-1 {
  display: flex;
  justify-content: flex-end;
}
.tower-group-2 {
  display: flex;
  justify-content: center;
}
.tower-group-3 {
  display: flex;
  justify-content: flex-end;
}
```
#### Level 3
```css
.tower-group-1 {
  display: flex;
  justify-content: center;
}
.tower-group-2 {
  display: flex;
  justify-content: space-between;
}
```
#### Level 4
```css
.tower-group-1 {
  display: flex;
  align-items: flex-end;
}
.tower-group-2 {
  display: flex;
  align-items: flex-end;
}
```
#### Level 5
```css
.tower-group-1 {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}
.tower-group-2 {
  display: flex;
  justify-content: center;
}
.tower-group-3 {
  display: flex;
  align-items: center;
  justify-content: center;
}
```
#### Level 6
```css
.tower-group-1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```
#### Level 7
```css
.tower-group-1 {
  display: flex;
  flex-direction: column;
}
.tower-group-2 {
  display: flex;
  flex-direction: column;
}
```
#### Level 8
```css
.tower-group-1 {
  display: flex;
  flex-direction: column;
}
.tower-group-2 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
```
#### Level 9
```css
.tower-group-1 {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}
.tower-group-2 {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-around;
}
```
#### Level 10
```css
.tower-group-1 {
  display: flex;
  justify-content: space-around;
}
.tower-1-2 {
  order: 1;
}
.tower-group-2 {
  display: flex;
  justify-content: space-around;
}
.tower-2-2 {
  order: -1;
}
```
#### Level 11
```css
.tower-group-1 {
  display: flex;
  justify-content: space-between;
}
.tower-1-1 {
  align-self: flex-end;
}
.tower-1-3 {
  align-self: flex-end;
}
```
#### Level 12
```css
.tower-group-1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tower-1-1 {
  align-self: flex-start;
}
.tower-1-3 {
  order: 1;
}
.tower-1-5 {
  order: 1;
  align-self: flex-end;
}
```