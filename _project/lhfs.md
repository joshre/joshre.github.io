---
layout: project
title: Land Home Financial Services
color: Greys
order: 1
features:
  - WordPress Multisite
  - AWS
  - CSS Pattern Library
  - Built-in Landing-Page Generator
  - Embeddable &lt;iframe&gt; Profile Widgets
  - Documentation

categories:
  - web
  - bamboo

siteurl: http://lhfs.com/
offsetimage: /images/kc.jpg
offsettitle: Knowledge Center
offsetdetail: We custom built a content hub called the "knowledge center" to support LHFS's position as a leader in the mortgage industry. The hub is integrated into WordPress to track post-popularity, re-use site-wide categories, and enable post broadcasting to branch sites&mdash;all within the familiar WordPress dashboard.
---

Land Home Financial Services approached us looking for a website that would better serve their branches and loan officers as well as simplify the loan process for their users. We saw a few opportunities for them to stand out in the home loan industry as a more empathetic, personality-driven company and used the website as a medium to leverage that.
{: .lead-paragraph}

We started the project by building a pattern library. As our designer put layouts together in sketch, we broke them into sections, and broke sections into basic blocks. After planning which block would belong to which section we built each block one-at-a-time, allowing ample time to make sure that each was acessible and responsive. Once we have bulletproof blocks it's just a matter of assembling sections with blocks and combining everything to layout the rest of the site.

This approach made development flexible and allowed us to leverage WordPress to make highly-customizable layouts without requiring extra code down the road. Anything you see on the site is controlled simple dedicated input fields, for example the story sections on [refinance](http://lhfs.com/refinance/) are drag-and-drop custom fields.


![LHFS](/images/lhfs-mac.jpg)
{: .break-box-img }


**Multiple Sites**

A large piece of the project was ensuring that each of Land Home's local branches had it's own site; and that within each branch site each loan officer was represented. To make sure that the large number of sites required were manageable, we set up a WordPress multisite install and based each "subsite" off of an API provided from LHFS' intranet.

There are two separate installs that can share a little information with each other; posts and information from the corporate site can be 'broadcasted' and displayed on the branch sites. So, someone managing Sacramento branch site would have access to the Glossary, FAQ, and blog posts from the corporate site without re-entering and approving a litany of custom posts.

**Image Optimization**

To ensure that the site takes advantage of large, beautiful headers without sacrificing performance we optimize images on-the-fly. Images are all resized to appropriate dimensions on a page-by-page basis, and the responsive image spec is utilized whenever possible. JPEGS are converted to progressive images, helping push perceived load forward.