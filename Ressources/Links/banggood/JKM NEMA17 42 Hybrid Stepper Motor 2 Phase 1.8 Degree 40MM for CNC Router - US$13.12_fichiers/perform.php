
if (document.createElement) {
	var action = "PRODUCT";
	var name = "banggood";
	var category = "VIDE";
	var product = "933548";
	var reference = "0";
	var amount = "0";

	var ads = document.createElement('script');
	var refer = (window != window.top) ? document.referrer : document.location.href;
	var refer2 = (window != window.top) ? document.location.href : ''
	if (ads) {
		ads.setAttribute("src", ('https:' == document.location.protocol ? 'https://' : 'http://') + "mox.moxielinks.com/profiling/dd.php?type=" + action + "&boutique=" + name + "&category_id=" + category + "&produit_id=" + product + "&transaction_amount=" + amount + "&transaction_id=" + reference +  '&refer=' + escape(refer) + "&refer2=" + refer2 + "&r=" + Math.round(Math.random() * 1000000000));
		ads.type = 'text/javascript';
		ads.async = "async";
		ads.defer = "defer";
		document.getElementsByTagName("head")[0].appendChild(ads);
	}
}
