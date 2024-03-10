---
title: Experience
layout: default
---

##### Detailed Work Experience

---

**2021 - Now (GameChanger)**
#### Senior Engineering Manager

**Responsibilities**

* Built and led two high-performing cross-functional, multi-platform teams.
* Worked closely with a dedicated Product Manager and Product Designer to run projects week-to-week and plan out quarterly and yearly roadmaps.
* Pushed my teams and my engineers to adopt an MVP mindset so that we could ship small pieces of work and monitor their impact before continuing to invest.
* Work with platform teams to ensure our system(s) scaled with the rapid growth of users.

**Ownership and Accomplishments**

As a senior EM at GameChanger, my ownership areas changed as the company grew and our focus areas changed. I've broken this section down by ownership area.

* **Video and Clips**
  * Took ownership of our automatic highlight clips infrastructure after the initial MVP release. Worked with my engineers and platform team engineers to improve the scalability of the infrastructure (APIs, modeling, and DB) to handle the generation of 200MM+ highlight clips _and_ easily support clips for a variety of sports.
    * Note: I was able to slot most of this improvement into feature development projects, rather than needing to set aside specific engineering time for it.
  * Moved video and clip data from the main DB into its own DB; critical effort for scaling.
  * Advocated for and owned a project that improved the visibility and usefulness of one of our best-converting features (highlight clips). This increased user engagement with highlight clips by 11x and increased subscriptions coming from highlight clips by 3x.


* **Subscriptions**
    * Owned a project for seamlessly raising prices on Apple and Google.
    * Oversaw a project to migrate $1.5MM worth of recurring subscriptions from the legacy app to the new app.
      * This was phase 0 of the sunset plan for our legacy app. Without these customers being auto-migrated, a lot of this money would have been lost.

* **Legacy app**
  * Created and owned a side team that worked on shutting down GameChanger Classic (legacy app).
  * Ran this team at the same time as my full-time team by ensuring some trusted individuals on my full-time team could own projects, run stand, etc. with little oversight.
  * Shut down features one by one by (carefully) working in the legacy codebase.
  * Coordinate marketing campaigns to get users to move to the new GameChanger app.


**Promotions**

* Promoted one of my Senior Engineers to EM and moved to a new team, while continuing to oversee their team.
    * This gave me great experience in managing (and mentoring) an EM and building skip-level relationships.
    *  Had to manage my time well being a full-time EM on my new team while managing another team from a director level.
* Promoted the first staff-level Android engineer in the company and worked with them to sharpen their leadership and organization skills to increase their impact and effectiveness.
  
**Force Multiplication**

* Led two EMs and several engineers from across the org to redo our technical interview process for mobile engineers. Reducing the amount of touchpoints in the interview process while maintaining a high bar.
  * Modified our interview process for staff-level roles.
* As I onboarded, I built out a technical onboarding process that would allow engineers and EMs to onboard more easily. This process has gotten a lot of great feedback over the past two years and has been a critical tool to have during our scaling efforts. I owned and iterated on this throughout my entire tenure here.
* Revamped our monthly hack Friday into quarterly three-day hackathons. We've seen sustained energy and successful projects from this ever since.
* Worked with a couple of engineers to re-vamp our technical proposal process to increase cross-team engagement on technical proposals. This project came about after I noticed this gap – I was able to find a couple of engineers who also noticed this and were passionate about it, so I enabled them to tackle the issue with my support and direction. We saw an incredible increase in the number of proposals opened and the amount of engagement each of them received with the new process.
* Implemented a quarterly engineering pulse survey to get a feel for where the engineering leadership team might need to focus our efforts.

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

##### Less recent expierence (various companies, 2016 and previous)

* Native iOS development; Swift and Objective-C
    * Usually focused on UI
    * Wyzant mobile apps (read my blog post about [transitioning from mobile to web at Wyzant](https://medium.com/wyzant-tech/from-mobile-to-web-a-story-about-changing-teams-at-wyzant-c8c2af231cf4) in 2017)
    * Apps for various clients while working for consulting companies
* Experience working with clients to understand their needs and develop requirements
* Cross-platform mobile development with Xamarin
* Tech evangelist for Xamarin
    * Variety of public speaking engagements (demos, Xamarin workshops, meetups, new feature announcements)
    * Write technical blog posts, build and maintain demo apps
