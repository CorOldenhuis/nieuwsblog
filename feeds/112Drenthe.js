'use strict'

$('#112Drenthe').FeedEk({
FeedUrl:'http://www.112drenthe.nl/index.php/feed/RSS2.0/newsrss/18769',
MaxCount : 5,
ShowDesc : true,
ShowPubDate:false,
DescCharacterLimit:200,
TitleLinkTarget:'_blank',
DateFormat: 'MM/DD/YYYY',
DateFormatLang:'en'
});
