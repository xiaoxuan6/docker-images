import {marked} from 'marked';

const markdownContent = `
## API

### \`/repos/{owner}/{name}\`

GitHub repository information.

**Example:** https://ungh.example.com/repos/unjs/h3

\`\`\`json
{
  "repo": {
    "id": 313641207,
    "name": "h3",
    "repo": "unjs/h3",
    "description": "Minimal h(ttp) framework built for high performance and portability ⚡️",
    "createdAt": "2020-11-17T14:15:44Z",
    "updatedAt": "2022-11-05T21:38:43Z",
    "pushedAt": "2022-11-06T06:48:23Z",
    "stars": 1168,
    "watchers": 1168,
    "forks": 59,
    "defaultBranch": "main",
    "language": "TypeScript",
    "homepage": ""  
  }
}
\`\`\`

### \`/repos/{owner}/{name}/contributors\`

Get repository contributors.

**Example:** https://ungh.example.com/repos/unjs/h3/contributors

\`\`\`json
{
  "contributors": [
    {
      "id": 5158436,
      "username": "pi0",
      "contributions": 243
    },
    {
      "id": 29139614,
      "username": "renovate[bot]",
      "contributions": 41
    }
  ]
}
\`\`\`

### \`/repos/{owner}/{name}/files/{branch}\`

Get repository files tree on specific branch.

**Example:** https://ungh.example.com/repos/unjs/h3/files/main

\`\`\`json
{
  "meta": {
    "sha": "501f0c6e623ea827d47691046f3c7319f5ac4651"
  },
  "files": [
    {
      "path": "README.md",
      "mode": "100644",
      "sha": "4c2b9ce4bccd6e046cd71be1a8c5e53a62778858",
      "size": 5782
    }
  ]
}
\`\`\`

### \`/repos/{owner}/{name}/files/{branch}/{...path}\`

Get file contents from a repository. If path ends with \`.md\`, an additional \`html\` field with rendered markup will be appended.

**Example:** https://ungh.example.com/repos/unjs/h3/files/main/README.md

\`\`\`json
{
  "meta": {
    "url": "https://raw.githubusercontent.com/unjs/h3/main/README.md"
  },
  "file": {
    "contents": "...",
    "html": "..."
  }
}
\`\`\`

### \`/repos/{owner}/{name}/readme\`

Get repository readme file on main branch (not cached)

**Example:** https://ungh.example.com/repos/unjs/h3/readme

\`\`\`json
{
  "html": "<p><a href=\"https://npmjs.com/package/h3\" rel=\"nofollow\"><img...",
  "markdown": "[![npm downloads](https://img.shields.io...."
}
\`\`\`

### \`/repos/{owner}/{name}/releases\`

Get repository releases.

**Example:** https://ungh.example.com/repos/nuxt/framework/releases

\`\`\`json
{
  "releases": [
    {
      "id": 82066265,
      "tag": "v3.0.0-rc.13",
      "author": "pi0",
      "name": "v3.0.0-rc.13",
      "draft": false,
      "prerelease": false,
      "createdAt": "2022-11-04T11:37:49Z",
      "publishedAt": "2022-11-04T11:41:59Z",
      "markdown": "....",
      "html": "..."
    }
  ]
}
\`\`\`

### \`/repos/{owner}/{name}/releases/latest\`

Get latest repository release.

**Example:** https://ungh.example.com/repos/nuxt/framework/releases/latest

\`\`\`json
{
  "release": {
    "id": 82066265,
    "tag": "v3.0.0-rc.13",
    "author": "pi0",
    "name": "v3.0.0-rc.13",
    "draft": false,
    "prerelease": false,
    "createdAt": "2022-11-04T11:37:49Z",
    "publishedAt": "2022-11-04T11:41:59Z",
    "markdown": "....",
    "html": "..."
  }
}
\`\`\`

### \`/repos/{owner}/{name}/branches\`

Get all the branches of a repository

**Example:** https://ungh.example.com/repos/unjs/ungh/branches

\`\`\`json
{
  "branches": [
    {
      "name": "main",
      "commit": {
        "sha": "2eb6bff64caf0d18f082adde7606c4702513870b",
        "url": "https://api.github.com/repos/unjs/ungh/commits/2eb6bff64caf0d18f082adde7606c4702513870b"
      },
      "protected": true
    },
    {
      "name": "renovate/all-minor-patch",
      "commit": {
        "sha": "61140d05f66cd6b217f2475ad84e2d251ed7de05",
        "url": "https://api.github.com/repos/unjs/ungh/commits/61140d05f66cd6b217f2475ad84e2d251ed7de05"
      },
      "protected": false
    },
    {
      "name": "renovate/typescript-5.x",
      "commit": {
        "sha": "19b23fca2088722bbb41a7238bf8bd5272799718",
        "url": "https://api.github.com/repos/unjs/ungh/commits/19b23fca2088722bbb41a7238bf8bd5272799718"
      },
      "protected": false
    }
  ]
}
\`\`\`

### \`/orgs/{owner}\`

GitHub organization information.

**Example:** https://ungh.example.com/orgs/unjs

\`\`\`json
{
  "org": {
    "id": 80154025,
    "name": "unjs",
    "description": "Unified JavaScript Tools"
  }
}
\`\`\`

### \`/orgs/{owner}/repos\`

GitHub organization repositories overview.

**Example:** https://ungh.example.com/orgs/unjs/repos

\`\`\`json
{
  "repos": [
    {
      "id": 97751746,
      "name": "redirect-ssl",
      "repo": "unjs/redirect-ssl",
      "description": "Connect/Express middleware to enforce https using is-https",
      "createdAt": "2017-07-19T19:04:11Z",
      "updatedAt": "2022-09-22T09:47:25Z",
      "pushedAt": "2022-04-08T20:29:48Z",
      "stars": 93,
      "watchers": 93,
      "forks": 14,
      "language": "TypeScript",
      "homepage": ""
    }
  ]
}
\`\`\`

### \`/stars/{repos}\`

Get star information for one or more repositories or organizations.

Multiple items can be separated by either \`,\` or \`+\` or \` \` (space). Each item can be either \`{owner}/{org}\` to specify one repository or \`{owner}/*\` to specify all organization repositories.

**Example:** https://ungh.example.com/stars/nuxt/nuxt.js+nuxt/framework

\`\`\`json
{
  "totalStars": 51524,
  "stars": {
    "nuxt/nuxt.js": 41560,
    "nuxt/framework": 9964
  }
}
\`\`\`

### \`/users/{username}\`

Find one github user by username.

**Example:** https://ungh.example.com/users/pi0

\`\`\`json
{
  "user": {
    "id": 5158436,
    "name": "Pooya Parsa",
    "twitter": null,
    "username": "pi0"
  }
}
\`\`\`

### \`/users/{username}/repos\`

Get user repositories.

**Example:** https://ungh.example.com/users/pi0/repos

\`\`\`json
{
  "repos": [
    {
      "id": 674019467,
      "name": "h3-on-edge",
      "description": "⚡️ Edge workers with straming powered by unjs/h3",
      "repo": "pi0/h3-on-edge",
      "stars": 51,
      "pushedAt": "2024-01-07T16:54:46Z",
      "createdAt": "2023-08-03T00:53:31Z",
      "updatedAt": "2024-01-04T17:20:53Z",
      "watchers": 51,
      "forks": 0,
      "defaultBranch": "main",
      "language": "TypeScript",
      "homepage": ""
    }
  ]
}
\`\`\`

### \`/users/find/{query}\`

Find one github user by email or other query.

**Example:** https://ungh.example.com/users/find/pooya@pi0.io

\`\`\`json
{
  "user": {
    "id": 5158436,
    "name": "Pooya Parsa",
    "twitter": null,
    "username": "pi0"
  }
}
\`\`\`
`;

export default eventHandler((event) => {
    const htmlContent = marked(markdownContent);
    const currentProtocol = event.req.headers['x-forwarded-proto'] || (event.req.socket.encrypted ? 'https' : 'http');
    const currentDomain = event.req.headers.host.split(':')[0]; // 获取主机名
    const currentPort = event.req.headers.host.split(':')[1] || (event.req.protocol === 'https' ? '443' : '80');

    let fullDomain = `${currentProtocol}://${currentDomain}`;
    if(currentPort != '80' && currentPort != '443') {
        fullDomain=`${currentProtocol}://${currentDomain}:${currentPort}`;
    }
    return `<!DOCTYPE html>
<html>
<head>
  <title>UNGH API</title>
  <meta charset="utf-8">
  <meta name="keywords" content="github、github-api"/>
  <meta name="description" content="github api 接口"/>
  <link rel="icon" href="/icon.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.7.0/github-markdown.min.css">
  <style>
    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }

    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }
</style>
</head>
<body>
  <a href="https://github.com/xiaoxuan6/docker-images/tree/main/ungh" target="_blank" class="github-corner" aria-label="View source on GitHub">
      <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"/>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"/>
      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"/>
  </svg>
  </a>
  <style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>
  <div class="markdown-body">
    <h1>🐙 UNGH API</h1>
    ${htmlContent}
  </div>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></script>
  <script>
    const options = {
      label: '🌓',
    }

    const darkmode = new Darkmode(options);
    darkmode.showWidget();

    $(document).ready(function() {
         $('a').each(function() {
            const href = $(this).attr('href');
            if (href && href.includes('https://ungh.example.com')) {
                const newHref = href.replace('https://ungh.example.com', '${fullDomain}');
                $(this).attr('href', newHref);
                $(this).attr('target', '_blank');
                $(this).text(newHref)
            }
        });
    });
</script>
</body>
</html>`;
});
