'use strict'

$('#autoBlog').FeedEk({
FeedUrl:'https://www.autoblog.nl/feed',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:false,
DescCharacterLimit:200,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});
