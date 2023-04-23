// Copy shortened amazon URL to clipboard
// For web browsers that are not able to use clipboardAPI
javascript:url=location.href.replace(/(https:\/\/www.amazon.co.jp\/).*(dp\/.+?)\/.*/,'$1$2');pre=document.createElement('pre');pre.style.webkitUserSelect='auto';pre.textContent=url;document.body.appendChild(pre);document.getSelection().selectAllChildren(pre);document.execCommand('copy');document.body.removeChild(pre);
