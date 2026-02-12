# Project Blueprint

## Overview

This project is a 4D Number Generator. It provides a simple web interface to generate a random 4-digit number.

## Style, Design, and Features

*   **Web Component:** The core functionality is encapsulated in a `<number-generator>` web component.
*   **Modern JavaScript:** The component is built using modern JavaScript features, including classes and shadow DOM.
*   **Simple UI:** The user interface consists of a large display for the generated number and a button to trigger the generation.
*   **Styling:** The application has a clean and simple design with centered content.

## Current Task: Convert index.html to a 4d number generator

*   **Create `number-generator.js`:** Create a new JavaScript file for the web component.
*   **Implement the `<number-generator>` component:**
    *   Use a class that extends `HTMLElement`.
    *   Use Shadow DOM to encapsulate the component's HTML, CSS, and JavaScript.
    *   The component will display a 4-digit number and a "Generate" button.
    *   Clicking the button will generate a new random 4-digit number.
*   **Update `index.html`:**
    *   Change the title to "4D Number Generator".
    *   Include the `<number-generator>` component in the body.
    *   Link to the new `number-generator.js` file.
*   **Update `style.css`:** Add styles to center the content on the page.
*   **Clear `main.js`:** Remove the old content from `main.js`.
*   **Configure Firebase server:** Add server configuration to `.idx/mcp.json`.
