const mq = window.matchMedia("(max-width: 767px)");
if ($(".pageBannerSection").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !0,
    focusOnSelect: !0,
    arrows: !1,
    autoplay: !0
}), $(".cardTileCarousal").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: !0,
    infinite: !1,
    focusOnSelect: !0,
    arrows: !0,
    autoplay: !1,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}), $(".teamCarousal").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: !0,
    focusOnSelect: !0,
    arrows: !1,
    autoplay: !0,
    responsive: [{
        breakpoint: 770,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}), $(".testimonialCarousal").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !0,
    focusOnSelect: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 12e3
}), $(".pintileCarousal").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: !0,
    focusOnSelect: !0,
    arrows: !1,
    autoplay: !0,
    responsive: [{
        breakpoint: 770,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}), $(".mythCarousal").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !0,
    focusOnSelect: !0,
    arrows: !1,
    autoplay: !0
}), $(".carousalParent__blog").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: !1,
    focusOnSelect: !0,
    arrows: !1,
    autoplay: !0,
    centerMode: !0,
    centerPadding: "34px",
    responsive: [{
        breakpoint: 1800,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 1440,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !1
        }
    }]
}), $(".handPickSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: !0,
    focusOnSelect: !0,
    arrows: !1,
    autoplay: !0,
    responsive: [{
        breakpoint: 770,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}), $(".home-testimonials-carousal").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !0,
    focusOnSelect: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 12e3
}), $(".navListToggler").click((function() {
    mq.matches && ($(".navList").addClass("flyIn"), $(".navOut").addClass("flyIn"), $("body").addClass("overflowOut"))
})), $("[modal-toggle]").click((function() {
    var s = $(this).attr("modal-toggle");
    //$("#" + s).addClass("flyIn"), $("body").addClass("overflowOut")
    var s = $(this).attr("modal-toggle");
    if($('#' + s).find('.csModal__content').find('.csModal__content__iframeWrapper').find('iframe').attr('src') === '' ||
        $('#' + s).find('.csModal__content').find('.csModal__content__iframeWrapper').find('iframe').attr('src') === 'about:blank' ) {
        $('#' + s).find('.csModal__content').find('.csModal__content__iframeWrapper').find('iframe').hide();
        $('#' + s).find('.csModal__content').find('.csModal__content__iframeWrapper').find('iframe').attr('src', $('#' + s).find('.csModal__content').find('.csModal__content__iframeWrapper').find('.iframeUrl').val())
    }
    $("#" + s).addClass("flyIn"), $("body").addClass("overflowOut")
})), $(".csModal__close").click((function() {
    $(this).closest(".csModal").removeClass("flyIn"), $("body").removeClass("overflowOut")
})), $(".navOut").click((function() {
    $(this).removeClass("flyIn"), $(".navList").removeClass("flyIn"), $("body").removeClass("overflowOut")
})), $(document).ready((function() {
    $(".navListAnchor").click((function() {
        $(".navListAnchor").removeClass("active"), $(this).addClass("active"), $(".contentArea").animate({
            scrollTop: 0
        }, 0);
        let s = $(this).attr("title");
        $(".contentArea").animate({
            scrollTop: $("#" + s).offset().top - 90
        }, 2e3), mq.matches && $(".navOut").trigger("click")
    })), $(".navigatorListAnchor").click((function() {
        $(".navigatorListAnchor").removeClass("active"), $(this).addClass("active"), $(".contentArea").animate({
            scrollTop: 0
        }, 0);
        let s = $(this).attr("scroll-to");
        if (mq.matches) {
            var o = $(this).text();
            $(this).closest(".navigatorList").siblings(".csSelectDropToggle").text(o), $(".csSelectDropToggle").trigger("click"), $(".contentArea").animate({
                scrollTop: $("#" + s).offset().top - 50
            }, 2e3)
        } else $(".contentArea").animate({
            scrollTop: $("#" + s).offset().top - 150
        }, 2e3)
    }))
    $('.csModal__content__iframeWrapper').find('iframe').on('load', function() {
        let obj = this;
        var existCondition = setInterval(function() {
            if ($(obj).find('document') !== null) {
                clearInterval(existCondition);
                $(obj).siblings('.iframeLoader').hide();
                $(obj).show();
            }
        }, 100); // check every 100ms

    });
})), $(".sectionNavigator").length > 0) var tp = $(".sectionNavigator").offset().top;
$(".contentArea").scroll((function() {
    $(this).scrollTop() + $(".pageHeadItems").outerHeight() >= tp ? $(".sectionNavigator").addClass("fixedOnTop") : $(".sectionNavigator").removeClass("fixedOnTop")
})), $(".csSelectDropToggle").click((function() {
    $(".navigatorList").slideToggle()
})), $(".hasChild").hover((function() {
    mq.matches || $(this).find(".childIn").toggle()
})), $(".navListAnchor.hasChild").click((function() {
    mq.matches && $(this).siblings(".childIn").show()
})), $(".childOut").click((function() {
    $(this).closest(".childIn").hide()
})), $(".searchToggler").click((function() {
    $(this).closest(".searchInNav").siblings(".searchInputHolder").slideToggle()
})), $("[sort-type]").click((function() {
    var s = $(this).attr("sort-type");
    $(".sortList__anchor").removeClass("active"), $(this).addClass("active"), $(this).closest(".sortParentIn").find(".sortingTab").removeClass("active"), $(this).closest(".sortParentIn").find("#" + s).addClass("active")
})), $((function() {
    $("#myform").submit((function(s) {
        s.preventDefault();
        var o = s.currentTarget.action;
        $.ajax({
            url: o,
            type: "post",
            dataType: "application/json",
            data: $("#myform").serialize(),
            success: function(s) {
                alert(1)
            }
        })
    }))
}));


$(".fullCardCarousal").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !0,
    focusOnSelect: !0,
    arrows: !1,
    autoplay: !0,
    responsive: [{
        breakpoint: 767,
        settings: {
            adaptiveHeight: true,
        }
    }]
})