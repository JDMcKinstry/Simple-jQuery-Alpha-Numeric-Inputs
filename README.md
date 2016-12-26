# Simple jQuery Alpha Numeric Inputs

##### Extremely simple and easy way to add `alpha`, `numeric`, and `alphanumeric` inputs to any page.

---

Simply give any input 1 of the three following classes and watch the magic!
 - **alpha**
 - **numeric**
 - **alphanumeric**

---

If you'd like to allow a few other chars, such as "$" or "&", then simply include them in a data attribute named "allow", like so:
 
    <input class="alpha" data-allow="$#*" type="text" />

---

##[JSFiddle](https://jsfiddle.net/SpYk3/yda2cuoz/)
### Quick Link:  [jQuery.alphanumeric.ext.js](https://cdn.rawgit.com/JDMcKinstry/Simple-jQuery-Alpha-Numeric-Inputs/master/jQuery.alphanumeric.js)

---

### Extended version
## [JSFiddle](https://jsfiddle.net/SpYk3/y7f0qLLd/) <sub>has toggle ability</sub>
### Quick Link:  [jQuery.alphanumeric.ext.js](https://cdn.rawgit.com/JDMcKinstry/Simple-jQuery-Alpha-Numeric-Inputs/master/jQuery.alphanumeric.ext.js)
Initially "on", but can be set to be initially "off" by simply changing first variable(`initializeON`) in plugin to `false`

    $.inputAlphaNumeric.toggle();  //  toggles feature on || off
    $.inputAlphaNumeric.on();  //  turns feature on
    $.inputAlphaNumeric.off();  //  turns feature off
