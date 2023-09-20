# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

yarn create vite
cd <tab>
yarn
yarn dev
echo "# R-P" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/FranciscoJavier001/R-P.git
git push -u origin main

npm install react-icons
npm install react-router-dom

npm i
git add .
git commit -m "gh-pages added"
npm run build
npx gh-pages -d dist