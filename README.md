# UniFi Dev Test

 * [Installation](#installation)
 * [Dependencies](#dependencies)
 * [Run](#run)
 * [Assignment](#assignment)

## Installation

Project should work fine with node:
 * `4.4.7` LTS
 * `0.10.44` (used by most contributors)

Warning:
Currently project and project's components do not support flat dependency install (default in Node v3).

Use `nvm` to install and select `node`:

```
nvm install 4.4.7
nvm use 4.4.7
```

Make sure you have the following gems installed:

```
gem install sass
gem install compass
```

If you're on a Mac and you get the error `Error: EMFILE, too many open files` you should [increase your ulimit value](http://stackoverflow.com/questions/19981065/nodejs-error-emfile-too-many-open-files-on-mac-os).
```
ulimit -n 4096
```

## Dependencies

Project uses `npm` package managers.

```
npm install
```


## Run

To run and develop the app
```
grunt
```

To just run the tests
```
grunt test
```


### View

Point your browser to `http://localhost:6060`.


## Assignment

1. Get everything running
2. Hook up the "Configure me" link
3. On the new "Configure me" page create 2 directives
  * A form directive
  * A summary of the form submission
4. Write some unit tests for the form to make sure that everything does what it's supposed to do

* Please make sure that this new page is responsive and works in all browser sizes.
* Please match the comp exactly. Pay attention to details.


## Helpful links

[UniFi Styles](http://ubnt-css.herokuapp.com/#/app/typography)
[UniFi Grid](http://ubnt-css.herokuapp.com/#/base/grid-containers)
[BEM Syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)