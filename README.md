# Vanilla Stopwatch

A simple stopwatch with a start, stop, and reset function.

## Vanilla Everything

Although this app is super simple, it serves as an excercise in fundamentals. The point of making this app was to work with some base concepts.

## JavaScript

### Let vs Const

ES6 introduced two new ways to declare variables. These new statements are stricter, but also make more sense in their usage.

#### Let

`let` is now the preferred way to declare variables that need to updated. While `let` cannot be redeclared, it's contents can be updated. So, for this app I have used `let` for the ms, s, and m variables. In addition, since `let` can be declared without being initialized, it is the perfect candidate to use for the timer variable since it must be declared globally to be used in multiple functions, but also is required to hold the `setinterval()` function. These variables are all updated dynamically, so they are prefect candidates for `let`.

#### Const

`const` is now the preferred way to declare variables that must remain unchanged. In this app it is used to decalre DOM selectors and to make use of the ES6 arrow function declaration.

## CSS

### Classes & Selectors

Since the app uses vanilla CSS, I had to make use of classes and selectors in a much more verbose way. Fortunately, this is not much of an issue. CSS3 is an intuitive system once you spend osme time in it. Since we cannot nest selectors in vanilla CSS, selectors must be decalred separately, this adds some bloat to the CSS file, but in the end isn't unworkable.

### Media Queries

Using media queries is not any different in vanilla CSS than a preprocessor like SASS. The main difference is the inability to nest selectors.
