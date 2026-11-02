---
layout: page
title: Research
permalink: /research/
description: Waves in engineered mechanical systems. Figures here describe published work only.
nav: true
nav_order: 3
---

<p class="r-lead">I study how waves move through mechanical structures that are engineered, active or changing in time: lattices whose couplings are not symmetric, media whose stiffness is modulated in time, and small networks of active oscillators. My approach combines analysis and simulation with table-top experiments in the LEMS lab at IISc.</p>

<section class="r-area" id="nonreciprocal">
  <p class="r-k">Published</p>
  <h2>Non-reciprocal and non-Hermitian lattices</h2>
  <p>In a passive elastic lattice a wave travels the same way in both directions. Non-reciprocal stiffness, realised with active feedback, together with engineered damping makes the lattice non-Hermitian and breaks this symmetry. I study how non-reciprocity and dissipation together shape dispersion, directional amplification and localisation.</p>
  <figure class="rfig">
        <svg viewBox="0 0 760 250" role="img" aria-labelledby="f2t">
          <title id="f2t">(a) A one-dimensional lattice of masses and springs with dashpots and an asymmetric active coupling. (b) Illustration of directional amplification: a wave is amplified in one direction and attenuated in the other.</title>
          <defs>
            <marker id="fa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1d4ed8"/></marker>
            <marker id="fb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#b91c1c"/></marker>
            <marker id="ax2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#64748b"/></marker>
            <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#94a3b8" stroke-width="1.4"/></pattern>
          </defs>
          <g font-family="Georgia,'Times New Roman',serif" fill="#0f172a" font-size="14">
            <text x="10" y="18"><tspan font-weight="700">(a)</tspan> lattice with active coupling</text>
            <text x="490" y="18"><tspan font-weight="700">(b)</tspan> directional amplification</text>
          </g>
          <g transform="translate(5,18)">
            <rect x="5" y="170" width="430" height="10" fill="url(#hatch)"/>
            <line x1="5" y1="170" x2="435" y2="170" stroke="#475569" stroke-width="1.2"/>
            <g fill="none" stroke="#0f172a" stroke-width="1.4">
              <path d="M5 96 h10 l5 -10 l10 20 l10 -20 l10 20 l5 -10 h10"/>
              <path d="M105 96 h10 l5 -10 l10 20 l10 -20 l10 20 l5 -10 h10"/>
              <path d="M205 96 h10 l5 -10 l10 20 l10 -20 l10 20 l5 -10 h10"/>
              <path d="M305 96 h10 l5 -10 l10 20 l10 -20 l10 20 l5 -10 h10"/>
            </g>
            <g fill="#fff" stroke="#0f172a" stroke-width="1.6">
              <rect x="65" y="74" width="40" height="44" rx="3"/><rect x="165" y="74" width="40" height="44" rx="3"/><rect x="265" y="74" width="40" height="44" rx="3"/><rect x="365" y="74" width="40" height="44" rx="3" stroke-dasharray="3 3"/>
            </g>
            <g font-family="Georgia,serif" font-style="italic" font-size="14" fill="#0f172a" text-anchor="middle">
              <text x="85" y="101">m</text><text x="185" y="101">m</text><text x="285" y="101">m</text><text x="385" y="101" fill="#64748b">…</text>
            </g>
            <g fill="none" stroke="#475569" stroke-width="1.3">
              <path d="M85 118 v10 M75 128 h20 M77 128 v14 h16 v-14 M85 138 v32"/>
              <path d="M185 118 v10 M175 128 h20 M177 128 v14 h16 v-14 M185 138 v32"/>
              <path d="M285 118 v10 M275 128 h20 M277 128 v14 h16 v-14 M285 138 v32"/>
            </g>
            <text x="297" y="155" font-family="Georgia,serif" font-style="italic" font-size="13" fill="#475569">c</text>
            <path d="M91 70 C 115 28, 155 28, 179 70" fill="none" stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#fa)"/>
            <path d="M191 70 C 215 28, 255 28, 279 70" fill="none" stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#fa)"/>
            <path d="M167 120 C 153 152, 117 152, 105 122" fill="none" stroke="#b91c1c" stroke-width="1.4" stroke-dasharray="3 4" marker-end="url(#fb)"/>
            <path d="M267 120 C 253 152, 217 152, 205 122" fill="none" stroke="#b91c1c" stroke-width="1.4" stroke-dasharray="3 4" marker-end="url(#fb)"/>
            <g font-family="Georgia,serif" font-style="italic" font-size="14" text-anchor="middle">
              <text x="135" y="26" fill="#1d4ed8">k + κ</text>
              <text x="135" y="164" fill="#b91c1c" font-size="13">k − κ</text>
            </g>
          </g>
          <!-- (b) -->
          <line x1="490" y1="215" x2="745" y2="215" stroke="#64748b" stroke-width="1.2" marker-end="url(#ax2)"/>
          <line x1="490" y1="215" x2="490" y2="36" stroke="#64748b" stroke-width="1.2" marker-end="url(#ax2)"/>
          <path d="M500.0 200.0 L506.0 199.3 L512.0 198.5 L518.0 197.7 L524.0 196.8 L530.0 195.8 L536.0 194.8 L542.0 193.7 L548.0 192.5 L554.0 191.2 L560.0 189.8 L566.0 188.4 L572.0 186.8 L578.0 185.1 L584.0 183.3 L590.0 181.3 L596.0 179.3 L602.0 177.0 L608.0 174.6 L614.0 172.0 L620.0 169.3 L626.0 166.3 L632.0 163.1 L638.0 159.7 L644.0 156.1 L650.0 152.2 L656.0 148.0 L662.0 143.4 L668.0 138.6 L674.0 133.4 L680.0 127.8 L686.0 121.9 L692.0 115.5 L698.0 108.6 L704.0 101.2 L710.0 93.3 L716.0 84.8 L722.0 75.7 L728.0 65.9" fill="none" stroke="#1d4ed8" stroke-width="2.2" transform="translate(0,5)"/>
          <path d="M500.0 60.0 L506.0 70.2 L512.0 79.6 L518.0 88.5 L524.0 96.7 L530.0 104.4 L536.0 111.6 L542.0 118.2 L548.0 124.5 L554.0 130.3 L560.0 135.7 L566.0 140.7 L572.0 145.4 L578.0 149.8 L584.0 153.9 L590.0 157.7 L596.0 161.2 L602.0 164.5 L608.0 167.6 L614.0 170.5 L620.0 173.2 L626.0 175.7 L632.0 178.0 L638.0 180.2 L644.0 182.2 L650.0 184.1 L656.0 185.8 L662.0 187.5 L668.0 189.0 L674.0 190.4 L680.0 191.7 L686.0 193.0 L692.0 194.1 L698.0 195.2 L704.0 196.2 L710.0 197.1 L716.0 198.0 L722.0 198.8 L728.0 199.6" fill="none" stroke="#b91c1c" stroke-width="2.2" transform="translate(0,5)"/>
          <g transform="translate(0,5)"><circle cx="500.0" cy="200.0" r="2.8" fill="#1d4ed8"/><circle cx="523.0" cy="196.9" r="2.8" fill="#1d4ed8"/><circle cx="546.0" cy="192.9" r="2.8" fill="#1d4ed8"/><circle cx="569.0" cy="187.6" r="2.8" fill="#1d4ed8"/><circle cx="592.0" cy="180.7" r="2.8" fill="#1d4ed8"/><circle cx="615.0" cy="171.6" r="2.8" fill="#1d4ed8"/><circle cx="638.0" cy="159.7" r="2.8" fill="#1d4ed8"/><circle cx="661.0" cy="144.2" r="2.8" fill="#1d4ed8"/><circle cx="684.0" cy="123.9" r="2.8" fill="#1d4ed8"/><circle cx="707.0" cy="97.3" r="2.8" fill="#1d4ed8"/><circle cx="730.0" cy="62.5" r="2.8" fill="#1d4ed8"/><circle cx="500.0" cy="60.0" r="2.8" fill="#b91c1c"/><circle cx="523.0" cy="95.4" r="2.8" fill="#b91c1c"/><circle cx="546.0" cy="122.4" r="2.8" fill="#b91c1c"/><circle cx="569.0" cy="143.1" r="2.8" fill="#b91c1c"/><circle cx="592.0" cy="158.9" r="2.8" fill="#b91c1c"/><circle cx="615.0" cy="170.9" r="2.8" fill="#b91c1c"/><circle cx="638.0" cy="180.2" r="2.8" fill="#b91c1c"/><circle cx="661.0" cy="187.2" r="2.8" fill="#b91c1c"/><circle cx="684.0" cy="192.6" r="2.8" fill="#b91c1c"/><circle cx="707.0" cy="196.7" r="2.8" fill="#b91c1c"/><circle cx="730.0" cy="199.8" r="2.8" fill="#b91c1c"/></g>
          <g font-family="Georgia,serif" font-style="italic" font-size="14" fill="#0f172a"><text x="478" y="48" text-anchor="end">|u</text><text x="742" y="236">n</text></g>
          <g class="minor" font-family="-apple-system,'Segoe UI',Roboto,Arial,sans-serif" font-size="12.5">
            <text x="560" y="62" fill="#b91c1c">sent backward: attenuated</text>
            <text x="690" y="98" fill="#1d4ed8" text-anchor="end">sent forward: amplified</text>
          </g>
        </svg>
        <figcaption><b>Schematic.</b> (a) Masses <i>m</i>, springs <i>k</i> and dashpots <i>c</i>; an active feedback adds an asymmetric part <i>κ</i>, so forward and backward coupling differ. (b) Illustration of directional amplification, a typical effect of non-reciprocal coupling: a wave sent one way grows, the same wave sent the other way decays.</figcaption>
      </figure>
  <p class="r-ref"><b>H. K. Sandhu</b>, S. Dutta and R. Chaunsali, <a href="https://doi.org/10.1121/10.0042349">Wave propagation in an elastic lattice with nonreciprocal stiffness and engineered damping</a>, <i>J. Acoust. Soc. Am.</i> 159(2), 978–993 (2026). Special issue on Active and Tunable Acoustic Metamaterials.</p>
</section>

<section class="r-area" id="time-varying">
  <p class="r-k">Under review</p>
  <h2>Time-varying media and phononic time crystals</h2>
  <p>When a medium's stiffness is modulated periodically in time rather than in space, the roles of frequency and wavenumber swap and gaps open in momentum instead of frequency. This is the subject of my doctoral thesis, <i>Dynamics of Elastic Time Crystals</i>: the band topology of these time-periodic systems in the presence of damping, and temporal interface states observed in a parametric oscillator. Two manuscripts are under review; figures will follow once they are published. Talks on this work are listed on the <a href="{{ '/talks/' | relative_url }}">talks page</a>.</p>
</section>

<section class="r-area" id="active-oscillators">
  <p class="r-k">Ongoing</p>
  <h2>Active oscillators for physical computing</h2>
  <p>A newer direction, pursued with students in the LEMS lab: using the dynamics of active mechanical oscillators and lattices as physical reservoirs and mechanical neural networks.</p>
</section>

<p class="r-foot">Full list: <a href="{{ '/publications/' | relative_url }}">publications</a>. What experiments and models have taught me: <a href="{{ '/reflections/' | relative_url }}">reflections</a>.</p>
