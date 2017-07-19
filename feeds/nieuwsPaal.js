'use strict'

$('#nieuwsPaal').FeedEk({
FeedUrl:'http://feeds.feedburner.com/nieuwspaal/pLee',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:false,
DescCharacterLimit:200,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});
