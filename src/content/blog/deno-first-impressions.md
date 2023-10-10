---
title: "First Impressions: Deno"
description: "It's 2023. Has it gotten better?"
pubDate: "2023-07-15"
image: ../../assets/dino.jpg
---

Call me five years late to the party, but this past month, I used Deno for the first time. Yeah, I know. I'm lame.

For those who aren't aware, [Deno](https://deno.land) is a JavaScript framework created by Ryan Dahl, the original creator of Node. Launched in 2018 and written in Rust (a language I've still yet to master), Deno boasts several advantages over the Node runtime.

Notably:

- It has built-in TypeScript support
- It's secure by default
- Native support for the most popular web APIs
- Generally faster than Node

With [Bun](https://bun.sh) still *far* away from production readiness, I figured I'd take a stab at Deno to see if there is any escaping the gravity of the Node ecosystem. 

As any JavaScript developer worth their salt will know, it's *exhausting* to start every new project by setting up a type checker, formatter, package manager, linter, bundler, and testing library. Sometimes, if you're feeling really saucy, you'll throw in a utility library like Lodash. It's hell and most of us just accept it.

Deno offers developers an escape by providing a robust standard and testing library, as well as a built-in linter and formatter. Dependencies are downloaded at runtime, so there's no package management. There's even a built-in compiler than will compile your TypeScript to a single, dependency-free executable!

Naturally, I was curious. Wouldn't you be?

## Why write this article?

I'll admit, I am not the first to write an article like this. A quick Google search will return hundreds of write-ups about Deno and whether it is "production-ready." Yet people like shiny, new things, so *most* of these articles were written between 2019 and 2021, when Deno was still new-ish.

A lot has changed since then. In fact, Deno literally [just stabilized NPM support last year](https://deno.com/blog/v1.28), which means you no longer need to upload separate modules to [deno.land/x](https://deno.land/x) (though the Deno team would still very much like you to). 

So I thought it was time for a much-needed update.

## Why Deno?

I recently embarked on a side-project to help troubleshoot some memory issues I was facing while working on the [Linguistic](https://linguistic.io) codebase. I need to simulate a lot of user events at once.

[Oa](https://github.com/nickersoft/oa), short for "ooh ooh ah ah", is a [monkey testing](https://en.wikipedia.org/wiki/Monkey_testing) tool that uses the [Puppeteer](https://pptr.dev/) browser orchestration library to load a webpage and bombard it with random click, input, and scroll events. In other words, as if a monkey were using the website.

I chose Deno due to:

1. My aforementioned hatred of repository scaffolding
2. Its ability to create standalone executables, which was perfect given the fact my tool was to be run on the command-line

Now that the project is done, let's look back and see how it went.

## Getting started

Right off the bat, the developer experience for Deno was great. A quick `deno init` generated a `main.ts`, associated unit test and benchmarking files, as well as a Deno configuration file. 

To run the program, all I needed to do was `deno run main.ts`. Absolute magic.

## Managing packages

Almost immediately, I plunged head-first into the confusing world of package management. I know I said Deno doesn't have a package manager, which it doesn't, but that fact honestly made everything more difficult. 

In Deno, packages are imported using fully-qualified URLs, such as:

```typescript
import { copy } from "https://deno.land/std@0.194.0/fs/copy.ts";
```

Your immediate first-thought, much like mine, might be:

> What if I use this in multiple files? How can I possibly keep the versions consistent?

There are two official ways Deno encourages to circumvent this issue. The first method, advised in [Deno's FAQ](https://deno.land/manual@v1.35.1/basics/modules#it-seems-unwieldy-to-import-urls-everywhere), is to create a `deps.ts` file which exports the needed dependencies from these URLs to elsewhere in the app. 

In the above example, this would mean:

```typescript
// deps.ts
export { copy } from "https://deno.land/std@0.194.0/fs/copy.ts";
```

Unsurprisingly, most of the internet *hates* this method, as do I. I originally tried it for oa and quickly became tired of constantly having to add new exports to `deps.ts`. To make matters worse, VSCode would always default to trying to import from the original URL and I would have to delete the import and update my `deps.ts` yet again.

The second method the Deno team advises is the one I ended up using. Deno recently added support for [import maps](https://deno.land/manual@v1.9.0/linking_to_external_code/import_maps), an additional property in your `deno.json` that allows you to use bare specifiers for your imports, similar to Node. 

For example, to access the `fmt` library:

```json
{
   "imports": {
      "fmt/": "https://deno.land/std@0.93.0/fmt/"
   }
}
```

```typescript
import { red } from "fmt/colors.ts";

console.log(red("hello world"));
```

This made life a tad bit better, although Deno's VSCode extension still insisted on importing my intellisense suggestions via the original URLs, *not* the aliases I defined in my `imports`. Again, I needed to refactor the imports to import from my alias.

VSCode wouldn't even enable intellisense for new dependencies until I ran my program or manually had Deno download cache my dependencies via `deno cache`.

### To NPM or not NPM?

Another large point of confusion was whether or not I should lean into NPM imports. As a library author, the Deno team encourages you to still publish to their official module repository so your projects can support Deno users using older versions of the runtime. 

However, the Deno repository is muddled. Several Deno ports of popular Node libraries were released around that 2019-2021 timeframe and haven't been updated since. Seeing I was writing a command-line tool, my first instinct was to reach for [Commander.js](https://github.com/tj/commander.js?). Checking the repository, I saw there was a [Deno port](https://deno.land/x/cmd@v1.2.0) last updated *three years ago*.

On the other hand, libraries like [Zod](https://github.com/colinhacks/zod) are officially supported on *both* [NPM](https://npmjs.org) and [deno.land/x](https://deno.land/x). Which one do you use? They both import the same library. Who knows?

In the end, I used Deno-native modules when possible, swapping out Commander for [Cliffy](https://deno.land/x/cliffy@v1.0.0-rc.2) and relying on select NPM packages such as [cosmiconfig](https://www.npmjs.com/package/cosmiconfig).

### Version discovery

I quickly found that there also exists yet another large problem with URL-based dependencies: you need to know the latest version. 

Technically, you can omit the version specifier from the URL and Deno will just pull the latest version. Obviously, this is not ideal, unless you happen to enjoy the rush that comes with not knowing if your code will still run on any given day. 

With Node, running `npm install` tracks down the latest version for you and writes it to `package.json`. As far as I know, Deno features no such luxury. 

Don't get me wrong, the Deno team [did just add `package.json` support this year](https://deno.com/blog/package-json-support). However, with no `deno install` command, this feels more like a compatibility layer for Node developers moving to Deno. They have also added a `deno:` URL scheme (similar to the current `npm:` compatibility scheme), which makes it even _more_ confusing which module ecosystem you should be relying on.

You can technically use `deno info` or `deno doc` to find out information about a package, but this is often cumbersome. I believe they may only show information about dependencies already added to the current project – the Deno docs don't clarify this.

## Managing modules

One nicer aspect of Deno is how heavily it relies on [ES modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) and the conventions that surround them. ESM is quickly becoming the standard for module management on the server and in the browser, with popular frameworks and libraries like [Vite](https://vite.dev/) and [SvelteKit](https://kit.svelte.dev/) supporting it by default.

With ESM, there is no such thing as an `index` file and all imports are *files*, never *directories*. Therefore, most Deno libraries feature a `mod.ts` file as their primary entry point:

```typescript
import { KeyInput } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
```

While I'm bummed about not being able to `import` directories anymore, I like the fact that Deno takes such an opinionated stance here. In Node, for example, you can use either CommonJS or ESM. Popular Node libraries such as [NestJS](https://nestjs.com) still encourage using CJS-styled imports despite the move towards ESM.

## Permissions

Moving on from dependency management, next was dealing with permissions. Nearly every package I used when building oa needed to do *something*. By default, Deno is closed off from everything: the network, the local environment, the filesystem, etc. 

For the most part, this is a good thing. Rogue code can be extremely dangerous, and there have been several cases over the past few years in which NPM packages were found to be injecting or running malicious code.

However, dealing with permissions is a headache from both a developer and user experience standpoint. After I wrote the first version of oa, running it resulted in a series of questions similar to the following:

```
┌ ⚠️  Deno requests env access to "PUPPETEER_PRODUCT".
├ Run again with --allow-env to bypass this prompt.
└ Allow? [y/n/A] (y = yes, allow; n = no, deny; A = allow all env permissions) >
```

I was bummed to learn that in order to bypass these prompts, you need to pass the `--allow-` flags to your CLI invocation for *every permission you do not want to be asked about*. 

This sucks for two reasons:

1. You have no idea what permissions your app's dependencies will need until you run your app
2. You need to pass these flags to all test, compile, dev, and build tasks

Naturally, my Deno tasks in my `deno.json` configuration had a lot of duplication:

```json
{
	"tasks": {
		"build": "deno compile --allow-env --allow-write --allow-read --allow-run --allow-net -o bin/oa oa.ts",
		"dev": "deno run --allow-env --allow-write --allow-read --allow-run --allow-net --watch oa.ts",
		"install": "deno install -f --allow-env --allow-write --allow-read --allow-run --allow-net oa.ts"
	}
}
```

I found out that there is an [open issue](https://github.com/denoland/deno/issues/12763) for adding permissions to the Deno config file but, surprise surprise: it has been open for the past two years.

Adding these flags, especially during compilation, is crucial as no user wants to answer a short questionnaire about what permissions their CLI tool can use. It is important that these permissions are granted and baked right into the executable.  

You could technically pass `-A` to Deno to grant *all* permissions but, c'mon – that would defeat the whole purpose, no?

## The kitchen sink

The rest of my experience with Deno was great. I never had to set up a `tsconfig.json` file or install any additional dependencies. I even forewent my typical reliance on Lodash due to the standard library functions such as `deepMerge`. It was a breath of fresh air to not have to do with the, ahem – "typical bullsh\*t", so-to-speak.

## Closing thoughts

Overall, Deno has come a *looong* way since I last read about it in 2020. That said, I think there's still a long way to go. In particular, the Deno team seems very confused about what to do with packages – between import maps, `package.json`, and `npm:` and `deno:` URL schemes, Deno seems to be drifting ever closer to the world of Node. Using the `node:` specifier, you can also use a subset of Node APIs, which muddies the waters even more.

It seems that even Deno can't escape the pull of the Node ecosystem, and the more they create their own thing, the more they seem to be reinventing the wheel. What exactly is the answer? I'm not sure. 

Node's long and complex history with CommonJS certainly doesn't make going "all-in" on NPM a sure-fire solution for Deno. Even though NPM support has landed in the runtime, only about 10% of pre-existing modules will work out-of-the-box with Deno. [Astro](https://astro.build) wasn't even fully supported by Deno [until this month](https://twitter.com/astrodotbuild/status/1677075022622621696), and even then not every Astro plugin is guaranteed to work. 

As far as permissions go, it very much feels like a double-edged sword. Until the UX and DX are improved around permissions, they feel more like a nuisance than anything else.

All of this is to say, I would definitely use Deno again in the future. For simple CLI tools in-particular, Deno is great due to its ability to cross-compile zero-dependency executables for different systems. I love not having to "scaffold" my repos anymore. 

However, when dealing with anything remotely complex, such as the Linguistic backend, I think I'll stick with ol' reliable: Node.