"use strict"

$(document).ready(function () {

    var memory = {
        selectedTiles: [],
        displayTiles: function (n) {
            var randoms = [];
            for (var i = 0; i < n; i += 2) {
                randoms[i] = randoms[i + 1] = _.random(1, 6);
            }
            randoms = _.shuffle(randoms);

            for (var i = 0; i < n; i++) {
                var $tile = $(document.createElement("div")).attr("class", "tile").attr("id", "tile" + i).prependTo(".memory");
                $(document.createElement("img")).attr({
                    class: 'picture',
                    src: 'img/memory0' + randoms[i] + '.png'
                }).prependTo($tile);
                $(document.createElement("div")).attr("class", "cache").prependTo($tile);

            }
        },
        click: function (e) {
            var $st = $(this)[0].selectedTiles;
            var e = e.currentTarget;
            this.selectedTiles.push(e);

            if (this.selectedTiles.length < 3) {
                var $cache = $(e).find('.cache');
                var $picture = $(e).find('.picture');
                if ($cache.is(':visible')) {
                    $cache.hide();
                    $picture.show();
                } else {
                    $cache.show();
                    $picture.hide();
                }


                if (this.selectedTiles.length == 2) {
                    if ($($st[0]).find('.picture').attr('src') == $($st[1]).find('.picture').attr('src')) {
                        $($st[0]).off('click');
                        $($st[1]).off('click');
                        
                        this.selectedTiles = [];
                    } else {
                        var that = this;
                        _.delay(function () {
                            $($st[1]).find('.cache').show();
                            $($st[1]).find('.picture').hide();
                            $($st[0]).find('.cache').show();
                            $($st[0]).find('.picture').hide();
                        }, 1000);
                        this.selectedTiles = [];
                    }

                }
            }

        }

    };

    memory.displayTiles(20);

    $(".tile").click(function (e) {
        memory.click(e);
    });
});