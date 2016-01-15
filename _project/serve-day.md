---
layout: project
title: Serve Day 2015
color: Blues
order: 3
features:
  - Wordpress
  - Event Management
  - User Management
  - AWS

siteurl: http://serve.baysideonline.com
offsetimage: /images/serve1.png
offsettitle: Easy To Understand Search
offsetdetail: To make it clear to the user what they were searching for, we display search results in a natural language format, with simple links to re-filter.

---

Serve Day is an event that Bayside Church in Granite Bay, CA runs every few years where they shut the church down for a weekend and send people out to work on various community projects. The site was built to display and sort projects, manage signups, and give backend access to about 100 "project managers." There are also a few content pages that a few administrators could manage and update content on. 

![Land Home Financial Services](/images/serve.jpg)
{: .break-box-img }

A unique problem we solved with Serve Day was making sure that spikes in traffic (on weekends with Bayside, traffic can easily hit 250x in a matter of minutes) didn't bring the site down. The site is served and load balanced on AWS, all of the databases run on Amazon's RDS system, necessary assets are heavily cached. The admin console (based on wordpress) was paired with documentation on how to perform any 