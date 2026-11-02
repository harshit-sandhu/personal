---
layout: page
title: Reflections
permalink: /reflections/
description: What waves, experiments and failed fits have taught me along the way.
nav: true
nav_order: 4
---

<div class="rf-hero" aria-hidden="true">
  <svg viewBox="0 0 800 120" preserveAspectRatio="none">
    <line class="rf-wall" x1="560" y1="8" x2="560" y2="112"/>
    <path class="rf-base" d="M0 60 H560"/>
    <path class="rf-in" d="M-40 60 c 10 0 14 -34 26 -34 s 16 34 26 34 s 14 0 20 0"/>
    <path class="rf-out" d="M-40 60 c 10 0 14 -22 26 -22 s 16 22 26 22 s 14 0 20 0"/>
    <text x="572" y="20">interface</text>
  </svg>
</div>

<p class="rf-lead">Short write-ups of moments from my research that changed how I think: an observation that did not fit, a model that failed in an instructive way, an idea that finally clicked. Each one is written for a curious reader, with figures and, where I can share it, the data.</p>

<ol class="rf-index" aria-label="All reflections">
  <li>
    <a href="#from-a-measured-record-to-a-model">
      <span class="rf-no">01</span>
      <span class="rf-ti">From a measured record to a model</span>
      <span class="rf-tk">A small error can hide the wrong physics.</span>
      <span class="rf-me"><em>Experiment</em> · 2026</span>
    </a>
  </li>
</ol>
<p class="rf-jump"><a href="#open-questions">Open questions I keep returning to ↓</a></p>

<article class="rf" id="from-a-measured-record-to-a-model">
<p class="rf-no-l">Reflection 01 · <em>Experiment</em> · 2026</p>
<h2 data-toc="01 · From a measured record to a model">From a measured record to a model</h2>
<p class="rf-sub">One pendulum, one free decay, and the question of when a model is good enough.</p>
<blockquote class="rf-take"><span>The takeaway</span>A model can match a record to five per cent and still have the wrong physics. Read the pattern of the error, not just its size, and refine only while it changes the conclusion.</blockquote>

<figure class="pd-setup">
  <img src="{{ '/assets/img/pendulum/setup.png' | relative_url }}" alt="Pendulum on a ball bearing, magnets on the rod, two magnet hubs rotated by theta that tune the stiffness, and a laser Doppler vibrometer on the bob" width="1100" height="796" loading="lazy">
  <figcaption>The rig. Magnet hubs tune the stiffness; a laser vibrometer reads the bob.</figcaption>
</figure>

<h3 id="try-the-models">Try the models</h3>

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

<h3 id="four-suspects">Four suspects</h3>

<ol class="suspects">
  <li><b>The start</b><span>measured, not fitted</span><i>ruled out</i></li>
  <li><b>The data</b><span>repeatable to 1.3 %</span><i>ruled out</i></li>
  <li><b>The fit</b><span>passes on 0–8 s, fails after</span><i>a clue</i></li>
  <li class="hit"><b>The physics</b><span>the bearing adds dry friction</span><i>found</i></li>
</ol>

<h3 id="what-is-still-left">What is still left</h3>

<figure class="pd-fig">
  <img src="{{ '/assets/img/pendulum/frequency-amplitude.png' | relative_url }}" alt="Frequency of each cycle against amplitude: the measured frequency rises about 1 percent as the swing dies, while linear and dry-friction simulations stay flat" width="1500" height="694" loading="lazy">
  <figcaption>As the swing dies the pendulum stiffens slightly. No damping term can do that.</figcaption>
</figure>

<p class="pd-end">Refine a model only while it changes the conclusion.</p>

<p class="pd-note">From a research-skills session at LEMS, IISc (Part B; Part A by Avinash Umashankar). Measured data: free decay at hub angle 5°, laser Doppler vibrometer. Errors are RMS displacement error relative to the peak in each window, computed live in your browser.</p>

<script defer src="{{ '/assets/js/pendulum-bench.js' | relative_url }}"></script>

<p class="rf-back"><a href="#top">↑ All reflections</a></p>
</article>

<section class="oq" id="open-questions">
<h2 data-toc="Open questions">Open questions</h2>
<p class="oq-lead">Problems from my research that I keep coming back to. Some will become reflections here; all are good conversations, so <a href="{{ '/' | relative_url }}#contact">write to me</a> if one interests you.</p>
<ol class="oq-list">
  <li><span class="oq-k">Experiment</span><h3>Why does a pendulum stiffen as its swing dies?</h3><p>In the rig above the frequency rises by about one per cent at small amplitude, at every stiffness setting. Bearing, magnets or support: which one, and how would you tell?</p></li>
  <li><span class="oq-k">Experiment</span><h3>Can one bearing explain both the extra damping and the extra stiffness?</h3><p>At very small motion a ball bearing stops sliding and its contacts flex. A single pre-sliding friction law might replace two separate correction terms.</p></li>
  <li><span class="oq-k">Theory</span><h3>What does loss do to topology in time?</h3><p>Band topology is usually defined for lossless systems. In a phononic time crystal with damping, which topological features survive, and which quietly disappear?</p></li>
  <li><span class="oq-k">Experiment</span><h3>How long does a state localised in time really live?</h3><p>A temporal interface state should sit at the boundary between two modulation phases. In a real parametric oscillator, what sets its lifetime: damping, detuning or noise?</p></li>
  <li><span class="oq-k">Theory</span><h3>When a lattice amplifies a wave one way, where does the energy come from?</h3><p>Non-reciprocal coupling needs active feedback. How much power does the feedback supply, and where does the lattice tip from directional amplification into instability?</p></li>
  <li><span class="oq-k">Ongoing</span><h3>How much dynamics does a mechanical reservoir need?</h3><p>For a simple prediction task, what is the smallest network of active oscillators, and the least nonlinearity and memory, that does the job?</p></li>
  <li><span class="oq-k">Practice</span><h3>Is a single damping ratio ever the right number to report?</h3><p>When damping depends on amplitude, one ζ describes no pendulum. What should a paper report instead, so others can reproduce the decay?</p></li>
</ol>
</section>
