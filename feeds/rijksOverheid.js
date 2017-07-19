'use strict'

$('#rijksOverheid').FeedEk({
FeedUrl:'https://feeds.rijksoverheid.nl/nieuws.rss',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:false,
DescCharacterLimit:200,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});
