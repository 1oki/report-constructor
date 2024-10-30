# Vehicle Issues Report Application

Vehicle Issues Report Application is a web application designed to create and manage reports on vehicle conditions. Users can add data, view it in a table, edit, and save entries. The project utilizes React, TypeScript, and Zustand for state management, and it includes an export feature to save reports in .xlsx format.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies](#Technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Character Listing**: Fetches and displays a list of Star Wars characters.
- **Search**: Search characters by name.
- **Gender Filter**: Filter characters by gender.
- **Favorites**: Mark characters as favorite and view them in a separate section.
- **Pagination**: Navigate through large lists of characters using pagination.
- **Responsive UI**: Mobile-friendly design using TailwindCSS.

## Tech Stack

- **React** — Frontend JavaScript library
- **Redux Toolkit** — State management
- **TailwindCSS** — Utility-first CSS framework
- **REST API** — Fetch data from external Star Wars API
- **PostCSS** — CSS transformations

## Installation

Follow these steps to get a local copy of the project up and running:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/username/vehicle-report-app.git
    cd sw-characters
    ```
2. **Navigate to the project folder:**
    ```bash
    cd vehicle-report-app
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

5. **Open the app**:
    Navigate to `http://localhost:3000` to view the application in the browser.

## Usage

1. **Adding a Report**: Use the form to add a new report. Fill out the necessary fields and click the Submit button. After submission, the data will be automatically saved and displayed in the table.
2. **Resetting Fields**: After clicking Submit, all form fields and buttons reset to their initial state.
3. **Editing a Report**: You can edit report data directly in the table. After making changes, the data will automatically update in the table.
4. **Saving to localStorage**: Entered data is saved to localStorage and restored upon page reload.
5. **Exporting to .xlsx**: The application includes an export feature that allows users to download all report data in an .xlsx file for external use or backup purposes.

## Folder Structure

## Technologies
React — Library for building user interfaces
TypeScript — Typed superset of JavaScript
Zustand — Library for state management
xlsx — Library to generate .xlsx files
CSS — Styling for the application interface

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

