# BullMQ Project Setup Guide

## Overview

This project uses BullMQ for job and message processing with Node.js. Redis is used as the message broker, and Docker is utilized to run Redis. Follow the instructions below to set up the project, install dependencies, and configure Redis using Docker.


## Project Setup


1. Clone the Repository

  Clone the repository to your local machine:

  ```bash
  git clone https://github.com/yourusername/your-repository.git
  cd your-repository
2. Install Node.js Dependencies
- execute 'npm install' on the same path as your root dorectory of the download project
3. Set Up Redis Using Docker
 - docker run --name redis-container -p 6379:6379 -d redis
