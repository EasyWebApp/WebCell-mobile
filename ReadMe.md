![](https://git-pager.vercel.app/src/image/WebCell-0.png)

# WebCell mobile scaffold

Mobile App scaffold of [WebCell v3][1]

https://web-cell.dev/mobile/

[![CI & CD](https://github.com/EasyWebApp/mobile/actions/workflows/main.yml/badge.svg)][2]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][3]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][4]

## Technology stack

-   Language: [TypeScript v5][5]
-   Component engine: [WebCell v3][1]
-   Component suite: [Material Web v1][6]
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

1.  Install **[Settings][11] GitHub app** in your account or organization
2.  Click the **[Use this template][12] button** on the top of this GitHub repository's home page, then create your own repository in the app-installed namespace above
3.  Click the **[Open in GitHub codespaces][4] button** on the top of ReadMe file, then an **online VS Code development environment** will be started immediately
4.  Set [Vercel variables][13] as [Repository secrets][14], then every commit will get an independent **Preview URL**
5.  Recommend to add a [Notification step in GitHub actions][15] for your Team IM app
6.  Remind the PMs & users of your product to submit **Feature/Enhancement** requests or **Bug** reports with [Issue forms][16] instead of IM messages or Mobile Phone calls
7.  Collect all these issues into [Project kanbans][17], then create **Pull requests** & add `closes #issue_number` into its description for automation

[1]: https://web-cell.dev/
[2]: https://github.com/EasyWebApp/mobile/actions/workflows/main.yml
[3]: https://codespaces.new/EasyWebApp/mobile
[4]: https://gitpod.io/?autostart=true#https://github.com/EasyWebApp/mobile
[5]: https://typescriptlang.org/
[6]: https://material-web.dev/
[7]: https://developers.google.com/web/tools/workbox
[8]: https://parceljs.org/
[9]: https://github.com/features/actions
[10]: https://pages.github.com/
[11]: https://github.com/apps/settings
[12]: https://github.com/new?template_name=mobile&template_owner=EasyWebApp
[13]: https://github.com/idea2app/Next-Bootstrap-ts/blob/80967ed49045af9dbcf4d3695a2c39d53a6f71f1/.github/workflows/pull-request.yml#L9-L12
[14]: https://github.com/EasyWebApp/mobile/settings/secrets/actions
[15]: https://github.com/kaiyuanshe/kaiyuanshe.github.io/blob/bb4675a56bf1d6b207231313da5ed0af7cf0ebd6/.github/workflows/pull-request.yml#L32-L56
[16]: https://github.com/EasyWebApp/mobile/issues/new/choose
[17]: https://github.com/EasyWebApp/mobile/projects
