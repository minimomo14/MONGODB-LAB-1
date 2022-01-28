//
mongodb-people  8.19 kB
test             156 kB
todos-app       8.19 kB
admin            340 kB
local            966 MB
use mongodb-people
'switched to db mongodb-people'
db.people.insertMany([
  {"first_name":"Lawrence","last_name":"Watkins","email":"lwatkins0@uiuc.edu","gender":"Male","age":32,"state":"Arizona","children":[{"name":"Ruth","age":17},{"name":"Catherine","age":19},{"name":"David","age":1}]},
  {"first_name":"Steve","last_name":"Vasquez","email":"svasquez1@simplemachines.org","gender":"Male","age":21,"state":"Wisconsin","children":[]},
  {"first_name":"Kimberly","last_name":"Adams","email":"kadams2@printfriendly.com","gender":"Female","age":34,"state":"District of Columbia","children":[{"name":"Katherine","age":3},{"name":"Samuel","age":15},{"name":"George","age":20}]},
  {"first_name":"Karen","last_name":"Collins","email":null,"gender":"Female","age":41,"state":"Illinois","children":[{"name":"Deborah","age":14},{"name":"Russell","age":9},{"name":"Marilyn","age":13},{"name":"Lori","age":17},{"name":"Helen","age":13}]},
  {"first_name":"Juan","last_name":"Peterson","email":null,"gender":"Male","age":25,"state":"North Carolina","children":[{"name":"Philip","age":20},{"name":"Heather","age":10},{"name":"Patrick","age":10},{"name":"Evelyn","age":13},{"name":"Raymond","age":1}]},
  {"first_name":"Jimmy","last_name":"Sims","email":"jsims5@cyberchimps.com","gender":"Male","age":32,"state":"Florida","children":[{"name":"Edward","age":15},{"name":"Rebecca","age":7},{"name":"Victor","age":17},{"name":"Daniel","age":16}]},
  {"first_name":"Gerald","last_name":"Bailey","email":"gbailey6@vk.com","gender":"Male","age":58,"state":"Massachusetts","children":[{"name":"Gary","age":19},{"name":"Peter","age":10},{"name":"Ernest","age":0},{"name":"Roger","age":18},{"name":"Adam","age":1}]},
  {"first_name":"Debra","last_name":"Ruiz","email":"druiz7@dagondesign.com","gender":"Female","age":45,"state":"Florida","children":[]},
  {"first_name":"Anna","last_name":"Howard","email":"ahoward8@dot.gov","gender":"Female","age":47,"state":"Virginia","children":[{"name":"Johnny","age":0},{"name":"Jean","age":6},{"name":"Edward","age":9},{"name":"Rachel","age":16}]},
  {"first_name":"Ronald","last_name":"Cooper","email":"rcooper9@dagondesign.com","gender":"Male","age":43,"state":"Colorado","children":[{"name":"Helen","age":19}]},
  {"first_name":"Phillip","last_name":"Martin","email":"pmartina@bluehost.com","gender":"Male","age":40,"state":"Ohio","children":[{"name":"Kevin","age":9},{"name":"Jason","age":5},{"name":"Russell","age":1}]},
  {"first_name":"Douglas","last_name":"Woods","email":null,"gender":"Male","age":27,"state":"New York","children":[{"name":"Melissa","age":2},{"name":"Lisa","age":2},{"name":"Michael","age":19},{"name":"Walter","age":6}]},
  {"first_name":"Amy","last_name":"Ruiz","email":"aruizc@com.com","gender":"Female","age":56,"state":"California","children":[{"name":"Todd","age":7}]},
  {"first_name":"Anna","last_name":"Kelley","email":"akelleyd@gmpg.org","gender":"Female","age":24,"state":"Michigan","children":[{"name":"Adam","age":0}]},
  {"first_name":"Bonnie","last_name":"Rogers","email":"brogerse@nyu.edu","gender":"Female","age":39,"state":"Massachusetts","children":[{"name":"Katherine","age":1},{"name":"Joshua","age":19},{"name":"Diana","age":9},{"name":"Jeffrey","age":3},{"name":"Daniel","age":20}]},
  {"first_name":"Martha","last_name":"Castillo","email":null,"gender":"Female","age":32,"state":"Oklahoma","children":[{"name":"Paula","age":1},{"name":"Timothy","age":15},{"name":"Heather","age":6}]},
  {"first_name":"Christina","last_name":"Hughes","email":"chughesg@vistaprint.com","gender":"Female","age":21,"state":"New York","children":[{"name":"Kenneth","age":20},{"name":"Shawn","age":6}]},
  {"first_name":"Sara","last_name":"Tucker","email":null,"gender":"Female","age":41,"state":"Virginia","children":[]},
  {"first_name":"Juan","last_name":"Jenkins","email":"jjenkinsi@sohu.com","gender":"Male","age":47,"state":"Missouri","children":[]},
  {"first_name":"Maria","last_name":"Hicks","email":"mhicksj@sohu.com","gender":"Female","age":27,"state":"Texas","children":[]},
  {"first_name":"Eugene","last_name":"Garrett","email":null,"gender":"Male","age":48,"state":"Utah","children":[{"name":"Robin","age":10},{"name":"Nicole","age":15},{"name":"Jack","age":17},{"name":"Walter","age":1}]},
  {"first_name":"Elizabeth","last_name":"Matthews","email":"ematthewsl@army.mil","gender":"Female","age":41,"state":"New York","children":[{"name":"Kathryn","age":5},{"name":"Bonnie","age":10},{"name":"Julia","age":2},{"name":"Shawn","age":19}]},
  {"first_name":"Maria","last_name":"Price","email":"mpricem@ifeng.com","gender":"Female","age":62,"state":"Georgia","children":[{"name":"Nicole","age":19},{"name":"Terry","age":0}]},
  {"first_name":"Katherine","last_name":"Mason","email":"kmasonn@ucoz.ru","gender":"Female","age":47,"state":"Georgia","children":[{"name":"Jacqueline","age":4}]},
  {"first_name":"Rose","last_name":"Gibson","email":"rgibsono@cdbaby.com","gender":"Female","age":50,"state":"North Carolina","children":[{"name":"Anthony","age":15},{"name":"Jonathan","age":6},{"name":"Tammy","age":6},{"name":"Joyce","age":15},{"name":"James","age":19}]},
  {"first_name":"Amanda","last_name":"Carr","email":null,"gender":"Female","age":54,"state":"Maryland","children":[{"name":"Louis","age":7},{"name":"Bobby","age":5},{"name":"Harold","age":14}]},
  {"first_name":"Edward","last_name":"Hayes","email":"ehayesq@npr.org","gender":"Male","age":21,"state":"Louisiana","children":[]},
  {"first_name":"Gregory","last_name":"Greene","email":"ggreener@w3.org","gender":"Male","age":43,"state":"Florida","children":[{"name":"Nicholas","age":18},{"name":"Robin","age":20},{"name":"Lillian","age":20}]},
  {"first_name":"Kathy","last_name":"Hayes","email":"khayess@1688.com","gender":"Female","age":19,"state":"Indiana","children":[{"name":"Matthew","age":12},{"name":"Matthew","age":16},{"name":"Ruth","age":17}]},
  {"first_name":"Sandra","last_name":"Young","email":null,"gender":"Female","age":42,"state":"Idaho","children":[{"name":"Robin","age":20}]},
  {"first_name":"Joe","last_name":"Ruiz","email":"jruizu@unblog.fr","gender":"Male","age":29,"state":"Illinois","children":[{"name":"Bruce","age":2}]},
  {"first_name":"Jeffrey","last_name":"Edwards","email":"jedwardsv@blogs.com","gender":"Male","age":41,"state":"Nevada","children":[{"name":"Ryan","age":10},{"name":"Thomas","age":3},{"name":"Barbara","age":2},{"name":"Susan","age":16},{"name":"Harry","age":8}]},
  {"first_name":"Judith","last_name":"Patterson","email":null,"gender":"Female","age":61,"state":"California","children":[{"name":"Janice","age":19},{"name":"Evelyn","age":16},{"name":"Jeffrey","age":17},{"name":"Walter","age":6},{"name":"Bobby","age":11}]},
  {"first_name":"Susan","last_name":"Elliott","email":"selliottx@walmart.com","gender":"Female","age":46,"state":"New York","children":[]},
  {"first_name":"Jesse","last_name":"Lee","email":"jleey@scientificamerican.com","gender":"Male","age":32,"state":"California","children":[{"name":"Alan","age":3},{"name":"Jean","age":20},{"name":"Paula","age":5},{"name":"Lawrence","age":12},{"name":"Marie","age":5}]},
  {"first_name":"Nicholas","last_name":"Hunter","email":"nhunterz@google.es","gender":"Male","age":17,"state":"California","children":[{"name":"Cheryl","age":17},{"name":"Jacqueline","age":13},{"name":"Jerry","age":7}]},
  {"first_name":"Timothy","last_name":"Harvey","email":"tharvey10@etsy.com","gender":"Male","age":66,"state":"New York","children":[{"name":"Donald","age":16},{"name":"Tina","age":12},{"name":"Alan","age":2},{"name":"Adam","age":13}]},
  {"first_name":"Ralph","last_name":"King","email":"rking11@washington.edu","gender":"Male","age":57,"state":"Kentucky","children":[{"name":"Keith","age":16},{"name":"Eugene","age":9},{"name":"Benjamin","age":20}]},
  {"first_name":"Kevin","last_name":"Hernandez","email":"khernandez12@amazon.com","gender":"Male","age":43,"state":"New York","children":[{"name":"Mark","age":2},{"name":"Raymond","age":14},{"name":"Martha","age":19},{"name":"Michelle","age":10},{"name":"Evelyn","age":18}]},
  {"first_name":"Lawrence","last_name":"Myers","email":"lmyers13@wufoo.com","gender":"Male","age":34,"state":"Louisiana","children":[{"name":"Samuel","age":10},{"name":"Melissa","age":20},{"name":"Philip","age":17}]},
  {"first_name":"Ryan","last_name":"Rose","email":"rrose14@e-recht24.de","gender":"Male","age":40,"state":"California","children":[]},
  {"first_name":"Elizabeth","last_name":"Montgomery","email":null,"gender":"Female","age":36,"state":"Virginia","children":[{"name":"Lori","age":2}]},
  {"first_name":"Clarence","last_name":"Berry","email":"cberry16@cafepress.com","gender":"Male","age":50,"state":"North Dakota","children":[]},
  {"first_name":"Lillian","last_name":"Lynch","email":"llynch17@blogspot.com","gender":"Female","age":54,"state":"Arizona","children":[{"name":"Nicholas","age":19}]},
  {"first_name":"Gary","last_name":"Romero","email":"gromero18@google.ca","gender":"Male","age":31,"state":"Texas","children":[]},
  {"first_name":"Philip","last_name":"Phillips","email":"pphillips19@booking.com","gender":"Male","age":60,"state":"Missouri","children":[{"name":"Elizabeth","age":14},{"name":"Timothy","age":4}]},
  {"first_name":"Michelle","last_name":"Washington","email":"mwashington1a@twitpic.com","gender":"Female","age":42,"state":"Louisiana","children":[]},
  {"first_name":"Shirley","last_name":"Franklin","email":"sfranklin1b@networkadvertising.org","gender":"Female","age":28,"state":"North Carolina","children":[{"name":"Stephen","age":10},{"name":"Susan","age":2},{"name":"Carol","age":16},{"name":"Joshua","age":20}]},
  {"first_name":"Janet","last_name":"James","email":"jjames1c@vistaprint.com","gender":"Female","age":50,"state":"Michigan","children":[{"name":"Billy","age":19}]},
  {"first_name":"Virginia","last_name":"Fuller","email":"vfuller1d@dyndns.org","gender":"Female","age":29,"state":"Wisconsin","children":[{"name":"Anne","age":9},{"name":"Kenneth","age":4},{"name":"Theresa","age":9},{"name":"Debra","age":18},{"name":"Andrew","age":2}]},
  {"first_name":"Martha","last_name":"Walker","email":"mwalker1e@discovery.com","gender":"Female","age":31,"state":"Illinois","children":[{"name":"Christopher","age":2},{"name":"Roger","age":10},{"name":"Ernest","age":19},{"name":"Paula","age":12}]},
  {"first_name":"Charles","last_name":"Jones","email":null,"gender":"Male","age":43,"state":"Georgia","children":[{"name":"Teresa","age":7}]},
  {"first_name":"Adam","last_name":"Cunningham","email":"acunningham1g@wunderground.com","gender":"Male","age":51,"state":"Montana","children":[{"name":"Linda","age":20}]},
  {"first_name":"Sharon","last_name":"Murphy","email":null,"gender":"Female","age":46,"state":"New York","children":[{"name":"Anna","age":5},{"name":"Christine","age":5}]},
  {"first_name":"Scott","last_name":"Henderson","email":"shenderson1i@aboutads.info","gender":"Male","age":32,"state":"South Carolina","children":[]},
  {"first_name":"Angela","last_name":"Nichols","email":"anichols1j@theguardian.com","gender":"Female","age":33,"state":"Nevada","children":[{"name":"Jennifer","age":17},{"name":"Karen","age":8}]},
  {"first_name":"Jose","last_name":"Barnes","email":"jbarnes1k@illinois.edu","gender":"Male","age":57,"state":"New York","children":[{"name":"Bobby","age":10},{"name":"Phyllis","age":19},{"name":"Martin","age":9},{"name":"Benjamin","age":10},{"name":"Matthew","age":0}]},
  {"first_name":"Rebecca","last_name":"Hayes","email":"rhayes1l@cnbc.com","gender":"Female","age":31,"state":"California","children":[{"name":"Keith","age":17},{"name":"Cheryl","age":18}]},
  {"first_name":"Robert","last_name":"Ferguson","email":"rferguson1m@cpanel.net","gender":"Male","age":66,"state":"Washington","children":[]},
  {"first_name":"Harry","last_name":"Williamson","email":"hwilliamson1n@seesaa.net","gender":"Male","age":60,"state":"New York","children":[{"name":"Peter","age":18},{"name":"Diana","age":14}]},
  {"first_name":"Evelyn","last_name":"Garcia","email":"egarcia1o@dmoz.org","gender":"Female","age":44,"state":"Alabama","children":[{"name":"Steve","age":16}]},
  {"first_name":"Bonnie","last_name":"Frazier","email":"bfrazier1p@linkedin.com","gender":"Female","age":45,"state":"Texas","children":[{"name":"Irene","age":15},{"name":"Paula","age":20}]},
  {"first_name":"Ruth","last_name":"Thomas","email":"rthomas1q@oakley.com","gender":"Female","age":32,"state":"North Carolina","children":[{"name":"Teresa","age":13},{"name":"Samuel","age":9},{"name":"Matthew","age":14}]},
  {"first_name":"Steven","last_name":"Marshall","email":"smarshall1r@un.org","gender":"Male","age":39,"state":"California","children":[{"name":"Brian","age":4}]},
  {"first_name":"Theresa","last_name":"Gordon","email":null,"gender":"Female","age":41,"state":"Pennsylvania","children":[{"name":"Joseph","age":18},{"name":"Brian","age":13},{"name":"Carlos","age":8},{"name":"Justin","age":2},{"name":"Anna","age":8}]},
  {"first_name":"Rose","last_name":"Pierce","email":"rpierce1t@jugem.jp","gender":"Female","age":34,"state":"Florida","children":[{"name":"Catherine","age":4},{"name":"Todd","age":15},{"name":"Larry","age":17}]},
  {"first_name":"Janet","last_name":"Baker","email":"jbaker1u@loc.gov","gender":"Female","age":21,"state":"New Jersey","children":[{"name":"Benjamin","age":7},{"name":"Douglas","age":4},{"name":"Larry","age":13},{"name":"Joe","age":8},{"name":"Mildred","age":17}]},
  {"first_name":"Larry","last_name":"Chapman","email":null,"gender":"Male","age":57,"state":"North Carolina","children":[{"name":"Brian","age":18},{"name":"Patricia","age":0},{"name":"Patricia","age":18},{"name":"Billy","age":13}]},
  {"first_name":"Pamela","last_name":"Chavez","email":null,"gender":"Female","age":36,"state":"Ohio","children":[{"name":"Maria","age":0},{"name":"Christine","age":17},{"name":"Daniel","age":16},{"name":"Randy","age":6}]},
  {"first_name":"Kathy","last_name":"Fox","email":"kfox1x@list-manage.com","gender":"Female","age":37,"state":"ArMichigan","children":[{"name":"Jimmy","age":11},{"name":"Anthony","age":10},{"name":"Brian","age":4},{"name":"Mildred","age":12},{"name":"Gary","age":4}]},
  {"first_name":"George","last_name":"Marshall","email":"gmarshall1y@house.gov","gender":"Male","age":50,"state":"Kentucky","children":[]},
  {"first_name":"Martin","last_name":"Watson","email":"mwatson1z@com.com","gender":"Male","age":35,"state":"Connecticut","children":[{"name":"Shawn","age":5},{"name":"Roger","age":11},{"name":"Gary","age":13},{"name":"Annie","age":9},{"name":"Steven","age":19}]},
  {"first_name":"Lori","last_name":"Howell","email":"lhowell20@cornell.edu","gender":"Female","age":52,"state":"Georgia","children":[]},
  {"first_name":"Ann","last_name":"Jackson","email":"ajackson21@google.es","gender":"Female","age":46,"state":"Florida","children":[{"name":"Phillip","age":7}]},
  {"first_name":"Jeremy","last_name":"Sanders","email":"jsanders22@state.tx.us","gender":"Male","age":36,"state":"New York","children":[{"name":"Sara","age":19},{"name":"Phillip","age":17},{"name":"William","age":12},{"name":"Ernest","age":17}]},
  {"first_name":"Paula","last_name":"Parker","email":"pparker23@a8.net","gender":"Female","age":66,"state":"Utah","children":[{"name":"Patrick","age":12},{"name":"Joe","age":16},{"name":"Julie","age":11}]},
  {"first_name":"Robin","last_name":"Williamson","email":"rwilliamson24@thetimes.co.uk","gender":"Female","age":52,"state":"Iowa","children":[{"name":"Bruce","age":20},{"name":"Roy","age":5},{"name":"Frances","age":9},{"name":"George","age":12},{"name":"Jonathan","age":5}]},
  {"first_name":"Juan","last_name":"Kennedy","email":"jkennedy25@nature.com","gender":"Male","age":42,"state":"California","children":[{"name":"Philip","age":2},{"name":"Diane","age":20},{"name":"Jennifer","age":9}]},
  {"first_name":"Steve","last_name":"Reynolds","email":"sreynolds26@rediff.com","gender":"Male","age":26,"state":"Tennessee","children":[{"name":"Roy","age":9}]},
  {"first_name":"Catherine","last_name":"Marshall","email":"cmarshall27@soundcloud.com","gender":"Female","age":41,"state":"Arizona","children":[]},
  {"first_name":"Katherine","last_name":"Moreno","email":"kmoreno28@fotki.com","gender":"Female","age":42,"state":"Georgia","children":[{"name":"Helen","age":7},{"name":"Carolyn","age":5},{"name":"Andrew","age":17},{"name":"Paul","age":8}]},
  {"first_name":"Betty","last_name":"Jenkins","email":"bjenkins29@gmpg.org","gender":"Female","age":49,"state":"Utah","children":[]},
  {"first_name":"Charles","last_name":"Wallace","email":"cwallace2a@ucla.edu","gender":"Male","age":59,"state":"Virginia","children":[{"name":"Jimmy","age":2},{"name":"Linda","age":4},{"name":"Craig","age":4},{"name":"Alice","age":0},{"name":"Angela","age":8}]},
  {"first_name":"Bobby","last_name":"Carr","email":null,"gender":"Male","age":57,"state":"Tennessee","children":[]},
  {"first_name":"Melissa","last_name":"Banks","email":"mbanks2c@com.com","gender":"Female","age":79,"state":"North Carolina","children":[{"name":"Ralph","age":19},{"name":"Earl","age":20},{"name":"Johnny","age":2},{"name":"Kevin","age":8}]},
  {"first_name":"Antonio","last_name":"Daniels","email":"adaniels2d@huffingtonpost.com","gender":"Male","age":36,"state":"Rhode Island","children":[{"name":"Julia","age":20}]},
  {"first_name":"Shirley","last_name":"Hamilton","email":"shamilton2e@state.tx.us","gender":"Female","age":24,"state":"Illinois","children":[{"name":"Aaron","age":7},{"name":"Wayne","age":20},{"name":"Ruth","age":4},{"name":"Norma","age":7},{"name":"Denise","age":4}]},
  {"first_name":"Donald","last_name":"Hawkins","email":"dhawkins2f@xinhuanet.com","gender":"Male","age":34,"state":"Florida","children":[{"name":"Michael","age":7},{"name":"Jessica","age":6},{"name":"Harold","age":10},{"name":"Gary","age":4}]},
  {"first_name":"Ryan","last_name":"Simmons","email":"rsimmons2g@google.it","gender":"Male","age":31,"state":"New York","children":[{"name":"Martha","age":12},{"name":"Frank","age":5},{"name":"Rebecca","age":7}]},
  {"first_name":"Norma","last_name":"Lawrence","email":"nlawrence2h@sina.com.cn","gender":"Female","age":36,"state":"Tennessee","children":[{"name":"Russell","age":0}]},
  {"first_name":"Terry","last_name":"White","email":"twhite2i@ehow.com","gender":"Male","age":40,"state":"North Carolina","children":[{"name":"Mark","age":17},{"name":"Rebecca","age":18},{"name":"Mildred","age":13}]},
  {"first_name":"Thomas","last_name":"Peters","email":"tpeters2j@comcast.net","gender":"Male","age":41,"state":"Indiana","children":[{"name":"Kathy","age":12}]},
  {"first_name":"Walter","last_name":"Rivera","email":null,"gender":"Male","age":25,"state":"Illinois","children":[]},
  {"first_name":"Rose","last_name":"Long","email":"rlong2l@networksolutions.com","gender":"Female","age":52,"state":"Georgia","children":[]},
  {"first_name":"Lillian","last_name":"Diaz","email":"ldiaz2m@prweb.com","gender":"Female","age":32,"state":"Kentucky","children":[{"name":"Stephanie","age":16},{"name":"Dorothy","age":13}]},
  {"first_name":"Wanda","last_name":"Bowman","email":"wbowman2n@ehow.com","gender":"Female","age":62,"state":"California","children":[]},
  {"first_name":"Albert","last_name":"Greene","email":"agreene2o@sohu.com","gender":"Male","age":40,"state":"Oklahoma","children":[{"name":"Joe","age":4},{"name":"Ernest","age":14},{"name":"Sarah","age":9}]},
  {"first_name":"Lisa","last_name":"Ramos","email":"lramos2p@flavors.me","gender":"Female","age":37,"state":"Virginia","children":[{"name":"Theresa","age":14}]},
  {"first_name":"Keith","last_name":"Ward","email":null,"gender":"Male","age":43,"state":"Wisconsin","children":[{"name":"Barbara","age":10},{"name":"Katherine","age":2},{"name":"Eugene","age":12},{"name":"Kathy","age":10}]},
  {"first_name":"Donald","last_name":"Cook","email":"dcook2r@blogtalkradio.com","gender":"Male","age":27,"state":"District of Columbia","children":[{"name":"David","age":0},{"name":"Christine","age":12},{"name":"Lisa","age":19},{"name":"Rebecca","age":7}]},
  {"first_name":"Marie","last_name":"Scott","email":"mscott2s@reddit.com","gender":"Female","age":44,"state":"New York","children":[{"name":"Julie","age":20},{"name":"Joyce","age":19}]},
  {"first_name":"Shawn","last_name":"Howard","email":"showard2t@netlog.com","gender":"Male","age":47,"state":"District of Columbia","children":[]},
  {"first_name":"Terry","last_name":"Stevens","email":null,"gender":"Male","age":62,"state":"Maryland","children":[{"name":"Eugene","age":3},{"name":"Kevin","age":8},{"name":"Mark","age":3},{"name":"Louise","age":16}]},
  {"first_name":"Mary","last_name":"Davis","email":"mdavis2v@redcross.org","gender":"Female","age":24,"state":"Michigan","children":[{"name":"Janice","age":1},{"name":"Judith","age":3}]},
  {"first_name":"Benjamin","last_name":"Ferguson","email":null,"gender":"Male","age":44,"state":"California","children":[]},
  {"first_name":"Christine","last_name":"Williamson","email":"cwilliamson2x@wufoo.com","gender":"Female","age":41,"state":"California","children":[{"name":"Karen","age":13}]},
  {"first_name":"Janet","last_name":"Ray","email":"jray2y@cam.ac.uk","gender":"Female","age":35,"state":"California","children":[]},
  {"first_name":"Michelle","last_name":"Watson","email":"mwatson2z@bandcamp.com","gender":"Female","age":38,"state":"Connecticut","children":[{"name":"Helen","age":11},{"name":"David","age":12}]},
  {"first_name":"Kathleen","last_name":"Pierce","email":null,"gender":"Female","age":26,"state":"Virginia","children":[{"name":"Jonathan","age":3},{"name":"Donna","age":15},{"name":"Amanda","age":4}]},
  {"first_name":"Walter","last_name":"Bishop","email":"wbishop31@apache.org","gender":"Male","age":76,"state":"South Carolina","children":[{"name":"Roy","age":5}]},
  {"first_name":"Aaron","last_name":"Stanley","email":"astanley32@cnbc.com","gender":"Male","age":37,"state":"Alabama","children":[{"name":"Eric","age":4},{"name":"Jacqueline","age":18},{"name":"Bobby","age":6}]},
  {"first_name":"Sarah","last_name":"Washington","email":null,"gender":"Female","age":40,"state":"Maryland","children":[{"name":"Anna","age":14},{"name":"Jacqueline","age":18}]},
  {"first_name":"David","last_name":"Powell","email":"dpowell34@bandcamp.com","gender":"Male","age":32,"state":"New York","children":[]},
  {"first_name":"Irene","last_name":"Wood","email":"iwood35@github.com","gender":"Female","age":27,"state":"New Mexico","children":[{"name":"Doris","age":12}]},
  {"first_name":"Ashley","last_name":"Cox","email":"acox36@meetup.com","gender":"Female","age":22,"state":"Texas","children":[{"name":"Jeremy","age":1},{"name":"Louise","age":19},{"name":"Timothy","age":11},{"name":"Theresa","age":20}]},
  {"first_name":"Stephen","last_name":"Evans","email":null,"gender":"Male","age":43,"state":"South Carolina","children":[{"name":"Margaret","age":10},{"name":"Carlos","age":11},{"name":"Samuel","age":7},{"name":"Patricia","age":14},{"name":"Gloria","age":15}]},
  {"first_name":"Carl","last_name":"Miller","email":"cmiller38@vistaprint.com","gender":"Male","age":50,"state":"California","children":[{"name":"Shawn","age":0},{"name":"Pamela","age":0},{"name":"Craig","age":20},{"name":"Margaret","age":17},{"name":"Carlos","age":11}]},
  {"first_name":"Amy","last_name":"Jones","email":"ajones39@umn.edu","gender":"Female","age":49,"state":"Texas","children":[{"name":"Marilyn","age":14},{"name":"Gerald","age":13},{"name":"Nicholas","age":1},{"name":"Jack","age":2}]},
  {"first_name":"Christina","last_name":"Holmes","email":"cholmes3a@theguardian.com","gender":"Female","age":25,"state":"California","children":[{"name":"Kimberly","age":6},{"name":"Cynthia","age":5},{"name":"Walter","age":5}]},
  {"first_name":"Jack","last_name":"Cunningham","email":"jcunningham3b@mapquest.com","gender":"Male","age":27,"state":"South Carolina","children":[{"name":"Victor","age":13},{"name":"Cynthia","age":12},{"name":"Ralph","age":11},{"name":"Teresa","age":7},{"name":"Rose","age":2}]},
  {"first_name":"Roy","last_name":"Lynch","email":"rlynch3c@w3.org","gender":"Male","age":44,"state":"Florida","children":[{"name":"Shirley","age":20},{"name":"Joshua","age":16},{"name":"Kathleen","age":9},{"name":"Brenda","age":11}]},
  {"first_name":"Phyllis","last_name":"Jacobs","email":"pjacobs3d@nymag.com","gender":"Female","age":67,"state":"California","children":[]},
  {"first_name":"Richard","last_name":"Howard","email":"rhoward3e@wisc.edu","gender":"Male","age":45,"state":"District of Columbia","children":[]},
  {"first_name":"Billy","last_name":"Bowman","email":"bbowman3f@goo.ne.jp","gender":"Male","age":26,"state":"California","children":[{"name":"Stephanie","age":7},{"name":"Alan","age":1}]},
  {"first_name":"Carol","last_name":"Duncan","email":"cduncan3g@berkeley.edu","gender":"Female","age":36,"state":"Texas","children":[{"name":"Karen","age":6},{"name":"Barbara","age":0},{"name":"Joan","age":8}]},
  {"first_name":"Mary","last_name":"Gutierrez","email":"mgutierrez3h@1688.com","gender":"Female","age":29,"state":"Connecticut","children":[{"name":"Deborah","age":8},{"name":"Susan","age":7}]},
  {"first_name":"Angela","last_name":"Hayes","email":"ahayes3i@opensource.org","gender":"Female","age":41,"state":"South Carolina","children":[{"name":"Howard","age":20},{"name":"Larry","age":12},{"name":"Anne","age":6}]},
  {"first_name":"Angela","last_name":"Stanley","email":"astanley3j@1und1.de","gender":"Female","age":59,"state":"Michigan","children":[{"name":"Sandra","age":14},{"name":"Christopher","age":20},{"name":"Kathleen","age":16},{"name":"Antonio","age":6}]},
  {"first_name":"Betty","last_name":"Wells","email":"bwells3k@samsung.com","gender":"Female","age":44,"state":"Ohio","children":[{"name":"Jesse","age":13}]},
  {"first_name":"Phyllis","last_name":"Gray","email":null,"gender":"Female","age":81,"state":"Illinois","children":[{"name":"Albert","age":2}]},
  {"first_name":"Nicholas","last_name":"Russell","email":null,"gender":"Male","age":38,"state":"Texas","children":[{"name":"Mildred","age":1},{"name":"Beverly","age":4},{"name":"Michelle","age":2},{"name":"Diana","age":13},{"name":"Larry","age":16}]},
  {"first_name":"Thomas","last_name":"Franklin","email":"tfranklin3n@posterous.com","gender":"Male","age":48,"state":"Nevada","children":[{"name":"Julia","age":9},{"name":"Laura","age":19}]},
  {"first_name":"Ruth","last_name":"Parker","email":null,"gender":"Female","age":52,"state":"New Jersey","children":[]},
  {"first_name":"Gary","last_name":"Spencer","email":"gspencer3p@sina.com.cn","gender":"Male","age":39,"state":"Texas","children":[]},
  {"first_name":"Irene","last_name":"Day","email":"iday3q@fda.gov","gender":"Female","age":35,"state":"Alabama","children":[]},
  {"first_name":"Jerry","last_name":"Baker","email":null,"gender":"Male","age":24,"state":"Illinois","children":[{"name":"Alan","age":13}]},
  {"first_name":"Lisa","last_name":"Martin","email":"lmartin3s@shutterfly.com","gender":"Female","age":52,"state":"Georgia","children":[{"name":"Bobby","age":8},{"name":"Phillip","age":16},{"name":"Jonathan","age":9},{"name":"Gary","age":17},{"name":"Jonathan","age":11}]},
  {"first_name":"Lori","last_name":"Rogers","email":"lrogers3t@google.nl","gender":"Female","age":51,"state":"Missouri","children":[{"name":"Tammy","age":9},{"name":"Larry","age":11},{"name":"Earl","age":3}]},
  {"first_name":"Norma","last_name":"Andrews","email":null,"gender":"Female","age":38,"state":"Washington","children":[{"name":"Evelyn","age":8},{"name":"Shawn","age":3},{"name":"Tina","age":2},{"name":"Timothy","age":11}]},
  {"first_name":"Lois","last_name":"Adams","email":"ladams3v@timesonline.co.uk","gender":"Female","age":42,"state":"Florida","children":[{"name":"Mark","age":12},{"name":"Louise","age":18},{"name":"Kathryn","age":0},{"name":"Robert","age":6}]},
  {"first_name":"Jane","last_name":"Meyer","email":"jmeyer3w@wsj.com","gender":"Female","age":53,"state":"Michigan","children":[{"name":"Jeremy","age":7},{"name":"Irene","age":12},{"name":"Beverly","age":4},{"name":"Sharon","age":17}]},
  {"first_name":"Carolyn","last_name":"Vasquez","email":null,"gender":"Female","age":44,"state":"Florida","children":[{"name":"Rebecca","age":11},{"name":"Jessica","age":7},{"name":"Alice","age":4},{"name":"Diane","age":2},{"name":"Alice","age":13}]},
  {"first_name":"Judith","last_name":"Reed","email":"jreed3y@chron.com","gender":"Female","age":27,"state":"Maryland","children":[]},
  {"first_name":"Carolyn","last_name":"Hanson","email":null,"gender":"Female","age":37,"state":"Alabama","children":[{"name":"Judith","age":10}]},
  {"first_name":"Willie","last_name":"Adams","email":"wadams40@smugmug.com","gender":"Male","age":42,"state":"Texas","children":[]},
  {"first_name":"Arthur","last_name":"Medina","email":"amedina41@shareasale.com","gender":"Male","age":48,"state":"California","children":[{"name":"Jane","age":4},{"name":"Barbara","age":0},{"name":"Christina","age":4},{"name":"Rebecca","age":17}]},
  {"first_name":"Cynthia","last_name":"Wheeler","email":"cwheeler42@friendfeed.com","gender":"Female","age":24,"state":"Arizona","children":[]},
  {"first_name":"Terry","last_name":"Cruz","email":"tcruz43@storify.com","gender":"Male","age":53,"state":"Wisconsin","children":[{"name":"Nicholas","age":6},{"name":"Henry","age":10},{"name":"Earl","age":7},{"name":"Martha","age":0}]},
  {"first_name":"Marilyn","last_name":"Larson","email":"mlarson44@pbs.org","gender":"Female","age":69,"state":"New York","children":[{"name":"Tammy","age":12},{"name":"Karen","age":14},{"name":"Peter","age":2}]},
  {"first_name":"Rose","last_name":"Holmes","email":null,"gender":"Female","age":45,"state":"California","children":[{"name":"Shawn","age":1},{"name":"Richard","age":5},{"name":"Alice","age":16},{"name":"Carol","age":9},{"name":"Patricia","age":13}]},
  {"first_name":"Jane","last_name":"Cole","email":"jcole46@histats.com","gender":"Female","age":29,"state":"Florida","children":[{"name":"Dorothy","age":11},{"name":"Rebecca","age":15},{"name":"Betty","age":10}]},
  {"first_name":"Jerry","last_name":"Patterson","email":"jpatterson47@123-reg.co.uk","gender":"Male","age":43,"state":"District of Columbia","children":[{"name":"Catherine","age":20},{"name":"Jerry","age":15}]},
  {"first_name":"Karen","last_name":"Rodriguez","email":"krodriguez48@ustream.tv","gender":"Female","age":39,"state":"Kentucky","children":[{"name":"Carl","age":19},{"name":"Phillip","age":12},{"name":"Ronald","age":9}]},
  {"first_name":"Joyce","last_name":"Wilson","email":null,"gender":"Female","age":56,"state":"Indiana","children":[{"name":"Wanda","age":6}]},
  {"first_name":"Deborah","last_name":"Arnold","email":"darnold4a@pcworld.com","gender":"Female","age":63,"state":"South Dakota","children":[{"name":"Christine","age":11},{"name":"Daniel","age":8},{"name":"Carlos","age":7},{"name":"Jose","age":5},{"name":"Mark","age":0}]},
  {"first_name":"Sarah","last_name":"Sullivan","email":"ssullivan4b@istockphoto.com","gender":"Female","age":38,"state":"California","children":[{"name":"Ashley","age":5},{"name":"Donald","age":17},{"name":"Carolyn","age":2},{"name":"Anthony","age":5},{"name":"Juan","age":6}]},
  {"first_name":"Wayne","last_name":"Woods","email":"wwoods4c@yale.edu","gender":"Male","age":43,"state":"Pennsylvania","children":[{"name":"Stephanie","age":4},{"name":"Pamela","age":14},{"name":"Rachel","age":18}]},
  {"first_name":"Mark","last_name":"Payne","email":"mpayne4d@amazon.de","gender":"Male","age":54,"state":"Colorado","children":[{"name":"Chris","age":4},{"name":"Roy","age":1}]},
  {"first_name":"Ernest","last_name":"Alexander","email":"ealexander4e@phpbb.com","gender":"Male","age":39,"state":"Texas","children":[{"name":"Chris","age":10},{"name":"Joseph","age":17},{"name":"Linda","age":13}]},
  {"first_name":"Nancy","last_name":"Peterson","email":null,"gender":"Female","age":60,"state":"Texas","children":[]},
  {"first_name":"Keith","last_name":"Watson","email":"kwatson4g@cbc.ca","gender":"Male","age":23,"state":"Pennsylvania","children":[{"name":"Rose","age":9},{"name":"Daniel","age":17},{"name":"Benjamin","age":9},{"name":"Karen","age":5},{"name":"Karen","age":19}]},
  {"first_name":"Mary","last_name":"Anderson","email":"manderson4h@sogou.com","gender":"Female","age":45,"state":"Texas","children":[{"name":"Jonathan","age":9},{"name":"Ruth","age":14},{"name":"Julie","age":18}]},
  {"first_name":"Timothy","last_name":"Turner","email":"tturner4i@tripadvisor.com","gender":"Male","age":46,"state":"Texas","children":[]},
  {"first_name":"Stephanie","last_name":"Burton","email":"sburton4j@berkeley.edu","gender":"Female","age":47,"state":"Arizona","children":[{"name":"Irene","age":14},{"name":"Henry","age":10},{"name":"Justin","age":3}]},
  {"first_name":"Ashley","last_name":"Simpson","email":"asimpson4k@abc.net.au","gender":"Female","age":47,"state":"New York","children":[{"name":"Frank","age":9},{"name":"Maria","age":16}]},
  {"first_name":"Phyllis","last_name":"Pierce","email":"ppierce4l@usgs.gov","gender":"Female","age":34,"state":"Texas","children":[{"name":"Michelle","age":16},{"name":"Susan","age":4},{"name":"Philip","age":0}]},
  {"first_name":"Brenda","last_name":"Simpson","email":null,"gender":"Female","age":37,"state":"Alabama","children":[{"name":"Frank","age":7},{"name":"Shirley","age":17}]},
  {"first_name":"Nancy","last_name":"Arnold","email":"narnold4n@feedburner.com","gender":"Female","age":44,"state":"California","children":[]},
  {"first_name":"Nancy","last_name":"Johnston","email":"njohnston4o@icq.com","gender":"Female","age":29,"state":"Missouri","children":[{"name":"Scott","age":12}]},
  {"first_name":"Sharon","last_name":"Taylor","email":"staylor4p@skyrock.com","gender":"Female","age":45,"state":"Florida","children":[{"name":"Anne","age":2}]},
  {"first_name":"Carolyn","last_name":"Rodriguez","email":"crodriguez4q@alibaba.com","gender":"Female","age":25,"state":"Utah","children":[{"name":"Donald","age":4},{"name":"Nicholas","age":2},{"name":"Diana","age":5},{"name":"Maria","age":19},{"name":"Tina","age":12}]},
  {"first_name":"Kenneth","last_name":"Moreno","email":"kmoreno4r@nytimes.com","gender":"Male","age":48,"state":"Texas","children":[{"name":"Jose","age":2},{"name":"Wayne","age":19}]},
  {"first_name":"Ryan","last_name":"Henry","email":"rhenry4s@amazon.co.jp","gender":"Male","age":29,"state":"Arizona","children":[]},
  {"first_name":"Gary","last_name":"Barnes","email":"gbarnes4t@washingtonpost.com","gender":"Male","age":41,"state":"California","children":[{"name":"Jacqueline","age":7},{"name":"Martha","age":1},{"name":"Kevin","age":13}]},
  {"first_name":"Jessica","last_name":"Anderson","email":"janderson4u@eventbrite.com","gender":"Female","age":38,"state":"Michigan","children":[{"name":"Amanda","age":12},{"name":"Alan","age":19}]},
  {"first_name":"Brandon","last_name":"Dean","email":"bdean4v@boston.com","gender":"Male","age":36,"state":"Iowa","children":[{"name":"Theresa","age":10},{"name":"Susan","age":15}]},
  {"first_name":"Lois","last_name":"Medina","email":"lmedina4w@usnews.com","gender":"Female","age":57,"state":"California","children":[{"name":"Karen","age":18},{"name":"Antonio","age":4},{"name":"Alan","age":20},{"name":"Mildred","age":19}]},
  {"first_name":"Aaron","last_name":"Hill","email":"ahill4x@bing.com","gender":"Male","age":39,"state":"Indiana","children":[]},
  {"first_name":"Diane","last_name":"Welch","email":null,"gender":"Female","age":38,"state":"Virginia","children":[{"name":"Laura","age":13},{"name":"Louis","age":16},{"name":"Sandra","age":10},{"name":"Christine","age":11},{"name":"Ashley","age":12}]},
  {"first_name":"James","last_name":"Oliver","email":"joliver4z@hhs.gov","gender":"Male","age":40,"state":"New Mexico","children":[{"name":"Kathy","age":6}]},
  {"first_name":"Kenneth","last_name":"Burns","email":"kburns50@netscape.com","gender":"Male","age":18,"state":"Virginia","children":[]},
  {"first_name":"Nicole","last_name":"Baker","email":"nbaker51@ucoz.com","gender":"Female","age":65,"state":"Oregon","children":[{"name":"Rebecca","age":14},{"name":"Marie","age":0},{"name":"Kathy","age":8},{"name":"Gloria","age":8},{"name":"Jessica","age":17}]},
  {"first_name":"Daniel","last_name":"Brooks","email":"dbrooks52@shop-pro.jp","gender":"Male","age":53,"state":"Georgia","children":[]},
  {"first_name":"Billy","last_name":"Taylor","email":null,"gender":"Male","age":26,"state":"Texas","children":[{"name":"Norma","age":7}]},
  {"first_name":"Aaron","last_name":"Gordon","email":"agordon54@hugedomains.com","gender":"Male","age":24,"state":"Ohio","children":[{"name":"Anna","age":0}]},
  {"first_name":"Andrea","last_name":"Burke","email":"aburke55@edublogs.org","gender":"Female","age":59,"state":"Tennessee","children":[{"name":"Janice","age":5}]},
  {"first_name":"Theresa","last_name":"Mcdonald","email":"tmcdonald56@baidu.com","gender":"Female","age":44,"state":"New York","children":[]},
  {"first_name":"Robin","last_name":"Miller","email":"rmiller57@blog.com","gender":"Female","age":50,"state":"California","children":[]},
  {"first_name":"Susan","last_name":"Sanders","email":"ssanders58@jugem.jp","gender":"Female","age":40,"state":"California","children":[{"name":"Randy","age":1},{"name":"Jesse","age":0}]},
  {"first_name":"Joan","last_name":"Bishop","email":"jbishop59@blinklist.com","gender":"Female","age":37,"state":"Kentucky","children":[{"name":"Kathryn","age":13},{"name":"Ernest","age":7},{"name":"Jason","age":5},{"name":"Catherine","age":19},{"name":"Janice","age":12}]},
  {"first_name":"Peter","last_name":"Day","email":"pday5a@harvard.edu","gender":"Male","age":38,"state":"Texas","children":[{"name":"Russell","age":14},{"name":"Christine","age":17}]},
  {"first_name":"Ralph","last_name":"Cooper","email":"rcooper5b@blinklist.com","gender":"Male","age":34,"state":"Montana","children":[{"name":"Andrea","age":14},{"name":"Billy","age":0},{"name":"Sharon","age":13}]},
  {"first_name":"Mary","last_name":"Hansen","email":"mhansen5c@github.io","gender":"Female","age":48,"state":"Connecticut","children":[{"name":"Bobby","age":18},{"name":"Ernest","age":5},{"name":"Jimmy","age":2},{"name":"Earl","age":15},{"name":"Jane","age":0}]},
  {"first_name":"Nicole","last_name":"Morrison","email":"nmorrison5d@spotify.com","gender":"Female","age":30,"state":"California","children":[{"name":"Jack","age":15},{"name":"Helen","age":1},{"name":"Benjamin","age":19},{"name":"Eric","age":7}]},
  {"first_name":"Eugene","last_name":"Flores","email":"eflores5e@nymag.com","gender":"Male","age":32,"state":"New York","children":[]},
  {"first_name":"Wayne","last_name":"Holmes","email":"wholmes5f@google.cn","gender":"Male","age":37,"state":"Minnesota","children":[{"name":"Debra","age":5},{"name":"Kevin","age":15},{"name":"Irene","age":5},{"name":"Ernest","age":11},{"name":"Elizabeth","age":3}]},
  {"first_name":"Helen","last_name":"Clark","email":"hclark5g@ustream.tv","gender":"Female","age":25,"state":"Alabama","children":[{"name":"Earl","age":2}]},
  {"first_name":"Ruth","last_name":"Hart","email":"rhart5h@livejournal.com","gender":"Female","age":55,"state":"New York","children":[{"name":"Lois","age":9}]},
  {"first_name":"Dorothy","last_name":"Patterson","email":"dpatterson5i@wikipedia.org","gender":"Female","age":34,"state":"Texas","children":[{"name":"Deborah","age":5}]},
  {"first_name":"Karen","last_name":"Marshall","email":"kmarshall5j@creativecommons.org","gender":"Female","age":26,"state":"Illinois","children":[{"name":"Joe","age":0}]}
]);
{ acknowledged: true,
  insertedIds: 
   { '0': ObjectId("61f3fee447680861f0fafcc1"),
     '1': ObjectId("61f3fee447680861f0fafcc2"),
     '2': ObjectId("61f3fee447680861f0fafcc3"),
     '3': ObjectId("61f3fee447680861f0fafcc4"),
     '4': ObjectId("61f3fee447680861f0fafcc5"),
     '5': ObjectId("61f3fee447680861f0fafcc6"),
     '6': ObjectId("61f3fee447680861f0fafcc7"),
     '7': ObjectId("61f3fee447680861f0fafcc8"),
     '8': ObjectId("61f3fee447680861f0fafcc9"),
     '9': ObjectId("61f3fee447680861f0fafcca"),
     '10': ObjectId("61f3fee447680861f0fafccb"),
     '11': ObjectId("61f3fee447680861f0fafccc"),
     '12': ObjectId("61f3fee447680861f0fafccd"),
     '13': ObjectId("61f3fee447680861f0fafcce"),
     '14': ObjectId("61f3fee447680861f0fafccf"),
     '15': ObjectId("61f3fee447680861f0fafcd0"),
     '16': ObjectId("61f3fee447680861f0fafcd1"),
     '17': ObjectId("61f3fee447680861f0fafcd2"),
     '18': ObjectId("61f3fee447680861f0fafcd3"),
     '19': ObjectId("61f3fee447680861f0fafcd4"),
     '20': ObjectId("61f3fee447680861f0fafcd5"),
     '21': ObjectId("61f3fee447680861f0fafcd6"),
     '22': ObjectId("61f3fee447680861f0fafcd7"),
     '23': ObjectId("61f3fee447680861f0fafcd8"),
     '24': ObjectId("61f3fee447680861f0fafcd9"),
     '25': ObjectId("61f3fee447680861f0fafcda"),
     '26': ObjectId("61f3fee447680861f0fafcdb"),
     '27': ObjectId("61f3fee447680861f0fafcdc"),
     '28': ObjectId("61f3fee447680861f0fafcdd"),
     '29': ObjectId("61f3fee447680861f0fafcde"),
     '30': ObjectId("61f3fee447680861f0fafcdf"),
     '31': ObjectId("61f3fee447680861f0fafce0"),
     '32': ObjectId("61f3fee447680861f0fafce1"),
     '33': ObjectId("61f3fee447680861f0fafce2"),
     '34': ObjectId("61f3fee447680861f0fafce3"),
     '35': ObjectId("61f3fee447680861f0fafce4"),
     '36': ObjectId("61f3fee447680861f0fafce5"),
     '37': ObjectId("61f3fee447680861f0fafce6"),
     '38': ObjectId("61f3fee447680861f0fafce7"),
     '39': ObjectId("61f3fee447680861f0fafce8"),
     '40': ObjectId("61f3fee447680861f0fafce9"),
     '41': ObjectId("61f3fee447680861f0fafcea"),
     '42': ObjectId("61f3fee447680861f0fafceb"),
     '43': ObjectId("61f3fee447680861f0fafcec"),
     '44': ObjectId("61f3fee447680861f0fafced"),
     '45': ObjectId("61f3fee447680861f0fafcee"),
     '46': ObjectId("61f3fee447680861f0fafcef"),
     '47': ObjectId("61f3fee447680861f0fafcf0"),
     '48': ObjectId("61f3fee447680861f0fafcf1"),
     '49': ObjectId("61f3fee447680861f0fafcf2"),
     '50': ObjectId("61f3fee447680861f0fafcf3"),
     '51': ObjectId("61f3fee447680861f0fafcf4"),
     '52': ObjectId("61f3fee447680861f0fafcf5"),
     '53': ObjectId("61f3fee447680861f0fafcf6"),
     '54': ObjectId("61f3fee447680861f0fafcf7"),
     '55': ObjectId("61f3fee447680861f0fafcf8"),
     '56': ObjectId("61f3fee447680861f0fafcf9"),
     '57': ObjectId("61f3fee447680861f0fafcfa"),
     '58': ObjectId("61f3fee447680861f0fafcfb"),
     '59': ObjectId("61f3fee447680861f0fafcfc"),
     '60': ObjectId("61f3fee447680861f0fafcfd"),
     '61': ObjectId("61f3fee447680861f0fafcfe"),
     '62': ObjectId("61f3fee447680861f0fafcff"),
     '63': ObjectId("61f3fee447680861f0fafd00"),
     '64': ObjectId("61f3fee447680861f0fafd01"),
     '65': ObjectId("61f3fee447680861f0fafd02"),
     '66': ObjectId("61f3fee447680861f0fafd03"),
     '67': ObjectId("61f3fee447680861f0fafd04"),
     '68': ObjectId("61f3fee447680861f0fafd05"),
     '69': ObjectId("61f3fee447680861f0fafd06"),
     '70': ObjectId("61f3fee447680861f0fafd07"),
     '71': ObjectId("61f3fee447680861f0fafd08"),
     '72': ObjectId("61f3fee447680861f0fafd09"),
     '73': ObjectId("61f3fee447680861f0fafd0a"),
     '74': ObjectId("61f3fee447680861f0fafd0b"),
     '75': ObjectId("61f3fee447680861f0fafd0c"),
     '76': ObjectId("61f3fee447680861f0fafd0d"),
     '77': ObjectId("61f3fee447680861f0fafd0e"),
     '78': ObjectId("61f3fee447680861f0fafd0f"),
     '79': ObjectId("61f3fee447680861f0fafd10"),
     '80': ObjectId("61f3fee447680861f0fafd11"),
     '81': ObjectId("61f3fee447680861f0fafd12"),
     '82': ObjectId("61f3fee447680861f0fafd13"),
     '83': ObjectId("61f3fee447680861f0fafd14"),
     '84': ObjectId("61f3fee447680861f0fafd15"),
     '85': ObjectId("61f3fee447680861f0fafd16"),
     '86': ObjectId("61f3fee447680861f0fafd17"),
     '87': ObjectId("61f3fee447680861f0fafd18"),
     '88': ObjectId("61f3fee447680861f0fafd19"),
     '89': ObjectId("61f3fee447680861f0fafd1a"),
     '90': ObjectId("61f3fee447680861f0fafd1b"),
     '91': ObjectId("61f3fee447680861f0fafd1c"),
     '92': ObjectId("61f3fee447680861f0fafd1d"),
     '93': ObjectId("61f3fee447680861f0fafd1e"),
     '94': ObjectId("61f3fee447680861f0fafd1f"),
     '95': ObjectId("61f3fee447680861f0fafd20"),
     '96': ObjectId("61f3fee447680861f0fafd21"),
     '97': ObjectId("61f3fee447680861f0fafd22"),
     '98': ObjectId("61f3fee447680861f0fafd23"),
     '99': ObjectId("61f3fee447680861f0fafd24"),
     '100': ObjectId("61f3fee447680861f0fafd25"),
     '101': ObjectId("61f3fee447680861f0fafd26"),
     '102': ObjectId("61f3fee447680861f0fafd27"),
     '103': ObjectId("61f3fee447680861f0fafd28"),
     '104': ObjectId("61f3fee447680861f0fafd29"),
     '105': ObjectId("61f3fee447680861f0fafd2a"),
     '106': ObjectId("61f3fee447680861f0fafd2b"),
     '107': ObjectId("61f3fee447680861f0fafd2c"),
     '108': ObjectId("61f3fee447680861f0fafd2d"),
     '109': ObjectId("61f3fee447680861f0fafd2e"),
     '110': ObjectId("61f3fee447680861f0fafd2f"),
     '111': ObjectId("61f3fee447680861f0fafd30"),
     '112': ObjectId("61f3fee447680861f0fafd31"),
     '113': ObjectId("61f3fee447680861f0fafd32"),
     '114': ObjectId("61f3fee447680861f0fafd33"),
     '115': ObjectId("61f3fee447680861f0fafd34"),
     '116': ObjectId("61f3fee447680861f0fafd35"),
     '117': ObjectId("61f3fee447680861f0fafd36"),
     '118': ObjectId("61f3fee447680861f0fafd37"),
     '119': ObjectId("61f3fee447680861f0fafd38"),
     '120': ObjectId("61f3fee447680861f0fafd39"),
     '121': ObjectId("61f3fee447680861f0fafd3a"),
     '122': ObjectId("61f3fee447680861f0fafd3b"),
     '123': ObjectId("61f3fee447680861f0fafd3c"),
     '124': ObjectId("61f3fee447680861f0fafd3d"),
     '125': ObjectId("61f3fee447680861f0fafd3e"),
     '126': ObjectId("61f3fee447680861f0fafd3f"),
     '127': ObjectId("61f3fee447680861f0fafd40"),
     '128': ObjectId("61f3fee447680861f0fafd41"),
     '129': ObjectId("61f3fee447680861f0fafd42"),
     '130': ObjectId("61f3fee447680861f0fafd43"),
     '131': ObjectId("61f3fee447680861f0fafd44"),
     '132': ObjectId("61f3fee447680861f0fafd45"),
     '133': ObjectId("61f3fee447680861f0fafd46"),
     '134': ObjectId("61f3fee447680861f0fafd47"),
     '135': ObjectId("61f3fee447680861f0fafd48"),
     '136': ObjectId("61f3fee447680861f0fafd49"),
     '137': ObjectId("61f3fee447680861f0fafd4a"),
     '138': ObjectId("61f3fee447680861f0fafd4b"),
     '139': ObjectId("61f3fee447680861f0fafd4c"),
     '140': ObjectId("61f3fee447680861f0fafd4d"),
     '141': ObjectId("61f3fee447680861f0fafd4e"),
     '142': ObjectId("61f3fee447680861f0fafd4f"),
     '143': ObjectId("61f3fee447680861f0fafd50"),
     '144': ObjectId("61f3fee447680861f0fafd51"),
     '145': ObjectId("61f3fee447680861f0fafd52"),
     '146': ObjectId("61f3fee447680861f0fafd53"),
     '147': ObjectId("61f3fee447680861f0fafd54"),
     '148': ObjectId("61f3fee447680861f0fafd55"),
     '149': ObjectId("61f3fee447680861f0fafd56"),
     '150': ObjectId("61f3fee447680861f0fafd57"),
     '151': ObjectId("61f3fee447680861f0fafd58"),
     '152': ObjectId("61f3fee447680861f0fafd59"),
     '153': ObjectId("61f3fee447680861f0fafd5a"),
     '154': ObjectId("61f3fee447680861f0fafd5b"),
     '155': ObjectId("61f3fee447680861f0fafd5c"),
     '156': ObjectId("61f3fee447680861f0fafd5d"),
     '157': ObjectId("61f3fee447680861f0fafd5e"),
     '158': ObjectId("61f3fee447680861f0fafd5f"),
     '159': ObjectId("61f3fee447680861f0fafd60"),
     '160': ObjectId("61f3fee447680861f0fafd61"),
     '161': ObjectId("61f3fee447680861f0fafd62"),
     '162': ObjectId("61f3fee447680861f0fafd63"),
     '163': ObjectId("61f3fee447680861f0fafd64"),
     '164': ObjectId("61f3fee447680861f0fafd65"),
     '165': ObjectId("61f3fee447680861f0fafd66"),
     '166': ObjectId("61f3fee447680861f0fafd67"),
     '167': ObjectId("61f3fee447680861f0fafd68"),
     '168': ObjectId("61f3fee447680861f0fafd69"),
     '169': ObjectId("61f3fee447680861f0fafd6a"),
     '170': ObjectId("61f3fee447680861f0fafd6b"),
     '171': ObjectId("61f3fee447680861f0fafd6c"),
     '172': ObjectId("61f3fee447680861f0fafd6d"),
     '173': ObjectId("61f3fee447680861f0fafd6e"),
     '174': ObjectId("61f3fee447680861f0fafd6f"),
     '175': ObjectId("61f3fee447680861f0fafd70"),
     '176': ObjectId("61f3fee447680861f0fafd71"),
     '177': ObjectId("61f3fee447680861f0fafd72"),
     '178': ObjectId("61f3fee447680861f0fafd73"),
     '179': ObjectId("61f3fee447680861f0fafd74"),
     '180': ObjectId("61f3fee447680861f0fafd75"),
     '181': ObjectId("61f3fee447680861f0fafd76"),
     '182': ObjectId("61f3fee447680861f0fafd77"),
     '183': ObjectId("61f3fee447680861f0fafd78"),
     '184': ObjectId("61f3fee447680861f0fafd79"),
     '185': ObjectId("61f3fee447680861f0fafd7a"),
     '186': ObjectId("61f3fee447680861f0fafd7b"),
     '187': ObjectId("61f3fee447680861f0fafd7c"),
     '188': ObjectId("61f3fee447680861f0fafd7d"),
     '189': ObjectId("61f3fee447680861f0fafd7e"),
     '190': ObjectId("61f3fee447680861f0fafd7f"),
     '191': ObjectId("61f3fee447680861f0fafd80"),
     '192': ObjectId("61f3fee447680861f0fafd81"),
     '193': ObjectId("61f3fee447680861f0fafd82"),
     '194': ObjectId("61f3fee447680861f0fafd83"),
     '195': ObjectId("61f3fee447680861f0fafd84"),
     '196': ObjectId("61f3fee447680861f0fafd85"),
     '197': ObjectId("61f3fee447680861f0fafd86"),
     '198': ObjectId("61f3fee447680861f0fafd87"),
     '199': ObjectId("61f3fee447680861f0fafd88") } }
db.people.find();
{ _id: ObjectId("61f3fee447680861f0fafcc1"),
  first_name: 'Lawrence',
  last_name: 'Watkins',
  email: 'lwatkins0@uiuc.edu',
  gender: 'Male',
  age: 32,
  state: 'Arizona',
  children: 
   [ { name: 'Ruth', age: 17 },
     { name: 'Catherine', age: 19 },
     { name: 'David', age: 1 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcc2"),
  first_name: 'Steve',
  last_name: 'Vasquez',
  email: 'svasquez1@simplemachines.org',
  gender: 'Male',
  age: 21,
  state: 'Wisconsin',
  children: [] }
{ _id: ObjectId("61f3fee447680861f0fafcc3"),
  first_name: 'Kimberly',
  last_name: 'Adams',
  email: 'kadams2@printfriendly.com',
  gender: 'Female',
  age: 34,
  state: 'District of Columbia',
  children: 
   [ { name: 'Katherine', age: 3 },
     { name: 'Samuel', age: 15 },
     { name: 'George', age: 20 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcc4"),
  first_name: 'Karen',
  last_name: 'Collins',
  email: null,
  gender: 'Female',
  age: 41,
  state: 'Illinois',
  children: 
   [ { name: 'Deborah', age: 14 },
     { name: 'Russell', age: 9 },
     { name: 'Marilyn', age: 13 },
     { name: 'Lori', age: 17 },
     { name: 'Helen', age: 13 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcc5"),
  first_name: 'Juan',
  last_name: 'Peterson',
  email: null,
  gender: 'Male',
  age: 25,
  state: 'North Carolina',
  children: 
   [ { name: 'Philip', age: 20 },
     { name: 'Heather', age: 10 },
     { name: 'Patrick', age: 10 },
     { name: 'Evelyn', age: 13 },
     { name: 'Raymond', age: 1 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcc6"),
  first_name: 'Jimmy',
  last_name: 'Sims',
  email: 'jsims5@cyberchimps.com',
  gender: 'Male',
  age: 32,
  state: 'Florida',
  children: 
   [ { name: 'Edward', age: 15 },
     { name: 'Rebecca', age: 7 },
     { name: 'Victor', age: 17 },
     { name: 'Daniel', age: 16 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcc7"),
  first_name: 'Gerald',
  last_name: 'Bailey',
  email: 'gbailey6@vk.com',
  gender: 'Male',
  age: 58,
  state: 'Massachusetts',
  children: 
   [ { name: 'Gary', age: 19 },
     { name: 'Peter', age: 10 },
     { name: 'Ernest', age: 0 },
     { name: 'Roger', age: 18 },
     { name: 'Adam', age: 1 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcc8"),
  first_name: 'Debra',
  last_name: 'Ruiz',
  email: 'druiz7@dagondesign.com',
  gender: 'Female',
  age: 45,
  state: 'Florida',
  children: [] }
{ _id: ObjectId("61f3fee447680861f0fafcc9"),
  first_name: 'Anna',
  last_name: 'Howard',
  email: 'ahoward8@dot.gov',
  gender: 'Female',
  age: 47,
  state: 'Virginia',
  children: 
   [ { name: 'Johnny', age: 0 },
     { name: 'Jean', age: 6 },
     { name: 'Edward', age: 9 },
     { name: 'Rachel', age: 16 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcca"),
  first_name: 'Ronald',
  last_name: 'Cooper',
  email: 'rcooper9@dagondesign.com',
  gender: 'Male',
  age: 43,
  state: 'Colorado',
  children: [ { name: 'Helen', age: 19 } ] }
{ _id: ObjectId("61f3fee447680861f0fafccb"),
  first_name: 'Phillip',
  last_name: 'Martin',
  email: 'pmartina@bluehost.com',
  gender: 'Male',
  age: 40,
  state: 'Ohio',
  children: 
   [ { name: 'Kevin', age: 9 },
     { name: 'Jason', age: 5 },
     { name: 'Russell', age: 1 } ] }
{ _id: ObjectId("61f3fee447680861f0fafccc"),
  first_name: 'Douglas',
  last_name: 'Woods',
  email: null,
  gender: 'Male',
  age: 27,
  state: 'New York',
  children: 
   [ { name: 'Melissa', age: 2 },
     { name: 'Lisa', age: 2 },
     { name: 'Michael', age: 19 },
     { name: 'Walter', age: 6 } ] }
{ _id: ObjectId("61f3fee447680861f0fafccd"),
  first_name: 'Amy',
  last_name: 'Ruiz',
  email: 'aruizc@com.com',
  gender: 'Female',
  age: 56,
  state: 'California',
  children: [ { name: 'Todd', age: 7 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcce"),
  first_name: 'Anna',
  last_name: 'Kelley',
  email: 'akelleyd@gmpg.org',
  gender: 'Female',
  age: 24,
  state: 'Michigan',
  children: [ { name: 'Adam', age: 0 } ] }
{ _id: ObjectId("61f3fee447680861f0fafccf"),
  first_name: 'Bonnie',
  last_name: 'Rogers',
  email: 'brogerse@nyu.edu',
  gender: 'Female',
  age: 39,
  state: 'Massachusetts',
  children: 
   [ { name: 'Katherine', age: 1 },
     { name: 'Joshua', age: 19 },
     { name: 'Diana', age: 9 },
     { name: 'Jeffrey', age: 3 },
     { name: 'Daniel', age: 20 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcd0"),
  first_name: 'Martha',
  last_name: 'Castillo',
  email: null,
  gender: 'Female',
  age: 32,
  state: 'Oklahoma',
  children: 
   [ { name: 'Paula', age: 1 },
     { name: 'Timothy', age: 15 },
     { name: 'Heather', age: 6 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcd1"),
  first_name: 'Christina',
  last_name: 'Hughes',
  email: 'chughesg@vistaprint.com',
  gender: 'Female',
  age: 21,
  state: 'New York',
  children: [ { name: 'Kenneth', age: 20 }, { name: 'Shawn', age: 6 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcd2"),
  first_name: 'Sara',
  last_name: 'Tucker',
  email: null,
  gender: 'Female',
  age: 41,
  state: 'Virginia',
  children: [] }
{ _id: ObjectId("61f3fee447680861f0fafcd3"),
  first_name: 'Juan',
  last_name: 'Jenkins',
  email: 'jjenkinsi@sohu.com',
  gender: 'Male',
  age: 47,
  state: 'Missouri',
  children: [] }
{ _id: ObjectId("61f3fee447680861f0fafcd4"),
  first_name: 'Maria',
  last_name: 'Hicks',
  email: 'mhicksj@sohu.com',
  gender: 'Female',
  age: 27,
  state: 'Texas',
  children: [] }
Type "it" for more
db.people.insertOne({ "first_name": "Patricia",
  "last_name": "Medina",
  "email": "pmedina@trellian.com",
  "age": 36,
  "state": "Arizona",
  "children": [] }
);
{ acknowledged: true,
  insertedId: ObjectId("61f400a947680861f0fafd89") }
db.people.find(_id: ObjectId("61f400a947680861f0fafd89"));
SyntaxError: Unexpected token, expected "," (1:18)

> 1 | db.people.find(_id: ObjectId("61f400a947680861f0fafd89"));
    |                   ^
db.people.find({_id: ObjectId("61f400a947680861f0fafd89")});
{ _id: ObjectId("61f400a947680861f0fafd89"),
  first_name: 'Patricia',
  last_name: 'Medina',
  email: 'pmedina@trellian.com',
  age: 36,
  state: 'Arizona',
  children: [] }
//Add another person. They should have at least two children.
({ "first_name": "Creg",
  "last_name": "Anything",
  "email": "Canything@trellian.com",
  "age": 21,
  "state": "California",
  "children": [{ name: 'Patric', age: 3 },
     { name: 'Simon', age: 7 }] };
SyntaxError: Unexpected token, expected "," (7:33)

  5 |   "state": "California",
  6 |   "children": [{ name: 'Patric', age: 3 },
> 7 |      { name: 'Simon', age: 7 }] };
    |                                  ^
db.people.insertOne(({ "first_name": "Creg",
  "last_name": "Anything",
  "email": "Canything@trellian.com",
  "age": 21,
  "state": "California",
  "children": [{ name: 'Patric', age: 3 },
     { name: 'Simon', age: 7 }] });
SyntaxError: Unexpected token, expected "," (7:34)

  5 |   "state": "California",
  6 |   "children": [{ name: 'Patric', age: 3 },
> 7 |      { name: 'Simon', age: 7 }] });
    |                                   ^
db.people.insertOne(({ "first_name": "Creg",
  "last_name": "Anything",
  "email": "Canything@trellian.com",
  "age": 21,
  "state": "California",
  "children": [{ name: 'Patric', age: 3 },
     { name: 'Simon', age: 7 }] })
SyntaxError: Unexpected token, expected "," (7:34)

  5 |   "state": "California",
  6 |   "children": [{ name: 'Patric', age: 3 },
> 7 |      { name: 'Simon', age: 7 }] })
    |                                   ^
db.people.insertOne({ "first_name": "Creg",  "last_name": "Anything",  "email": "Canything@trellian.com",
  "age": 21,  "state": "California",  "children": [{ name: 'Patric', age: 3 }, { name: 'Simon', age: 7 }] });
{ acknowledged: true,
  insertedId: ObjectId("61f403b247680861f0fafd8a") }
//Update one person named Clarence. He moved from North Dakota to South Dakota
db.people
mongodb-people.people
db.people.findOne(first_name:'Clearence');
SyntaxError: Unexpected token, expected "," (1:28)

> 1 | db.people.findOne(first_name:'Clearence');
    |                             ^
db.people.findOne(first_name='Clearence');
MongoInvalidArgumentError: Query filter must be a plain object or ObjectId
db.people.find(first_name='Clearence');
MongoInvalidArgumentError: Query filter must be a plain object or ObjectId
db.people.find(first_name:'Clearence');
SyntaxError: Unexpected token, expected "," (1:25)

> 1 | db.people.find(first_name:'Clearence');
    |                          ^
db.people.find(first_name:'Clearence')
SyntaxError: Unexpected token, expected "," (1:25)

> 1 | db.people.find(first_name:'Clearence')
    |                          ^
//Update Rebecca Hayes. Remove her email address.
db.people.updateOne({first_name:'Clearence'},{$set: {'North Dakota': 'South Dakota'}})
{ acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0 }
db.people.find(first_name: 'Clearence');
SyntaxError: Unexpected token, expected "," (1:25)

> 1 | db.people.find(first_name: 'Clearence');
    |                          ^
db.people.find({first_name: 'Clearence'});
db.people.find({first_name: 'Clarence'});
{ _id: ObjectId("61f3fee447680861f0fafceb"),
  first_name: 'Clarence',
  last_name: 'Berry',
  email: 'cberry16@cafepress.com',
  gender: 'Male',
  age: 50,
  state: 'North Dakota',
  children: [] }
db.people.updateOne({first_name:'Clarence'},{$set: {'North Dakota': 'South Dakota'}})
{ acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0 }
db.people.find({first_name: 'Clarence'});
{ _id: ObjectId("61f3fee447680861f0fafceb"),
  first_name: 'Clarence',
  last_name: 'Berry',
  email: 'cberry16@cafepress.com',
  gender: 'Male',
  age: 50,
  state: 'North Dakota',
  children: [],
  'North Dakota': 'South Dakota' }
db.people.updateOne({first_name:'Clarence'},{$set: {state: 'South Dakota'}});
{ acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0 }
db.people.find({first_name: 'Clarence'});
{ _id: ObjectId("61f3fee447680861f0fafceb"),
  first_name: 'Clarence',
  last_name: 'Berry',
  email: 'cberry16@cafepress.com',
  gender: 'Male',
  age: 50,
  state: 'South Dakota',
  children: [],
  'North Dakota': 'South Dakota' }
//Update Rebecca Hayes. Remove her email address.
db.people.find({first_name:'Rebecca', last_name:'Hayes'});
{ _id: ObjectId("61f3fee447680861f0fafcfa"),
  first_name: 'Rebecca',
  last_name: 'Hayes',
  email: 'rhayes1l@cnbc.com',
  gender: 'Female',
  age: 31,
  state: 'California',
  children: [ { name: 'Keith', age: 17 }, { name: 'Cheryl', age: 18 } ] }
db.people.updateOne({first_name:'Rebecca',last_name:'Hayes'}, {$set: {email:''}});
{ acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0 }
db.people.find({first_name:'Rebecca', last_name:'Hayes'});
{ _id: ObjectId("61f3fee447680861f0fafcfa"),
  first_name: 'Rebecca',
  last_name: 'Hayes',
  email: '',
  gender: 'Female',
  age: 31,
  state: 'California',
  children: [ { name: 'Keith', age: 17 }, { name: 'Cheryl', age: 18 } ] }
//Update everyone from Missouri. They all had a birthday today, so add one to their age. (expect 4 matches)
db.people.find({state:'Missouri'});
{ _id: ObjectId("61f3fee447680861f0fafcd3"),
  first_name: 'Juan',
  last_name: 'Jenkins',
  email: 'jjenkinsi@sohu.com',
  gender: 'Male',
  age: 47,
  state: 'Missouri',
  children: [] }
{ _id: ObjectId("61f3fee447680861f0fafcee"),
  first_name: 'Philip',
  last_name: 'Phillips',
  email: 'pphillips19@booking.com',
  gender: 'Male',
  age: 60,
  state: 'Missouri',
  children: [ { name: 'Elizabeth', age: 14 }, { name: 'Timothy', age: 4 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd4a"),
  first_name: 'Lori',
  last_name: 'Rogers',
  email: 'lrogers3t@google.nl',
  gender: 'Female',
  age: 51,
  state: 'Missouri',
  children: 
   [ { name: 'Tammy', age: 9 },
     { name: 'Larry', age: 11 },
     { name: 'Earl', age: 3 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd69"),
  first_name: 'Nancy',
  last_name: 'Johnston',
  email: 'njohnston4o@icq.com',
  gender: 'Female',
  age: 29,
  state: 'Missouri',
  children: [ { name: 'Scott', age: 12 } ] }
db.people.updateMany({state:'Missouri'},{$inc: {age: 1}});
{ acknowledged: true,
  insertedId: null,
  matchedCount: 4,
  modifiedCount: 4,
  upsertedCount: 0 }
db.people.find({state:'Missouri'});
{ _id: ObjectId("61f3fee447680861f0fafcd3"),
  first_name: 'Juan',
  last_name: 'Jenkins',
  email: 'jjenkinsi@sohu.com',
  gender: 'Male',
  age: 48,
  state: 'Missouri',
  children: [] }
{ _id: ObjectId("61f3fee447680861f0fafcee"),
  first_name: 'Philip',
  last_name: 'Phillips',
  email: 'pphillips19@booking.com',
  gender: 'Male',
  age: 61,
  state: 'Missouri',
  children: [ { name: 'Elizabeth', age: 14 }, { name: 'Timothy', age: 4 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd4a"),
  first_name: 'Lori',
  last_name: 'Rogers',
  email: 'lrogers3t@google.nl',
  gender: 'Female',
  age: 52,
  state: 'Missouri',
  children: 
   [ { name: 'Tammy', age: 9 },
     { name: 'Larry', age: 11 },
     { name: 'Earl', age: 3 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd69"),
  first_name: 'Nancy',
  last_name: 'Johnston',
  email: 'njohnston4o@icq.com',
  gender: 'Female',
  age: 30,
  state: 'Missouri',
  children: [ { name: 'Scott', age: 12 } ] }
//Jerry Baker has updated information. Replace with a new document:
//{ first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }
db.people.find({first_name:'Jerry',last_name:'Baker'});
{ _id: ObjectId("61f3fee447680861f0fafd48"),
  first_name: 'Jerry',
  last_name: 'Baker',
  email: null,
  gender: 'Male',
  age: 24,
  state: 'Illinois',
  children: [ { name: 'Alan', age: 13 } ] }
db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48"),{$set: last_name: "Baker-Mendez", email: "jerry@classic.ly", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}]}})
SyntaxError: Unexpected token (1:62)

> 1 | db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48"),{$set: last_name: "Baker-Mendez", email: "jerry@classic.ly", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}]}})
    |                                                               ^
db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48"),{$set: last_name: "Baker-Mendez"});
SyntaxError: Unexpected token (1:62)

> 1 | db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48"),{$set: last_name: "Baker-Mendez"});
    |                                                               ^
db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48")},{$set: last_name: "Baker-Mendez", email: "jerry@classic.ly", age: 28, state: "Vermont", "children": [{ name: 'Alan', age: 13 },{name: "Alan", age: 18}, {name: "Jenny", age: 3}]}});
SyntaxError: Unexpected token, expected "," (1:79)

> 1 | db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48")},{$set: last_name: "Baker-Mendez", email: "jerry@classic.ly", age: 28, state: "Vermont", "children": [{ name: 'Alan', age: 13 },{name: "Alan", age: 18}, {name: "Jenny", age: 3}]}});
    |                                                                                ^
db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48")},{$set: {last_name: "Baker-Mendez"}, {email: "jerry@classic.ly"},{ age: 28},{ state: "Vermont"}, {"children": [{ name: 'Alan', age: 13 },{name: "Alan", age: 18}, {name: "Jenny", age: 3}]}}});
SyntaxError: Unexpected token (1:99)

> 1 | db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48")},{$set: {last_name: "Baker-Mendez"}, {email: "jerry@classic.ly"},{ age: 28},{ state: "Vermont"}, {"children": [{ name: 'Alan', age: 13 },{name: "Alan", age: 18}, {name: "Jenny", age: 3}]}}});
    |                                                                                                    ^
db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48")},{$set: {last_name: "Baker-Mendez", email: "jerry@classic.ly", age: 28, state: "Vermont", children: [{name: "Alan", age: 18}, {name: "Jenny", age: 3}]});
SyntaxError: Unexpected token, expected "," (1:213)

> 1 | db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48")},{$set: {last_name: "Baker-Mendez", email: "jerry@classic.ly", age: 28, state: "Vermont", children: [{name: "Alan", age: 18}, {name: "Jenny", age: 3}]});
    |                                                                                                                                                                                                                      ^

> 1 | db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48")},{$set: {last_name: "Baker-Mendez", email: "jerry@classic.ly", age: 28, state: "Vermont", children: [{name: "Alan", age: 18}, {name: "Jenny", age: 3}]});
    |                                                                                                                                                                                                                      ^
    at Parser._raise (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:538946)
    at Parser.raiseWithData (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:538885)
    at Parser.raise (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:538341)
    at Parser.unexpected (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:558695)
    at Parser.expect (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:558273)
    at Parser.parseObjectLike (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:588515)
    at Parser.parseExprAtom (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:580236)
    at Parser.parseExprSubscripts (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:573742)
    at Parser.parseUpdate (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:573326)
    at Parser.parseMaybeUnary (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:572847)
db.people.updateOne({_id:ObjectId("61f3fee447680861f0fafd48")},{$set: {last_name: "Baker-Mendez", email: "jerry@classic.ly", age: 28, state: "Vermont", children: [{name: "Alan", age: 18}, {name: "Jenny", age: 3}]}});
{ acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0 }
db.people.find({_id:ObjectId("61f3fee447680861f0fafd48")});
{ _id: ObjectId("61f3fee447680861f0fafd48"),
  first_name: 'Jerry',
  last_name: 'Baker-Mendez',
  email: 'jerry@classic.ly',
  gender: 'Male',
  age: 28,
  state: 'Vermont',
  children: [ { name: 'Alan', age: 18 }, { name: 'Jenny', age: 3 } ] }
//Delete Wanda Bowman.
db.people.find({first_name:'Wanda'});
{ _id: ObjectId("61f3fee447680861f0fafd20"),
  first_name: 'Wanda',
  last_name: 'Bowman',
  email: 'wbowman2n@ehow.com',
  gender: 'Female',
  age: 62,
  state: 'California',
  children: [] }
db.people.deleteOne({first_name:'Wanda',last_name:'Bowman'});
{ acknowledged: true, deletedCount: 1 }
db.people.find({first_name:'Wanda',last_name:'Bowman'});
//Delete everyone who does not have an email address specified. (expect 36 matches - maybe more depending what you added above)
db.people.find({email:null});
{ _id: ObjectId("61f3fee447680861f0fafcc4"),
  first_name: 'Karen',
  last_name: 'Collins',
  email: null,
  gender: 'Female',
  age: 41,
  state: 'Illinois',
  children: 
   [ { name: 'Deborah', age: 14 },
     { name: 'Russell', age: 9 },
     { name: 'Marilyn', age: 13 },
     { name: 'Lori', age: 17 },
     { name: 'Helen', age: 13 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcc5"),
  first_name: 'Juan',
  last_name: 'Peterson',
  email: null,
  gender: 'Male',
  age: 25,
  state: 'North Carolina',
  children: 
   [ { name: 'Philip', age: 20 },
     { name: 'Heather', age: 10 },
     { name: 'Patrick', age: 10 },
     { name: 'Evelyn', age: 13 },
     { name: 'Raymond', age: 1 } ] }
{ _id: ObjectId("61f3fee447680861f0fafccc"),
  first_name: 'Douglas',
  last_name: 'Woods',
  email: null,
  gender: 'Male',
  age: 27,
  state: 'New York',
  children: 
   [ { name: 'Melissa', age: 2 },
     { name: 'Lisa', age: 2 },
     { name: 'Michael', age: 19 },
     { name: 'Walter', age: 6 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcd0"),
  first_name: 'Martha',
  last_name: 'Castillo',
  email: null,
  gender: 'Female',
  age: 32,
  state: 'Oklahoma',
  children: 
   [ { name: 'Paula', age: 1 },
     { name: 'Timothy', age: 15 },
     { name: 'Heather', age: 6 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcd2"),
  first_name: 'Sara',
  last_name: 'Tucker',
  email: null,
  gender: 'Female',
  age: 41,
  state: 'Virginia',
  children: [] }
{ _id: ObjectId("61f3fee447680861f0fafcd5"),
  first_name: 'Eugene',
  last_name: 'Garrett',
  email: null,
  gender: 'Male',
  age: 48,
  state: 'Utah',
  children: 
   [ { name: 'Robin', age: 10 },
     { name: 'Nicole', age: 15 },
     { name: 'Jack', age: 17 },
     { name: 'Walter', age: 1 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcda"),
  first_name: 'Amanda',
  last_name: 'Carr',
  email: null,
  gender: 'Female',
  age: 54,
  state: 'Maryland',
  children: 
   [ { name: 'Louis', age: 7 },
     { name: 'Bobby', age: 5 },
     { name: 'Harold', age: 14 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcde"),
  first_name: 'Sandra',
  last_name: 'Young',
  email: null,
  gender: 'Female',
  age: 42,
  state: 'Idaho',
  children: [ { name: 'Robin', age: 20 } ] }
{ _id: ObjectId("61f3fee447680861f0fafce1"),
  first_name: 'Judith',
  last_name: 'Patterson',
  email: null,
  gender: 'Female',
  age: 61,
  state: 'California',
  children: 
   [ { name: 'Janice', age: 19 },
     { name: 'Evelyn', age: 16 },
     { name: 'Jeffrey', age: 17 },
     { name: 'Walter', age: 6 },
     { name: 'Bobby', age: 11 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcea"),
  first_name: 'Elizabeth',
  last_name: 'Montgomery',
  email: null,
  gender: 'Female',
  age: 36,
  state: 'Virginia',
  children: [ { name: 'Lori', age: 2 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcf4"),
  first_name: 'Charles',
  last_name: 'Jones',
  email: null,
  gender: 'Male',
  age: 43,
  state: 'Georgia',
  children: [ { name: 'Teresa', age: 7 } ] }
{ _id: ObjectId("61f3fee447680861f0fafcf6"),
  first_name: 'Sharon',
  last_name: 'Murphy',
  email: null,
  gender: 'Female',
  age: 46,
  state: 'New York',
  children: [ { name: 'Anna', age: 5 }, { name: 'Christine', age: 5 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd01"),
  first_name: 'Theresa',
  last_name: 'Gordon',
  email: null,
  gender: 'Female',
  age: 41,
  state: 'Pennsylvania',
  children: 
   [ { name: 'Joseph', age: 18 },
     { name: 'Brian', age: 13 },
     { name: 'Carlos', age: 8 },
     { name: 'Justin', age: 2 },
     { name: 'Anna', age: 8 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd04"),
  first_name: 'Larry',
  last_name: 'Chapman',
  email: null,
  gender: 'Male',
  age: 57,
  state: 'North Carolina',
  children: 
   [ { name: 'Brian', age: 18 },
     { name: 'Patricia', age: 0 },
     { name: 'Patricia', age: 18 },
     { name: 'Billy', age: 13 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd05"),
  first_name: 'Pamela',
  last_name: 'Chavez',
  email: null,
  gender: 'Female',
  age: 36,
  state: 'Ohio',
  children: 
   [ { name: 'Maria', age: 0 },
     { name: 'Christine', age: 17 },
     { name: 'Daniel', age: 16 },
     { name: 'Randy', age: 6 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd14"),
  first_name: 'Bobby',
  last_name: 'Carr',
  email: null,
  gender: 'Male',
  age: 57,
  state: 'Tennessee',
  children: [] }
{ _id: ObjectId("61f3fee447680861f0fafd1d"),
  first_name: 'Walter',
  last_name: 'Rivera',
  email: null,
  gender: 'Male',
  age: 25,
  state: 'Illinois',
  children: [] }
{ _id: ObjectId("61f3fee447680861f0fafd23"),
  first_name: 'Keith',
  last_name: 'Ward',
  email: null,
  gender: 'Male',
  age: 43,
  state: 'Wisconsin',
  children: 
   [ { name: 'Barbara', age: 10 },
     { name: 'Katherine', age: 2 },
     { name: 'Eugene', age: 12 },
     { name: 'Kathy', age: 10 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd27"),
  first_name: 'Terry',
  last_name: 'Stevens',
  email: null,
  gender: 'Male',
  age: 62,
  state: 'Maryland',
  children: 
   [ { name: 'Eugene', age: 3 },
     { name: 'Kevin', age: 8 },
     { name: 'Mark', age: 3 },
     { name: 'Louise', age: 16 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd29"),
  first_name: 'Benjamin',
  last_name: 'Ferguson',
  email: null,
  gender: 'Male',
  age: 44,
  state: 'California',
  children: [] }
Type "it" for more
it
{ _id: ObjectId("61f3fee447680861f0fafd2d"),
  first_name: 'Kathleen',
  last_name: 'Pierce',
  email: null,
  gender: 'Female',
  age: 26,
  state: 'Virginia',
  children: 
   [ { name: 'Jonathan', age: 3 },
     { name: 'Donna', age: 15 },
     { name: 'Amanda', age: 4 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd30"),
  first_name: 'Sarah',
  last_name: 'Washington',
  email: null,
  gender: 'Female',
  age: 40,
  state: 'Maryland',
  children: [ { name: 'Anna', age: 14 }, { name: 'Jacqueline', age: 18 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd34"),
  first_name: 'Stephen',
  last_name: 'Evans',
  email: null,
  gender: 'Male',
  age: 43,
  state: 'South Carolina',
  children: 
   [ { name: 'Margaret', age: 10 },
     { name: 'Carlos', age: 11 },
     { name: 'Samuel', age: 7 },
     { name: 'Patricia', age: 14 },
     { name: 'Gloria', age: 15 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd42"),
  first_name: 'Phyllis',
  last_name: 'Gray',
  email: null,
  gender: 'Female',
  age: 81,
  state: 'Illinois',
  children: [ { name: 'Albert', age: 2 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd43"),
  first_name: 'Nicholas',
  last_name: 'Russell',
  email: null,
  gender: 'Male',
  age: 38,
  state: 'Texas',
  children: 
   [ { name: 'Mildred', age: 1 },
     { name: 'Beverly', age: 4 },
     { name: 'Michelle', age: 2 },
     { name: 'Diana', age: 13 },
     { name: 'Larry', age: 16 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd45"),
  first_name: 'Ruth',
  last_name: 'Parker',
  email: null,
  gender: 'Female',
  age: 52,
  state: 'New Jersey',
  children: [] }
{ _id: ObjectId("61f3fee447680861f0fafd4b"),
  first_name: 'Norma',
  last_name: 'Andrews',
  email: null,
  gender: 'Female',
  age: 38,
  state: 'Washington',
  children: 
   [ { name: 'Evelyn', age: 8 },
     { name: 'Shawn', age: 3 },
     { name: 'Tina', age: 2 },
     { name: 'Timothy', age: 11 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd4e"),
  first_name: 'Carolyn',
  last_name: 'Vasquez',
  email: null,
  gender: 'Female',
  age: 44,
  state: 'Florida',
  children: 
   [ { name: 'Rebecca', age: 11 },
     { name: 'Jessica', age: 7 },
     { name: 'Alice', age: 4 },
     { name: 'Diane', age: 2 },
     { name: 'Alice', age: 13 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd50"),
  first_name: 'Carolyn',
  last_name: 'Hanson',
  email: null,
  gender: 'Female',
  age: 37,
  state: 'Alabama',
  children: [ { name: 'Judith', age: 10 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd56"),
  first_name: 'Rose',
  last_name: 'Holmes',
  email: null,
  gender: 'Female',
  age: 45,
  state: 'California',
  children: 
   [ { name: 'Shawn', age: 1 },
     { name: 'Richard', age: 5 },
     { name: 'Alice', age: 16 },
     { name: 'Carol', age: 9 },
     { name: 'Patricia', age: 13 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd5a"),
  first_name: 'Joyce',
  last_name: 'Wilson',
  email: null,
  gender: 'Female',
  age: 56,
  state: 'Indiana',
  children: [ { name: 'Wanda', age: 6 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd60"),
  first_name: 'Nancy',
  last_name: 'Peterson',
  email: null,
  gender: 'Female',
  age: 60,
  state: 'Texas',
  children: [] }
{ _id: ObjectId("61f3fee447680861f0fafd67"),
  first_name: 'Brenda',
  last_name: 'Simpson',
  email: null,
  gender: 'Female',
  age: 37,
  state: 'Alabama',
  children: [ { name: 'Frank', age: 7 }, { name: 'Shirley', age: 17 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd73"),
  first_name: 'Diane',
  last_name: 'Welch',
  email: null,
  gender: 'Female',
  age: 38,
  state: 'Virginia',
  children: 
   [ { name: 'Laura', age: 13 },
     { name: 'Louis', age: 16 },
     { name: 'Sandra', age: 10 },
     { name: 'Christine', age: 11 },
     { name: 'Ashley', age: 12 } ] }
{ _id: ObjectId("61f3fee447680861f0fafd78"),
  first_name: 'Billy',
  last_name: 'Taylor',
  email: null,
  gender: 'Male',
  age: 26,
  state: 'Texas',
  children: [ { name: 'Norma', age: 7 } ] }
db.people.deleteMany({email:null});
{ acknowledged: true, deletedCount: 35 }
db.submissions.insertOne(title: "The River Bend", upvotes: 10, downvotes: 2, artist: ObjectId("61f3fdb2277655a5f51b30f6")
);
SyntaxError: Unexpected token, expected "," (1:30)

> 1 | db.submissions.insertOne(title: "The River Bend", upvotes: 10, downvotes: 2, artist: ObjectId("61f3fdb2277655a5f51b30f6")
    |                               ^
  2 | );
db.submissions.insertOne({title: "The River Bend", upvotes: 10, downvotes: 2, artist: ObjectId("61f3fdb2277655a5f51b30f6")
});
{ acknowledged: true,
  insertedId: ObjectId("61f41ab947680861f0fafd8b") }
db.submissions.insertMany([{}])
{ acknowledged: true,
  insertedIds: { '0': ObjectId("61f41ade47680861f0fafd8c") } }
db.submissions.deleteOne({_id:ObjectId("61f41ade47680861f0fafd8c")});
{ acknowledged: true, deletedCount: 1 }
db.submissions.insertMany([{title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId("61f3fdb2277655a5f51b312")},
{title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId("61f3fdb2277655a5f51b31a7 ")},
{title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId("61f3fdb2277655a5f51b312d")},
{title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: ObjectId("61f3fdb2277655a5f51b30f4sc")}
]);
BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters
db.submissions.insertMany([{title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId("61f3fdb2277655a5f51b312")},
{title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId("61f3fdb2277655a5f51b31a7")},
{title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId("61f3fdb2277655a5f51b312d")},
{title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: ObjectId("61f3fdb2277655a5f51b30f4sc")}
]);
BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters
  if (_fs === "returned") return _srv;else if (_fs === "threw") throw _srv;
                                                                ^

BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters
    at new t (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:1124681)
    at new e (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:1156324)
    at C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:2012666
    at evalmachine.<anonymous>:38:137
    at evalmachine.<anonymous>:68:5
    at evalmachine.<anonymous>:73:3
    at Script.runInContext (vm.js:143:18)
    at Object.runInContext (vm.js:294:6)
    at ElectronInterpreterEnvironment.sloppyEval (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:1326705)
    at ShellEvaluator.innerEval (C:\Users\minim\Downloads\mongodb-compass-1.30.1-win32-x64\resources\app.asar.unpacked\node_modules\@mongosh\node-runtime-worker-thread\dist\worker-runtime.js:2:2094143)
db.submissions.insertMany([{title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId("61f3fdb2277655a5f51b312")},
{title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId("61f3fdb2277655a5f51b31a7")},
{title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId("61f3fdb2277655a5f51b312d")},
{title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: ObjectId("61f3fdb2277655a5f51b30f4")}
]);
BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters
db.submissions.insertMany([{title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId("61f3fdb2277655a5f51b3124")},
{title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId("61f3fdb2277655a5f51b31a7")},
{title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId("61f3fdb2277655a5f51b312d")},
{title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: ObjectId("61f3fdb2277655a5f51b30f4")}
]);
{ acknowledged: true,
  insertedIds: 
   { '0': ObjectId("61f41dd647680861f0fafd8d"),
     '1': ObjectId("61f41dd647680861f0fafd8e"),
     '2': ObjectId("61f41dd647680861f0fafd8f"),
     '3': ObjectId("61f41dd647680861f0fafd90") } }
//Add 2 upvotes for "The River Bend"
db.submissions.updateOne({title:'The River Bend'}, {$inc: {upvotes: 2}});
{ acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0 }
db.submissions.find({title:'The River Bend'});
{ _id: ObjectId("61f41ab947680861f0fafd8b"),
  title: 'The River Bend',
  upvotes: 12,
  downvotes: 2,
  artist: ObjectId("61f3fdb2277655a5f51b30f6") }
  