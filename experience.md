## Senior Engineering Manager @ Babylist

#### July 2024 \- Now

**Responsibilities**

* Own Android app by managing three senior Android engineers, owning the Android product roadmap, and driving technical investments and process improvements to increase app quality and usability.  
* Own Commerce web and iOS team by managing seven, collaborating with Product and Design teams to build the Commerce product roadmap. Drove heavy collaboration with merchandising, registry-building, and design teams.

**Primary Accomplishments**

* Drove codebase and process improvements that led to increasing crash-free user rate from 97% to 99.5% on Android in the first month on board.  
* Led the Commerce team to improve team organization and collaboration, ensuring the team could deliver 90% of projects on time in my first 6 months; a huge improvement up from 15%.  
* Worked with the Director of Product to re-align the Commerce team on a new product vision and roadmap for 2025\. I ensured that there was clarity in why we were making this pivot and found interesting product, design, and engineering challenges in the coming year to get everyone on the team excited about our new path.

**Other Org-wide Impacts**

* Worked with Staff Site Reliability Engineer on adjusting our incident response approach and tooling to promote more involvement in site events, quicker resolution times, and better communication with non-technical stakeholders.  
* Led the rollout of Notion for our company intranet. Created onboarding documentation and guidelines on how and when to use Notion. Continued pushing teams to move and create documentation in Notion to improve centralization, which was a big pain point for our growing org.  
* Created standardized release processes for our iOS and Android teams. We were releasing on an as-needed basis, resulting in long wait times for some bug fixes or wasted engineering time when we released 3 times per week. This allowed us to create a release and monitoring rotation to share the release management load across the team and ensure the iOS and Android apps go out on an easy-to-follow weekly schedule.

#### ---

## Senior Engineering Manager @ GameChanger

#### June 2021 \- June 2024

**Responsibilities**

* Built and led two high-performing cross-functional, multi-platform teams.  
* Worked closely with a dedicated Product Manager and Product Designer to run projects week-to-week and plan out quarterly and yearly roadmaps.  
* Pushed my teams and my engineers to adopt an MVP mindset so that we could ship small pieces of work and monitor their impact before continuing to invest.  
* Worked with platform teams to ensure our system scaled with the rapid growth of users.

**Ownership and Accomplishments**

As a senior EM at GameChanger, my ownership areas changed as the company grew and our focus areas changed. I’ve broken this section down by ownership area.

* **Video and Clips**  
  * Took ownership of our automatic highlight clips infrastructure after the initial MVP release. Worked with my engineers and platform team engineers to improve the scalability of the infrastructure (APIs, modeling, and DB) to handle the generation of 200MM+ highlight clips *and* easily support clips for a variety of sports.  
    * Note: I was able to slot most of this improvement into feature development projects, rather than needing to set aside specific engineering time for it.  
  * Moved video and clip data from the main DB into its own DB; critical effort for scaling.  
  * Advocated for and owned a project that improved the visibility and usefulness of one of our best-converting features (highlight clips). This increased user engagement with highlight clips by 11x and increased subscriptions coming from highlight clips by 3x.  
* **Subscriptions**  
  * Owned a project for seamlessly raising prices on recurring subscriptions via App Store and Google Play.  
  * Oversaw a project to migrate $1.5MM worth of recurring subscriptions from the legacy app to the new app.  
    * This was phase 0 of the sunset plan for our legacy app. Without these customers being auto-migrated, a lot of this money would have been lost.  
* **Legacy app**  
  * Created and owned a side team that worked on shutting down GameChanger Classic (legacy app).  
  * Owned the iOS development of a feature in our new app that allowed users to import their teams from the legacy app. Worked closely with backend and Android to design and implement this.  
  * Ran this team at the same time as my full-time team by ensuring some trusted individuals on my full-time team could own projects, run meetings, etc. with little oversight.  
  * Shut down features one by one by (carefully) working in the legacy codebase.  
  * Coordinate marketing campaigns to get users to move to the new GameChanger app.

**Building the team**

* Promoted one of my Senior Engineers to EM; managed and coached them while also taking over another team of 1 EM and 6 engineers.  
* Promoted the first staff Android engineer in the company and worked with them to sharpen their leadership and organization skills to increase their impact and effectiveness.  
* Heavily involved in interview processes for a variety of EM, engineer, product manager, and designer roles across the tech org. Helped calibrate for new roles like Technical PM and Staff Mobile.  
* Directly hired 10 engineers in my three years there with a 100% acceptance rate.  
* Worked with the Director of Engineering on building a calibration and promotion process for consistency across the engineering org.

**Other Org-wide Impacts**

* Led two EMs and several engineers from across the org to redo our technical interview process for mobile engineers. Reducing the amount of touchpoints in the interview process while maintaining a high bar.  
  * Modified our interview process to better assess for staff-level roles.  
* As I onboarded, I built out a technical onboarding process that would allow engineers and EMs to onboard more easily. This process has gotten a lot of great feedback over the past two years and has been a critical tool to have during our scaling efforts. I owned and iterated on this throughout my entire tenure here.  
* Revamped our monthly hack Friday into quarterly three-day hackathons. We’ve seen sustained energy and successful projects from this ever since.  
* Worked with a couple of engineers to revamp our technical proposal process to increase cross-team engagement on technical proposals. This project came about after I noticed this gap – I was able to find a couple of engineers who also noticed this and were passionate about it, so I enabled them to tackle the issue with my support and direction. We saw an incredible increase in the number of proposals opened and the amount of engagement each of them received with the new process.  
* Implemented a quarterly engineering pulse survey to get a feel for where the engineering leadership team might need to focus our efforts.

---

## Engineering Manager/Full-stack iOS Engineer @ Wyzant

### 5 years before GameChanger

#### Eng Manager

**Responsibilities**

* Work with product, marketing, and SEO to break down and prioritize a variety of projects  
* Ensure the right people were responsible for/contributing to a given project, keeping both business and direct reports’ personal goals in mind  
* Help direct reports (and everyone I worked with) learn and grow personally and professionally  
* Cultivate an environment of open, honest, and circular communication and feedback  
* Regularly meet with other engineering managers to ensure consistency across teams and set org-wide engineering goals  
* Continued full-stack engineer responsibilities (at reduced capacity)

**Projects**

* Dramatically improved page load times for all of our SEO-facing pages in preparation for [Google Core Web vitals release](https://developers.google.com/search/blog/2020/11/timing-for-page-experience)  
  * Improved performance by deferring various non-critical assets, cleaning up messy DB (read: ActiveRecord) queries, and auditing JS and CSS to remove unused code  
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
* Keep stakeholders in the loop on project statuses; ensuring smooth communication in regards to technical topics with non-technical people  
* Maintain full-stack engineer responsibilities below

**Projects**

* Ask An Expert video answers  
  * Propose an architecture that will allow tutors to add video answers to questions on Wyzant’s Ask An Expert platform (think Yahoo\! Answers, but for Wyzant subjects). These videos get uploaded to YouTube and embedded in Ask An Expert answers  
  * Ensure to make use of already-existing Wyzant services as much as possible in this architecture, coordinating with service owners to discuss possible changes needed to support this functionality  
* Landing pages redesign  
  * Work closely with the design team to plan and execute a full redesign of our SEO landing pages. The hand-off process happened via Invision  
  * All changes executed with Rails partials, JS, SCSS, and Webpacker  
* Landing pages ETL  
  * Propose, build, and maintain an ETL process to manage which of our SEO landing pages are “live” at a given time  
  * We had 2.5 million landing page records in a MySQL DB table, but only \~200k of the pages were considered valuable enough to be used in production

#### Full-stack & iOS Engineer

**Responsibilities**

* Build and maintain various parts of the Wyzant platform, ensuring quality by working closely with QA, unit testing, and monitoring  
* Full stack with a lot of breadth\! Worked on everything from Rails controllers to ElasticSearch w/ Golang to Vue.js apps to native iOS  
  * Landing pages: Go backend, rails frontend  
  * Ask An Expert: Ruby on Rails  
  * Tutor search API: Go and Elasticsearch  
  * Online lessons tool: Vue.js, Marionette, Python  
  * iOS app: Objective-C, early stages of migration to Swift  
* Give task-based status updates to team leads, managers, or product managers  
* Begin learning how to scope out larger projects and write quality cards and acceptance criteria

**Projects**

* Tutor search API \- Scope out and rebuild Wyzant’s Tutor Search application in Go with ElasticSearch to improve usability and conversion rates  
* Online tool walkthrough \- Create new walkthrough in Vue.js to improve tool usability, improve our tracking, and reduce Customer Support request load  
* Ask An Expert launch \- took over the project for migrating Wyzant’s Ask An Expert platform when it was a little less than halfway finished. Caught up quickly in order push it to production on our tight timeline  
* Built a custom messaging app in iOS. Worked closely with backend and Android engineers to build this feature from the ground up

#### Other Wyzant responsibilities

* Create and lead an internal social and culture committee to improve employee recognition and promote cross-team socialization  
* Assist with interviewing, recruiting, and onboarding processes for engineering and several other teams

---

## Other (various companies, 2016 and previous)

* Native iOS development; Swift and Objective-C  
  * Usually focused on UI. Drove really complex UI interactions in BMW Connected Drive app.  
  * Wyzant mobile apps (read my blog post about [transitioning from mobile to web at Wyzant](https://medium.com/wyzant-tech/from-mobile-to-web-a-story-about-changing-teams-at-wyzant-c8c2af231cf4) in 2017\)  
* Experience working with external clients to understand their needs, develop requirements, and collaborate on implementation  
* Cross-platform mobile development with Xamarin  
* Tech evangelist for Xamarin  
  * Variety of public speaking engagements (demos, Xamarin workshops, meetups, new feature announcements)  
  * Write technical blog posts, build and maintain demo apps

