# HepA - HepAlternative

- HepAlternative is a refactored version of the [PIN-Elektra project](https://github.com/GeneralSting/PIN-Elektra). The application is designed to provide an improved user experience and a more efficient backend for managing data. This project is currently a work in progress.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [API Documentation](#api-documentation)

## Introduction

- This application is designed as an information system for managing electricity consumption, focusing on managing customers, items, and creating invoices. It enables customer administration by adding, updating and deleting data, while ensuring the uniqueness of the customer code and the meter. The system supports the creation of an invoice, where the user can select the customer, items and enter the quantity to generate the invoice. Accounts can be reversed, and canceled accounts are not shown in the overview or statistics. The application also allows users to view the invoices created for their registered meters.

## Features

- User Authentication (Login/Registration) :white_check_mark:
- Admin Workspace (In Development) :construction:
- Customer Information Management (In Development) :construction:

## Tech Stack

- **Frontend:** React, Typescript (Redux, MUI, i18next)
- **Backend:** [API - HepAPI](https://github.com/GeneralSting/HepAlternative-API) (PHP)
- **Database:** MySQL

## Installation

### Prerequisites

- Node.js and npm installed
- PHP installed
- MySQL installed

### Steps

1. **Clone the repository**

```sh
git clone https://github.com/GeneralSting/HepAlternative.git
```

2. **Install dependencies**

```sh
cd HepAlternative
npm install
```

3. **Set up the backend API:**

- Follow the instructions provided in the HepAlternative-API repository to set up the API.

4. **Configure the database:**

- Ensure MySQL is set up and configured as described in the API's repository.

5. **Run the application:**

```sh
npm run dev
```

## API Documentation

The API documentation is available in the [HepAlternative-API repository](https://github.com/GeneralSting/HepAlternative-API). It provides endpoints for user authentication, data management, and more.
