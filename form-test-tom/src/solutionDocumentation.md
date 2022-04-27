# Form validation musings by Tom Lawson

## Running the code

You may clone the repo, `npm install` and then `npm start` per create-react-app scripts. 

## Does is AcTuAlLy WoRk ?!

Load the app and test all fields, a combination of them, or none of them. It should be evident what validation errors you encounter.

## Other considerations

### Documentation: at repo-level

This is a very well explored problem space, but as ever, some basic documentation to help those who come here sight-unseen is helpful. I try to leave basic How-to instructions for local setup, running and troubleshooting. 

### Documentation: file-level

Boringly, in the great war between `all code should be self documenting` and `write reams of in-line comments` I sit on the fence. Because I was relatively junior quite recently, I have always appreciated anyone taking the time to explain any quirks in the code. By the same token my current colleagues have remarked on how helpful it has been for me to document MY INTENTIONS when they read my code and think 'it works, but there are several ways that could work'. 

### Documentation: commit-level

Following on from the above, MY RATIONALE is usually found at commit-level. In a repo such as this it might not be so evident because commits have been quite large. Ideally, they are atomic and narrow in scope, as well as well-documented.

### A11Y

Some things that help: semantic HTML, alt-tags. Things that don't help: div-soup and orphan `<h4>` 

### Progressive enhancement

I must admit I have not written any code ever with this paradigm. From an accessibility point of view, I would always try to offer the option to 'downgrade' the user experience to pare it down to basics, if I was doing any kind of feature-detection to make things more whizzy or good-looking based on the browser/platform I was presenting content on. Other than that, I'd have to do a bit of reading. 

### Browser support

In the interests of expediency I have chosen to rely on the tooling within the `create-react-app` package to compile things down to a version of JS that is extremely commonly supported. We're not doing anything fancy, so other than cross-browser testing to make sure styling isn't wonky or fails UAT I think we are good in this respect. 

### Testing

A major shortcoming of this repository. Form validation is a textbook use-case for good tests, and even TDD. You already know your validation rules, so why not start with test-cases for them, which run on a pre-push hook? That would be neat. I'd choose Jest for unit-tests - it's well-supported and documented. 

### Tooling

We stand on the shoulders of giants. I have relied on the boilerplate and simplicity provided by the `create-react-app` package, to give me a repo within the original fork which allows me to get straight to it. This does a lot under the hood and allows the web developer to get back to basics when it comes to quickly cross-referencing code changes in the browser, debugging with its dev tools and leveraging the code-editor (VS Code in my case). Oh, and `console.log` - who can forget that ;) 