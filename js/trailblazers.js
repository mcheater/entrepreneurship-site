/*************** TRAILBLAZERS **************
This script causes 1 of 3 groups of people to randomly appear in the Trailblazer section of the Entrepreneur website
*/

var item = new Array ();

item[0] = "<p><img src='img/headshots/bannister.jpg' class='fullwidthimg'/></p><h2>Janet Bannister</h2><p>An exchange in fourth year at Western landed <strong>Janet Bannister HBA '92</strong> a position at Proctor &amp;Gamble in Brussels, Belgium. It was the beginning of an international adventure that would later see her take up positions with McKinsey &amp; Company and eBay in the United States. But as a proud Canadian with a yearning to be back on native soil, Bannister moved to Toronto so she could start a family. Returning home she observed that Canadians were spending a ton of time online but they were very reluctant to purchase online. Her eureka moment came when she realized that classifieds would work better - people could buy online but transact in person. It was the birth of Kijiji. She would launch and grow Kijiji in Canada - followed by successful launches in the United States, Belgium, Switzerland and Austria. Today, as a venture capitalist with Real Ventures she is known for her keen eye, candid questioning and kind heart, Bannister is mentoring the next generation of global business leaders, fostering that same entrepreneurial spirit that started at Western.</p>";

item[1] = "<p><img src='img/headshots/cowin.jpg' class='fullwidthimg'/></p><h2>Jack Cowin</h2><p>At the age of 26, <strong>Jack Cowin BA'64, LLD'00</strong> moved to Australia with his family to establish a business with the support of loans from 30 Canadians. He took the fast food industry by storm, beginning with Kentucky Fried Chicken, then his own burger chain named &quot;Hungry Jack's&quot; - the exclusive Australian master fast food franchise of Burger King Corporation. Mr. Cowin is also the top shareholder of Domino's Pizza Enterprises. As Founder and Executive Chairman of Sydney-based Competitive Foods Australia, his businesses have expanded to become a multinational food processor and service provider with exports to 29 countries and 24 wholly owned subsidiaries. And his entrepreneurial appetite started at Western.</p>";

item[2] = "<p><img src='img/headshots/patchellevans.jpg' class='fullwidthimg'/></p><h2>David Patchell-Evans</h2><p>Two weeks into his first year at Western, <strong>David Patchell-Evans (Patch) BA'77, LLD'12</strong> was in a serious motorcycle accident resulting in muscle damage, broken bones and serious shoulder and chest injuries. Eight arduous months of rehabilitation set in motion a chain of events, which ignited and fueled a lifelong passion for fitness. During his recovery, Patch started working out half an hour each day, three times a week, then gradually increasing to the point where he was exercising four to five hours a day. He became fascinated by exercise's healing abilities and the incredible resilience of the human body. In 1979, using money he made from his own snowplowing business, he purchased the fitness club where he'd been working out. That facility would later become branded the first GoodLife Fitness club. Today, GoodLife Fitness has become the largest fitness company in Canada and the fourth largest in the world. The company has grown to more than 350 clubs from coast-to-coast with 14,500 employees and more than 1.2 million members.</p>";

var i = Math.floor(item.length*Math.random())
document.write(item[i]);
