# SneakR Project

This project utilizes [Supabase](https://supabase.io/) and [Nuxt 3](https://v3.nuxtjs.org/) to create a website allowing users to browse through shoe pairs and add them to a personal collection or wishlist.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Configuration](#project-configuration)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Configure Supabase](#3-configure-supabase)
  - [4. Import Data into Supabase] (#4-configure-supabase)(#4-import-data-into-supabase)
- [Running the Project](#running-the-project)
- [Contribution](#contribution)
- [License](#license)

## Features

- Browse through all available shoe pairs.
- Add shoe pairs to a personal collection.
- Add shoe pairs to a wishlist.
- Integration with Supabase to store user and shoe pair data.

## Technologies Used

- **Nuxt 3**: Vue.js framework for building modern web applications.
- **Supabase**: Backend development platform that simplifies database creation with powerful real-time APIs.

## Project Configuration

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:AntoineL2028/SneakR.git

2. **Install Dependencies:**

   ```bash
   $ cd SneakR
   ```
   ```bash
   $ npm install
   ```

3. Configure Supabase:
- Create an account on Supabase.
- Create a new application and note your URL and API key.
- Add this information to the .env file :

    ```bash
    SUPABASE_URL=https://your-url.supabase.co
    SUPABASE_KEY=your-api-key
    ```

4. Import Data into Supabase:
- Ensure you have a JSON file containing shoe pair data, for  example, data.json.
- Use the Supabase admin interface or the supabase command-line interface to import the data:

    ```bash
    supabase --url $SUPABASE_URL --key $SUPABASE_KEY export --file data.json --schema public --table shoes
    ```
Adjust the filename, schema, and table name according to your actual configuration.

## Running the Project
```bash
$ npm run dev
```
The site will be accessible at http://localhost:3000.

## Contribution
If you wish to contribute to this project, please refer to the CONTRIBUTING.md file for information on how to contribute.


## License
This project is licensed under the EDS License - contact us for more details
