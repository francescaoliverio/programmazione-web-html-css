# Solution
For each rule, I will write which selector types there are, and how they contribute to the specificity.  
N.B. Relational selectors like ' ' and '>' do not contribute to the specificity: value 0-0-0.
##
`ul li {}`
- 2 elements: 2x 0-0-1

**Specificity:** 0-0-2
##
`ul > li {}`
- 2 elements: 2x 0-0-1

**Specificity:** 0-0-2
##
`body > #main.mobile a:hover {}`
- 2 elements: 2x 0-0-1
- 1 class: 0-1-0
- 1 pseudoclass: 0-1-0
- 1 id: 1-0-0

**Specificity:** 1-2-2
##
`div p > span {}`
- 3 elements: 3x 0-0-1

**Specificity:** 0-0-3
##
`.users .name {}`
- 2 classes: 2x 0-1-0

**Specificity:** 0-2-0
##
`[href$='.pdf'] {}`
- 1 attribute: 0-1-0

**Specificity:** 0-1-0
##
`:hover {}`
- 1 pseudoclass: 0-1-0

**Specificity:** 0-1-0
##
`div .name {}`
- 1 element: 0-0-1
- 1 class: 0-1-0

**Specificity:** 0-1-1
##
`a[href$='.pdf'] {}`
- 1 element: 0-0-1
- 1 attribute: 0-1-0

**Specificity:** 0-1-1
##
`.pictures img:hover {}`
- 1 element: 0-0-1
- 1 class: 0-1-0
- 1 pseudoclass: 0-1-0

**Specificity:** 0-2-1
##
`.news.breaking.featured {}`
- 3 classes: 3x 0-1-0

**Specificity:** 0-3-0
##
`.user #name {}`
- 1 class: 0-1-0
- 1 id: 1-0-0

**Specificity:** 1-1-0
##
`#name span {}`
- 1 element: 0-0-1
- 1 id: 1-0-0

**Specificity:** 1-0-1
##
`nav#nav > li:hover {}`
- 2 elements: 2x 0-0-1
- 1 pseudoclass: 0-1-0
- 1 id: 1-0-0

**Specificity:** 1-1-2
##
`li:nth-child(2n+1):hover {}`
- 1 element: 0-0-1
- 2 pseudoclasses: 0-1-0

**Specificity:** 0-2-1