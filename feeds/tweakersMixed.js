'use strict'

$('#tweakersMixed').FeedEk({
FeedUrl:'http://feeds.feedburner.com/tweakers',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:false,
DescCharacterLimit:200,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});
