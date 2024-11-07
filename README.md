# Adapt It RESTful web service

This is a proof of concept RESTful web service, using the [Platformatic Runtime](https://docs.platformatic.dev/docs/runtime/overview) application. It is intended to show AIM connectivity to a web service on localhost (see the .env file for host and port info), with no authentication / authorization. Tables are built with the `#.do.sql` files in the `ai-service/migrations` subdirectory.

## Requirements

Platformatic supports macOS, Linux and Windows ([WSL](https://docs.microsoft.com/windows/wsl/) recommended).
You'll need to have [Node.js](https://nodejs.org/) >= v18.8.0 or >= v20.6.0

## Setup

1. Install dependencies:

```bash
npm install
```

## Usage

Run the API with:

```bash
npm start
```

Once the service starts you can go to the host and port listed in the .env file and see the API under `[host]:[port]/documentation`.

[!WARNING]  
Please note that this is a proof of concept and not for any "real" use. There is no authentication / authorization at all, and the CORS settings allow for any domain/port full access to the service. Use at your own risk! 
