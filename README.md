# open-circuits-bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app for automating tasks within OpenCircuits

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t open-circuits-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> open-circuits-bot
```

## Contributing

If you have suggestions for how open-circuits-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 Russell Harter <rabh.2202@gmail.com>
