# Contributing to Clover

Thank you for your interest in contributing to Clover. This document outlines the process for contributing to the project.

## Development Process

1. **Fork the Repository**: Create a fork of the repository on GitHub.
2. **Clone the Fork**: Clone your fork to your local machine.
   ```bash
   git clone https://github.com/YOUR_USERNAME/Clover.git
   cd clover
   ```
3. **Create a Branch**: Create a new branch for your feature or fix.
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Changes**: Implement your changes. Ensure your code follows the project's style and structure.
5. **Test Changes**: Verifying your changes by running the development server.
   ```bash
   npm run dev
   ```
6. **Commit Changes**: Commit your changes with clear, descriptive messages.
   ```bash
   git commit -m "feat: description of your change"
   ```
7. **Push to GitHub**: Push your branch to your fork.
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Submit a Pull Request**: Open a Pull Request from your fork to the main repository. Provide a clear description of what your changes do.

## Code Style

- Use TypeScript for all components.
- Use Tailwind CSS for styling.
- Ensure code is clean, readable, and well-commented where necessary.
- Avoid unnecessary dependencies.

## Reporting Issues

If you find a bug or have a feature request, please open an issue on the GitHub repository. Provide as much detail as possible to help us understand and resolve the issue.
