define("mip-ad-random", ["require", "customElement", "zepto"], function (i) {
    function e() {
        var t = this.element;
        if (!t.isRender) {
            t.isRender = !0;
            var rank = Math.round(Math.random() * 10);
            var ad = $('.con').children('div');
            if (ad.eq(rank).hasClass('title') && ad.eq(rank).hasClass('content-pic')) {
                rank++;
            }
            ad.eq(rank).append('<div class="div_img1"><mip-img popup src="http://img0.xiejing.com/static/uploads/allimg/201610/26/1477446024433457.jpg"></mip-img><div class=""><p><a href="" target="_blank">微信到底是微信服务号到底是怎么回事微信服务号到底是怎么回事怎么回事？</a></p></div><div class="oSpan"><i>广告</i></div></div>')
        }
    }
    var $ = i("zepto");
    var t = i("customElement").create();
    return t.prototype.init = function () {
        this.build = e
    }, t
}),
require(["mip-ad-random"], function (i) {
        MIP.registerMipElement("mip-ad-random", i, MIP.css.mipAdRandom)
});



 $(".gonggao").append('<div id="_Top_bg"><div id="_Top_pic"><div id="_Top_left"></div><div id="_Top_right"></div></div></div>');
        $(".tu_zixun").before('<div id="_Right_pic"></div>');
        $(".txt_content").append(' <div class="_Bottom_pic"></div>');
