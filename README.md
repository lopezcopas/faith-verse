# Faith Verse

Faith Verse is a portfolio project that leverages ChatGPT to generate inspirational verses tailored to user-inputted emotions. Built with Vite, React, and TypeScript, this application provides a dynamic and interactive experience for users seeking emotionally resonant content.

## Features
- Input an emotion to receive three relevant verse.
- Powered by ChatGPT for creative and context-aware verse searching.
- Modern frontend built with React and TypeScript for type safety and scalability.
- Vite for fast development and optimized builds.

## Demo
[Faith Verse](https://faith.kopasu.com)

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/faith-verse.git
   ```
2. Navigate to the project directory
    ```bash
    cd faith-verse
    ```
3. install dependencies:
    ```bash
    npm install 
    # or 
    yarn install
    ```
4. Setup your ChatGPT API key:
    - Create a `.env` file in the root directory
    - Add your key as `VITE_OPEN_AI_API_KEY`

### Running the Project
1. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2. Open your broweser to `http://localhost:5173`

### Building for Production
1. Build the project:
    ```bash
    npm run build
    # or
    yarn build
    ```
2. Serve the built files (e.g. using `serve`)
    ```bash
    npm install -g serve
    server -s dist
    ```
