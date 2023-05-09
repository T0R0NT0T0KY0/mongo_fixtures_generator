# Mongo Fixtures Generator
![img.png](img/img.png)

Mongo Fixtures Generator is a tool for creating fixtures for a MongoDB database based on a special object description in JSON format.

To use it, you need to create a JSON file with object descriptions, then run the project, specifying the necessary parameters and data for connecting to MongoDB.

The tool utilizes Node.js libraries such as mongodb for working with the database, winston for logging, and cli-progress for displaying progress.

With Mongo Fixtures Generator, you can create fixtures for testing your application by generating different data scenarios for your MongoDB database.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/T0R0NT0T0KY0/mongo_fixtures_generator.git
cd mongo_fixtures_generator
pnpm install
```

## Usage

First, set up the required environment variables:

- `MONGODB_URI`: the connection string to your MongoDB database
- `DB_NAME`: the name of the database to insert the fixtures into

Second, write objects pattern:

## Example fixtures

```json
{
  "count": 322,
  "object": {
    "userId": {
      "type": "uuid",
      "version": 4,
      "uniqueItems": 1000
    },
    "displayName": {
      "type": "string",
      "minLength": 5,
      "maxLength": 100
    },
    "birthday": {
      "type": "date",
      "min": 1000000000000,
      "max": 1600000000000
    },
    "status": {
      "type": "enum",
      "enum": [
        "active",
        "block",
        "ban"
      ]
    }
  }
}
```

## Dependencies

- `mongodb`: official MongoDB driver for Node.js
- `cli-progress`: progress-bar interface
- `dotenv`: load environment variables from a `.env` file
- `winston`: logging

## Contributing

Contributions are welcome! Please feel free to open a pull request.

## License

[MIT](LICENSE)

## Screenshots

### Start 10kk objects (10000000 log objects)
![start.png](img%2Fstart.png)

### In Process (10%)
![in_process.png](img%2Fin_process.png)

### Before End (98%)
![before_end.png](img%2Fbefore_end.png)

### End (100%)
![end.png](img%2Fend.png)

## Future work
- Pretty progress bar (colorize)
- Log collection size after insert 
