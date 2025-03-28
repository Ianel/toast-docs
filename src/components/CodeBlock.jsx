import React, { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import bash from "highlight.js/lib/languages/bash";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/github-dark.css";

// Register languages
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("html", xml);

function CodeBlock({ code, language }) {
    useEffect(() => {
        hljs.highlightAll();
    }, [code]);

    return (
        <pre className="rounded-lg overflow-hidden shadow-lg">
            <code className={`language-${language} hljs`}>{code}</code>
        </pre>
    );
}

export default CodeBlock;
