(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}jQuery((function(e){e(".dtq-swapped-img-selector").each((function(){var a,o,n,i,s=e(this).find(".dtq-swapped-img"),d=s.data("schema");d&&"object"===t(d)&&(a=s,o={desktop:d.desktop,tablet:d.tablet,phone:d.phone,hover:d.hover},n=function(t,e){e&&e.length>0&&jQuery(t).attr("src",e)},(i=function(){var t=jQuery(document).width();n(a,t<768?o.phone:t>=768&&t<981?o.tablet:o.desktop)})(),jQuery(window).on("resize",i),jQuery(a).closest(".dtq-swapped-img-selector").on({mouseenter:function(){n(a,o.hover),jQuery(a).addClass("dtq-img-hovered")},mouseleave:function(){i(),jQuery(a).removeClass("dtq-img-hovered")}}))})),e(".dtq-carousel").each((function(){var t=e(this),a=t.data("settings");t.slick(Object.assign({edgeFriction:.35,useTransform:!0,touchThreshold:600},a))})),e(".dtq-lightbox").magnificPopup({type:"image",mainClass:"mfp-with-zoom",gallery:{enabled:!1},zoom:{enabled:!0,duration:300,easing:"ease-in-out"}}),e(".dtq-animated-text").each((function(){var t=e(this),a=t.data("settings"),o=t.attr("id"),n=t.data("type"),i="#".concat(o);switch(n){case"typed":new Typed("".concat(i," .dtq-typed-text"),a);break;case"tilt":t.find(".dtq-animated-text-tilt").textillate(a),console.log(a);break;case"slide":var s=t.find(".dtq-animated-text-slide"),d=s.find("li").removeClass("text-in").first().addClass("text-in");setInterval((function(){var t=s.find(".text-in").addClass("text-out").removeClass("text-in").next("li");t.length?t.addClass("text-in").removeClass("text-out"):d.addClass("text-in").removeClass("text-out")}),parseInt(a.slide_gap));break;default:console.warn("Unsupported animation type:",n)}})),e(".dtq-image-compare").each((function(){var t=e(this).data("offsetpct"),a=e(this).data("moveonhover"),o=e(this).data("orientation"),n=e(this).data("beforelabel"),i=e(this).data("afterlabel"),s=e(this).data("overlay");e(this).find(".dtq-image-compare-container").twentytwenty({default_offset_pct:t,move_slider_on_hover:"on"===a,orientation:o,before_label:n,after_label:i,no_overlay:"on"!==s,move_with_handle_only:!1,click_to_move:!0})}));var a=e(".dtq-news-tricker");a&&a.length>0&&a.each((function(){var t=e(this).find("#parent").width();e(this).get(0).style.setProperty("--width","".concat(t,"px"))})),e(".dtq-counter .dtq-number-text").each((function(t,e){(0,window.counterUp.default)(e,{duration:5e3,delay:16})})),e(".dtq-scroll-image").each((function(){!function(t){var e=t.find(".dtq-scroll-image-el"),a=t.find(".dtq-scroll-image-overlay"),o=t.data("dir-hover"),n=t.data("dir-scroll");function i(){return"X"===o[0]?parseInt(e.width())-parseInt(t.width()):parseInt(e.height())-parseInt(t.height())}if("none"!==o){var s="X_rtl"===o||"Y_btt"===o?"-":"",d=o[0],r=Math.max(i(),0);t.on("mouseenter",(function(){e.css("transform","translate".concat(d,"(").concat(s).concat(r,"px)"))})),t.on("mouseleave",(function(){e.css("transform","translate".concat(d,"(0px)"))}))}"none"!==n&&("horizontal"===n?a.css({width:e.width(),height:e.height()}):a.css({width:"100%",height:"100%"}))}(e(this))}));var o=e(".dtq-popup-yt, .dtq-popup-vm");o.length>0&&o.each((function(){if(!e(this).data("popup-initialized")){e(this).data("popup-initialized",!0);var t=e(this).attr("href"),a="";if("vm"===e(this).data("type")){var o=t.includes("?")?"&autoplay=1":"?autoplay=1";if(t.includes("player"))a=t+o;else{var n=t.split("/").pop();a="//player.vimeo.com/video/".concat(n).concat(o)}}e(this).magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:140,preloader:!0,fixedContentPos:!1,iframe:{markup:'\n                    <div class="mfp-iframe-scaler">\n                        <div class="mfp-close"></div>\n                        <iframe class="mfp-iframe" frameborder="0" allow="autoplay" allowfullscreen></iframe>\n                    </div>\n                ',patterns:{youtube:{index:"youtube.com/",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:a}}},callbacks:{beforeOpen:function(){var t=e(this.st.el).data("order");e("body").addClass("dtq-video-open dtq-video-popup-".concat(t))},close:function(){var t=e(this.st.el).data("order");e("body").removeClass("dtq-video-open dtq-video-popup-".concat(t))}}})}})),e(".dtq-popup-video").magnificPopup({type:"inline",mainClass:"mfp-fade",removalDelay:100,closeOnContentClick:!1,midClick:!1,callbacks:{beforeOpen:function(){e("body").addClass("dtq-modal-open dtq-video-popup")},open:function(){var t=e(this.st.el).data("mfp-src");e(".dtq-modal").addClass("open"),e("".concat(t," video")).trigger("play")},close:function(){var t=e(this.st.el).data("mfp-src");e("".concat(t," video")).trigger("pause"),e("body").removeClass("dtq-modal-open dtq-video-popup"),e(".dtq-modal").removeClass("open")}}}),e(".dtq-alert-dismiss").each((function(){e(this).on("click",(function(){e(this).parents(".ba_alert").fadeOut(400)}))}))}))})();