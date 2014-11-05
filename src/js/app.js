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
                var $tile = $(document.createElement("div")).attr("class", "tile").prependTo(".memory");
                $(document.createElement("img")).attr({
                    class: 'picture',
                    src: 'img/memory0' + randoms[i] + '.png'
                }).prependTo($tile);
                $(document.createElement("div")).attr("class", "cache").prependTo($tile);

            }
        },
        click: function (e) {
            var that = $(this)[0];
            var e = e.currentTarget;
            this.selectedTiles.push(e);
            if (this.selectedTiles.length < 3) {
                console.log(this.selectedTiles);
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
                    if ($(that.selectedTiles[0]).find('.picture').attr('src') == $(that.selectedTiles[1]).find('.picture').attr('src')) {
                        console.log(this.selectedTiles);
                        this.selectedTiles = [];
                    } else {
                        var that = this;
                        _.delay(function () {
                            $(that.selectedTiles[1]).find('.cache').show();
                            $(that.selectedTiles[1]).find('.picture').hide();
                            $(that.selectedTiles[0]).find('.cache').show();
                            $(that.selectedTiles[0]).find('.picture').hide();
                        }, 500);
                        this.selectedTiles = [];
                    }
                    
                }
            }

        }

    };

    memory.displayTiles(6);

    $(".tile").click(function (e) {
        memory.click(e);
    });
});