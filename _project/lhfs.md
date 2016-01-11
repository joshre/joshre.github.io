---
layout: project
title: Land Home Financial Services
color: Greys
features:
  - Wordpress Multisite
  - Bourbon/Neat & My Own Framework
  - AWS
  - Full-Fledged Pattern Library
  - Customizable Landing-Page generator
  - Embeddable iframe profile widgets

siteurl: http://lfhsdev.com
intro: Land Home Financial Services approached us looking for a website that would better serve their branches and loan officers. We saw a few oportunites for them to stand out in the home loan industry as a more empathetic, personality-driven company; and used the website as a medium to leverage that.

offsetimage: /images/kc.png
offsettitle: Knowledge Center
offsetdetail: This content hub is custom built ontop of the wordpress engine to track post popularity, easily share content between site installs, all without leaving the familiar dashboard.
second: Due to the robust nature of the site, it was necessary to cut out page-weight wherever possible. THings li So before we started putting pages together we set up a pattern library for each style component; like a custom-made Bootstrap based on SMACSS and BASSCSS.
secondimg: /images/lhfs-mac.jpg

---


Part of the project was ensuring that each local branch had it's own site; and that within each branch site each loan officer was represented. To make sure that the large number of sites required were managable, we setup a wordpress multisite install and based each "subsite" off of an API provided from LHFS' intranet. 

<br>
![Land Home Financial Services](/images/lhfs-map.svg)
{: .break-box-img }
<br>
There are two separate 'installs' that can share a little information with eachother; posts and information from the corporate site can be 'broadcasted' and displayed on the branch sites. So, someone managing Sacramento branch site would have access to the Glossary, FAQ, and blog posts from the corporate site without re-entering and approving a litany of custom posts.

### Image Optimization
To ensure that the site takes advantage of large, beautiful headers without sacrificing performance we optimize images on-the-fly. Images are all resized to appropriate dimensions on a page-by-page basis, and the responsive image spec is utilizied whenever possible. JPEGS are converted to progressive images, helping push perceived load forward.