(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/family-dental-demo/app/components/SiteHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$services$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/app/components/services.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SiteHeader() {
    _s();
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            function close(event) {
                if (!header.current?.contains(event.target)) {
                    setOpen(null);
                    setMobile(false);
                }
            }
            document.addEventListener('pointerdown', close);
            return ({
                "SiteHeader.useEffect": ()=>document.removeEventListener('pointerdown', close)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], []);
    function dropdown(label, entries) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nav-dropdown",
            onMouseEnter: ()=>{
                if (window.matchMedia('(hover: hover)').matches) setOpen(label);
            },
            onMouseLeave: ()=>{
                if (window.matchMedia('(hover: hover)').matches) setOpen(null);
            },
            onBlur: (e)=>{
                if (!e.currentTarget.contains(e.relatedTarget)) setOpen(null);
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "dropdown-toggle",
                    "aria-expanded": open === label,
                    "aria-controls": `dropdown-${label}`,
                    onClick: ()=>setOpen(open === label ? null : label),
                    children: [
                        label,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "⌄"
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                            lineNumber: 16,
                            columnNumber: 467
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                    lineNumber: 16,
                    columnNumber: 302
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: `dropdown-${label}`,
                    className: "dropdown-panel",
                    hidden: open !== label,
                    children: entries.map(([title, href])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            onClick: ()=>{
                                setOpen(null);
                                setMobile(false);
                            },
                            children: title
                        }, href, false, {
                            fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                            lineNumber: 16,
                            columnNumber: 622
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                    lineNumber: 16,
                    columnNumber: 509
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
            lineNumber: 16,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: header,
        className: "header site-header",
        onKeyDown: (e)=>{
            if (e.key === 'Escape') {
                const button = e.target.closest('.nav-dropdown')?.querySelector('button');
                setOpen(null);
                if (button) button.focus();
                else {
                    setMobile(false);
                    toggle.current?.focus();
                }
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nav-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "brand",
                    href: "/",
                    "aria-label": "Family Dental Clinic home",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "brand-logo",
                            src: "/images/family-dental-logo.svg",
                            alt: "",
                            width: "72",
                            height: "48"
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                            lineNumber: 18,
                            columnNumber: 379
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "family dental",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "brand-sub",
                                    children: "CLINIC · MIRPUR"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                                    lineNumber: 18,
                                    columnNumber: 495
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                            lineNumber: 18,
                            columnNumber: 476
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                    lineNumber: 18,
                    columnNumber: 307
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    ref: toggle,
                    className: `menu-button ${mobile ? 'is-open' : ''}`,
                    "aria-label": "Toggle navigation",
                    "aria-expanded": mobile,
                    "aria-controls": "site-navigation",
                    onClick: ()=>setMobile(!mobile),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                            lineNumber: 18,
                            columnNumber: 754
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                            lineNumber: 18,
                            columnNumber: 762
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                    lineNumber: 18,
                    columnNumber: 559
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    id: "site-navigation",
                    className: `site-navigation ${mobile ? 'is-open' : ''}`,
                    "aria-label": "Main navigation",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            onClick: ()=>setMobile(false),
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                            lineNumber: 18,
                            columnNumber: 891
                        }, this),
                        dropdown('Pages', [
                            [
                                'About our clinic',
                                '/about'
                            ],
                            [
                                'Services',
                                '/services'
                            ],
                            [
                                'FAQ',
                                '/faq'
                            ]
                        ]),
                        dropdown('Services', __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$services$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((s)=>[
                                s.title,
                                `/services/${s.slug}`
                            ])),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#contact",
                            onClick: ()=>setMobile(false),
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                            lineNumber: 18,
                            columnNumber: 1122
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                    lineNumber: 18,
                    columnNumber: 779
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "button nav-cta",
                    href: "tel:+923203771995",
                    children: "Call / Book a visit ↗"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
                    lineNumber: 18,
                    columnNumber: 1198
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
            lineNumber: 18,
            columnNumber: 281
        }, this)
    }, void 0, false, {
        fileName: "[project]/family-dental-demo/app/components/SiteHeader.js",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_s(SiteHeader, "mHCHLEjLHE+yytVTi4Tnl1sziss=");
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/family-dental-demo/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/family-dental-demo/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$SiteHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/app/components/SiteHeader.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
'use client';
;
;
;
const MAP = 'https://maps.app.goo.gl/P7CC4EacYpLexbNC8';
const PHONE = 'tel:+923203771995';
const ADDRESS = 'Allama Iqbal Road, opposite City Book Depot, above National Bank of Pakistan, New Mirpur City, AJK, Pakistan.';
// Editable demonstration categories; the clinic must confirm availability.
const treatments = [
    [
        'General Dental Check-ups',
        'A conversation about your oral health and the questions on your mind.',
        'tooth'
    ],
    [
        'Teeth Cleaning and Scaling',
        'Ask about professional cleaning and everyday care for your smile.',
        'spark'
    ],
    [
        'Tooth Fillings',
        'Discuss options for looking after a tooth affected by decay or damage.',
        'tooth'
    ],
    [
        'Root Canal Treatment',
        'Understand whether root canal care may be appropriate for your needs.',
        'plus'
    ],
    [
        'Gum Care',
        'Talk through gum concerns and ways to support your oral hygiene.',
        'leaf'
    ],
    [
        "Children’s Dental Care",
        'Explore a thoughtful introduction to dental visits for little smiles.',
        'heart'
    ],
    [
        'Cosmetic Dentistry',
        'A starting point for discussing the changes you would like to explore.',
        'spark'
    ],
    [
        'Dental Consultation',
        'Space to ask questions and understand possible next steps.',
        'chat'
    ]
];
const photos = {
    hero: '/images/pakistani-hero.webp',
    room: '/images/pakistani-room.webp',
    care: '/images/pakistani-care.webp',
    visit: '/images/pakistani-visit.webp'
};
function Icon({ name = 'tooth', className = '' }) {
    const paths = {
        tooth: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5C8 2 3 4 4 10c.5 3 2 10 4 10 2 0 1-7 4-7s2 7 4 7c2 0 3.5-7 4-10 1-6-4-8-8-5Zm0 0 3 1"
        }, void 0, false, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 30,
            columnNumber: 12
        }, this),
        arrow: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12h15m-6-6 6 6-6 6"
        }, void 0, false, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 31,
            columnNumber: 12
        }, this),
        pin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 32,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "10",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 32,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 32,
            columnNumber: 10
        }, this),
        heart: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m12 20-8-8C-2 5 7 0 12 7c5-7 14-2 8 5Z"
        }, void 0, false, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 33,
            columnNumber: 12
        }, this),
        spark: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 34,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 2v4m-2-2h4"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 34,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 34,
            columnNumber: 12
        }, this),
        plus: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "4",
                    y: "4",
                    width: "16",
                    height: "16",
                    rx: "5"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 35,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 8v8m-4-4h8"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 35,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 35,
            columnNumber: 11
        }, this),
        leaf: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 4C6 2 2 9 6 16s16 3 14-12Z"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 36,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m4 21 11-12"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 36,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 36,
            columnNumber: 11
        }, this),
        chat: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 11a8 8 0 0 1-8 8H5l-3 3V11a9 9 0 0 1 18 0Z"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 37,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 10h8m-8 4h5"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 37,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 37,
            columnNumber: 11
        }, this),
        phone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3-2 4C10 22 2 14 3 5Z"
        }, void 0, false, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 38,
            columnNumber: 12
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: paths[name] || paths.tooth
    }, void 0, false, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
_c = Icon;
function Brand() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "brand",
        href: "#home",
        "aria-label": "Family Dental Clinic home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: "brand-logo",
                src: "/images/family-dental-logo.svg",
                alt: "",
                width: "72",
                height: "48"
            }, void 0, false, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 44,
                columnNumber: 83
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "family dental",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "brand-sub",
                        children: "CLINIC · MIRPUR"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 44,
                        columnNumber: 199
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 44,
                columnNumber: 180
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
_c1 = Brand;
function Photo({ src, alt, className = '', priority = false }) {
    _s();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `photo ${className}`,
        children: failed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "photo-fallback",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 50,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Care begins with a conversation."
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 50,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: "Concept photograph unavailable"
                }, void 0, false, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 50,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 50,
            columnNumber: 15
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
            src: src,
            alt: alt,
            width: 1600,
            height: 1067,
            unoptimized: typeof src === 'string' && /^https?:\/\//i.test(src),
            sizes: priority ? '100vw' : '(max-width: 560px) 100vw, (max-width: 800px) 60vw, 600px',
            quality: 75,
            loading: priority ? 'eager' : 'lazy',
            fetchPriority: priority ? 'high' : 'auto',
            decoding: "async",
            onError: ()=>setFailed(true)
        }, void 0, false, {
            fileName: "[project]/family-dental-demo/app/page.js",
            lineNumber: 50,
            columnNumber: 154
        }, this)
    }, void 0, false, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 49,
        columnNumber: 10
    }, this);
}
_s(Photo, "BFa/7w0IiJnSoWJxZHxuU4kOwF4=");
_c2 = Photo;
function HeroParticleNetwork() {
    _s1();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroParticleNetwork.useEffect": ()=>{
            const canvas = canvasRef.current;
            const context = canvas?.getContext('2d');
            const hero = canvas?.closest('.hero');
            if (!canvas || !context || !hero) return;
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
            let width = 0;
            let height = 0;
            let particles = [];
            let frame = 0;
            let lastTime = 0;
            let visible = true;
            let disposed = false;
            const pointer = {
                x: 0,
                y: 0,
                active: false
            };
            function draw(delta = 0) {
                context.clearRect(0, 0, width, height);
                const now = performance.now();
                particles = particles.filter({
                    "HeroParticleNetwork.useEffect.draw": (particle)=>!particle.expiresAt || particle.expiresAt > now
                }["HeroParticleNetwork.useEffect.draw"]);
                const distanceLimit = width < 600 ? 150 : width <= 1100 ? 195 : 190;
                for (const particle of particles){
                    particle.x += particle.vx * delta;
                    particle.y += particle.vy * delta;
                    // Re-enter outside the visible frame so the network never hits a wall.
                    if (particle.x < -distanceLimit) particle.x = width + distanceLimit;
                    if (particle.x > width + distanceLimit) particle.x = -distanceLimit;
                    if (particle.y < -distanceLimit) particle.y = height + distanceLimit;
                    if (particle.y > height + distanceLimit) particle.y = -distanceLimit;
                }
                context.lineWidth = .7;
                for(let i = 0; i < particles.length; i++){
                    const first = particles[i];
                    for(let j = i + 1; j < particles.length; j++){
                        const second = particles[j];
                        const dx = first.x - second.x;
                        const dy = first.y - second.y;
                        const squared = dx * dx + dy * dy;
                        if (squared >= distanceLimit * distanceLimit) continue;
                        const proximity = 1 - Math.sqrt(squared) / distanceLimit;
                        context.strokeStyle = `rgba(255,255,255,${proximity * .34})`;
                        context.beginPath();
                        context.moveTo(first.x, first.y);
                        context.lineTo(second.x, second.y);
                        context.stroke();
                    }
                    if (pointer.active && !reducedMotion.matches) {
                        const distance = Math.hypot(first.x - pointer.x, first.y - pointer.y);
                        if (distance < 155) {
                            context.strokeStyle = `rgba(255,255,255,${(1 - distance / 155) * .32})`;
                            context.beginPath();
                            context.moveTo(first.x, first.y);
                            context.lineTo(pointer.x, pointer.y);
                            context.stroke();
                        }
                    }
                    context.fillStyle = `rgba(255,255,255,${first.opacity})`;
                    context.beginPath();
                    context.arc(first.x, first.y, first.radius, 0, Math.PI * 2);
                    context.fill();
                }
            }
            function tick(time) {
                frame = 0;
                if (disposed || !visible || document.hidden || reducedMotion.matches) return;
                const delta = lastTime ? Math.min((time - lastTime) / 1000, .05) : 0;
                lastTime = time;
                draw(delta);
                frame = requestAnimationFrame(tick);
            }
            function syncAnimation() {
                cancelAnimationFrame(frame);
                frame = 0;
                lastTime = 0;
                if (disposed) return;
                draw();
                if (visible && !document.hidden && !reducedMotion.matches) frame = requestAnimationFrame(tick);
            }
            function resize() {
                const rect = canvas.getBoundingClientRect();
                if (!rect.width || !rect.height) return;
                const previousWidth = width;
                const previousHeight = height;
                width = rect.width;
                height = rect.height;
                const ratio = Math.min(window.devicePixelRatio || 1, 2);
                canvas.width = Math.round(width * ratio);
                canvas.height = Math.round(height * ratio);
                context.setTransform(ratio, 0, 0, ratio, 0, 0);
                const minimumCount = width >= 600 && width <= 1100 ? 85 : 50;
                const count = Math.min(175, Math.max(minimumCount, Math.round(width * height / 8500)));
                if (previousWidth && previousHeight) {
                    for (const particle of particles){
                        particle.x *= width / previousWidth;
                        particle.y *= height / previousHeight;
                    }
                }
                particles = particles.slice(0, count);
                while(particles.length < count){
                    const angle = Math.random() * Math.PI * 2;
                    const speed = 24 + Math.random() * 36;
                    particles.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        radius: .7 + Math.random() * 2.1,
                        opacity: .25 + Math.random() * .25
                    });
                }
                syncAnimation();
            }
            function movePointer(event) {
                if (event.pointerType === 'touch' || reducedMotion.matches) return;
                const rect = canvas.getBoundingClientRect();
                pointer.x = event.clientX - rect.left;
                pointer.y = event.clientY - rect.top;
                pointer.active = true;
            }
            function clearPointer() {
                pointer.active = false;
            }
            function addNetwork(event) {
                if (event.target.closest('a, button, input, select, textarea, summary, [role="button"]')) return;
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                if (x < 0 || y < 0 || x > width || y > height) return;
                // Every click creates a fresh connected cluster. Older click-created
                // particles retire gradually to keep repeated interactions responsive.
                const expiresAt = performance.now() + 45000;
                for(let index = 0; index < 2; index++){
                    const angle = Math.random() * Math.PI * 2;
                    const spread = Math.random() * 55;
                    const direction = Math.random() * Math.PI * 2;
                    const speed = 24 + Math.random() * 36;
                    particles.push({
                        x: Math.max(0, Math.min(width, x + Math.cos(angle) * spread)),
                        y: Math.max(0, Math.min(height, y + Math.sin(angle) * spread)),
                        vx: Math.cos(direction) * speed,
                        vy: Math.sin(direction) * speed,
                        radius: 1 + Math.random() * 2,
                        opacity: .25 + Math.random() * .25,
                        expiresAt
                    });
                }
                const overflow = particles.length - 350;
                if (overflow > 0) {
                    let removed = 0;
                    particles = particles.filter({
                        "HeroParticleNetwork.useEffect.addNetwork": (particle)=>{
                            if (particle.expiresAt && removed < overflow) {
                                removed++;
                                return false;
                            }
                            return true;
                        }
                    }["HeroParticleNetwork.useEffect.addNetwork"]);
                }
                draw();
            }
            const resizeObserver = new ResizeObserver(resize);
            resizeObserver.observe(canvas);
            const visibilityObserver = new IntersectionObserver({
                "HeroParticleNetwork.useEffect": (entries)=>{
                    visible = entries[0].isIntersecting;
                    syncAnimation();
                }
            }["HeroParticleNetwork.useEffect"]);
            visibilityObserver.observe(hero);
            hero.addEventListener('pointermove', movePointer, {
                passive: true
            });
            hero.addEventListener('pointerleave', clearPointer);
            hero.addEventListener('click', addNetwork);
            document.addEventListener('visibilitychange', syncAnimation);
            reducedMotion.addEventListener('change', syncAnimation);
            resize();
            return ({
                "HeroParticleNetwork.useEffect": ()=>{
                    disposed = true;
                    cancelAnimationFrame(frame);
                    resizeObserver.disconnect();
                    visibilityObserver.disconnect();
                    hero.removeEventListener('pointermove', movePointer);
                    hero.removeEventListener('pointerleave', clearPointer);
                    hero.removeEventListener('click', addNetwork);
                    document.removeEventListener('visibilitychange', syncAnimation);
                    reducedMotion.removeEventListener('change', syncAnimation);
                }
            })["HeroParticleNetwork.useEffect"];
        }
    }["HeroParticleNetwork.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "hero-particle-canvas",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 238,
        columnNumber: 10
    }, this);
}
_s1(HeroParticleNetwork, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c3 = HeroParticleNetwork;
function TreatmentCard({ title, description, icon, onInquire }) {
    _s2();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const topics = {
        'General Dental Check-ups': [
            'Discuss your concerns',
            'Ask about an examination',
            'Review your dental history',
            'Plan your next visit'
        ],
        'Teeth Cleaning and Scaling': [
            'Ask about plaque removal',
            'Discuss professional cleaning',
            'Talk about everyday care',
            'Confirm treatment suitability'
        ],
        'Tooth Fillings': [
            'Discuss a damaged tooth',
            'Ask about filling options',
            'Understand the next steps',
            'Request a treatment estimate'
        ],
        'Root Canal Treatment': [
            'Discuss your tooth concerns',
            'Ask about an assessment',
            'Understand treatment options',
            'Talk through follow-up care'
        ],
        'Gum Care': [
            'Share your gum concerns',
            'Discuss oral hygiene',
            'Ask about available care',
            'Plan a consultation'
        ],
        'Children’s Dental Care': [
            'Arrange a first visit',
            'Discuss your child’s needs',
            'Ask your dental questions',
            'Plan a family appointment'
        ],
        'Cosmetic Dentistry': [
            'Share your smile goals',
            'Explore available options',
            'Discuss suitability',
            'Ask about treatment costs'
        ],
        'Dental Consultation': [
            'Meet with the dentist',
            'Share your questions',
            'Explore possible next steps',
            'Discuss your care plan'
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `treatment flip-treatment${expanded ? ' is-expanded' : ''}`,
        onMouseEnter: ()=>setExpanded(true),
        onMouseLeave: ()=>setExpanded(false),
        onBlur: (event)=>{
            if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false);
        },
        onKeyDown: (event)=>{
            if (event.key === 'Escape') {
                setExpanded(false);
                event.currentTarget.querySelector('.treatment-front')?.focus();
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "treatment-front",
                "aria-expanded": expanded,
                "aria-label": `Explore ${title}`,
                onClick: ()=>setExpanded(!expanded),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "service-art",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                name: icon
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 255,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "service-art-accent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    name: "spark"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 255,
                                    columnNumber: 94
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 255,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 255,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "service-title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 256,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "service-hint",
                        children: [
                            "Explore treatment ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                name: "arrow"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 257,
                                columnNumber: 56
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 257,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 254,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "treatment-back",
                hidden: !expanded,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "treatment-close",
                        "aria-label": `Close ${title} details`,
                        onClick: ()=>setExpanded(false),
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 260,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 261,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: (topics[title] || [
                            description
                        ]).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 262,
                                        columnNumber: 72
                                    }, this),
                                    item
                                ]
                            }, item, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 262,
                                columnNumber: 57
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 262,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "service-read-more",
                        onClick: ()=>onInquire(title),
                        children: [
                            "Read more ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    name: "arrow"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 263,
                                    columnNumber: 108
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 263,
                                columnNumber: 102
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 263,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 259,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 253,
        columnNumber: 10
    }, this);
}
_s2(TreatmentCard, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c4 = TreatmentCard;
function SmileComparison() {
    _s3();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [unavailable, setUnavailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "smile-comparison-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "comparison-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Explore the difference"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 272,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "A brighter perspective."
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 272,
                                columnNumber: 95
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 272,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Move the slider to compare the reference images."
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 272,
                        columnNumber: 133
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 272,
                columnNumber: 5
            }, this),
            unavailable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "comparison-unavailable",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        name: "spark"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 273,
                        columnNumber: 60
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "The comparison images are currently unavailable."
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 273,
                        columnNumber: 81
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: PHONE,
                        className: "text-link",
                        children: [
                            "Ask the clinic about smile options ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                name: "arrow"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 273,
                                columnNumber: 209
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 273,
                        columnNumber: 136
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 273,
                columnNumber: 20
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "smile-comparison",
                style: {
                    '--comparison-position': `${position}%`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "comparison-image",
                        src: "https://alqarndentalconsultants.pk/wp-content/uploads/2021/03/after.jpg",
                        alt: "Illustrative teeth-whitening reference, after view",
                        loading: "lazy",
                        onError: ()=>setUnavailable(true)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 274,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "comparison-before",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "comparison-image",
                            src: "https://alqarndentalconsultants.pk/wp-content/uploads/2021/03/Before.jpg",
                            alt: "Illustrative teeth-whitening reference, before view",
                            loading: "lazy",
                            onError: ()=>setUnavailable(true)
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 275,
                            columnNumber: 42
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 275,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "comparison-label comparison-label-before",
                        children: "Before"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 276,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "comparison-label comparison-label-after",
                        children: "After"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 276,
                        columnNumber: 79
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "comparison-divider",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "‹ ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "›"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 277,
                                    columnNumber: 70
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 277,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 277,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "comparison-range",
                        type: "range",
                        min: "0",
                        max: "100",
                        value: position,
                        onChange: (event)=>setPosition(Number(event.target.value)),
                        "aria-label": "Before and after image comparison",
                        "aria-valuetext": `${position}% before image visible`
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 278,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 273,
                columnNumber: 243
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "comparison-disclaimer",
                children: [
                    "Illustrative reference images from ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://alqarndentalconsultants.pk/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Al-Qaran Dental Consultants"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 280,
                        columnNumber: 77
                    }, this),
                    ", not Family Dental Clinic patient results. Individual outcomes vary; discuss suitability with your dentist."
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 280,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 271,
        columnNumber: 10
    }, this);
}
_s3(SmileComparison, "muNT/QbvE3A8qtCdIXABeFYL2qA=");
_c5 = SmileComparison;
function CareShowcase() {
    _s4();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const options = [
        {
            label: 'Your first visit',
            title: 'A little reassurance.',
            accent: 'A whole lot of care.',
            text: 'Meet your dentist, share your concerns, and make space for every question. Your smile story starts with a conversation.',
            image: photos.hero,
            icon: 'chat',
            tag: 'LET’S GET TO KNOW YOUR SMILE',
            steps: [
                'Share your concerns',
                'Discuss your options',
                'Plan your next step'
            ]
        },
        {
            label: 'A brighter smile',
            title: 'Your smile.',
            accent: 'Your kind of confidence.',
            text: 'Curious about the appearance of your smile? Talk with the clinic about your goals and the options that may suit you.',
            image: photos.care,
            icon: 'spark',
            tag: 'EXPLORE THE POSSIBILITIES',
            steps: [
                'Tell us your goals',
                'Ask about suitability',
                'Understand your choices'
            ]
        },
        {
            label: 'For the family',
            title: 'Little smiles.',
            accent: 'Big moments.',
            text: 'From a child’s first hello to a parent’s next visit, make dental conversations part of looking after the whole family.',
            image: photos.room,
            icon: 'heart',
            tag: 'EVERY GENERATION IS WELCOME',
            steps: [
                'Plan a family visit',
                'Talk through concerns',
                'Take it one smile at a time'
            ]
        }
    ];
    const current = options[selected];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "care-showcase container",
        "aria-labelledby": "showcase-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "showcase-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mini-line"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 293,
                                        columnNumber: 67
                                    }, this),
                                    " A different kind of dental experience"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 293,
                                columnNumber: 44
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "showcase-title",
                                children: [
                                    "There’s a person",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 293,
                                        columnNumber: 179
                                    }, this),
                                    "behind ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "every smile."
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 293,
                                        columnNumber: 192
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 293,
                                columnNumber: 139
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 293,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Find your starting point.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 293,
                                columnNumber: 252
                            }, this),
                            "We’ll help you start the conversation."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 293,
                        columnNumber: 224
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 293,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "showcase-tabs",
                role: "group",
                "aria-label": "Explore your dental visit",
                children: options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": selected === index,
                        className: selected === index ? 'selected' : '',
                        onClick: ()=>setSelected(index),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                name: option.icon
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 294,
                                columnNumber: 279
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: option.label
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 294,
                                columnNumber: 306
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tab-number",
                                children: [
                                    "0",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 294,
                                columnNumber: 333
                            }, this)
                        ]
                    }, option.label, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 294,
                        columnNumber: 120
                    }, this))
            }, void 0, false, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 294,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "showcase-stage",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "showcase-photo",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                src: current.image,
                                alt: `AI-generated Pakistani dental care scene: ${current.label}`
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 296,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "showcase-photo-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 296,
                                        columnNumber: 174
                                    }, this),
                                    " MADE FOR MOMENTS LIKE THESE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 296,
                                columnNumber: 135
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "showcase-photo-number",
                                children: [
                                    "0",
                                    selected + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 296,
                                columnNumber: 217
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 296,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "showcase-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "showcase-symbol",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    name: current.icon
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 297,
                                    columnNumber: 72
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 297,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: current.tag
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 297,
                                columnNumber: 107
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: [
                                    current.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 297,
                                        columnNumber: 166
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: current.accent
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 297,
                                        columnNumber: 172
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 297,
                                columnNumber: 147
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: current.text
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 297,
                                columnNumber: 202
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "showcase-steps",
                                children: current.steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "0",
                                                    index + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 297,
                                                columnNumber: 307
                                            }, this),
                                            step
                                        ]
                                    }, step, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 297,
                                        columnNumber: 291
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 297,
                                columnNumber: 223
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "button",
                                href: PHONE,
                                children: [
                                    "Let’s talk about your visit ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        name: "arrow"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 297,
                                        columnNumber: 415
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 297,
                                columnNumber: 352
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Treatment availability and suitability are confirmed by the clinic."
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 297,
                                columnNumber: 440
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 297,
                        columnNumber: 7
                    }, this)
                ]
            }, selected, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 295,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 292,
        columnNumber: 10
    }, this);
}
_s4(CareShowcase, "gGT9ux4E8pnUkSZL1bYkDrfRDO0=");
_c6 = CareShowcase;
function Home() {
    _s5();
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Dental Consultation');
    const dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>entries.forEach({
                        "Home.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add('revealed');
                                observer.unobserve(entry.target);
                            }
                        }
                    }["Home.useEffect"])
            }["Home.useEffect"], {
                threshold: 0.08
            });
            const nodes = document.querySelectorAll('[data-reveal], .treatment, .steps article, .gallery figure, .trust-item');
            nodes.forEach({
                "Home.useEffect": (node)=>{
                    node.classList.add('reveal-ready');
                    observer.observe(node);
                }
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    function inquire(value = 'Dental Consultation') {
        setTopic(value);
        setMenu(false);
        dialog.current?.showModal();
    }
    const links = [
        [
            'Home',
            'home'
        ],
        [
            'About',
            'about'
        ],
        [
            'Treatments',
            'treatments'
        ],
        [
            'Patient Care',
            'patient-care'
        ],
        [
            'FAQs',
            'faq'
        ],
        [
            'Contact',
            'contact'
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#main",
                className: "skip-link",
                children: "Skip to content"
            }, void 0, false, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 319,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "A little care. A lot to smile about."
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 320,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: PHONE,
                        children: [
                            "Mirpur, AJK ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "top-divider",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 320,
                                columnNumber: 106
                            }, this),
                            " +92 320 3771995"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 320,
                        columnNumber: 78
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 320,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$SiteHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 321,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                id: "main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "home",
                        className: "hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                src: "https://alqarndentalconsultants.pk/wp-content/uploads/2021/05/Image-new.jpg",
                                alt: "Smiling woman during a dental visit, from the reference website",
                                className: "hero-background",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 324,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroParticleNetwork, {}, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 325,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container hero-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-copy hero-reference-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "Family Dental Clinic · Mirpur"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 328,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: [
                                                    "A little care.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 329,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                        children: "A brighter smile."
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 329,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 329,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hero-care-columns",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hero-care-icon",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    name: "heart"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                                    lineNumber: 330,
                                                                    columnNumber: 86
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                                lineNumber: 330,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                children: "For your family"
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                                lineNumber: 330,
                                                                columnNumber: 114
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "A welcoming first step for every generation. Share your questions and plan your next dental visit."
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                                lineNumber: 330,
                                                                columnNumber: 138
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 330,
                                                        columnNumber: 48
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hero-care-icon",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    name: "chat"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                                    lineNumber: 330,
                                                                    columnNumber: 287
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                                lineNumber: 330,
                                                                columnNumber: 254
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                children: "Care starts here"
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                                lineNumber: 330,
                                                                columnNumber: 314
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Talk about your smile, explore available treatment options, and understand what comes next."
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                                lineNumber: 330,
                                                                columnNumber: 339
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 330,
                                                        columnNumber: 249
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 330,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button",
                                                onClick: ()=>inquire(),
                                                children: [
                                                    "Book an Appointment ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        name: "arrow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 331,
                                                        columnNumber: 86
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 331,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hero-smile-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Smile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 332,
                                                        columnNumber: 47
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "A little brighter."
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 332,
                                                        columnNumber: 69
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 332,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 327,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-visit-strip",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hero-strip-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "tooth"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 334,
                                                    columnNumber: 79
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 334,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "LET’S PLAN YOUR VISIT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 334,
                                                        columnNumber: 110
                                                    }, this),
                                                    " Your next smile starts with a conversation."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 334,
                                                columnNumber: 107
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: PHONE,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        name: "phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 334,
                                                        columnNumber: 208
                                                    }, this),
                                                    " +92 320 3771995 ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        name: "arrow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 334,
                                                        columnNumber: 246
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 334,
                                                columnNumber: 192
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 334,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 326,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 323,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "smile-ribbon",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                0,
                                1,
                                2,
                                3
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "YOUR SMILE, OUR STARTING POINT ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ribbon-star",
                                            children: "✳"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 337,
                                            columnNumber: 135
                                        }, this),
                                        " CARE FOR EVERY GENERATION ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ribbon-star",
                                            children: "✳"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 337,
                                            columnNumber: 200
                                        }, this),
                                        " MIRPUR, AJK ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ribbon-star",
                                            children: "✳"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 337,
                                            columnNumber: 251
                                        }, this)
                                    ]
                                }, item, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 337,
                                    columnNumber: 87
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 337,
                            columnNumber: 56
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 337,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CareShowcase, {}, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 338,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "trust-band",
                        "aria-label": "Our care concept",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container trust-grid",
                            children: [
                                [
                                    'heart',
                                    'For the whole family',
                                    'Every age. Every kind of smile.'
                                ],
                                [
                                    'spark',
                                    'A welcoming setting',
                                    'A fresh, thoughtful care concept.'
                                ],
                                [
                                    'chat',
                                    'Clarity at every step',
                                    'Questions deserve clear answers.'
                                ],
                                [
                                    'leaf',
                                    'Your comfort matters',
                                    'A little reassurance goes a long way.'
                                ]
                            ].map(([icon, title, text])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "trust-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            name: icon
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 339,
                                            columnNumber: 465
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 339,
                                                    columnNumber: 490
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: text
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 339,
                                                    columnNumber: 506
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 339,
                                            columnNumber: 485
                                        }, this)
                                    ]
                                }, title, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 339,
                                    columnNumber: 425
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 339,
                            columnNumber: 69
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 339,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "treatments",
                        className: "section container",
                        "data-reveal": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "Our services"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 340,
                                                columnNumber: 112
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: [
                                                    "A wide range of",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 340,
                                                        columnNumber: 170
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                        children: "dental care."
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 340,
                                                        columnNumber: 176
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 340,
                                                columnNumber: 151
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 340,
                                        columnNumber: 107
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-aside",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "From everyday questions to your next steps, explore a more considered approach to dental care."
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 340,
                                                columnNumber: 239
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "disclaimer",
                                                children: "Illustrative treatment categories. Please contact the clinic to confirm availability and suitability."
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 340,
                                                columnNumber: 340
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 340,
                                        columnNumber: 208
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 340,
                                columnNumber: 74
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "treatment-grid",
                                children: treatments.map(([title, description, icon])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TreatmentCard, {
                                        title: title,
                                        description: description,
                                        icon: icon,
                                        onInquire: inquire
                                    }, title, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 340,
                                        columnNumber: 563
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 340,
                                columnNumber: 483
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 340,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "about",
                        className: "about-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container about-grid",
                            "data-reveal": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-art",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                            src: photos.room,
                                            alt: "AI illustration of a Pakistani dentist welcoming a mother and daughter",
                                            className: "about-photo"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 341,
                                            columnNumber: 130
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-stamp",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "tooth"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 341,
                                                    columnNumber: 287
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Thoughtful care.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 341,
                                                            columnNumber: 330
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: "Human connection."
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 341,
                                                            columnNumber: 336
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 341,
                                                    columnNumber: 308
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 341,
                                            columnNumber: 258
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "image-caption",
                                            children: "AI-GENERATED CLINIC CONCEPT"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 341,
                                            columnNumber: 375
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 341,
                                    columnNumber: 103
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-copy",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: "The heart of the experience"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 341,
                                            columnNumber: 469
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: [
                                                "A familiar place.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 341,
                                                    columnNumber: 544
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: "A friendly welcome."
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 341,
                                                    columnNumber: 550
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 341,
                                            columnNumber: 523
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "large-copy",
                                            children: "A dental visit should begin with a conversation, not a feeling of uncertainty."
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 341,
                                            columnNumber: 583
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Explore dental care for your family in Mirpur. Contact the clinic to discuss your concerns, ask about treatment options, and plan your next visit."
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 341,
                                            columnNumber: 691
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-points",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            name: "heart"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 341,
                                                            columnNumber: 880
                                                        }, this),
                                                        " A thoughtful welcome for adults and children"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 341,
                                                    columnNumber: 874
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            name: "chat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 341,
                                                            columnNumber: 959
                                                        }, this),
                                                        " Clear conversations about your dental needs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 341,
                                                    columnNumber: 953
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 341,
                                            columnNumber: 844
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "text-link",
                                            href: "#patient-care",
                                            children: [
                                                "Discover the patient experience ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 341,
                                                    columnNumber: 1114
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 341,
                                            columnNumber: 1036
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 341,
                                    columnNumber: 441
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 341,
                            columnNumber: 53
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 341,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "patient-care",
                        className: "patient-journey",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container patient-journey-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "patient-journey-copy",
                                    "data-reveal": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow section-pill",
                                            children: "Your care, step by step"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 344,
                                            columnNumber: 61
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: [
                                                "Let’s take care of",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 344,
                                                    columnNumber: 146
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: "your dental concerns."
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 344,
                                                    columnNumber: 152
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 344,
                                            columnNumber: 124
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            className: "journey-list",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "01"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 344,
                                                            columnNumber: 220
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Explore the dental care categories and choose what you’d like to discuss."
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 344,
                                                            columnNumber: 235
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 344,
                                                    columnNumber: 216
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "02"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 344,
                                                            columnNumber: 324
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Call the clinic to ask your questions and arrange a suitable appointment."
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 344,
                                                            columnNumber: 339
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 344,
                                                    columnNumber: 320
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "03"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 344,
                                                            columnNumber: 428
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Meet your dentist, discuss an assessment, and understand your next steps."
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 344,
                                                            columnNumber: 443
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 344,
                                                    columnNumber: 424
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 344,
                                            columnNumber: 187
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button journey-cta",
                                            onClick: ()=>inquire(),
                                            children: [
                                                "Arrange your visit ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "arrow"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 344,
                                                    columnNumber: 617
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 344,
                                            columnNumber: 533
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 344,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "patient-journey-art",
                                    "data-reveal": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "journey-ring journey-ring-one",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 345,
                                            columnNumber: 60
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "journey-ring journey-ring-two",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 345,
                                            columnNumber: 129
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                            src: photos.care,
                                            alt: "AI-generated scene of a Pakistani dentist discussing care with a patient",
                                            className: "journey-portrait"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 345,
                                            columnNumber: 198
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "journey-photo-note",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "heart"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 345,
                                                    columnNumber: 369
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Good conversations.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 345,
                                                            columnNumber: 415
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Confident next steps."
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 345,
                                                            columnNumber: 421
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 345,
                                                    columnNumber: 390
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 345,
                                            columnNumber: 333
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "AI-generated concept imagery"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 345,
                                            columnNumber: 472
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 345,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 343,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 342,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "care-sequence",
                        "aria-labelledby": "sequence-heading",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sequence-heading",
                                    "data-reveal": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow section-pill",
                                            children: "The sequence"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 349,
                                            columnNumber: 55
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: "sequence-heading",
                                            children: "Your journey to a healthier smile."
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 349,
                                            columnNumber: 107
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sequence-heading-mark",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                name: "tooth"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 349,
                                                columnNumber: 231
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 349,
                                            columnNumber: 172
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 349,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sequence-grid",
                                    children: [
                                        [
                                            'Initial consultation',
                                            'Share your concerns and dental history. Ask the clinic about an assessment and the care options available to you.',
                                            'Dental Consultation'
                                        ],
                                        [
                                            'Your treatment plan',
                                            'Discuss the recommended options, appointment arrangements, and costs with your dentist before deciding how to proceed.',
                                            'Treatment Planning'
                                        ],
                                        [
                                            'Care beyond your visit',
                                            'Ask about aftercare, follow-up appointments, and the everyday habits that can help you look after your smile.',
                                            'Follow-up Care'
                                        ]
                                    ].map(([title, text, topic], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "sequence-card",
                                            "data-reveal": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sequence-number-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sequence-number",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "0",
                                                                    index + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                                lineNumber: 354,
                                                                columnNumber: 178
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 354,
                                                            columnNumber: 144
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sequence-connector",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 354,
                                                            columnNumber: 210
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 354,
                                                    columnNumber: 107
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 354,
                                                    columnNumber: 274
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: text
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 354,
                                                    columnNumber: 290
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "sequence-read-more",
                                                    onClick: ()=>inquire(topic),
                                                    children: [
                                                        "Read more ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                name: "arrow"
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                                lineNumber: 354,
                                                                columnNumber: 389
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 354,
                                                            columnNumber: 383
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 354,
                                                    columnNumber: 303
                                                }, this)
                                            ]
                                        }, title, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 354,
                                            columnNumber: 48
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 350,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmileComparison, {}, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 355,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 348,
                            columnNumber: 77
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 348,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "gallery-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            "data-reveal": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section-heading",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "eyebrow",
                                                    children: "A glimpse of the feeling"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 357,
                                                    columnNumber: 121
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: [
                                                        "More comfort.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 357,
                                                            columnNumber: 189
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: "More reasons to smile."
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 357,
                                                            columnNumber: 195
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 357,
                                                    columnNumber: 172
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 357,
                                            columnNumber: 116
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "section-aside",
                                            children: "Light-filled spaces. Attentive conversations. A visual direction built around feeling welcome."
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 357,
                                            columnNumber: 237
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 357,
                                    columnNumber: 83
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "gallery",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                                    src: photos.room,
                                                    alt: "AI illustration of a Pakistani family arriving at a dental clinic"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 357,
                                                    columnNumber: 403
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "01"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 357,
                                                            columnNumber: 514
                                                        }, this),
                                                        " A welcoming space"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 357,
                                                    columnNumber: 502
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 357,
                                            columnNumber: 395
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                                    src: photos.care,
                                                    alt: "AI illustration of a Pakistani dentist explaining a dental model"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 357,
                                                    columnNumber: 577
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "02"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 357,
                                                            columnNumber: 687
                                                        }, this),
                                                        " Care in the details"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 357,
                                                    columnNumber: 675
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 357,
                                            columnNumber: 569
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                                    src: photos.visit,
                                                    alt: "AI illustration of a Pakistani father and son in a clinic waiting area"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 357,
                                                    columnNumber: 752
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "03"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/page.js",
                                                            lineNumber: 357,
                                                            columnNumber: 869
                                                        }, this),
                                                        " Time for your smile"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 357,
                                                    columnNumber: 857
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 357,
                                            columnNumber: 744
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 357,
                                    columnNumber: 370
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "disclaimer",
                                    children: "AI-generated imagery showing Pakistani dental care and family scenes. These are illustrative concepts, not photographs of the clinic, its staff, or patients."
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 357,
                                    columnNumber: 932
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 357,
                            columnNumber: 44
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 357,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "faq",
                        className: "section container faq-section",
                        "data-reveal": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "A little clarity"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 358,
                                        columnNumber: 84
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Questions?",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 358,
                                                columnNumber: 141
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "Let’s talk."
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 358,
                                                columnNumber: 147
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 358,
                                        columnNumber: 127
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Getting ready for your visit should feel simple. Here is where to start."
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 358,
                                        columnNumber: 172
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button",
                                        onClick: ()=>inquire(),
                                        children: [
                                            "Ask the clinic ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                name: "chat"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 358,
                                                columnNumber: 319
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 358,
                                        columnNumber: 251
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 358,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "faq-list",
                                children: [
                                    [
                                        'How do I arrange an appointment?',
                                        'Call +92 320 3771995 to discuss a suitable date and time. Your appointment is confirmed directly by the clinic.'
                                    ],
                                    [
                                        'Where is the clinic located?',
                                        ADDRESS
                                    ],
                                    [
                                        'Which treatments can I ask about?',
                                        'Explore the treatment categories above, then contact the clinic to confirm which services are available and appropriate for you.'
                                    ],
                                    [
                                        'What are the opening hours and treatment fees?',
                                        'Please call the clinic for current opening hours, consultation fees, and a treatment estimate.'
                                    ],
                                    [
                                        'What should I bring to my first visit?',
                                        'Ask the clinic when arranging your visit whether you should bring previous dental records, X-rays, or other information.'
                                    ]
                                ].map(([q, a])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                children: [
                                                    q,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 364,
                                                        columnNumber: 54
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 364,
                                                columnNumber: 42
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: a
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 364,
                                                columnNumber: 97
                                            }, this)
                                        ]
                                    }, q, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 364,
                                        columnNumber: 25
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 358,
                                columnNumber: 354
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 358,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "container appointment-section",
                        id: "appointment",
                        "data-reveal": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "appointment-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "appointment-decoration",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 365,
                                        columnNumber: 181
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 365,
                                    columnNumber: 122
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Let’s start with a conversation"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 365,
                                    columnNumber: 195
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        "Your Next Smile",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 365,
                                            columnNumber: 272
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "Starts Here."
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 365,
                                            columnNumber: 278
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 365,
                                    columnNumber: 253
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Have a question or ready to arrange a visit?",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 365,
                                            columnNumber: 351
                                        }, this),
                                        "Contact the clinic and take the next step at your own pace."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 365,
                                    columnNumber: 304
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "appointment-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button-light",
                                            onClick: ()=>inquire(),
                                            children: [
                                                "Request an Appointment ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "arrow"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 365,
                                                    columnNumber: 546
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 365,
                                            columnNumber: 457
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "call-link",
                                            href: PHONE,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 365,
                                                    columnNumber: 614
                                                }, this),
                                                " +92 320 3771995"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 365,
                                            columnNumber: 576
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 365,
                                    columnNumber: 420
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "directions-link",
                                    href: MAP,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Find your way to the clinic ↗"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 365,
                                    columnNumber: 661
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "Demo inquiry only. Please call the clinic to arrange an actual appointment."
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 365,
                                    columnNumber: 769
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 365,
                            columnNumber: 87
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 365,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "contact",
                        className: "container contact-section",
                        "data-reveal": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "A familiar place, close to home"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 366,
                                        columnNumber: 84
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Find us",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 366,
                                                columnNumber: 153
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "in Mirpur."
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 366,
                                                columnNumber: 159
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 366,
                                        columnNumber: 142
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "contact-intro",
                                        children: "Your next conversation is just a call away."
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 366,
                                        columnNumber: 183
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 366,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "contact-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "pin"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 366,
                                                    columnNumber: 355
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 366,
                                                columnNumber: 324
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Family Dental Clinic Mirpur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 366,
                                                        columnNumber: 386
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                                        children: ADDRESS
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 366,
                                                        columnNumber: 422
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "text-link",
                                                        href: MAP,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: [
                                                            "Get Directions ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "↗"
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                                lineNumber: 366,
                                                                columnNumber: 534
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 366,
                                                        columnNumber: 450
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 366,
                                                columnNumber: 381
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 366,
                                        columnNumber: 295
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "contact-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 366,
                                                    columnNumber: 624
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 366,
                                                columnNumber: 593
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "eyebrow",
                                                        children: "Call the clinic"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 366,
                                                        columnNumber: 657
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "phone-number",
                                                        href: PHONE,
                                                        children: "+92 320 3771995"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 366,
                                                        columnNumber: 699
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "disclaimer",
                                                        children: "Please call to confirm opening hours and appointment arrangements."
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 366,
                                                        columnNumber: 759
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 366,
                                                columnNumber: 652
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 366,
                                        columnNumber: 564
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 366,
                                columnNumber: 265
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 366,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "clinic-map-section container",
                        "aria-labelledby": "clinic-map-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "map-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "eyebrow",
                                                children: "Come say hello"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 368,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "clinic-map-title",
                                                children: [
                                                    "Your next smile.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 368,
                                                        columnNumber: 126
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                        children: "A little closer to home."
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 368,
                                                        columnNumber: 132
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 368,
                                                columnNumber: 84
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 368,
                                        columnNumber: 38
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "button",
                                        href: MAP,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                name: "pin"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 368,
                                                columnNumber: 242
                                            }, this),
                                            " Get directions ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                name: "arrow"
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 368,
                                                columnNumber: 277
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 368,
                                        columnNumber: 176
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 368,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clinic-map-frame",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        title: "Google Map — Family Dental Clinic, Allama Iqbal Road, Mirpur, AJK",
                                        src: `https://www.google.com/maps?q=${encodeURIComponent('Family Dental Clinic, Allama Iqbal Road, New Mirpur City, Azad Jammu and Kashmir, Pakistan')}&output=embed`,
                                        width: "100%",
                                        height: "460",
                                        style: {
                                            border: 0
                                        },
                                        loading: "lazy",
                                        referrerPolicy: "no-referrer-when-downgrade",
                                        allowFullScreen: true
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 369,
                                        columnNumber: 43
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "map-address-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "map-pin",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    name: "pin"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/page.js",
                                                    lineNumber: 369,
                                                    columnNumber: 477
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 369,
                                                columnNumber: 451
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Family Dental Clinic"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 369,
                                                        columnNumber: 508
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: ADDRESS
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 369,
                                                        columnNumber: 545
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: MAP,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: "Open in Google Maps ↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/family-dental-demo/app/page.js",
                                                        lineNumber: 369,
                                                        columnNumber: 561
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 369,
                                                columnNumber: 503
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 369,
                                        columnNumber: 417
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 369,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 367,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 322,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container footer-main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Brand, {}, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 372,
                                        columnNumber: 57
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Thoughtful care.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/family-dental-demo/app/page.js",
                                                lineNumber: 372,
                                                columnNumber: 85
                                            }, this),
                                            "For the smiles that matter most."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 372,
                                        columnNumber: 66
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 372,
                                columnNumber: 52
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 372,
                                        columnNumber: 138
                                    }, this),
                                    links.slice(1).map(([label, id])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `#${id}`,
                                            children: label
                                        }, id, false, {
                                            fileName: "[project]/family-dental-demo/app/page.js",
                                            lineNumber: 372,
                                            columnNumber: 191
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 372,
                                columnNumber: 133
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-contact",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Come say hello"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 372,
                                        columnNumber: 270
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: ADDRESS
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 372,
                                        columnNumber: 293
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: PHONE,
                                        children: "+92 320 3771995"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 372,
                                        columnNumber: 309
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: MAP,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Google Maps directions ↗"
                                    }, void 0, false, {
                                        fileName: "[project]/family-dental-demo/app/page.js",
                                        lineNumber: 372,
                                        columnNumber: 344
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 372,
                                columnNumber: 238
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 372,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container footer-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Family Dental Clinic Mirpur."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 372,
                                columnNumber: 472
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Independent website demo · Not an official clinic website"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 372,
                                columnNumber: 542
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#home",
                                children: "Back to top ↑"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 372,
                                columnNumber: 612
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 372,
                        columnNumber: 431
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 372,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "floating-call",
                href: PHONE,
                "aria-label": "Call Family Dental Clinic",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        name: "phone"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 373,
                        columnNumber: 86
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Call the clinic"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/page.js",
                        lineNumber: 373,
                        columnNumber: 107
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 373,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: dialog,
                className: "inquiry-dialog",
                "aria-labelledby": "inquiry-title",
                onClick: (event)=>{
                    if (event.target === event.currentTarget) dialog.current?.close();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dialog-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "dialog-close",
                            "aria-label": "Close appointment inquiry",
                            onClick: ()=>dialog.current?.close(),
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 374,
                            columnNumber: 207
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "treatment-icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                name: "chat"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/page.js",
                                lineNumber: 374,
                                columnNumber: 362
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 374,
                            columnNumber: 329
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "A first step, at your pace"
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 374,
                            columnNumber: 389
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "inquiry-title",
                            children: [
                                "Let’s talk about",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 374,
                                    columnNumber: 481
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "your smile."
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 374,
                                    columnNumber: 487
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 374,
                            columnNumber: 442
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "topic-label",
                            children: [
                                "Interested in: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: topic
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 374,
                                    columnNumber: 554
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 374,
                            columnNumber: 512
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "This is a demonstration inquiry. No request has been sent and no appointment has been booked. Please call Family Dental Clinic to ask about this treatment or arrange a visit."
                        }, void 0, false, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 374,
                            columnNumber: 582
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "button",
                            href: PHONE,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    name: "phone"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 374,
                                    columnNumber: 798
                                }, this),
                                " Call +92 320 3771995"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 374,
                            columnNumber: 763
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "text-link",
                            href: MAP,
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                                "View clinic directions ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "↗"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/page.js",
                                    lineNumber: 374,
                                    columnNumber: 936
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/page.js",
                            lineNumber: 374,
                            columnNumber: 844
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/family-dental-demo/app/page.js",
                    lineNumber: 374,
                    columnNumber: 175
                }, this)
            }, void 0, false, {
                fileName: "[project]/family-dental-demo/app/page.js",
                lineNumber: 374,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/family-dental-demo/app/page.js",
        lineNumber: 318,
        columnNumber: 10
    }, this);
}
_s5(Home, "OmqLLYRbnoXmNdala03qA54qLxk=");
_c7 = Home;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Icon");
__turbopack_context__.k.register(_c1, "Brand");
__turbopack_context__.k.register(_c2, "Photo");
__turbopack_context__.k.register(_c3, "HeroParticleNetwork");
__turbopack_context__.k.register(_c4, "TreatmentCard");
__turbopack_context__.k.register(_c5, "SmileComparison");
__turbopack_context__.k.register(_c6, "CareShowcase");
__turbopack_context__.k.register(_c7, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=family-dental-demo_app_0np2ix7gfeyv9._.js.map