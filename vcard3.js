    var url=window.location.href,uri=window.location.toString(),
    rel=document.querySelector('link[rel="canonical"]').getAttribute('href'),
    fb1=url.substring(0,url.indexOf('?fbclid')),fb2=url.substring(0,url.indexOf('&fbclid')),
    gi1=url.substring(0,url.indexOf('?gidzl')),gi2=url.substring(0,url.indexOf('&gidzl')),
    m1=url.substring(0,url.indexOf('?m=1')),m2=url.substring(0,url.indexOf('&m=1'))
    if((uri.length-fb1.length)>0)window.history.replaceState({},document.title,fb1)
    if((uri.length-fb2.length)>0)window.history.replaceState({},document.title,fb2)
    if((uri.length-gi1.length)>0)window.history.replaceState({},document.title,gi1)
    if((uri.length-gi2.length)>0)window.history.replaceState({},document.title,gi2)
    if((uri.length-m1.length)>0)window.history.replaceState({},document.title,m1)
    if((uri.length-m2.length)>0)window.history.replaceState({},document.title,m2)
        $('.nav__item a').on('click', function () {
            $('.nav__item a').removeClass('active');
            $(this).addClass('active');
		})
$(".nav__item a[href='" + location.pathname + "']:not([href='/'])").addClass("active").each(function() {
	$(".nav__item a[href='" + $(this).attr("href") + "']").addClass("active")
});
    $(function() {
        $("#load-more-link").each(function() {
            var e = $(this).data("load");
            e && $("#load-more-link").show(), $("#load-more-link").on("click", function(t) {
                $("#load-more-link").hide(), $.ajax({
                    url: e,
                    success: function(t) {
                        var n = $(t).find(".Blog .bt-items");
                        n.find(".news-item").addClass("post-animated post-fadeInUp"), $(".Blog .bt-items").append(n.html()), (e = $(t).find("#load-more-link").data("load")) ? $("#load-more-link").show() : ($("#load-more-link").hide(), $("#blog-pager .no-more").addClass("show"))
                    },
                    beforeSend: function() {
                        $("#blog-pager .loading").show()
                    },
                    complete: function() {
                        $("#blog-pager .loading").hide()
                    }
                }), t.preventDefault()
            })
        })
    })