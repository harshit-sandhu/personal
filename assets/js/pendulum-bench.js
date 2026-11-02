/* Pendulum model bench: a measured free decay against x'' + 2 zeta w x' + w^2 x + mu sgn(x') = 0.
   Data: displacement (mm) integrated from the LDV velocity, file waveforms_5_degrees, release 1,
   resampled at 24 Hz, starting at the first turning point after release. */
(function () {
  var root = document.getElementById("bench");
  if (!root) return;
  var X = [
      7.31, 6.79, 5.5, 3.57, 1.25, -1.19, -3.47, -5.33, -6.56, -7.03, -6.69, -5.58, -3.83, -1.65, 0.72, 2.99, 4.92, 6.29, 6.93, 6.78, 5.87, 4.31,
      2.28, 0.01, -2.21, -4.15, -5.59, -6.36, -6.39, -5.68, -4.32, -2.46, -0.31, 1.86, 3.83, 5.35, 6.26, 6.45, 5.92, 4.73, 3.01, 0.97, -1.13, -3.08,
      -4.65, -5.65, -6.0, -5.64, -4.64, -3.1, -1.2, 0.83, 2.77, 4.38, 5.5, 5.98, 5.79, 4.95, 3.56, 1.78, -0.17, -2.07, -3.7, -4.88, -5.48, -5.45,
      -4.78, -3.56, -1.94, -0.08, 1.77, 3.43, 4.69, 5.41, 5.52, 5.01, 3.94, 2.45, 0.69, -1.11, -2.75, -4.05, -4.86, -5.11, -4.76, -3.85, -2.51, -0.87,
      0.86, 2.49, 3.83, 4.74, 5.11, 4.89, 4.14, 2.92, 1.39, -0.27, -1.88, -3.24, -4.2, -4.67, -4.6, -3.99, -2.92, -1.52, 0.06, 1.62, 3.0, 4.03, 4.61,
      4.65, 4.18, 3.25, 1.96, 0.46, -1.06, -2.43, -3.5, -4.15, -4.32, -3.98, -3.18, -2.02, -0.62, 0.84, 2.21, 3.32, 4.06, 4.33, 4.11, 3.44, 2.39,
      1.08, -0.32, -1.66, -2.79, -3.58, -3.94, -3.84, -3.29, -2.37, -1.17, 0.16, 1.46, 2.61, 3.45, 3.9, 3.9, 3.47, 2.66, 1.55, 0.29, -0.98, -2.12,
      -2.99, -3.51, -3.61, -3.3, -2.6, -1.6, -0.42, 0.81, 1.94, 2.85, 3.44, 3.63, 3.42, 2.83, 1.93, 0.82, -0.37, -1.48, -2.4, -3.03, -3.31, -3.19,
      -2.71, -1.92, -0.89, 0.23, 1.32, 2.26, 2.93, 3.28, 3.25, 2.86, 2.16, 1.23, 0.16, -0.89, -1.82, -2.53, -2.93, -3.0, -2.71, -2.1, -1.26, -0.26,
      0.76, 1.69, 2.42, 2.88, 3.01, 2.8, 2.29, 1.52, 0.6, -0.37, -1.28, -2.02, -2.52, -2.72, -2.6, -2.18, -1.5, -0.65, 0.28, 1.17, 1.92, 2.46, 2.71,
      2.66, 2.31, 1.71, 0.92, 0.05, -0.81, -1.56, -2.12, -2.42, -2.44, -2.17, -1.65, -0.93, -0.11, 0.71, 1.46, 2.04, 2.39, 2.46, 2.26, 1.81, 1.16,
      0.39, -0.4, -1.14, -1.73, -2.11, -2.24, -2.1, -1.73, -1.15, -0.43, 0.32, 1.05, 1.65, 2.06, 2.23, 2.16, 1.84, 1.33, 0.68, -0.05, -0.74, -1.33,
      -1.76, -1.98, -1.97, -1.71, -1.27, -0.67, 0.0, 0.67, 1.26, 1.71, 1.96, 1.99, 1.79, 1.41, 0.86, 0.24, -0.4, -0.98, -1.43, -1.72, -1.79, -1.65,
      -1.32, -0.84, -0.26, 0.36, 0.92, 1.38, 1.69, 1.8, 1.7, 1.42, 0.99, 0.46, -0.13, -0.67, -1.13, -1.45, -1.6, -1.55, -1.32, -0.94, -0.45, 0.1,
      0.62, 1.08, 1.42, 1.59, 1.58, 1.39, 1.06, 0.61, 0.1, -0.42, -0.86, -1.2, -1.4, -1.43, -1.29, -1.0, -0.59, -0.11, 0.37, 0.81, 1.16, 1.37, 1.44,
      1.33, 1.09, 0.72, 0.29, -0.17, -0.6, -0.94, -1.18, -1.27, -1.2, -1.0, -0.67, -0.27, 0.15, 0.56, 0.91, 1.15, 1.26, 1.23, 1.06, 0.78, 0.41, -0.0,
      -0.39, -0.73, -0.98, -1.12, -1.11, -0.98, -0.73, -0.4, -0.01, 0.37, 0.7, 0.95, 1.1, 1.12, 1.02, 0.8, 0.5, 0.15, -0.21, -0.53, -0.78, -0.94,
      -0.99, -0.91, -0.73, -0.46, -0.14, 0.19, 0.5, 0.76, 0.93, 0.99, 0.94, 0.78, 0.54, 0.26, -0.06, -0.35, -0.61, -0.78, -0.86, -0.84, -0.72, -0.51,
      -0.24, 0.06, 0.35, 0.6, 0.78, 0.87, 0.86, 0.76, 0.58, 0.34, 0.06, -0.21, -0.45, -0.63, -0.73, -0.75, -0.67, -0.51, -0.29, -0.04, 0.2, 0.44,
      0.62, 0.72, 0.75, 0.69, 0.56, 0.37, 0.13, -0.12, -0.33, -0.51, -0.62, -0.66, -0.62, -0.51, -0.34, -0.12, 0.11, 0.32, 0.49, 0.61, 0.66, 0.64,
      0.54, 0.39, 0.2, -0.0, -0.2, -0.37, -0.49, -0.55, -0.54, -0.47, -0.33, -0.16, 0.02, 0.2, 0.36, 0.49, 0.55, 0.56, 0.5, 0.39, 0.24, 0.05, -0.13,
      -0.29, -0.4, -0.46, -0.47, -0.42, -0.33, -0.19, -0.03, 0.12, 0.27, 0.38, 0.45, 0.47, 0.44, 0.36, 0.24, 0.1, -0.06, -0.2, -0.3, -0.37, -0.4,
      -0.37, -0.31, -0.2, -0.07, 0.06, 0.19, 0.3, 0.36, 0.4, 0.39, 0.33, 0.24, 0.13, 0.01, -0.11, -0.22, -0.29, -0.31, -0.31, -0.26, -0.19, -0.1,
      0.01, 0.12, 0.21, 0.28, 0.32, 0.32, 0.3, 0.23, 0.14, 0.04, -0.06, -0.16, -0.23, -0.26, -0.26, -0.23, -0.16, -0.09, -0.01, 0.07, 0.14, 0.21,
      0.26, 0.26, 0.25, 0.21, 0.14, 0.06, -0.03, -0.12, -0.18, -0.21, -0.22, -0.21, -0.16, -0.1, -0.04, 0.03, 0.1, 0.16, 0.2, 0.21, 0.2, 0.18, 0.13,
      0.07, 0.0, -0.06, -0.11, -0.15, -0.17, -0.17, -0.14, -0.1, -0.05, 0.01, 0.08, 0.13, 0.18, 0.2, 0.2, 0.19, 0.17, 0.14, 0.1,
    ],
    FS = 24,
    N = X.length,
    T = N / FS;
  var MODELS = {
    first: { fn: 1.302, z: 0.0173, mu: 0, label: "First guess: FFT peak and straight-line decay" },
    cal: { fn: 1.3007, z: 0.0124, mu: 0, label: "Linear, calibrated on 0–8 s" },
    fric: { fn: 1.301, z: 0.0114, mu: 0.9, label: "Linear + dry friction" },
  };
  var NS = "http://www.w3.org/2000/svg";
  var W = 900,
    H = 345,
    L = 52,
    R = 14,
    T1 = 14,
    B1 = 210,
    T2 = 236,
    B2 = 300;
  var svg = root.querySelector("svg"),
    q = function (s) {
      return root.querySelector(s);
    };
  var state = { key: "first", mu: 0, zoom: false };
  function el(n, a, p) {
    var e = document.createElementNS(NS, n);
    for (var k in a) e.setAttribute(k, a[k]);
    (p || svg).appendChild(e);
    return e;
  }
  function simulate(fn, z, mu) {
    var w = 2 * Math.PI * fn,
      h = 1 / 240,
      x = X[0],
      v = 0,
      out = [];
    function f(x, v) {
      return [v, -2 * z * w * v - w * w * x - mu * Math.tanh(v / 0.05)];
    }
    for (var k = 0; k <= N * 10; k++) {
      if (k % 10 === 0) out.push(x);
      var a = f(x, v),
        b = f(x + (h / 2) * a[0], v + (h / 2) * a[1]),
        c = f(x + (h / 2) * b[0], v + (h / 2) * b[1]),
        d = f(x + h * c[0], v + h * c[1]);
      x += (h / 6) * (a[0] + 2 * b[0] + 2 * c[0] + d[0]);
      v += (h / 6) * (a[1] + 2 * b[1] + 2 * c[1] + d[1]);
    }
    return out;
  }
  function err(y, t0, t1) {
    var i = Math.round(t0 * FS),
      j = Math.round(t1 * FS),
      pk = 0,
      s = 0;
    for (var k = i; k < j; k++) {
      pk = Math.max(pk, Math.abs(X[k]));
      s += (y[k] - X[k]) * (y[k] - X[k]);
    }
    return (100 * Math.sqrt(s / (j - i))) / pk;
  }
  // static layers
  var gWin = el("g", {}),
    gAx = el("g", { class: "ax" }),
    gM = el("g", {}),
    gS = el("g", {}),
    gR = el("g", {});
  var pMeas = el("path", { class: "meas" }, gM),
    pSim = el("path", { class: "sim" }, gS),
    pRes = el("path", { class: "res" }, gR);
  function draw() {
    var m = MODELS[state.key],
      mu = state.mu;
    var y = simulate(m.fn, m.z, mu);
    var t0 = state.zoom ? 14 : 0,
      t1 = state.zoom ? 22 : T;
    var i0 = Math.round(t0 * FS),
      i1 = Math.min(N - 1, Math.round(t1 * FS));
    var amp = 0;
    for (var k = i0; k <= i1; k++) amp = Math.max(amp, Math.abs(X[k]), Math.abs(y[k]));
    amp *= 1.08;
    var rm = amp * 0.45;
    var sx = function (t) {
      return L + ((W - L - R) * (t - t0)) / (t1 - t0);
    };
    var sy = function (v) {
      return (T1 + B1) / 2 - ((v / amp) * (B1 - T1)) / 2;
    };
    var sr = function (v) {
      return (T2 + B2) / 2 - ((v / rm) * (B2 - T2)) / 2;
    };
    // windows
    gWin.innerHTML = "";
    [
      [0, 8, "wcal", "calibration window"],
      [14, 22, "wtest", "test window"],
    ].forEach(function (w) {
      var a = Math.max(w[0], t0),
        b = Math.min(w[1], t1);
      if (b <= a) return;
      el("rect", { x: sx(a), y: T1, width: sx(b) - sx(a), height: B2 - T1, class: w[2] }, gWin);
      el("text", { x: sx(a) + 8, y: T1 + 14, class: "wl" }, gWin).textContent = w[3];
    });
    // axes
    gAx.innerHTML = "";
    el("line", { x1: L, x2: W - R, y1: sy(0), y2: sy(0) }, gAx);
    el("line", { x1: L, x2: W - R, y1: sr(0), y2: sr(0) }, gAx);
    el("line", { x1: L, x2: L, y1: T1, y2: B2 }, gAx);
    var step = state.zoom ? 2 : 4;
    for (var t = Math.ceil(t0 / step) * step; t <= t1 + 1e-9; t += step) {
      el("line", { x1: sx(t), x2: sx(t), y1: B2, y2: B2 + 5 }, gAx);
      el("text", { x: sx(t), y: B2 + 19, "text-anchor": "middle" }, gAx).textContent = t;
    }
    el("text", { x: (L + W - R) / 2, y: H - 2, "text-anchor": "middle" }, gAx).textContent = "time after the first turning point (s)";
    var tk = amp > 4 ? 5 : amp > 1.6 ? 1 : 0.5;
    [-tk, tk].forEach(function (v) {
      if (Math.abs(v) < amp) el("text", { x: L - 6, y: sy(v) + 4, "text-anchor": "end" }, gAx).textContent = v;
    });
    el("text", { x: 12, y: (T1 + B1) / 2, transform: "rotate(-90 12 " + (T1 + B1) / 2 + ")", "text-anchor": "middle" }, gAx).textContent = "x (mm)";
    el("text", { x: 12, y: (T2 + B2) / 2, transform: "rotate(-90 12 " + (T2 + B2) / 2 + ")", "text-anchor": "middle" }, gAx).textContent = "error";
    // curves
    var dm = "",
      ds = "",
      dr = "";
    for (k = i0; k <= i1; k++) {
      var c = k === i0 ? "M" : "L",
        tx = sx(k / FS).toFixed(1);
      dm += c + tx + " " + sy(X[k]).toFixed(1);
      ds += c + tx + " " + sy(y[k]).toFixed(1);
      dr += c + tx + " " + sr(Math.max(-rm, Math.min(rm, y[k] - X[k]))).toFixed(1);
    }
    pMeas.setAttribute("d", dm);
    pSim.setAttribute("d", ds);
    pRes.setAttribute("d", dr);
    // readouts
    q("[data-o=fn]").textContent = m.fn.toFixed(4) + " Hz";
    q("[data-o=z]").textContent = m.z.toFixed(4);
    q("[data-o=mu]").textContent = mu.toFixed(2) + " mm/s²";
    var e1 = err(y, 0, 8),
      e2 = err(y, 14, 22);
    q("[data-o=e1]").textContent = e1.toFixed(1) + " %";
    q("[data-o=e2]").textContent = e2.toFixed(1) + " %";
    q("[data-o=e2]").className = e2 > 15 ? "bad" : e2 < 9 ? "good" : "";
    q("[data-o=label]").textContent = MODELS[state.key].label + (mu !== MODELS[state.key].mu ? " (μ changed by hand)" : "");
  }
  [].forEach.call(root.querySelectorAll("[data-model]"), function (b) {
    b.addEventListener("click", function () {
      state.key = b.getAttribute("data-model");
      state.mu = MODELS[state.key].mu;
      q("#bench-mu").value = state.mu;
      [].forEach.call(root.querySelectorAll("[data-model]"), function (o) {
        o.setAttribute("aria-pressed", o === b);
      });
      draw();
    });
  });
  q("#bench-mu").addEventListener("input", function (e) {
    state.mu = +e.target.value;
    draw();
  });
  q("#bench-zoom").addEventListener("change", function (e) {
    state.zoom = e.target.checked;
    draw();
  });
  draw();
})();
