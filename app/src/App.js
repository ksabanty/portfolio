import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
function App() {
    var scrollToPortfolio = function () {
        var _a;
        (_a = document.getElementById('portfolio')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    };
    return (_jsxs("div", { className: "App", children: [_jsx("div", { className: "splash-container", children: _jsxs("div", { className: "splash-content", children: [_jsx("h1", { children: "Kerry Sabanty" }), _jsx("p", { children: "I'm a full stack software engineer passionate about building useful and creative applications." }), _jsx("p", { children: "Learning about new programming languages, patterns, and frameworks is how I like to spend some time." }), _jsx("button", { onClick: scrollToPortfolio, className: "cta-button", children: "View My Work" })] }) }), _jsx("div", { id: "portfolio", className: "portfolio-section", children: _jsxs("div", { children: [_jsx("a", { href: "/skills", children: "Skills" }), _jsx("a", { href: "/resume", children: "Experience" }), _jsx("a", { href: "/contact", children: "Contact" })] }) })] }));
}
export default App;
