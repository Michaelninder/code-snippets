class SyntaxHighlighter {
    constructor() {
        this.patterns = {
            javascript: {
                comment: /\/\/.*$|\/\*[\s\S]*?\*\//gm,
                string: /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g,
                regex: /\/(?:[^\/\\\n]|\\.)+\/[gimuy]*/g,
                number: /\b\d+\.?\d*\b/g,
                keyword: /\b(?:const|let|var|function|class|if|else|for|while|do|break|continue|return|try|catch|finally|throw|async|await|import|export|default|from|as|new|this|super|extends|static|get|set|typeof|instanceof|in|of|delete|void|null|undefined|true|false)\b/g,
                function: /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()/g,
                property: /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*:)/g,
                variable: /\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g,
                operator: /[+\-*/%=<>!&|^~?:]/g,
                punctuation: /[{}[\]();,\.]/g
            },
            php: {
                comment: /\/\/.*$|\/\*[\s\S]*?\*\/|#.*$/gm,
                string: /(["'])(?:(?!\1)[^\\]|\\.)*\1/g,
                number: /\b\d+\.?\d*\b/g,
                keyword: /\b(?:class|function|public|private|protected|static|const|var|if|else|elseif|endif|for|foreach|endfor|while|endwhile|do|break|continue|return|try|catch|finally|throw|new|this|parent|self|extends|implements|interface|abstract|final|namespace|use|as|global|echo|print|include|include_once|require|require_once|array|true|false|null)\b/g,
                variable: /\$[a-zA-Z_][a-zA-Z0-9_]*/g,
                'php-tag': /<\?php|\?>/g,
                function: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\()/g,
                operator: /[+\-*/%=<>!&|^~?:]/g,
                punctuation: /[{}[\]();,\.]/g
            },
            css: {
                comment: /\/\*[\s\S]*?\*\//g,
                string: /(["'])(?:(?!\1)[^\\]|\\.)*\1/g,
                number: /\b\d+(?:\.\d+)?(?:px|em|rem|%|vh|vw|pt|pc|in|cm|mm|ex|ch|vmin|vmax|deg|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?\b/g,
                selector: /[.#]?[a-zA-Z][\w-]*(?=\s*\{|,|\s)/g,
                property: /[a-zA-Z-]+(?=\s*:)/g,
                keyword: /\b(?:important|inherit|initial|unset|auto|none|normal|bold|italic|underline|overline|line-through|uppercase|lowercase|capitalize|center|left|right|justify|top|bottom|middle|baseline|sub|super|text-top|text-bottom|relative|absolute|fixed|static|sticky|block|inline|inline-block|flex|grid|table|table-cell|table-row|hidden|visible|scroll|auto|both|content-box|border-box|transparent)\b/g,
                function: /[a-zA-Z-]+(?=\()/g,
                operator: /[+\-*/%=<>!]/g,
                punctuation: /[{}[\]();,\.:]/g
            },
            python: {
                comment: /#.*$/gm,
                string: /("""[\s\S]*?"""|'''[\s\S]*?'''|["'])(?:(?!\1)[^\\]|\\.)*\1/g,
                number: /\b\d+\.?\d*\b/g,
                keyword: /\b(?:and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield|True|False|None)\b/g,
                function: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\()/g,
                class: /\b[A-Z][a-zA-Z0-9_]*\b/g,
                variable: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/g,
                operator: /[+\-*/%=<>!&|^~]/g,
                punctuation: /[{}[\]();,\.:]/g
            }
        };
    }

    highlightAll() {
        const codeBlocks = document.querySelectorAll('code[class*="language-"]');
        codeBlocks.forEach(block => {
            const language = block.className.match(/language-(\w+)/);
            if (language && this.patterns[language[1]]) {
                this.highlight(block, language[1]);
            }
        });
    }

    highlight(element, language) {
        let code = element.textContent;
        const patterns = this.patterns[language];

        const order = ['comment', 'string', 'regex', 'doctype', 'php-tag', 'number', 'keyword', 'function', 'class', 'selector', 'property', 'attribute', 'variable', 'operator', 'tag', 'punctuation'];
        
        let highlights = [];

        for (const type of order) {
            if (patterns[type]) {
                let match;
                patterns[type].lastIndex = 0;
                
                while ((match = patterns[type].exec(code)) !== null) {
                    const start = match.index;
                    const end = start + match[0].length;
                    
                    const overlaps = highlights.some(h => 
                        (start >= h.start && start < h.end) || 
                        (end > h.start && end <= h.end) ||
                        (start <= h.start && end >= h.end)
                    );
                    
                    if (!overlaps) {
                        highlights.push({ start, end, type, text: match[0] });
                    }
                }
            }
        }

        highlights.sort((a, b) => a.start - b.start);

        let highlightedCode = '';
        let lastIndex = 0;

        highlights.forEach(highlight => {
            highlightedCode += code.slice(lastIndex, highlight.start);
            highlightedCode += `<span class="${highlight.type}">${this.escapeHtml(highlight.text)}</span>`;
            lastIndex = highlight.end;
        });

        highlightedCode += code.slice(lastIndex);
        element.innerHTML = highlightedCode;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const highlighter = new SyntaxHighlighter();
    highlighter.highlightAll();
});