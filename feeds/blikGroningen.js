'use strict'

$('#blikGroningen').FeedEk({
FeedUrl:'http://www.blikopnieuws.nl/feeds/groningen/rss.xml',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:false,
DescCharacterLimit:200,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});
