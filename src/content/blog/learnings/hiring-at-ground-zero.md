---
title: "Hiring at Ground Zero"
description: "How we hired our first engineers from nothing, for free"
pubDate: "2023-07-23"
image: ../../../assets/ground-zero.jpg
---

One of the most common pieces of advice shared with founders with respect to hiring is to *source from your own network*. 

At Linguistic, well... we didn't really have one.

In early 2023, [Victoria](https://www.linkedin.com/in/victoria-pu/) and I had just closed our pre-seed round for [Linguistic](https://linguistic.io), the AI-powered language immersion platform we started just a few months before. With a ton of work ahead of us and myself as the only technical founder, we knew our first hires would have to be engineers. 

Given my extensive background in frontend engineering and design, we figured it would make the most sense to hire a backend engineer to help round out the skillsets on the team. Unfortunately, Victoria came from a largely academic background and all of the engineers I knew were either on a visa or specialized in frontend or mobile. 

No one came to mind.

After scouring the web and finding zero articles about how tiny teams such as ours hire their first engineers and how they screen candidates, I decided to write one. This is the story of how Victoria and I managed to snag our first engineers.

## Catching Lightning in a Bottle

Let me start by saying that building a team at such an early stage is super opportunistic and often relies a tremendous amount on luck. 

For example:

1. [Drew Houston](https://en.wikipedia.org/wiki/Drew_Houston) (founder and CEO of [Dropbox](https://dropbox.com)) met his cofounder [Arash Ferdowsi](https://en.wikipedia.org/wiki/Arash_Ferdowsi) after Arash watched one of Dropbox's early demos and decided to drop out of college to start the company with him
2. [Paul English](https://en.wikipedia.org/wiki/Paul_M._English) (co-founder and CTO of [Kayak](https://kayak.com)) met his cofounder Steve Hafner after his boss at [Greylock](https://greylock.com/) introduced the two of them
3. My founder friend met some of his first engineers by cold DM'ing employees impacted by a layoff at a nearby office
4. Victoria and I met each other by chance after ending up in the same [On Deck](https://www.beondeck.com/) cohort in 2022

Finding just ONE person crazy enough to join your mission is hard enough, let alone an entire team.

To a degree, I feel we definitely got lucky with our first hires at Linguistic. However, I also believe that there were a number of factors that contributed to our ultimate success, so let's talk about them.

## Sourcing with No Network

While we didn't really "have" a network, it didn't stop us from trying to tap into one. Victoria and I asked our friends and former coworkers, and at the end of the day, we did get a few references. 

After a number of brief phone chats, we found that these folks were either:

1. Out of our price range (we did only raise a pre-seed, after all)
2. Looking for something else
3. Misaligned with our hiring needs

Back to square one. 

With no knowledge of recent layoffs by language education companies, our only other choice going forward was to source from where everyone else sources: job boards. The only difference? We weren't a FAANG company that could shell out thousands a month on fancy recruiting tools (seriously, the rates charged by some online services border on criminal).

We signed up for the free tiers offered by [WellFound](https://wellfound.com) (formerly AngelList) and [LinkedIn Jobs](https://www.linkedin.com/jobs/). Almost immediately, we started to get flooded with applications. In fact, LinkedIn's application pool filled up so quickly that they took down our post within only a few days (the free tier only allows 50 applicants a day). We ended up abandoning LinkedIn and focusing our efforts primarily on WellFound.

Originally, we had only a single job listing: *Founding Backend Engineer.* The role entailed everything that *wasn't* frontend: handling our microservices, our deployment infrastructure, our algorithms, our AI – in other words, a really tall order.

Most of the applications we saw were very low quality. Of the applications we received, a great number were:

1. Bots
2. Offshore contractors (who we couldn't legally hire anyway)
3. Extremely inexperienced (0-1 years of *any* programming experience)

Out of over a hundred applicants per cohort, we'd *maybe* start conversations with about ten. The pickings were slim.

After a few failed interviews with potential candidates, we eventually came to the decision to split the role in two: a senior backend position and a (more junior) full-stack position. This approach would allow us to divide the workload more easily and hopefully redirect the more inexperienced developers towards the full-stack role, which would come with a fair amount of mentorship anyway (seeing I myself most closely align with a full-stack engineer). The senior role could take on more of the technological innovation we were hoping for our original founding role to encompass.

Almost immediately we started to see twice the number of applicants for the full-stack role over the backend role. With the number of full-stack bootcamps graduates nowadays, this didn't exactly prove surprising. 

Unfortunately, our conversion rate of applicants to conversations didn't improve. The quality of applications remained the same, though we adjusted our expectations accordingly. At least now, if we started a conversation, there may be a higher chance of us extending an offer in the end.

## Building a Process

Now that we had applicants, we needed a way to vet them. I have **never** believed in Leetcoding, both as an applicant and an interviewer. In fact, I so strongly oppose LeetCode that at past positions I have opted out of the interview process solely *because* the company's hiring philosophy revolved around it. Obviously, I wasn't about to turn to LeetCode to hire for Linguistic.

Instead, I drew from the kind of work a potential hire would be expected to do at Linguistic, such as onboarding and working with a codebase they've never seen before, as well as diagramming some of our existing infrastructure. When we were attempting to hire a founding backend engineer, our process looked like the following:

1. **Phone screen**: chat with me for 30 minutes to talk about the role, your qualifications, and see if there's a fit
2. **Take-home**: take home a partially-built backend codebase and extend its functionality
3. **System design**: given a product description, describe and diagram the high-level architecture of the product's backend and microservices, as well as how it communicates with the client
4. **Behavioral interview**: sit down with our CEO Victoria to talk through your work history, passion projects, motivations, and interests

Of the numerous phone screens I ended up taking, only three or so made it to the system design round. Of those three, I only passed one. I had high hopes for the candidate, but during Victoria's interview, some major red flags were raised that I had somehow missed. 

We passed.

I felt dumb. Was I not asking the right questions? We had spent weeks passing this candidate through the ranks, only for us to pass on them after some basic questions I could have asked at the start of our process. 

Clearly, we needed to rethink things. 

## Revising the Process

We realized we lacked alignment, so we spent the next few weeks overhauling our pipeline. For starters, we decided Victoria should take the first phone call. She's the CEO and we obviously should never proceed if she's not 100% on board with the candidate. 

Next, I devised a (perhaps *too* long) hiring rubric to ensure we were aligned with the criteria we were hiring for. This rubric ended up influencing the kind of behavioral questions we asked, as well as how we graded technical screens.

### Our Rubric

After hours of research, I ended up basing our rubric on the one [published by the Medium engineering team](https://medium.engineering/engineering-interviews-grading-rubric-8b409bec021f) (props to [Jamie](https://majelbstoat.medium.com/) - that rubric is _very long_).

Synthesizing what the big kids do with the kind of things that we were looking for, we came up with something like this:

| Technical         |                                                                 |
| ----------------- | --------------------------------------------------------------- |
| General Knowledge | *How well do they know basic programming concepts?*             |
| Communication     | *How well do they communicate during the interview?*            |
| Code Quality      | *How well do they understand SOLID and DRY principles?*         |
| Autonomy          | *Do they need any hand-holding?*                                |
| Problem Solving   | *How well can they deconstruct and attack the problem at hand?* |

| **Behavioral**   |                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------- |
| Culture          | *Do they relate to the language learning space? Are they ready to work at a startup?* |
| Entrepreneurship | *How entrepreneurial are they? Do they build things outside of work?*                 |
| Collaboration    | *Are they a lone wolf or a happy collaborator?*                                       |
| Initiative       | *How proactive are they when it comes to work?*                                       |
| Resourcefulness  | *Are they scrappy? Can they work with limited resources?*                             |
| Introspection    | *Are they self-aware?*                                                                |
| Empathy          | *Do they exhibit empathy towards their coworkers? Their users?*                       |
| Curiosity        | *Are they eager to learn new things? Do they have a growth mindset?*                  |

It seems long, but once we started interviewing, we realized that we could get a sense of quite a bit just from the process alone.

### Reinventing Our Technical Screens

With our new rubric in hand, I wanted to make sure we were extrapolating enough of this information from our technical screens. I had already started to feel that the backend take-home assignment wasn't challenging enough. There was really only a single correct way to complete it, plus there were enough hints in the surrounding code to lead candidates straight to the answer. 

Worst of all, the take-home wasn't even screening for arguably our most important criteria: the candidate's communication and problem-solving skills. Excelling in these areas would be crucial for our backend role, as we were hoping that our hire could help lead several of our more ambitious technical initiatives. As much as I hate live technical screens, I made the tough decision to swap out our backend assessment for a live coding round. 

No LeetCode, though. **Never LeetCode**.

#### The Backend Interview

There are so many times as a technical founder you end up bashing your head against a wall and asking:

> *How can I **possibly** build this?!*

What's great about those moments is once you *do* solve the problem, you can package it up into a nice little coding question to ask candidates. 

That's what I did. 

I constructed a simple coding problem based on a method *still used in our codebase* I had *written myself*. After learning how aggressively *not* startup-friendly CoderPad's pricing is, I set up a (decently cheap) team plan on [repl.it](https://repl.it) and used their collaboration feature to host interviews. The only downside was that they *still* don't support anonymous collaboration, so every one of my candidates had to sign up for an account before joining my room. 

Super annoying.

