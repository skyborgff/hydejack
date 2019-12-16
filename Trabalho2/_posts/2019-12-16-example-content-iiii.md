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
        <script src="./scripts/main.js"></script>
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