var layerCount = 6;
        var starCount = 70;
        var universe = document.getElementById('universe');
        var w = window;
        var d = document;
        var e = d.documentElement;
        var g = d.getElementsByTagName('body')[0];
        var width = w.innerWidth || e.clientWidth || g.clientWidth;
        var height = w.innerHeight || e.clientHeight || g.clientHeight;
        for (var l = 0; l < layerCount; ++l) {
            var layer = document.createElement('div');
            layer.setAttribute('id', 'layer' + l);
            layer.setAttribute('class', 'starfield');
            universe.appendChild(layer);
            for (var i = 0; i < starCount; ++i) {
                var xpos = Math.round(Math.random() * width);
                var ypos = Math.round(Math.random() * height);
                for (var s = 0; s < 2; ++s) {
                    var star = document.createElement('div');
                    star.setAttribute('class', 'star' + l);
                    star.style.webkitTransform = 'translate(' + (xpos + s * width) + 'px, ' + ypos + 'px)';
                    star.style.transform = 'translate(' + (xpos + s * width) + 'px, ' + ypos + 'px)';
                    star.style.backgroundColor = 'black';//rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ')';
                    layer.appendChild(star);
                }
            }
            layer.animate([{ transform: 'translate3d(0, 0, 0)' },
            { transform: 'translate3d(-' + width + 'px, 0, 0)' }],
                { duration: Math.pow(2, layerCount - l) * 4000, iterations: Infinity });
        }