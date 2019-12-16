---
layout: post
title: example-content-iii
slug: trabalho
menu: false
order: 1
description: >
---

## Discrete Fourier Transform applied to audio visualization

The fourier transform turns a function of time into a function of its composing frequencies.
Imagine playing a perfect A. This note has a frequency of 440 hz. 
Plotting it into a graph with time and amplitude gives us this graph, where we have maximums at a 
constant interval of 1/440 seconds. 
Or 440 maxes in a second.

![](https://skyborgff.github.io/Trabalho2/440_plot.png)


Applying a fourier transform to this function returns values that depend on frequency, and not time. 
For the function above, its fourier transform is the following.

![](https://skyborgff.github.io/Trabalho2/440_fourier.png)


Adding different frequencies together gives us more complex looking functions. 
For examples, this one is a sum of a few frequencies


At first glance, this may seem very hard to define, yet, with a fourier transform, we can easily know 
its base frequencies, making us able  to then define it as a sum of sine waves.

![](https://skyborgff.github.io/Trabalho2/3_fourier.png)


We can now see that it is made up of a sum of 3 frequencies: 110hz, 220hz, and 440hz.

With this information we can define the previous function as

\$$ y=cos(2\pi110+\sigma_1)+cos(2\pi220+\sigma_2)+cos(2\pi440+\sigma_3) $$

Where $$ \sigma $$ is the phase shift, and it can be discovered by taking 3 points of the original function.

![](https://skyborgff.github.io/Trabalho2/3_plot.png)


The Fourier Transform, $$ F(k_m) $$, of a function $$ f(x_n) $$, where $$ k_m $$ is the frequency and $$ x_n $$ 
is the time, is obtained with the following equation.

\$$ F(k_m)={\dfrac{1}{(\sqrt N)}}\sum_{n=0}^{N-1 }  f(x_n) e^{ik_mx_n} $$


This can be applied to audio, as audio is simply waves, air waves. 

Although audio frequencies change fast, we don’t talk / produce music that has a constant frequency. 
It has rhythm and changes over time.

When recording audio, we don't record every single point of it. It would be impossible. 
So we record points (air pressure) with a constant interval. This is called the sampling rate. 
It means the number of samples we take each second.


When using a fourier transform, we have to carefully choose our sampling rate.For example, 
if we take too few samples per second, meaning, we undersample, 
we won’t be able to accurately get the correct result out of a fourier transform.
As you can see in this example, the 440hz wave is masked as a 80hz wave. For this wave to be properly sampled, 
the sampling rate must be at least twice its frequency. 
This can be generalized for any group of waves. 
The sampling rate must be at least twice the frequency of the highest frequency wave we want to record. 
This is known as **Nyquist theorem**.


**The Nyquist Theorem**

Given a sound with maximum frequency component of f Hz, a sampling rate of at least 2f is required to avoid aliasing. 
The minimum acceptable sampling rate (2f in this context) is called the **Nyquist rate**.

Given a sampling rate of f, the highest-frequency sound component that can be correctly sampled is f/2. 
The highest frequency component that can be correctly sampled is called the **Nyquist frequency**.


Human hearing limit is around 20.000hz, so it has become industry standard to record audio at 44,100 Hz. 
This means that the maximum frequency we can sample is 22.500Hz, which is above human hearable, and is enough to 
record audio without any loss of frequencies for humans.

The audio we normally record doesn’t have a constant frequency, we need to define the amount of time we will assume 
as having constant frequencies and analyze it. 
This time needs to be at least as big as the lowest frequency we want to analyze. For example, the lowest 
frequency is 20hz, we need to analyze at least 0.05 seconds.

![](https://skyborgff.github.io/Trabalho2/spectro.png)

In this spectrogram you can clearly see the blocks of time chosen.


To obtain the Fourier transform we need to decide how many frequencies ($$ k_m $$) we are going to “test”, 
as what we want is a discrete function.
Now that we know our lowest frequency, and our highest, 
we can simply choose points along a constant interval between both. 
This creates the blocks in the frequency axis you see above.


Having chosen our audio to analyze, we can start by cutting it into the time blocks we chose, 
and use the Fourier transform to analyze the intensity of the chosen frequencies present in each block. 
That’s how an audio spectrogram works.

<div class="container">
        <script src="https://skyborgff.github.io/assets/js/main.js"></script>
        <script src="https://unpkg.com/wavesurfer.js"></script>
		<script src="https://unpkg.com/wavesurfer.js/dist/plugin/wavesurfer.spectrogram.js"></script>
    <!-- Initialize a div for WaveSurfer -->
    
<div id="waveform">

<div class="progress progress-striped active" id="progress-bar" style="display: none;">
                        <div class="progress-bar progress-bar-info" style="width: 100%;"></div>
                    </div>
</div>

<div id="wave-spectrogram"></div>

<div class="controls">
                    <button class="btn btn-primary" data-action="play">
                        <i class="glyphicon glyphicon-play"></i>
                        Play
                        /
                        <i class="glyphicon glyphicon-pause"></i>
                        Pause
                    </button>
                </div>

<!-- Add a file input where the user should drag the file to load into WaveForm -->
<input type="file" id="fileinput" />
  </div>
<script>
'use strict';
        
        var wavesurfer;
        
        // Init & load
        function initAndLoadSpectrogram(colorMap) {
            // Create an instance
            var options = {
                container: '#waveform',
                waveColor: 'violet',
                progressColor: 'purple',
                loaderColor: 'purple',
                cursorColor: 'navy',
                plugins: [
                    WaveSurfer.spectrogram.create({
                        container: '#wave-spectrogram',
                        labels: true,
                        fftSamples: 512,
                        pixelRatio: 1,
                        windowFunc: 'hann',
                        colorMap: colorMap
                    })
                ]
            };
        
            if (location.search.match('scroll')) {
                options.minPxPerSec = 100;
                options.scrollParent = true;
            }
        
            if (location.search.match('normalize')) {
                options.normalize = true;
            }
        
            wavesurfer = WaveSurfer.create(options);
        
            /* Progress bar */
            (function() {
                var progressDiv = document.querySelector('#progress-bar');
                var progressBar = progressDiv.querySelector('.progress-bar');
        
                var showProgress = function(percent) {
                    progressDiv.style.display = 'block';
                    progressBar.style.width = percent + '%';
                };
        
                var hideProgress = function() {
                    progressDiv.style.display = 'none';
                };
        
                wavesurfer.on('loading', showProgress);
                wavesurfer.on('ready', hideProgress);
                wavesurfer.on('destroy', hideProgress);
                wavesurfer.on('error', hideProgress);
            })();
        
        	    // Once the user loads a file in the fileinput, the file should be loaded into waveform
            document.getElementById("fileinput").addEventListener('change', function(e){
                var file = this.files[0];
        
                if (file) {
                    var reader = new FileReader();
                    
                    reader.onload = function (evt) {
                        // Create a Blob providing as first argument a typed array with the file buffer
                        var blob = new window.Blob([new Uint8Array(evt.target.result)]);
        
                        // Load the blob into Wavesurfer
                        wavesurfer.loadBlob(blob);
                    };
        
                    reader.onerror = function (evt) {
                        console.error("An error ocurred reading the file: ", evt);
                    };
        
                    // Read File as an ArrayBuffer
                    reader.readAsArrayBuffer(file);
                }
            }, false);
        
        }
        
        document.addEventListener('DOMContentLoaded', function() {
        let color_map = [[0,0,0,1],[0.011764705882352941,0,0,1],[0.023529411764705882,0,0,1],[0.03529411764705882,0,0,1],[0.047058823529411764,0,0,1],[0.058823529411764705,0,0,1],[0.07058823529411765,0,0,1],[0.08235294117647059,0,0,1],[0.09411764705882353,0,0,1],[0.10588235294117647,0,0,1],[0.11764705882352941,0,0,1],[0.12941176470588237,0,0,1],[0.1411764705882353,0,0,1],[0.15294117647058825,0,0,1],[0.16470588235294117,0,0,1],[0.17647058823529413,0,0,1],[0.18823529411764706,0,0,1],[0.2,0,0,1],[0.21176470588235294,0,0,1],[0.2235294117647059,0,0,1],[0.23529411764705882,0,0,1],[0.24705882352941178,0,0,1],[0.25882352941176473,0,0,1],[0.27058823529411763,0,0,1],[0.2823529411764706,0,0,1],[0.29411764705882354,0,0,1],[0.3058823529411765,0,0,1],[0.3176470588235294,0,0,1],[0.32941176470588235,0,0,1],[0.3411764705882353,0,0,1],[0.35294117647058826,0,0,1],[0.36470588235294116,0,0,1],[0.3764705882352941,0,0,1],[0.38823529411764707,0,0,1],[0.4,0,0,1],[0.4117647058823529,0,0,1],[0.4235294117647059,0,0,1],[0.43529411764705883,0,0,1],[0.4470588235294118,0,0,1],[0.4549019607843137,0,0,1],[0.4666666666666667,0,0,1],[0.47843137254901963,0,0,1],[0.49019607843137253,0,0,1],[0.5019607843137255,0,0,1],[0.5137254901960784,0,0,1],[0.5254901960784314,0,0,1],[0.5372549019607843,0,0,1],[0.5490196078431373,0,0,1],[0.5607843137254902,0,0,1],[0.5725490196078431,0,0,1],[0.5843137254901961,0,0,1],[0.596078431372549,0,0,1],[0.6078431372549019,0,0,1],[0.6196078431372549,0,0,1],[0.6313725490196078,0,0,1],[0.6431372549019608,0,0,1],[0.6549019607843137,0,0,1],[0.6666666666666666,0,0,1],[0.6784313725490196,0,0,1],[0.6901960784313725,0,0,1],[0.7019607843137254,0,0,1],[0.7137254901960784,0,0,1],[0.7254901960784313,0,0,1],[0.7372549019607844,0,0,1],[0.7490196078431373,0,0,1],[0.7607843137254902,0,0,1],[0.7725490196078432,0,0,1],[0.7843137254901961,0,0,1],[0.796078431372549,0,0,1],[0.807843137254902,0,0,1],[0.8196078431372549,0,0,1],[0.8313725490196079,0,0,1],[0.8431372549019608,0,0,1],[0.8549019607843137,0,0,1],[0.8666666666666667,0,0,1],[0.8784313725490196,0,0,1],[0.8901960784313725,0,0,1],[0.9019607843137255,0,0,1],[0.9019607843137255,0.011764705882352941,0,1],[0.9058823529411765,0.023529411764705882,0,1],[0.9058823529411765,0.03137254901960784,0,1],[0.9058823529411765,0.043137254901960784,0,1],[0.9098039215686274,0.054901960784313725,0,1],[0.9098039215686274,0.06666666666666667,0,1],[0.9098039215686274,0.07450980392156863,0,1],[0.9137254901960784,0.08627450980392157,0,1],[0.9137254901960784,0.09803921568627451,0,1],[0.9137254901960784,0.10980392156862745,0,1],[0.9176470588235294,0.11764705882352941,0,1],[0.9176470588235294,0.12941176470588237,0,1],[0.9176470588235294,0.1411764705882353,0,1],[0.9215686274509803,0.15294117647058825,0,1],[0.9215686274509803,0.1607843137254902,0,1],[0.9215686274509803,0.17254901960784313,0,1],[0.9254901960784314,0.1843137254901961,0,1],[0.9254901960784314,0.19607843137254902,0,1],[0.9254901960784314,0.20784313725490197,0,1],[0.9294117647058824,0.21568627450980393,0,1],[0.9294117647058824,0.22745098039215686,0,1],[0.9294117647058824,0.23921568627450981,0,1],[0.9333333333333333,0.25098039215686274,0,1],[0.9333333333333333,0.25882352941176473,0,1],[0.9333333333333333,0.27058823529411763,0,1],[0.9372549019607843,0.2823529411764706,0,1],[0.9372549019607843,0.29411764705882354,0,1],[0.9372549019607843,0.30196078431372547,0,1],[0.9411764705882353,0.3137254901960784,0,1],[0.9411764705882353,0.3254901960784314,0,1],[0.9411764705882353,0.33725490196078434,0,1],[0.9450980392156862,0.34509803921568627,0,1],[0.9450980392156862,0.3568627450980392,0,1],[0.9450980392156862,0.3686274509803922,0,1],[0.9490196078431372,0.3803921568627451,0,1],[0.9490196078431372,0.38823529411764707,0,1],[0.9490196078431372,0.4,0,1],[0.9529411764705882,0.4117647058823529,0,1],[0.9529411764705882,0.4235294117647059,0,1],[0.9529411764705882,0.43529411764705883,0,1],[0.9529411764705882,0.44313725490196076,0,1],[0.9568627450980393,0.4549019607843137,0,1],[0.9568627450980393,0.4666666666666667,0,1],[0.9568627450980393,0.47843137254901963,0,1],[0.9607843137254902,0.48627450980392156,0,1],[0.9607843137254902,0.4980392156862745,0,1],[0.9607843137254902,0.5098039215686274,0,1],[0.9647058823529412,0.5215686274509804,0,1],[0.9647058823529412,0.5294117647058824,0,1],[0.9647058823529412,0.5411764705882353,0,1],[0.9686274509803922,0.5529411764705883,0,1],[0.9686274509803922,0.5647058823529412,0,1],[0.9686274509803922,0.5725490196078431,0,1],[0.9725490196078431,0.5843137254901961,0,1],[0.9725490196078431,0.596078431372549,0,1],[0.9725490196078431,0.6078431372549019,0,1],[0.9764705882352941,0.6196078431372549,0,1],[0.9764705882352941,0.6274509803921569,0,1],[0.9764705882352941,0.6392156862745098,0,1],[0.9803921568627451,0.6509803921568628,0,1],[0.9803921568627451,0.6627450980392157,0,1],[0.9803921568627451,0.6705882352941176,0,1],[0.984313725490196,0.6823529411764706,0,1],[0.984313725490196,0.6941176470588235,0,1],[0.984313725490196,0.7058823529411765,0,1],[0.9882352941176471,0.7137254901960784,0,1],[0.9882352941176471,0.7254901960784313,0,1],[0.9882352941176471,0.7372549019607844,0,1],[0.9921568627450981,0.7490196078431373,0,1],[0.9921568627450981,0.7568627450980392,0,1],[0.9921568627450981,0.7686274509803922,0,1],[0.996078431372549,0.7803921568627451,0,1],[0.996078431372549,0.792156862745098,0,1],[0.996078431372549,0.8,0,1],[1,0.8117647058823529,0,1],[1,0.8235294117647058,0,1],[1,0.8235294117647058,0.011764705882352941,1],[1,0.8274509803921568,0.0196078431372549,1],[1,0.8274509803921568,0.03137254901960784,1],[1,0.8313725490196079,0.0392156862745098,1],[1,0.8313725490196079,0.050980392156862744,1],[1,0.8352941176470589,0.058823529411764705,1],[1,0.8352941176470589,0.07058823529411765,1],[1,0.8392156862745098,0.0784313725490196,1],[1,0.8392156862745098,0.09019607843137255,1],[1,0.8392156862745098,0.09803921568627451,1],[1,0.8431372549019608,0.10980392156862745,1],[1,0.8431372549019608,0.11764705882352941,1],[1,0.8470588235294118,0.12941176470588237,1],[1,0.8470588235294118,0.13725490196078433,1],[1,0.8509803921568627,0.14901960784313725,1],[1,0.8509803921568627,0.1568627450980392,1],[1,0.8549019607843137,0.16862745098039217,1],[1,0.8549019607843137,0.17647058823529413,1],[1,0.8549019607843137,0.18823529411764706,1],[1,0.8588235294117647,0.19607843137254902,1],[1,0.8588235294117647,0.20784313725490197,1],[1,0.8627450980392157,0.21568627450980393,1],[1,0.8627450980392157,0.22745098039215686,1],[1,0.8666666666666667,0.23529411764705882,1],[1,0.8666666666666667,0.24705882352941178,1],[1,0.8666666666666667,0.2549019607843137,1],[1,0.8705882352941177,0.26666666666666666,1],[1,0.8705882352941177,0.27450980392156865,1],[1,0.8745098039215686,0.28627450980392155,1],[1,0.8745098039215686,0.29411764705882354,1],[1,0.8784313725490196,0.3058823529411765,1],[1,0.8784313725490196,0.3137254901960784,1],[1,0.8823529411764706,0.3254901960784314,1],[1,0.8823529411764706,0.3333333333333333,1],[1,0.8823529411764706,0.34509803921568627,1],[1,0.8862745098039215,0.35294117647058826,1],[1,0.8862745098039215,0.36470588235294116,1],[1,0.8901960784313725,0.37254901960784315,1],[1,0.8901960784313725,0.3843137254901961,1],[1,0.8941176470588236,0.39215686274509803,1],[1,0.8941176470588236,0.403921568627451,1],[1,0.8980392156862745,0.4117647058823529,1],[1,0.8980392156862745,0.4235294117647059,1],[1,0.8980392156862745,0.43137254901960786,1],[1,0.9019607843137255,0.44313725490196076,1],[1,0.9019607843137255,0.45098039215686275,1],[1,0.9058823529411765,0.4627450980392157,1],[1,0.9058823529411765,0.47058823529411764,1],[1,0.9098039215686274,0.4823529411764706,1],[1,0.9098039215686274,0.49019607843137253,1],[1,0.9137254901960784,0.5019607843137255,1],[1,0.9137254901960784,0.5098039215686274,1],[1,0.9137254901960784,0.5215686274509804,1],[1,0.9176470588235294,0.5294117647058824,1],[1,0.9176470588235294,0.5411764705882353,1],[1,0.9215686274509803,0.5490196078431373,1],[1,0.9215686274509803,0.5607843137254902,1],[1,0.9254901960784314,0.5686274509803921,1],[1,0.9254901960784314,0.5803921568627451,1],[1,0.9254901960784314,0.5882352941176471,1],[1,0.9294117647058824,0.6,1],[1,0.9294117647058824,0.6078431372549019,1],[1,0.9333333333333333,0.6196078431372549,1],[1,0.9333333333333333,0.6274509803921569,1],[1,0.9372549019607843,0.6392156862745098,1],[1,0.9372549019607843,0.6470588235294118,1],[1,0.9411764705882353,0.6588235294117647,1],[1,0.9411764705882353,0.6666666666666666,1],[1,0.9411764705882353,0.6784313725490196,1],[1,0.9450980392156862,0.6862745098039216,1],[1,0.9450980392156862,0.6980392156862745,1],[1,0.9490196078431372,0.7058823529411765,1],[1,0.9490196078431372,0.7176470588235294,1],[1,0.9529411764705882,0.7254901960784313,1],[1,0.9529411764705882,0.7372549019607844,1],[1,0.9568627450980393,0.7450980392156863,1],[1,0.9568627450980393,0.7568627450980392,1],[1,0.9568627450980393,0.7647058823529411,1],[1,0.9607843137254902,0.7764705882352941,1],[1,0.9607843137254902,0.7843137254901961,1],[1,0.9647058823529412,0.796078431372549,1],[1,0.9647058823529412,0.803921568627451,1],[1,0.9686274509803922,0.8156862745098039,1],[1,0.9686274509803922,0.8235294117647058,1],[1,0.9725490196078431,0.8352941176470589,1],[1,0.9725490196078431,0.8431372549019608,1],[1,0.9725490196078431,0.8549019607843137,1],[1,0.9764705882352941,0.8627450980392157,1],[1,0.9764705882352941,0.8745098039215686,1],[1,0.9803921568627451,0.8823529411764706,1],[1,0.9803921568627451,0.8941176470588236,1],[1,0.984313725490196,0.9019607843137255,1],[1,0.984313725490196,0.9137254901960784,1],[1,0.984313725490196,0.9215686274509803,1],[1,0.9882352941176471,0.9333333333333333,1],[1,0.9882352941176471,0.9411764705882353,1],[1,0.9921568627450981,0.9529411764705882,1],[1,0.9921568627450981,0.9607843137254902,1],[1,0.996078431372549,0.9725490196078431,1],[1,0.996078431372549,0.9803921568627451,1],[1,1,0.9921568627450981,1],[1,1,1,1]]
                initAndLoadSpectrogram(color_map);
        });
        
        	
        var wavesurfer = window.wavesurfer;
        
        var GLOBAL_ACTIONS = {
            play: function() {
                wavesurfer.playPause();
            },
        
            back: function() {
                wavesurfer.skipBackward();
            },
        
            forth: function() {
                wavesurfer.skipForward();
            },
        
            'toggle-mute': function() {
                wavesurfer.toggleMute();
            }
        };
        
        // Bind actions to buttons and keypresses
        document.addEventListener('DOMContentLoaded', function() {
            document.addEventListener('keydown', function(e) {
                var map = {
                    32: 'play', // space
                    37: 'back', // left
                    39: 'forth' // right
                };
                var action = map[e.keyCode];
                if (action in GLOBAL_ACTIONS) {
                    if (document == e.target || document.body == e.target) {
                        e.preventDefault();
                    }
                    GLOBAL_ACTIONS[action](e);
                }
            });
        
            [].forEach.call(document.querySelectorAll('[data-action]'), function(el) {
                el.addEventListener('click', function(e) {
                    var action = e.currentTarget.dataset.action;
                    if (action in GLOBAL_ACTIONS) {
                        e.preventDefault();
                        GLOBAL_ACTIONS[action](e);
                    }
                });
            });
        });
        </script>