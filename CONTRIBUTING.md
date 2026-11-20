# Contributing to Qumuclient

Thanks for your interest in improving Qumuclient! This project is part of the QSauron ecosystem.

## Getting set up

```bash
cd Frontend && npm install && npm start
cd Backend/qumugen && mvn spring-boot:run
cd Backend/qiskitexec && mvn spring-boot:run
```

## Workflow

1. Open an issue describing the bug or feature (use the templates).
2. Fork the repository and create a branch: `git checkout -b feature/short-description`.
3. Make your change, keeping it focused and consistent with the surrounding code style.
4. Run the tests: `ng test (Frontend) / mvn test (backends)`
5. Commit using short, imperative messages (e.g. `fix: handle empty circuit`) and open a pull request.

## Reporting security issues

Do not open a public issue for vulnerabilities or leaked credentials. Contact the maintainers privately instead.

## License

By contributing you agree that your contributions are licensed under the MIT License.
