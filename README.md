# AI Web Scraper

A desktop application built with Electron and Gemini AI to extract structured data from websites.
![image](https://github.com/user-attachments/assets/f7190915-c0e2-4500-9db9-51bf6d4c78d3)
![image](https://github.com/user-attachments/assets/383ac229-f1c1-46d5-b4d8-714c11ae9d5b)
![image](https://github.com/user-attachments/assets/e4464603-d1a5-4006-b3dc-dcc71a37bfc0)


## Features

- Enter one or multiple URLs to scrape (one per line).
- Provide a custom extraction prompt.
- Define the JSON schema for output.
- Simulate a real device with a custom `User-Agent` header.
- Display scraping status and results in a table.
- Export results as a JSON file or copy to clipboard.

## Prerequisites

- Node.js (>=14.x)
- npm (comes with Node.js)

## Installation

1. Clone this repository:
   ```powershell
   git clone https://github.com/somkietacode/ai-scrapper.git
   cd ai-scrapper
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

## Usage

1. Start the application:
   ```powershell
   npm start
   ```

2. In the app window:
   - Paste your Gemini API key.
   - Enter one or more website URLs.
   - Customize the extraction prompt and output JSON schema.
   - Click **Start Scraping**.
   - After scraping completes, view results, export or copy.

## Configuration

- The Electron window auto-sizes to the content and is non-resizable.
- CORS checks are disabled in the main process, and all page fetches happen via IPC in Node (no external proxy required).
- The `User-Agent` header simulates an iPhone Safari browser.

## License

This project is licensed under the MIT License.

---

*Built with ❤️ by Somkieta Rahim Alex*
