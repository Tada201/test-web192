"use strict";
exports.id = 376;
exports.ids = [376];
exports.modules = {

/***/ 65968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadingAnimation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

function LoadingAnimation() {
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const animationIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [isCompleted, setIsCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const particlesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const resizeCanvas = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesRef.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3
    }));
  }, []);
  const updateParticles = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesRef.current.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -1;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -1;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = "#00f7ff";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#00f7ff";
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }, []);
  const completeAnimation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsCompleted(true);
    setTimeout(() => {
      const container = document.getElementById("loadingContainer");
      const skipButton = document.getElementById("skipButton");
      if (container) {
        container.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        container.style.transform = "scale(1.1)";
        container.style.opacity = "0";
      }
      if (skipButton) {
        skipButton.style.opacity = "0";
      }
      setTimeout(() => {
        console.log("Loading complete - transition to main content");
      }, 800);
    }, 1e3);
  }, []);
  const updateAnimation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (isCompleted) return;
    updateParticles();
    animationIdRef.current = requestAnimationFrame(updateAnimation);
  }, [isCompleted, updateParticles]);
  const skipAnimation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (isCompleted) return;
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
    completeAnimation();
  }, [isCompleted, completeAnimation]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [resizeCanvas]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateAnimation();
    const timer = setTimeout(() => {
      completeAnimation();
    }, 6e3);
    return () => {
      clearTimeout(timer);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [updateAnimation, completeAnimation]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleClick = (e) => {
      const skipBtn = document.getElementById("skipButton");
      if (e.target !== skipBtn) {
        skipAnimation();
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === " ") {
        skipAnimation();
      }
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [skipAnimation]);
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-[#0a0a0a] to-[#0f2a2e]" }, /* @__PURE__ */ React.createElement("div", { className: "hex-grid absolute inset-0 w-full h-full" }), /* @__PURE__ */ React.createElement(
    "canvas",
    {
      ref: canvasRef,
      className: "particle-canvas absolute inset-0 w-full h-full opacity-20 pointer-events-none"
    }
  ), /* @__PURE__ */ React.createElement("div", { id: "loadingContainer", className: "relative flex flex-col items-center justify-center z-10" }, /* @__PURE__ */ React.createElement("div", { className: "pro192-loader select-none font-montserrat" }, "PRO192")), /* @__PURE__ */ React.createElement(
    "button",
    {
      id: "skipButton",
      onClick: skipAnimation,
      className: "skip-button absolute top-8 right-8 px-4 py-2 rounded-lg text-sm font-semibold z-30 hover:scale-105 transition-transform font-montserrat"
    },
    "Skip Animation"
  ));
}


/***/ })

};
;