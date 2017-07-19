'use strict'

$('#mobileCowboys').FeedEk({
FeedUrl:'http://www.mobilecowboys.nl/feed/rss',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:false,
DescCharacterLimit:200,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});
