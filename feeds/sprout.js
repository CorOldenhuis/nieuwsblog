'use strict'

$('#sprout').FeedEk({
FeedUrl:'https://www.sprout.nl/home/rss',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:false,
DescCharacterLimit:200,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});
