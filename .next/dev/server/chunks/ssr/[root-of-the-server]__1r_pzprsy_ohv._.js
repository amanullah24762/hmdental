module.exports = [
(()=>{"use strict";return[
"[project]/family-dental-demo/app/components/BookingAction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOOKING_EVENT",
    ()=>BOOKING_EVENT,
    "default",
    ()=>BookingAction,
    "requestBooking",
    ()=>requestBooking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const BOOKING_EVENT = 'family-dental:request-appointment';
function requestBooking(service = '', trigger = document.activeElement) {
    window.dispatchEvent(new CustomEvent(BOOKING_EVENT, {
        detail: {
            service,
            trigger
        }
    }));
}
function BookingAction({ service = '', children = 'Book a Visit ↗', className = 'button', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...props,
        type: "button",
        className: className,
        onClick: (event)=>requestBooking(service, event.currentTarget),
        children: children
    }, void 0, false, {
        fileName: "[project]/family-dental-demo/app/components/BookingAction.js",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
}),
"[project]/family-dental-demo/app/components/BookingWidget.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$services$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/app/components/services.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$clinic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/app/components/clinic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$BookingAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/family-dental-demo/app/components/BookingAction.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const clinicNumber = __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$clinic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clinic"].whatsappNumber;
function localDate() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function validCalendarDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const [year, month, day] = value.split('-').map(Number);
    const parsed = new Date(`${value}T12:00:00`);
    return Number.isFinite(parsed.getTime()) && parsed.getFullYear() === year && parsed.getMonth() + 1 === month && parsed.getDate() === day;
}
const options = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$services$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"],
    {
        slug: 'help-me-choose',
        title: 'Not sure? Help me choose'
    }
];
const symbols = [
    '✧',
    '✦',
    '⌁',
    '✧',
    '+',
    '♧',
    '+',
    '◇',
    '?'
];
function BookingWidget() {
    const dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [service, setService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [requestedTopic, setRequestedTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const returnFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [prepared, setPrepared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [today, setToday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [copyStatus, setCopyStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const messageField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    function open(request = '', opener = document.activeElement) {
        returnFocus.current = opener;
        const aliases = {
            'dental consultation': 'dentist-consultation',
            'general dental check-ups': 'dentist-consultation',
            'root canal treatment': 'root-canals'
        };
        const match = __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$services$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"].find((item)=>item.title.toLowerCase() === request.toLowerCase() || item.slug === request || item.slug === aliases[request.toLowerCase()]);
        setService(match?.title || (request ? options[options.length - 1].title : ''));
        setRequestedTopic(match ? '' : request);
        setStep(1);
        setPrepared(false);
        setCopyStatus('');
        setToday(localDate());
        setError(null);
        if (!dialog.current?.open) dialog.current?.showModal();
        requestAnimationFrame(()=>heading.current?.focus());
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handle = (event)=>open(event.detail?.service || '', event.detail?.trigger);
        window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$BookingAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOKING_EVENT"], handle);
        return ()=>window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$BookingAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOKING_EVENT"], handle);
    }, []);
    function fail(field, message, targetStep = step) {
        setPrepared(false);
        setStep(targetStep);
        setError({
            field,
            message
        });
        requestAnimationFrame(()=>dialog.current?.querySelector('[data-booking-field="' + field + '"]')?.focus());
    }
    function fieldProps(field) {
        return {
            'data-booking-field': field,
            'aria-invalid': error?.field === field || undefined,
            'aria-describedby': error?.field === field ? 'booking-field-error' : undefined
        };
    }
    function clearError(field) {
        setError((current)=>current?.field === field ? null : current);
    }
    function move(next) {
        setError(null);
        setPrepared(false);
        setCopyStatus('');
        setStep(next);
        requestAnimationFrame(()=>heading.current?.focus());
    }
    const formattedDate = validCalendarDate(date) ? new Date(`${date}T12:00:00`).toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }) : '';
    const message = `Hello H&M Dental Care! I would like to request an appointment.\n\nName: ${name.trim()}\nMobile: ${mobile.trim()}\nService: ${service}${requestedTopic ? ` (Enquiry: ${requestedTopic})` : ''}\nPreferred date: ${formattedDate}\nPreferred time: ${time}\n\nI would like to ask about your free consultation offer. Please confirm availability. Thank you!`;
    const whatsappURL = `https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`;
    function next(event) {
        event.preventDefault();
        const minimum = localDate();
        setToday(minimum);
        if (!options.some((option)=>option.title === service)) {
            fail('service', 'Please choose a service, or select “Help me choose”.', 1);
            return;
        }
        if (step >= 2 && (!validCalendarDate(date) || date < minimum)) {
            fail('date', 'Please choose a valid date today or in the future.', 2);
            return;
        }
        if (step >= 2 && ![
            'Morning',
            'Afternoon',
            'Evening'
        ].includes(time)) {
            fail('time', 'Please choose your preferred time.', 2);
            return;
        }
        if (step < 3) {
            move(step + 1);
            return;
        }
        if (!name.trim()) {
            fail('name', 'Please enter your name.');
            return;
        }
        const phoneText = mobile.trim();
        const digits = phoneText.replace(/\D/g, '');
        if (!/^\+?\d(?:[ .-]?\d){9,14}$/.test(phoneText) || digits.length < 10 || digits.length > 15) {
            fail('mobile', 'Please enter a valid mobile number, for example 0308 6878587.');
            return;
        }
        setError(null);
        setPrepared(true);
        // The visitor reviews and sends the message in WhatsApp.
        window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    }
    async function copyMessage() {
        try {
            await navigator.clipboard.writeText(message);
            setCopyStatus('Appointment request copied.');
        } catch  {
            messageField.current?.focus();
            messageField.current?.select();
            setCopyStatus('Select and copy your message below.');
        }
    }
    function containTab(event) {
        if (event.key !== 'Tab') return;
        const controls = Array.from(dialog.current.querySelectorAll('a[href], button, input, select, textarea, summary, [tabindex]')).filter((element)=>!element.disabled && element.tabIndex >= 0 && element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden').filter((element)=>{
            if (element.type !== 'radio') return true;
            const group = Array.from(dialog.current.querySelectorAll('input[type="radio"]')).filter((radio)=>radio.name === element.name);
            return element === (group.find((radio)=>radio.checked) || group[0]);
        });
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (!first) {
            event.preventDefault();
            heading.current?.focus();
            return;
        }
        if (event.shiftKey && (document.activeElement === first || document.activeElement === heading.current)) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: trigger,
                type: "button",
                className: "booking-launcher",
                onClick: (event)=>open('', event.currentTarget),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "booking-launcher-icon",
                        "aria-hidden": "true",
                        children: "▦"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                        lineNumber: 126,
                        columnNumber: 119
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Book a Visit",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Your smile starts here"
                            }, void 0, false, {
                                fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                lineNumber: 126,
                                columnNumber: 204
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                        lineNumber: 126,
                        columnNumber: 186
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                        lineNumber: 126,
                        columnNumber: 248
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                lineNumber: 126,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: dialog,
                className: "booking-dialog",
                "aria-labelledby": "booking-title",
                onKeyDown: containTab,
                onClose: ()=>{
                    const target = returnFocus.current;
                    (target?.isConnected && target.getClientRects().length ? target : trigger.current)?.focus();
                },
                onClick: (event)=>{
                    if (event.target === event.currentTarget) {
                        const rect = event.currentTarget.getBoundingClientRect();
                        if (event.clientX < rect.left || event.clientY < rect.top || event.clientX > rect.right || event.clientY > rect.bottom) dialog.current?.close();
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "booking-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "booking-welcome",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "booking-clinic",
                                    children: "H&M DENTAL CARE · PINDI SULTAN PUR"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 130,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "booking-welcome-art",
                                    "aria-hidden": "true",
                                    children: "✧"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 131,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        "A little care.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 132,
                                            columnNumber: 29
                                        }, this),
                                        " A brighter",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 132,
                                            columnNumber: 46
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "beginning."
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 132,
                                            columnNumber: 52
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 132,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Let’s find a time for your smile. Share a few details and start a conversation with our clinic."
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 133,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "booking-reassurance",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "✓   No account needed"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 134,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "✓   Just three simple steps"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 134,
                                            columnNumber: 87
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "✓   Confirm directly with the clinic"
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 134,
                                            columnNumber: 132
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 134,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$clinic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clinic"].telephone,
                                    children: [
                                        "Prefer to call? ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$app$2f$components$2f$clinic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clinic"].phone,
                                                " ↗"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 135,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 135,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                            lineNumber: 129,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "booking-main",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "booking-close",
                                    type: "button",
                                    "aria-label": "Close booking",
                                    onClick: ()=>dialog.current?.close(),
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 138,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "booking-step-label",
                                    children: [
                                        "LET’S PLAN YOUR VISIT ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Step ",
                                                step,
                                                " of 3"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 139,
                                            columnNumber: 69
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 139,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "booking-progress",
                                    "aria-label": "Booking progress",
                                    children: [
                                        'Your care',
                                        'Your time',
                                        'Your details'
                                    ].map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: step >= i + 1 ? 'is-active' : '',
                                            "aria-current": step === i + 1 ? 'step' : undefined,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: step > i + 1 ? '✓' : i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 140,
                                                    columnNumber: 248
                                                }, this),
                                                label
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 140,
                                            columnNumber: 136
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 140,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "booking-title",
                                    ref: heading,
                                    tabIndex: -1,
                                    children: step === 1 ? 'What brings you in?' : step === 2 ? 'When suits you best?' : 'Let’s make the introduction.'
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 141,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "booking-subtitle",
                                    children: step === 1 ? 'Choose a service. It’s okay if you’re not sure yet.' : step === 2 ? 'Choose your preference. The clinic will confirm availability.' : 'Your request will open in WhatsApp for you to review and send.'
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 142,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: next,
                                    noValidate: true,
                                    children: [
                                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                            className: "booking-options",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                    className: "booking-sr-only",
                                                    children: "Choose your dental service"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 144,
                                                    columnNumber: 66
                                                }, this),
                                                options.map((option, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `booking-option ${service === option.title ? 'is-selected' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                name: "booking-service",
                                                                ...fieldProps('service'),
                                                                "aria-labelledby": `booking-service-${option.slug}`,
                                                                value: option.title,
                                                                checked: service === option.title,
                                                                onChange: ()=>{
                                                                    setService(option.title);
                                                                    setRequestedTopic('');
                                                                    clearError('service');
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                                lineNumber: 144,
                                                                columnNumber: 268
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "booking-option-symbol",
                                                                "aria-hidden": "true",
                                                                children: symbols[i % symbols.length]
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                                lineNumber: 144,
                                                                columnNumber: 540
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                id: `booking-service-${option.slug}`,
                                                                children: option.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                                lineNumber: 144,
                                                                columnNumber: 635
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "booking-option-check",
                                                                "aria-hidden": "true",
                                                                children: service === option.title ? '✓' : ''
                                                            }, void 0, false, {
                                                                fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                                lineNumber: 144,
                                                                columnNumber: 700
                                                            }, this)
                                                        ]
                                                    }, option.slug, true, {
                                                        fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                        lineNumber: 144,
                                                        columnNumber: 165
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 144,
                                            columnNumber: 28
                                        }, this),
                                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "booking-schedule",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "booking-field",
                                                    children: [
                                                        "Preferred date",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            ...fieldProps('date'),
                                                            value: date,
                                                            min: today,
                                                            required: true,
                                                            onChange: (e)=>{
                                                                setDate(e.target.value);
                                                                clearError('date');
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 145,
                                                            columnNumber: 109
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 145,
                                                    columnNumber: 62
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                                    className: "booking-times",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                            children: "Preferred time of day"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 145,
                                                            columnNumber: 297
                                                        }, this),
                                                        [
                                                            [
                                                                'Morning',
                                                                'Start your day with a smile',
                                                                '☀'
                                                            ],
                                                            [
                                                                'Afternoon',
                                                                'A little time for yourself',
                                                                '◷'
                                                            ],
                                                            [
                                                                'Evening',
                                                                'Find a moment after your day',
                                                                '☾'
                                                            ]
                                                        ].map(([label, text, icon])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: time === label ? 'is-selected' : '',
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: "booking-time",
                                                                        ...fieldProps('time'),
                                                                        "aria-labelledby": `booking-time-${label}`,
                                                                        value: label,
                                                                        checked: time === label,
                                                                        onChange: ()=>{
                                                                            setTime(label);
                                                                            clearError('time');
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                                        lineNumber: 145,
                                                                        columnNumber: 582
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "aria-hidden": "true",
                                                                        children: icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                                        lineNumber: 145,
                                                                        columnNumber: 786
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                id: `booking-time-${label}`,
                                                                                children: label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                                                lineNumber: 145,
                                                                                columnNumber: 830
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                children: text
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                                                lineNumber: 145,
                                                                                columnNumber: 883
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                                        lineNumber: 145,
                                                                        columnNumber: 824
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "booking-option-check",
                                                                        "aria-hidden": "true",
                                                                        children: time === label ? '✓' : ''
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                                        lineNumber: 145,
                                                                        columnNumber: 911
                                                                    }, this)
                                                                ]
                                                            }, label, true, {
                                                                fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                                lineNumber: 145,
                                                                columnNumber: 515
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 145,
                                                    columnNumber: 261
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "booking-info",
                                                    children: "These are preferences, not live appointment slots. Opening hours and your final appointment time will be confirmed by the clinic."
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 145,
                                                    columnNumber: 1024
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 145,
                                            columnNumber: 28
                                        }, this),
                                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "booking-details",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "booking-summary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "YOUR VISIT AT A GLANCE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 146,
                                                            columnNumber: 94
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: service
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 146,
                                                            columnNumber: 129
                                                        }, this),
                                                        requestedTopic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                "Enquiry: ",
                                                                requestedTopic
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 146,
                                                            columnNumber: 174
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                formattedDate,
                                                                " · ",
                                                                time
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 146,
                                                            columnNumber: 207
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>move(1),
                                                            children: "Edit preferences ↗"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 146,
                                                            columnNumber: 238
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 146,
                                                    columnNumber: 61
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "booking-field",
                                                    children: [
                                                        "Your name",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "name",
                                                            ...fieldProps('name'),
                                                            autoComplete: "name",
                                                            placeholder: "Enter your name",
                                                            value: name,
                                                            maxLength: 80,
                                                            required: true,
                                                            onChange: (e)=>{
                                                                setName(e.target.value);
                                                                setPrepared(false);
                                                                clearError('name');
                                                                setCopyStatus('');
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 146,
                                                            columnNumber: 359
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 146,
                                                    columnNumber: 317
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "booking-field",
                                                    children: [
                                                        "Mobile number",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "tel",
                                                            ...fieldProps('mobile'),
                                                            type: "tel",
                                                            autoComplete: "tel",
                                                            inputMode: "tel",
                                                            placeholder: "e.g. 0308 6878587",
                                                            value: mobile,
                                                            maxLength: 24,
                                                            required: true,
                                                            onChange: (e)=>{
                                                                setMobile(e.target.value);
                                                                setPrepared(false);
                                                                clearError('mobile');
                                                                setCopyStatus('');
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 146,
                                                            columnNumber: 649
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 146,
                                                    columnNumber: 603
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "booking-info",
                                                    children: "Your details are included in the WhatsApp message. You choose when to send it. Your appointment is confirmed only after the clinic replies."
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 146,
                                                    columnNumber: 928
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 146,
                                            columnNumber: 28
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            id: "booking-field-error",
                                            className: "booking-error",
                                            role: "alert",
                                            children: error.message
                                        }, void 0, false, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 147,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "booking-actions",
                                            children: [
                                                step > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "booking-back",
                                                    onClick: ()=>move(step - 1),
                                                    children: "← Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 148,
                                                    columnNumber: 59
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "booking-next",
                                                    children: [
                                                        step === 3 ? 'Continue to WhatsApp' : 'Continue',
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "aria-hidden": "true",
                                                            children: "↗"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 148,
                                                            columnNumber: 251
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 148,
                                                    columnNumber: 153
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 148,
                                            columnNumber: 13
                                        }, this),
                                        prepared && step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "booking-ready",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    role: "status",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Your message is ready."
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 149,
                                                            columnNumber: 88
                                                        }, this),
                                                        " Send it in WhatsApp, then wait for the clinic to confirm your visit."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 149,
                                                    columnNumber: 71
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "booking-reopen",
                                                    children: "Open WhatsApp again ↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 149,
                                                    columnNumber: 200
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            children: "Prefer to copy your request?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 149,
                                                            columnNumber: 288
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            ref: messageField,
                                                            "aria-label": "Your appointment request",
                                                            value: message,
                                                            readOnly: true,
                                                            rows: 7
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 149,
                                                            columnNumber: 335
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: copyMessage,
                                                            children: "Copy message"
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 149,
                                                            columnNumber: 438
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            role: "status",
                                                            children: copyStatus
                                                        }, void 0, false, {
                                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                            lineNumber: 149,
                                                            columnNumber: 503
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                                    lineNumber: 149,
                                                    columnNumber: 279
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                            lineNumber: 149,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 143,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$family$2d$dental$2d$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "booking-bottom-note",
                                    children: "No payment required to send an enquiry."
                                }, void 0, false, {
                                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                                    lineNumber: 151,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                            lineNumber: 137,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                    lineNumber: 128,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
                lineNumber: 127,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/family-dental-demo/app/components/BookingWidget.js",
        lineNumber: 125,
        columnNumber: 10
    }, this);
}
}),
"[project]/family-dental-demo/app/components/clinic.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Contact details supplied by the clinic owner.
__turbopack_context__.s([
    "clinic",
    ()=>clinic
]);
const clinic = Object.freeze({
    name: 'H&M Dental Care',
    phone: '0308 6878587',
    telephone: 'tel:+923086878587',
    whatsappNumber: '923086878587',
    address: 'QRMV+52Q, Kharian Dinga Rd, Pindi Sultan Pur, Pakistan',
    mapURL: 'https://share.google/UnzXo8ME6DK5GyE37',
    mapQuery: 'H&M Dental Care, QRMV+52Q, Kharian Dinga Rd, Pindi Sultan Pur, Pakistan'
});
}),
"[project]/family-dental-demo/app/components/services.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// English translations of the services visible on the supplied clinic signboard.
__turbopack_context__.s([
    "services",
    ()=>services
]);
const services = [
    {
        "slug": "dentist-consultation",
        "title": "Dental Check-up",
        "text": "Dental examination and consultation about your oral health.",
        "category": "Assessment",
        "icon": "chat",
        "items": [
            "Discuss your concerns",
            "Review your dental history",
            "Plan your next steps"
        ]
    },
    {
        "slug": "teeth-cleaning",
        "title": "Teeth Cleaning & Scaling",
        "text": "Professional teeth cleaning and scaling.",
        "category": "Everyday Care",
        "icon": "spark",
        "items": [
            "Discuss cleaning needs",
            "Arrange a cleaning visit",
            "Ask about oral hygiene"
        ]
    },
    {
        "slug": "tooth-fillings",
        "title": "Dental Fillings",
        "text": "Fillings for teeth affected by cavities or damage.",
        "category": "Everyday Care",
        "icon": "tooth",
        "items": [
            "Arrange a tooth assessment",
            "Discuss filling options",
            "Ask about treatment costs"
        ]
    },
    {
        "slug": "tooth-extractions",
        "title": "Tooth Extraction",
        "text": "Removal of a tooth following a dental assessment.",
        "category": "Treatment & Repair",
        "icon": "tooth",
        "items": [
            "Assess the affected tooth",
            "Discuss the procedure",
            "Ask about aftercare"
        ]
    },
    {
        "slug": "crowns-bridges",
        "title": "Dental Crowns",
        "text": "Dental caps to cover and restore a tooth.",
        "category": "Treatment & Repair",
        "icon": "tooth",
        "items": [
            "Discuss a damaged tooth",
            "Ask about crown options",
            "Plan your appointments"
        ]
    },
    {
        "slug": "root-canals",
        "title": "Root Canal Treatment",
        "text": "Treatment for the root of an affected tooth.",
        "category": "Treatment & Repair",
        "icon": "plus",
        "items": [
            "Assess the affected tooth",
            "Discuss the treatment plan",
            "Arrange follow-up care"
        ]
    },
    {
        "slug": "teeth-whitening",
        "title": "Teeth Whitening",
        "text": "Whitening options for a brighter-looking smile.",
        "category": "Smile & Alignment",
        "icon": "spark",
        "items": [
            "Discuss your smile goals",
            "Review whitening suitability",
            "Ask about aftercare"
        ]
    },
    {
        "slug": "bleeding-gums",
        "title": "Bleeding Gums Treatment",
        "text": "Assessment and care for bleeding gums.",
        "category": "Everyday Care",
        "icon": "heart",
        "items": [
            "Share your gum concerns",
            "Arrange a gum assessment",
            "Discuss ongoing care"
        ]
    },
    {
        "slug": "bad-breath",
        "title": "Bad Breath Treatment",
        "text": "Assessment and care for persistent bad breath.",
        "category": "Everyday Care",
        "icon": "chat",
        "items": [
            "Discuss your concerns",
            "Arrange an oral examination",
            "Ask about care options"
        ]
    },
    {
        "slug": "tooth-gap-closure",
        "title": "Tooth Gap Closure",
        "text": "Options for closing spaces between teeth.",
        "category": "Smile & Alignment",
        "icon": "tooth",
        "items": [
            "Discuss gaps in your teeth",
            "Explore suitable options",
            "Request a treatment plan"
        ]
    },
    {
        "slug": "orthodontics",
        "title": "Teeth Straightening",
        "text": "Orthodontic options for crooked or misaligned teeth.",
        "category": "Smile & Alignment",
        "icon": "tooth",
        "items": [
            "Discuss tooth alignment",
            "Ask about suitable options",
            "Plan your treatment visits"
        ]
    },
    {
        "slug": "jaw-fracture-treatment",
        "title": "Jaw Fracture Treatment",
        "text": "Assessment and treatment planning for a fractured jaw.",
        "category": "Treatment & Repair",
        "icon": "plus",
        "items": [
            "Discuss the injury",
            "Arrange an assessment",
            "Confirm treatment arrangements"
        ]
    },
    {
        "slug": "laser-filling",
        "title": "Laser Filling",
        "text": "Laser filling, as listed among the clinic’s services.",
        "category": "Treatment & Repair",
        "icon": "spark",
        "items": [
            "Ask about the procedure",
            "Discuss suitability",
            "Confirm treatment details"
        ]
    },
    {
        "slug": "dental-x-rays",
        "title": "Dental X-rays",
        "text": "Dental imaging to support your dentist’s assessment.",
        "category": "Assessment",
        "icon": "plus",
        "items": [
            "Discuss imaging needs",
            "Arrange your visit",
            "Review findings with your dentist"
        ]
    }
];
}),
]})(),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1r_pzprsy_ohv._.js.map