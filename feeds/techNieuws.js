'use strict'

$('#techNieuws').FeedEk({
FeedUrl:'http://www.nu.nl/rss/tech',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:false,
DescCharacterLimit:200,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});
