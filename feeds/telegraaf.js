'use strict'

$('#telegraaf').FeedEk({
FeedUrl:'http://www.telegraaf.nl/rss',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:false,
DescCharacterLimit:200,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});
