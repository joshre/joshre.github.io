---
layout: post
title: Using Grunticon To Kill Your Iconfont
category: image-series
author: Josh Reeder-Esparza
---

There are a few ways that I have wrestled an icon set into my various projects. From [image sprites](http://alistapart.com/article/sprites), single-PNG background images, [iconfonts](https://icomoon.io/), to what I use now: [Grunticon](https://github.com/filamentgroup/grunticon).

Some things you should have a basic understanding of:

- Grunt


This is in my Gruntfile.js

        grunticon: {
            myIcons: {
                files: [{
                    expand: true,
                    cwd: '<%= conf.icons %>/optimized',
                    src: ['*.svg'],
                    dest: '<%= conf.icons %>/final'
                }],
                options: {
                    enhanceSVG: true,
                    pngpath: '<%= conf.appIcons %>',
                    compressPNG: true
                }
            }
        },
