---
layout: project
title: Land Home Financial Services
color: Greys
order: 1
features:
  - Wordpress Multisite
  - AWS
  - CSS Pattern Library
  - Built-in Landing-Page Generator
  - Embeddable &lt;iframe&gt; Profile Widgets
  - Documentation

categories:
  - web
  - bamboo

siteurl: http://lfhsdev.com
offsetimage: /images/kc.jpg
offsettitle: Knowledge Center
offsetdetail: This content hub is custom built on top of the WordPress engine to track post popularity, easily share content between site installs, all without leaving the familiar dashboard.
second: Due to the robust nature of the site, it was necessary to cut out page-weight wherever possible. So before we started putting pages together we set up a pattern library for each style component; like a custom-made Bootstrap based on SMACSS and BASSCSS.
secondimg: /images/lhfs-mac.jpg

---

Land Home Financial Services approached us looking for a website that would better serve their branches and loan officers as well as simplify the loan process for their users. We saw a few opportunities for them to stand out in the home loan industry as a more empathetic, personality-driven company; and used the website as a medium to leverage that.

Part of the project was ensuring that each local branch had it's own site; and that within each branch site each loan officer was represented. To make sure that the large number of sites required were manageable, we set up a WordPress multisite install and based each "subsite" off of an API provided from LHFS' intranet. 

<br>
![Land Home Financial Services](/images/lhfs-map.svg)
{: .break-box-img }
<br>
There are two separate 'installs' that can share a little information with each other; posts and information from the corporate site can be 'broadcasted' and displayed on the branch sites. So, someone managing Sacramento branch site would have access to the Glossary, FAQ, and blog posts from the corporate site without re-entering and approving a litany of custom posts.

### Image Optimization
To ensure that the site takes advantage of large, beautiful headers without sacrificing performance we optimize images on-the-fly. Images are all resized to appropriate dimensions on a page-by-page basis, and the responsive image spec is utilized whenever possible. JPEGS are converted to progressive images, helping push perceived load forward.