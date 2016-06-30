---
layout: share
---

I went through placer's current site and made a spreadsheet of every `event`, `noted location`, or `activity`  that lived on the site and there was about 450, I  threw them into a wordpress install as posts and started tagging a few and it feels like tagging everything appropriately will be ~ 8 hours of work, which makes the whole thing a lot more pallet-able. If we setup all the front-end design to live in a unified card layout we could shave off considerable time. 

Here's a _rough_ sketch:

![Cards](/images/cards.png)
{: .break-box-img } 

Events, locations, activities would all  get thrown into a card that's automatically formatted using icons, information about location, date, etc that can display anywhere on the site. There would be a simple button to click that would throw it into the trip planner. That would save to the person's browser (the way facebook or pinterest always stay logged in on your computer) and the trip planner would work similar to the shopping cart in amazon; a little icon pops up on top that says "x items in your trip." From there we could either print the trip planner or (this would be cool) let them email themselves a link that has the trip or share a link on social media that has the trip.

Since we have the data floating around for each event (when we setup the card layout) we can do all of this without writing a bunch of extra code.

Since the whole system would be setup separate from design, I could start building it six weeks _earlier_  giving us __three and a half months__ total of development time.

I built something similar when I built [lhfs.com](http://lhfs.com)—they have a few hundred Loan Officers and we bulit a widget that they can put on any site (I don't have access to their loan officer ID's, but this is a generic version):

<iframe    width="840px" height="330px" src="http://lhfs.com/widget/lead/pid/"></iframe>