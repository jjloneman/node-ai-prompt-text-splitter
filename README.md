# ✂️ AI Prompt Text Splitter

![node badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fjjloneman%2Fai-prompt-text-splitter%2Fmain%2Fpackage.json&query=%24.engines.node&logo=nodedotjs&logoColor=white&label=Node.js&color=%235FA04E)
![typescript badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fjjloneman%2Fai-prompt-text-splitter%2Fmain%2Fpackage.json&query=%24.devDependencies.typescript&logo=typescript&logoColor=white&label=TypeScript&color=3178C6)
![license badge](https://img.shields.io/badge/License-MIT-green)

> A node.js/typescript program that splits text into tokens that fit into an AI
> prompt, like ChatGPT.

## 🛠️ Setup

```sh
# Cloning
git clone git@github.com:jjloneman/ai-prompt-text-splitter.git

# Installing
cd ai-prompt-text-splitter
npm install
```

## 👟 Running

1. Replace the text in [./input.txt](./index.txt) with the text you want to
   split

2. Run the script to interactively copy each chunk to the clipboard:

   ```sh
   npm start
   ```

   [![Run demo](./docs/run-demo.gif)](./docs/run-demo.gif)
