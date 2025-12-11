(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const navItems = [
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Skills",
        href: "#skills"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Experience",
        href: "#experience"
    },
    {
        name: "Contact",
        href: "#contact"
    }
];
function Navigation() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleScroll = {
                "Navigation.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["Navigation.useEffect.handleScroll"];
            const observer = new IntersectionObserver({
                "Navigation.useEffect": (entries)=>{
                    entries.forEach({
                        "Navigation.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setActiveSection(entry.target.id);
                            }
                        }
                    }["Navigation.useEffect"]);
                }
            }["Navigation.useEffect"], {
                rootMargin: "-50% 0px -50% 0px"
            });
            window.addEventListener("scroll", handleScroll);
            navItems.forEach({
                "Navigation.useEffect": (item)=>{
                    const element = document.querySelector(item.href);
                    if (element) observer.observe(element);
                }
            }["Navigation.useEffect"]);
            return ({
                "Navigation.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    observer.disconnect();
                }
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-[#0f172a]/80 backdrop-blur-md" : "bg-transparent"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-16 md:h-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex items-center gap-8 md:gap-12",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-all duration-300 hover:text-white relative inline-block pb-1", activeSection === item.href.slice(1) ? "text-white" : "text-gray-400"),
                                children: [
                                    item.name,
                                    activeSection === item.href.slice(1) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation.tsx",
                                        lineNumber: 69,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navigation.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, this)
                        }, item.name, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/navigation.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navigation.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/navigation.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/navigation.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Navigation, "LaUFktPh/F66UHyFEO3swBv6qJc=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/star-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StarBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function StarBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StarBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let width = canvas.width = window.innerWidth;
            let height = canvas.height = window.innerHeight;
            const snowflakes = Array.from({
                length: 80
            }, {
                "StarBackground.useEffect.snowflakes": ()=>({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        radius: 1 + Math.random() * 2.5,
                        speed: 0.4 + Math.random() * 1.1,
                        opacity: 0.25 + Math.random() * 0.6
                    })
            }["StarBackground.useEffect.snowflakes"]);
            const draw = {
                "StarBackground.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
                    snowflakes.forEach({
                        "StarBackground.useEffect.draw": (flake)=>{
                            ctx.beginPath();
                            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(255,255,255,${flake.opacity})`;
                            ctx.fill();
                            flake.y += flake.speed;
                            flake.x += Math.sin(flake.y * 0.01) * 0.4;
                            if (flake.y > height) {
                                flake.y = -flake.radius;
                                flake.x = Math.random() * width;
                                flake.radius = 1 + Math.random() * 2.5;
                                flake.speed = 0.4 + Math.random() * 1.1;
                                flake.opacity = 0.25 + Math.random() * 0.6;
                            }
                        }
                    }["StarBackground.useEffect.draw"]);
                    animationRef.current = requestAnimationFrame(draw);
                }
            }["StarBackground.useEffect.draw"];
            draw();
            const handleResize = {
                "StarBackground.useEffect.handleResize": ()=>{
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                }
            }["StarBackground.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "StarBackground.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                    window.removeEventListener("resize", handleResize);
                }
            })["StarBackground.useEffect"];
        }
    }["StarBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-0 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-[#0b102b] via-[#101735] to-[#0b1228]"
            }, void 0, false, {
                fileName: "[project]/components/star-background.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 w-full h-full opacity-90"
            }, void 0, false, {
                fileName: "[project]/components/star-background.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/star-background.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(StarBackground, "X5bd7Q1XXg1keIMflMhOltk4wyU=");
_c = StarBackground;
var _c;
__turbopack_context__.k.register(_c, "StarBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e464c711._.js.map