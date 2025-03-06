# Tiptap Converter Service

A serverless microservice that converts HTML content into Tiptap JSON format. Built with Node.js and TypeScript, this service leverages Tiptap's core libraries and custom extensions to generate a JSON structure compatible with the Tiptap editor. It is designed to run as a Google Cloud Function and can be integrated with other systems via HTTP requests.

## Features

- **HTML to Tiptap JSON Conversion:** Transforms HTML strings into a structured Tiptap JSON document.
- **TypeScript & Node.js:** Provides strong type-checking and maintainability.
- **Serverless Ready:** Easily deployable as a Google Cloud Function.
- **Local Development:** Supports local testing using the Functions Framework.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.20.4)
- [Yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/) (installed via Yarn)
- [Google Cloud SDK](https://cloud.google.com/sdk) (for deployment)
- A Google Cloud Project with Cloud Functions enabled

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/jd-gray/tiptap-converter-service.git
   cd tiptap-converter-service
   
1. **Install Dependencies:**

   ```bash
   yarn install
   ```
   
1. **Build the Project:**

   ```bash
   yarn build
   ```
   
1. **Run the Service Locally:**

   ```bash
    yarn start
    ```
   
1. **Access the Service:**

   Send a POST request to `http://localhost:8081/convert` with a JSON body containing an `html` property. The service will respond with a JSON object containing the Tiptap JSON representation of the HTML content:

    ```
   {
      "html": "<p>Hello, <strong>world</strong>!</p>"
    }
    ```
    
    Expected response:
    
    ```
    {"tiptapJSON":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Hello, "},{"type":"text","marks":[{"type":"bold"}],"text":"world"},{"type":"text","text":"!"}]}]}}
    ```
