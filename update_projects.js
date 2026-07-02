const fs = require('fs');

function updateProjects(filePath, btnText) {
    let content = fs.readFileSync(filePath, 'utf8');

    // We want to find the <div class="project-img-wrapper">...</div>
    // and the <a href="..." target="_blank" class="btn-link">...</a> inside <div class="project-content">
    
    // We will use a regex that matches a project card and captures its parts.
    const regex = /(<div class="project-card[^>]*>[\s\S]*?<div class="project-img-wrapper">[\s\S]*?<img[^>]+>)\s*(<\/div>[\s\S]*?<div class="project-content">[\s\S]*?<p class="project-description">[\s\S]*?<\/p>)\s*<a href="([^"]+)"[^>]*class="btn-link">[^<]*<i[^>]*><\/i><\/a>\s*(<\/div>\s*<\/div>)/g;
    
    const newContent = content.replace(regex, (match, part1, part2, url, part3) => {
        return `${part1}\n                            <a href="${url}" target="_blank" class="project-overlay-btn">${btnText}</a>\n                        ${part2}\n                        ${part3}`;
    });

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
}

updateProjects('index.html', 'View Project');
updateProjects('index-ar.html', 'عرض المشروع');
