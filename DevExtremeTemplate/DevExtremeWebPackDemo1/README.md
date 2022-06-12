# `dotnet watch` + `webpack --watch` = nirvana

ASP NET Core 프로젝트에서 사용되는 모든 Client Side Script(*.js) 와 *.css 들을 
Webpack 을 이용해 Bundling 하는 방법을 적용한 프로젝트 구성 예시.  

아래 2개의 블로그 글이 큰 힌트가 되었다. 

- [Managing ASP.NET Core MVC front-end dependencies with npm and webpack - Part1](https://dev.to/larswillemsens/managing-asp-net-core-mvc-front-end-dependencies-with-npm-and-webpack-part-1-3jf5)
- [Managing ASP.NET Core MVC front-end dependencies with npm and webpack - Part2](https://dev.to/larswillemsens/managing-asp-net-core-mvc-front-end-dependencies-with-npm-and-webpack-part-2-3acp)


개발시에는 

- `ClientSide\` 디렉토리에서 `npm run watch` 를 실행
- `\` 디렉토리에서 `dotnet watch` 를 실행 

2개를 실행해 놓고 개발하면 되며, 배포시에는 빌드하면, `wwwroot\dist` 에 bundling 된 모든 css 및 js 파일이 
생성된다. 

기가맥힌다.

