---
title: Experience
layout: default
---

##### Detailed Work Experience

---

**Past two years (GameChanger)**
#### Seniot Engineering Manager

**Responsibilities**

* TODO

**Projects**

* Oversaw a project to migrate $1.5MM worh of recurring subscriptions from legacy app to new app.
    * Using a Beta API from a 3rd party subscriptions provider and short PDF with early documentation, my team was able to migrate most of our active subscriptions from one app to another.
    * This was phase 0 of the sunset plan for our legacy app. Without these customers being auto-migrated, a lot of this money would have been lost.
* Promoted one of my Senior Engineers to EM and moved to a new team, while continuing to oversee their team.
    * This gave me a great experience in managing an EM and building skip-level relationships.
    * Being a full-time EM on my new team while managing another team from a director level was a good challenge in time management.
* Executed on several org-wide initiatives
    * Revamped our hackdays into quarterly three-day hackathons. We've seen a sustained energy and successful projects from this for over a year and counting.
    * Lead two EMs and several engineers from across the org to redo our technical interview process for mobile engineers.
    * Implemented a quarterly engineering pulse survey to get a feel for where the eng leadership team might need to focus our efforts.
  
**5 years before GameChanger (Wyzant)**
#### Engineering Manager

**Responsibilities**

* Work with product, marketing, and SEO to break down and prioritize a variety of projects
* Ensure the right people were responsible for/contributing to a given project, keeping both business and direct reports’ personal goals in mind
* Help direct reports (and everyone I worked with) learn and grow personally and professionally
* Cultivate an environment of open, honest, and circular communication and feedback
* Regularly meet with other engineering managers to ensure consistency across teams and set org-wide engineering goals
* Continued full-stack engineer responsibilities (at reduced capacity)

**Projects**

* Dramatically improved page load times for all of our SEO-facing pages in preparation for [Google Core Web vitals release](https://developers.google.com/search/blog/2020/11/timing-for-page-experience)
    * Improved performance by deferring various non-critical assets, cleaning up messy DB (read: `ActiveRecord`) queries, and auditing JS and CSS to remove unused code
    * We also added CI tooling so that future developers get failing builds on PRs if they cause performance regressions
* Top of the funnel A/B testing that increased new user conversion
    * Set ourselves up to be able to quickly test changes to Wyzant’s onboarding flow
    * A/B test setup: Rails app uses a gem (flipper) and sends the user to flow A or flow B. Each flow was a separate copy of the base Vue app, with or without the changes we wanted to test
    * Work with the data team to analyze AB test results
* Wyzant partner/affiliate program changes
    * Work with Marketing to understand Wyzant’s legacy partner program
    * Suggest and execute on cleanup to the years-old code and infrastructure around these programs

#### Team Lead

**Responsibilities**

* Improved our sprint processes by creating a variety of project and task card templates, creating more organized weekly sprint practices
    * Note: I am a big fan of using an [experiment-driven approach](https://leaddev.com/agile-other-ways-working/leading-your-engineering-team-experiments-not-processes) to these types of changes
* Work closely with product to understand and break down requirements in order to put together project plans
* Keep stakeholders in the loop on project statuses; often needing to talk about technical topics to non-technical people
* Maintain full-stack engineer responsibilities below

**Projects**
* Ask An Expert video answers
    * Propose an architecture that will allow tutors to add video answers to questions on Wyzant’s Ask An Expert platform (think Yahoo! Answers, but for Wyzant subjects). These videos get uploaded to YouTube and embedded in Ask An Expert answers
    * Ensure to make use of already-existing Wyzant services as much as possible in this architecture, coordinating with service owners to discuss possible changes needed to support this functionality
* Landing pages redesign
    * Work closely with the design team to plan and execute a full redesign of our SEO landing pages. The hand-off process happened via Invision
    * All changes executed with Rails partials, JS, SCSS, and Webpacker
* Landing pages ETL
    * Propose, build, and maintain an ETL process to manage which of our SEO landing pages are “live” at a given time
    * We had 2.5 million landing page records in a MySQL DB table, but only ~200k of the pages were considered valuable enough to be used in production

#### Full-stack Engineer

**Responsibilities**
* Build and maintain various parts of the Wyzant platform, ensuring quality by working closely with QA, unit testing, and monitoring
* Truly full-stack. Worked on everything from Rails controllers to ElasticSearch w/ Golang to Vue.js apps
    * Landing pages: Go backend, rails frontend
    * Ask An Expert: Ruby on Rails
    * Tutor search API: Go and Elasticsearch
    * Online lessons tool: Vue.js, Marionette, Python
* Give task-based status updates to team leads, managers, or product managers
* Begin learning how to scope out larger projects and write quality cards and acceptance criteria

**Projects**
* Tutor search API - Scope out and rebuild Wyzant’s Tutor Search application in Go with ElasticSearch
* Online tool walkthrough - Create new walkthrough in Vue.js
* Ask An Expert launch - help finish building Wyzant’s Ask An Expert platform and push it to production

#### Other Wyzant responsibilities

* Create and lead an internal social and culture committee to improve employee recognition and promote cross-team socialization
* Assist with interviewing, recruiting, and onboarding processes for engineering and several other teams


---

##### Less recent expierence (various companies)

* Native iOS development; Swift and Objective-C
    * Usually focused on UI
    * Wyzant mobile apps (read my blog post about [transitioning from mobile to web at Wyzant](https://medium.com/wyzant-tech/from-mobile-to-web-a-story-about-changing-teams-at-wyzant-c8c2af231cf4))
    * Apps for various clients while working consulting companies
* Experience working with clients to understand their needs and develop requirements
* Cross-platform mobile development with Xamarin
* Tech evangelist for Xamarin
    * Variety of public speaking engagements (demos, workshops, meetups, new feature announcements)
    * Write technical blog posts, build and maintain demo apps

