---
layout: CS139
title: Designing For Mobile
math: true
part: true
pre: Theory9
nex: Theory11
---
## Mobile Sites

Large amount of mobile web traffic over the past few years

Different interface
* smaller screens
* Touch Based Interaction

Two techniques
* Responsive Web design
* Separate mobile platforms

### Responsive Web Design
using an advanced css feature is `media`

CAn be used to access the device
* Height/ width of Window
* Height/ width of device
* Orientation - landscape / portrait
* Resolution

`media` can be used
* In the CSS files
* To add different css files in the head element

Adding to the CSS file example

``` css
@media only screen and (max-device-width: 480px){
    div#Wrapper {
        width: 400px
    }
    #navigation {
        float: none;
        width: auto;
    }
}
```
These are applied only to screens smaller than 480px wide

These also override any other styles specified elsewhere

Easier then rewriting pages

### Separate Mobile Layout
Previously common not so anymore

Redirects can be done based on the browsers user agent based in the header

can access the user agent against `$_SERVER["HTTP_USER_AGENT"]`

however needs updating as new devices come out

* Pros
    * Easy to create fixed views
    * Hard to dynamically cater to all screen sizes
* Cons
    * Many not work if new devices are created
    * Can be a lot of work to double the number of pages
    * Two sets of pages need updating

## Best?
Each has its merits

Some content can work best with different designs
