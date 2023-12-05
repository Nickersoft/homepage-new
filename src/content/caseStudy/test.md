---
title: Scubah Design & Branding
roles:
  - Product Design
  - Branding
year: 2022
protected: true
image: ../../assets/portfolio/scubah.png
---



Whether you’re building a product, a tool, a website, a service, or a startup: first impressions are everything. Users inherently gravitate towards products they can trust, products that feel legitimate and provide a sense of security. A website that looks like it was designed by a child always make users feel safe and sound. Even if your product is great, no one will use it if it looks like you don’t know what your doing.



Yet, as a developer, design can often feel like an uphill battle. Your number one goal is to ensure the software you’re building works, and that it works well. Most developers give little or no thought to the visual design of their work, and for most developers that’s okay.

But if you’re a frontend developer, design should be at the heart of everything you do. Not only do you need to implement the designs of others, but you really should be able to handle designing your own project.

So, how do you design your frontend in 2018?

That’s what I’ll cover here. Think of it as a comprehensive cheat sheet for the non-designer.

I’ll hit three primary design components:

- Color
- Light
- Typography

Each section is broken into a set of general rules to follow, an example, and a list of resources you can use.

<h2>Hi</h2>

## <span>The Problem:</span> Semi-skeuomorphism


Before we dive into all the shortcuts you can take when designing a frontend in 2018, it’s important to understand the design principle we’ll be following: semi-skeuomorphism.

Sounds scary, but it really isn’t. In fact, you’re probably already highly familiar with the concept.

Skeuomorphism is a design principle where shadows, gradients, and textures are used to create elements representative of real-world elements. Texture and light are the two primary ingredients in skeuomorphic design, and from 2007–2013, they seemed to appear everywhere.

But first let’s get you grounded in the relevant design principles.

![The iOS 6 Find My Friends app (2011) heavily utilized skeuomorphic design, as well as the majority of Apple’s products at the time.](../../assets/fmf.png)

Much of this may have been attributed to Apple’s own interpretation of modern design language, as their 2011 User Interface Guidelines specify:

> When appropriate, add a realistic, physical dimension to your application. Often, the more true to life your application looks and behaves, the easier it is for people to understand how it works and the more they enjoy using it… often, an amplified or enhanced portrayal of something can seem more real, and convey more meaning, than a faithful likeness.

Yet by 2012, a slow migration had begun towards a much flatter design system. Driven by the emergence of design languages like [Metro UI](https://en.wikipedia.org/wiki/Metro_%28design_language%29) and [Material Design](https://en.wikipedia.org/wiki/Material_Design), flat design introduced softer and more uniform color palettes, thinner typefaces, and the use of shadows as tools of systematic hierarchy as opposed to the reinforcement of hyper-realism (referred to by Google as [“Elevation Hierarchy”](https://material.io/design/environment/elevation.html#elevation-hierarchy)).

![iOS Calculator: 2011 (skeuomorphic) vs. 2013 (flat)](../../assets/calculator.png)

Alright, so what’s semi-skeuomorphism? Semiskeu is a design principle that combines the colorful gradients and use of shadows found in skeuomorphic design with many of the principles found in flat design.

You’re likely pretty familiar with this one too, as it’s pretty much everywhere. A great example of semiskeu in action is the [Stripe homepage](https://stripe.com):

![](../../assets/stripe.png)

<h3>What do you notice?</h3>

1. Soft shadows add subtle dimension to the page’s flat device illustrations
2. The header gradient moves from dark to light, left to right, pulling your eyes towards the illustrations and creating an accent
3. Illustrations rest at an angle compared to the page copy to bring focus to them

In semiskeu, shadows and gradients are not only used to imply light, but are used to accent, amplify, or bring attention to notable elements on the page (points 1 & 2).

Additionally, while semiskeu maintains the geometric simplicity found in flat design, an increasing number of websites utilize unconventional shapes and curved divs in order to the page as a fluid entity, as opposed to a page divided into clear horizontal sections (3).

Now that we have some context, let’s start designing.

## Color

One of the most common mistakes frontend devs make when building websites is leaving subtlety out of their designs.

It’s 2018, not 2003. People can’t get away with shipping bright blue and green operating systems anymore. Websites no longer have dancing gifs or starry backgrounds.

Choose your color palette carefully.

### General Rules of Thumb

1. **The background of your site’s content should never be anything but a shade of gray.** Use white, light gray, or a dark gray.
2. **Only use colored or gradient backgrounds in sections designed to draw the user’s attention.** Think headers, heroes, call-to-action banners, etc.
3. **In most cases, use white text on any image, colored, or gradient background.** Additionally, a light drop shadow can sometimes help promote the text’s prominence.
4. **Never use absolute blacks.** Pure, opaque black (#000) is often too harsh for most webpages. Even this article has its font color set to an opacity of 84%.
5. **Ensure colored components do not border each other.** Unless the colors are very strong compliments of one another, often times the contrast of two neighboring colors can create a sense of polarization and division that breaks the flow of your page. If a navigation bar might touch a colored hero, opt for a transparent navbar background instead.

![](../../assets/edart1.png)

![](../../assets/edart2.png)

![The first production website I ever wrote (2013) looked like Windows XP threw up on a page. Its biggest design fault was its use of too many primary colors. Meanwhile, the project’s redesign (early 2014) overused a singular primary color far too much, which was equally as toxic. Your website should contain one or two primary colors, and utilize a grayscale background for all body content. By third redesign (late 2014), I had learned my lesson.](../../assets/edart3.png)

### Example

![](../../assets/example.png)

Using only these five simple rules, we can drastically transform this black-and-blue webpage into a much more aesthetically appealing site:

- The body of the site is light gray, reserving the blue brand color for the header only (rules 1 & 2)
- The header text is white, to complement the blue (rule 3)
- The text color was bumped up from black to a very dark gray (rule 4)
- The navbar’s background is transparent, so the bordering black and blue do not contrast with one another (rule 5)

### Resources

- [Flat UI Colors](https://flatuicolors.com/)
- [Flat UI Color Picker](http://www.flatuicolorpicker.com/)
- [Adobe Color](http://color.adobe.com/)
- [Coolors](https://coolors.co/)

## Light

While color serves many purposes, it can also be used to imply light through the use of gradients. In semiskeu, this practice is incredibly common. Let’s take another look at the Stripe homepage.

Where do you think the light source is?

![](../../assets/stripe-spiral.png)

Here’s a hint: Stripe uses a radial light source. The light appears directly above the elements, which explains the low offset of the drop-shadow and the concentrated light green in the background gradient.

### General rules of thumb:

1. **Ensure consistency across all components.** Once you’ve defined a light source for your page, ensure that all shadows follow its direction. If light is “hitting” your page at 135 degrees, then every shadow and gradient should fall at 135 degrees.
2. **Use shadows as a tool to present hierarchy or state.** Shadows should be used to either highlight page components, provide page structure, or depict state. For example, you can depict a button is pressed by lowering its elevation as opposed to changing its color. Too many shadows can present too much dimensionality, so be careful (e.g. don’t create a site with 18 unique elevations).
3. **Your shadow’s offset should equal roughly half of its blur radius.** For example, a shadow with an x / y offset of 10px should have a blur radius of roughly 20px. This approach renders the most authentic shadow.
4. **Always keep the opacity of shadows to under 25%.** Err on the side of subtlety so not to detract from your design. If you are using a dark background, in some cases you may need to bump up the opacity of your shadow in order to ensure its visibility.
5. **Shadows don’t always need to be black.** When using shadows on colored surfaces, it is often 