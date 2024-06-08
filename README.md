```markdown
# Average Calculator Microservice

This microservice calculates the average of numbers fetched from various sources.

## Features

- Fetch numbers of different types: prime, Fibonacci, even, and random.
- Configurable window size for averaging.
- Error handling for failed requests or invalid inputs.
- Built-in mock data for testing.

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<Your-GitHub-Username>/average-calculator-microservice.git
   ```

2. Navigate to the project directory:

   ```bash
   cd average-calculator-microservice
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```

2. Send requests to calculate average:

   - **Fetch Even Numbers**:
     - Method: GET
     - URL: `http://localhost:9876/numbers/e`

   - **Fetch Prime Numbers**:
     - Method: GET
     - URL: `http://localhost:9876/numbers/p`

   - **Fetch Fibonacci Numbers**:
     - Method: GET
     - URL: `http://localhost:9876/numbers/P`

   - **Fetch Random Numbers**:
     - Method: GET
     - URL: `http://localhost:9876/numbers/r`


## Screenshots

<!-- Add screenshots or images here -->


*Screenshos Example of fetching even and prime number. ![WhatsApp Image 2024-06-08 at 11 12 59 AM](https://github.com/SAUMYXA/2100270130155/assets/104627870/c4265d15-6b4f-4902-9d37-c72f77313ddc)
numbers.*

![WhatsApp Image 2024-06-08 at 11 13 10 AM](https://github.com/SAUMYXA/2100270130155/assets/104627870/d32f2b70-258e-4dc5-88d5-fd69b126b263)

![WhatsApp Image 2024-06-08 at 11 12 59 AM (1)](https://github.com/SAUMYXA/2100270130155/assets/104627870/9b41a529-1dfb-43a8-b52d-57eea5c0230c)
![WhatsApp Image 2024-06-08 at 11 13 10 AM](https://github.com/SAUMYXA/2100270130155/assets/104627870/392ea3c5-8d3a-42ba-b1ac-e31910c0308e)

![WhatsApp Image 2024-06-08 at 11 12 59 AM (1)](https://github.com/SAUMYXA/2100270130155/assets/104627870/4e964946-f069-4edf-916a-9a8de2d35e48)



