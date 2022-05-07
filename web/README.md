<h1 align="center">
  <img alt="Feedback Widget logo" height="80" title="Feedback Widget" src="../.github/favicon.png" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257e6&labelColor=0A1033">

 <img src="https://img.shields.io/static/v1?label=NLW&message=08&color=8257e6&labelColor=0A1033" alt="NLW 08" />
</p>

![cover](../.github/web-version.svg?style=flat)

## ✨ Technologies

### [🌐 WEB](./web/README.md)
-   [ ] [React.Js](https://reactjs.org/) - JavaScript library for building UI.
-   [ ] [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript.
-   [ ] [Vite](https://vitejs.dev/) - Frontend Tooling with optimized build.
-   [ ] [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and Node.Js.
-   [ ] [TailwindCSS](https://tailwindcss.com/) - CSS Framework to style the website.
-   [ ] [HeadlessUI](https://headlessui.dev/) - Accessible and unstyled UI components, designed to integrate beautifully with Tailwind CSS.
-   [ ] [html2canvas](https://html2canvas.hertzen.com/) - Screenshots with JavaScript.
-   [ ] [phosphor-react](https://phosphoricons.com/) - Flexible icon family for interfaces, diagrams, and presentations.

## 🚀 Deploy

The chosen deployment platform for this project was [Vercel](https://vercel.com/) (Static Deploy and JAMstack, global CDN).

## 🔖 Layout

You can take a look at the project layout through [this link](https://www.figma.com/community/file/1102912516166573468), just select the option page: "Protótipo - Desktop". You must have an account on [Figma](http://figma.com/) website to get access.

## 🐱‍💻 Environment variables

After cloning the repository, you should set the following environment variables to run this project. [(Expose these environment variables to __Vite__ by prefixing with "VITE_")](https://vitejs.dev/guide/env-and-mode.html#env-files)

Create an __.env__ or __.env.local__ file with the following keys:

- VITE_API_URL=<<span style="color: #238636;">your_webapp_url</span>>

## Executing locally

Open your preferred terminal in the root directory of your project and run the following command:
```cl
cd web
```

Then, instal the dependencies using yarn or npm Depending on your package manager (yarn or npm)
```cl
yarn # For yarn users

OR

npm install # For npm users
```

After installing the dependencies, it might be possible to run the command:

```cl
yarn dev
```

So now you can access the project by your browser typing [http://localhost:3000/](http://localhost:3000)