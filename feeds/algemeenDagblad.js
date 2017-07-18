'use strict'

$('#algemeenDagblad').FeedEk({
FeedUrl:'http://www.ad.nl/home/rss.xml',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:false,
DescCharacterLimit:200,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en',
});
