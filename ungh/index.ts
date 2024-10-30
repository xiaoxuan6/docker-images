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
    "defaultBranch": "main"
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
      "forks": 14
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
      "defaultBranch": "main"
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

    let fullDomain = currentDomain;
    if(currentPort != '80' && currentPort != '443') {
        fullDomain=`${currentProtocol}://${currentDomain}:${currentPort}`;
    }
    return `<!DOCTYPE html>
<html>
<head>
  <title>🐙 UNGH API</title>
  <meta charset="utf-8">
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