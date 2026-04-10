const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const REPOS_FILE_PATH = path.join(__dirname, 'data', 'repositories.json');

// Fetch repositories by GitHub username
app.get('/api/repos/:username', async (req, res) => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${req.params.username}/repos`);
    fs.writeFileSync(REPOS_FILE_PATH, JSON.stringify(data, null, 2));
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to fetch repositories' });
  }
});

// Enhance README content based on repository data
app.post('/api/enhance-readme', async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) return res.status(400).json({ success: false, error: 'Username is required' });

    const reposData = JSON.parse(fs.readFileSync(REPOS_FILE_PATH, 'utf8'));
    const enhancedReadme = generateEnhancedReadme(reposData);

    return res.status(201).json({ success: true, data: enhancedReadme });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to enhance README' });
  }
});

// Generate enhanced README content
function generateEnhancedReadme(reposData) {
  const readmeContent = `
# Project Portfolio Enhancer

## Badges
[![GitHub language count](https://img.shields.io/github/languages/count/project-portfolio-enhancer/project-portfolio-enhancer)](https://github.com/project-portfolio-enhancer/project-portfolio-enhancer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Screenshot alt text section
![Project Portfolio Enhancer](public/images/screenshot.png "Screenshot of the Project Portfolio Enhancer")

## Features
- Analyzes GitHub repositories
- Generates professional READMEs with polished Markdown content

## Quick Start
1. Clone the repository: \`git clone https://github.com/project-portfolio-enhancer/project-portfolio-enhancer.git\`
2. Install dependencies: \`npm install\`
3. Start the server: \`npm start\`

## API docs
### GET /api/repos/:username
Fetches repositories by GitHub username.

#### Parameters:
- **username** (string): GitHub username

#### Response:
Array of repository objects

### POST /api/enhance-readme
Enhances README content based on repository data.

#### Request Body:
- **username** (string): GitHub username

#### Response:
Enhanced README Markdown

## Tech Stack
- Node.js
- Express
- Axios
- CORS
- HTML/CSS/JS

## MIT License notice
MIT License

Copyright (c) 2023 Project Portfolio Enhancer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions: