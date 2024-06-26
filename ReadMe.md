![](https://github.com/EasyWebApp.png)

# WebCell-mobile

Mobile App scaffold of [WebCell v3][1]

https://web-cell.dev/WebCell-mobile/

[![CI & CD](https://github.com/EasyWebApp/WebCell-mobile/actions/workflows/main.yml/badge.svg)][2]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][3]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][4]

## Technology stack

-   Language: [TypeScript v5][5]
-   Component engine: [WebCell v3][1]
-   Component suite: [MDUI v2][6]
-   PWA framework: [Workbox v7][7]
-   Package bundler: [Parcel v2][8]
-   CI / CD: GitHub [Actions][9] + [Pages][10]

## Development

```shell
npm i pnpm -g
pnpm i
npm start
```

## Deployment

```shell
pnpm build
```

## Best practice

1.  Install GitHub apps in your organization or account:

    1.  [Probot settings][11]: set up Issue labels & Pull Request rules
    2.  [PR badge][12]: set up Online [VS Code][13] editor entries in Pull Request description

2.  Click the **[<kbd>Use this template</kbd>][14] button** on the top of this GitHub repository's home page, then create your own repository in the app-installed namespace above

3.  Click the **[<kbd>Open in GitHub codespaces</kbd>][3] button** on the top of ReadMe file, then an **online VS Code development environment** will be started immediately

4.  Set [Vercel variables][15] as [Repository secrets][16], then every commit will get an independent **Preview URL**

5.  Recommend to add a [Notification step in GitHub actions][17] for your Team IM app

6.  Remind the PMs & users of your product to submit **Feature/Enhancement** requests or **Bug** reports with [Issue forms][18] instead of IM messages or Mobile Phone calls

7.  Collect all these issues into [Project kanbans][19], then create **Pull requests** & add `closes #issue_number` into its description for automation

[1]: https://web-cell.dev/
[2]: https://github.com/EasyWebApp/WebCell-mobile/actions/workflows/main.yml
[3]: https://codespaces.new/EasyWebApp/WebCell-mobile
[4]: https://gitpod.io/?autostart=true#https://github.com/EasyWebApp/WebCell-mobile
[5]: https://typescriptlang.org/
[6]: https://www.mdui.org/
[7]: https://developers.google.com/web/tools/workbox
[8]: https://parceljs.org/
[9]: https://github.com/features/actions
[10]: https://pages.github.com/
[11]: https://github.com/apps/settings
[12]: https://pullrequestbadge.com/
[13]: https://code.visualstudio.com/
[14]: https://github.com/new?template_name=WebCell-mobile&template_owner=EasyWebApp
[15]: https://github.com/EasyWebApp/mobile/blob/05baec7446a8cb84a3cdc6dd184cc7314c63b468/.github/workflows/main.yml#L10-L12
[16]: https://github.com/EasyWebApp/WebCell-mobile/settings/secrets/actions
[17]: https://github.com/kaiyuanshe/kaiyuanshe.github.io/blob/bb4675a56bf1d6b207231313da5ed0af7cf0ebd6/.github/workflows/pull-request.yml#L32-L56
[18]: https://github.com/EasyWebApp/WebCell-mobile/issues/new/choose
[19]: https://github.com/EasyWebApp/WebCell-mobile/projects
