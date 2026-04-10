# Project Portfolio Enhancer 🚀

[![Node.js](https://img.shields.io/badge/node.js-%3E%3D14.0.0-blue.svg)] [![Express](https://img.shields.io/badge/express-%3E%3D4.17.1-green.svg)] [![MIT License](https://img.shields.io/badge/license-MIT-yellow.svg)]

## Screenshot Alt Text Section

- **Home Page:** A clean and modern interface with a search bar for GitHub usernames, fetched repositories displayed in cards, and an option to enhance READMEs.

## Features

- Fetches repositories by GitHub username.
- Enhances README content based on repository data.
- Dark theme with glassmorphism and smooth transitions.
- Toast notifications for user feedback.
- Responsive design for mobile devices.

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/project-portfolio-enhancer.git
   cd project-portfolio-enhancer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## API Docs

### Method: GET
**Endpoint:** `/api/repos/:username`
**Purpose:** Fetches repositories by GitHub username.
**Response:** Array of repository objects.

### Method: POST
**Endpoint:** `/api/enhance-readme`
**Purpose:** Enhances README content based on repository data.
**Response:** Enhanced README Markdown.

## Tech Stack

- **Backend:** Node.js, Express, Axios
- **Frontend:** HTML, CSS (Inter font), JavaScript
- **Storage:** In-memory JSON file
- **CORS:** Enabled for all origins

## MIT License

Copyright © 2023 Project Portfolio Enhancer. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.