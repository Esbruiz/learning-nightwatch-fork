# Learn Nightwatch: Complete Beginners Tutorial

This is a fork of https://github.com/dwyl/learn-nightwatch with some added tests and modifications

_**Automate** your **acceptance tests** and run them in **real browsers**_!

![nightwatch-logo-with-slogan](https://cloud.githubusercontent.com/assets/194400/16045809/099207e2-3242-11e6-99d4-99b227d7a38a.png)

## _Why_?

Testing what the people _using_ your application/website will _see_
and their ability _interact_ with the product is
(_probably_) the most important part of building a web app/site.
You can have amazing code, a super-fast backend and gorgeous UI,
but _none_ of that _matters_ if people are unable to _use_ it
because of a basic bug!

![dilbert-internet-full](https://cloud.githubusercontent.com/assets/194400/16302737/b0bb3486-3944-11e6-9875-6e691587ccd0.png)

_**User Acceptance Testing**_ (**UAT**) with a tool like Nightwatch (_Selenium_)
lets you to run real-world scenarios in your Web App which will give
you _confidence_ that the app _works_ in the chosen device(s)/browser(s).

## _What_?

_**Automated Acceptance Testing** using **Real Browsers**_.

Nightwatch is _quick_ to setup and the tests/scenarios are _easy_ to write.

> We _exhaustively_ read through all the tutorials, blog posts and documentation
for Nightwatch (_including the mailing list & StackOverflow Q&A_)
and have condensed our findings into this step-by-step guide.
We hope you find it _useful_ and decide to use it for your web app/site!

#### Background Links

+ Nightwatch website: http://nightwatchjs.org/
+ Github: https://github.com/nightwatchjs/nightwatch
+ Guide/docs: https://github.com/nightwatchjs/nightwatch-docs
(_don't be put off by the lack of docs, we're here to help if you get stuck!_)
+ Configuration file settings: http://nightwatchjs.org/guide#settings-file

## _Who_?

Who should learn/use Nightwatch?

+ **Developers** - People writing code, building web apps needing to
check that _everything_ works as expected.
+ **QA** - Quality Assurance people who have to _manually "click-test"_ apps/sites.
+ "**Testers**" - Many organisations _still_ have people who's job
is to write tests for software. If you describe yourself as a "Tester"
and want an _easier/faster_ way to write your acceptance tests, read on!

## _How_?

### _Quick Start (5mins)_

_**Try it**_ on your local machine in 5 mins by following these _**3 easy steps**_:


### 1. Clone

Clone the repository by _copy-pasting_ the following command into your terminal (replace `cp` with `copy` if you're on Windows):

```sh
git clone https://github.com/Esbruiz/learning-nightwatch-fork.git && cd learn-nightwatch && cp sample.env .env
```

### 2. Install<sup>1</sup>

Make sure you `cd learn-nightwatch` so that you're in the correct directory and then install the *required* dependencies
including Selenium Server and `chromedriver`:

```sh
npm install
```


### 3. Run (_tests_)<sup>2</sup>

Run the Nightwatch tests:

```sh
npm test
```


You should expect to see:
![learn-nightwatch-console-output-success](https://cloud.githubusercontent.com/assets/194400/16376918/f2d9f8c0-3c5a-11e6-96c4-88e0bdb44638.png)

Once you see the tests pass you are well on your way
to testing with Nightwatch!


<sup>1</sup><small>This _assumes_ you have node.js installed.
If not, https://nodejs.org/en/download/ </small>
<sup>2</sup><small>Selenium Requires Java/JDK see: [Java Installation section](https://github.com/dwyl/learn-nightwatch#installing-java-runtime-environment-jre) below. (_don't worry, you'll be up-and-running shortly..._!)
Once you have Java installed re-run the Nightwatch tests (`npm test`).</small>
