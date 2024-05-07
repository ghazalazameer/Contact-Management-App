# Contact Management App with Charts and Maps

This project is a contact management app with charts and maps built using ReactJS, TypeScript, TailwindCSS, React Router v6, React Query, and Redux for state management. It allows users to add, view, edit, and delete contacts, as well as visualize COVID-19 data on charts and maps.

## Features

### Contact Management

- Add new contacts through a form
- Display a list of all added contacts
- View contact details
- Edit and delete contacts

### Charts and Maps

- Dashboard with charts and maps
  - Line graph showing COVID-19 cases fluctuations worldwide
  - React Leaflet map with markers indicating country-wise COVID-19 statistics

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ghazalazameer/Contact-Management-App-Assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## API Endpoints

The app fetches COVID-19 data from the following APIs:

- **Worldwide Data of Cases:** [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
- **Country Specific Data of Cases:** [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
- **Graph Data for Cases with Date:** [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

These APIs provide essential data for displaying COVID-19 statistics worldwide and by country. You can make requests to these endpoints to retrieve up-to-date information on cases, recoveries, and deaths related to the COVID-19 pandemic.
