---
layout: page
title: From a measured record to a model
description: One pendulum, one free decay, and the question of when a model is good enough.
importance: 4
---

<figure class="pd-setup">
  <img src="{{ '/assets/img/pendulum/setup.png' | relative_url }}" alt="Pendulum on a ball bearing, magnets on the rod, two magnet hubs rotated by theta that tune the stiffness, and a laser Doppler vibrometer on the bob" width="1100" height="796" loading="lazy">
  <figcaption>The rig. Magnet hubs tune the stiffness; a laser vibrometer reads the bob.</figcaption>
</figure>

## Try the models

<div id="bench" class="bench">
  <div class="bench-ctl" role="group" aria-label="Model">
    <button type="button" data-model="first" aria-pressed="true">First guess</button>
    <button type="button" data-model="cal" aria-pressed="false">Fit on 0–8 s</button>
    <button type="button" data-model="fric" aria-pressed="false">+ dry friction</button>
    <label class="bench-mu">μ <input id="bench-mu" type="range" min="0" max="1.5" step="0.05" value="0" aria-label="Dry-friction strength mu"></label>
    <label class="bench-zoom"><input id="bench-zoom" type="checkbox"> late decay</label>
  </div>
  <svg viewBox="0 0 900 345" role="img" aria-label="Measured displacement of the pendulum against the selected model, with the error below"></svg>
  <div class="bench-out">
    <p class="bench-model" data-o="label"></p>
    <dl>
      <div><dt>f<sub>n</sub></dt><dd data-o="fn"></dd></div>
      <div><dt>ζ</dt><dd data-o="z"></dd></div>
      <div><dt>μ</dt><dd data-o="mu"></dd></div>
      <div><dt>error, 0–8 s</dt><dd data-o="e1"></dd></div>
      <div><dt>error, 14–22 s</dt><dd data-o="e2"></dd></div>
    </dl>
  </div>
  <p class="bench-key"><span class="k-meas"></span>measured <span class="k-sim"></span>model ẍ + 2ζω<sub>n</sub>ẋ + ω<sub>n</sub><sup>2</sup>x + μ sgn(ẋ) = 0</p>
</div>

## Four suspects

<ol class="suspects">
  <li><b>The start</b><span>measured, not fitted</span><i>ruled out</i></li>
  <li><b>The data</b><span>repeatable to 1.3 %</span><i>ruled out</i></li>
  <li><b>The fit</b><span>passes on 0–8 s, fails after</span><i>a clue</i></li>
  <li class="hit"><b>The physics</b><span>the bearing adds dry friction</span><i>found</i></li>
</ol>

## What is still left

<figure>
  <img src="{{ '/assets/img/pendulum/frequency-amplitude.png' | relative_url }}" alt="Frequency of each cycle against amplitude: the measured frequency rises about 1 percent as the swing dies, while linear and dry-friction simulations stay flat" width="1500" height="694" loading="lazy">
  <figcaption>As the swing dies the pendulum stiffens slightly. No damping term can do that.</figcaption>
</figure>

<p class="pd-end">Refine a model only while it changes the conclusion.</p>

<p class="pd-note">From a research-skills session at LEMS, IISc (Part B; Part A by Avinash Umashankar). Measured data: free decay at hub angle 5°, laser Doppler vibrometer. Errors are RMS displacement error relative to the peak in each window, computed live in your browser.</p>

<script defer src="{{ '/assets/js/pendulum-bench.js' | relative_url }}"></script>
