### Flexbox: cross-axis alignment
Alignment of items on the cross axis is achieved with the `align-items` property on the flex container or `align-self` property on individual items.  
In the case of a multi-line flex container, with additional space on the cross axis, you can use `align-content` to control the spacing of the rows.

```html
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: stretch;
}

.box div {
  width: 100px;
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1em;
}
```