# Google Maps TypeScript Web Application

This project is a TypeScript web application that randomly generates users and companies, each assigned unique map coordinates, and displays them as markers on a Google Map. By implementing TypeScript interfaces, classes, and types, the project showcases the flexibility and reusability of TypeScript code in building web applications with dynamic, interactive elements.

## Project Overview

**The application consists of the following**:

- **Entities**: Users and companies, each with a name, location (latitude and longitude), and additional info.
- **Google Maps Integration**: A Google Map is embedded in the app, with each entity displayed as a map marker.
- **Code Structure**: Interfaces ensure type safety and reusability, and classes handle the creation and display of entities.

The app also leverages **`Parcel Bundler`** for easy bundling of **`TypeScript`** and **`Tailwind CSS`** for styling.


## Features

- **Randomized Entity Generation**: Each user and company is generated with random details using **`@faker-js/faker`**, including names and locations.
- **Interactive Map Display**: Each entity is added as a marker to a Google Map; clicking a marker displays its information in an InfoWindow.
- **Flexible Codebase**: Interfaces allow for the easy addition of new mappable entity types, improving scalability.

## Prerequisites

Parcel Bundler globally installed:
```bash
npm install -g parcel-bundler
```

## Setup
1. Clone the repository and navigate to the project directory.
2. Install dependencies:
```bash
npm install
```
3. Start the development server (script configured in package.json):
```bash
npm run parcel
```
4. Open **`localhost:1234`** in your browser to view the app.

## Project Structure

**`index.html`**

Basic HTML structure with embedded Google Maps and Tailwind CSS CDN.

**`index.ts`**

Initializes the map and generates user and company entities, displaying them as markers.

**`User.ts`**

Defines a **`User`** class implementing the **`Mappable`** interface, with random properties generated using **`faker`**.

**`Company.ts`**

Defines a **`Company`** class, also implementing the **`Mappable`** interface, with a custom marker display.

**`CustomMap.ts`**

Manages Google Map integration, allowing entities implementing the **`Mappable`** interface to be added as markers.

## Key Concepts

- **Classes and Interfaces**: `User` and Company classes each implement the `Mappable` interface, allowing them to be used interchangeably within the `CustomMap` class.
- **TypeScript Interfaces for Scalability**: The `Mappable` interface ensures any class implementing it has a location and a `markerContent` method, allowing easy integration with `CustomMap`.
- **Type Safety and Code Reusability**: TypeScript provides type safety, and interfaces and classes help ensure code is maintainable and extensible for new features.

## API Key Requirement

Make sure to replace `YOUR_API_KEY` in `index.html` with your Google Maps API key.