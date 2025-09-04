# React + Vite


## 🚀 Continuous Integration (CI) & Testing Setup by Sai Teja

### Branch: `ci/cd`

#### 🛠️ Summary of Changes

- **Testing Frameworks Added:**
	- Installed Vitest and React Testing Library for unit, integration, and advanced scenario tests.
	- Created a `tests/` folder for all test files, keeping source code clean and organized.
	- Added comprehensive tests for all main components (`App`, `WeatherApp`, `SearchBox`, `InfoBox`):
		- Integration tests for rendering and component interaction.
		- Advanced tests for mocking API calls, error handling, state updates, and edge cases (empty input, invalid city, etc.).
		- All tests use `@testing-library/jest-dom` for robust matchers.

- **GitHub Actions Workflow:**
	- Configured `.github/workflows/ci.yml` to run on every push to any branch.
	- Workflow steps:
		- Install dependencies
		- Run linting (`npm run lint`)
		- Run all tests in `tests/` (`npm run test`)
		- Run security scan (`npm audit`)
		- Upload test results as workflow artifacts
	- The build fails if any test, lint, or security scan fails, ensuring only healthy code is merged.

- **Branch Management:**
	- All CI/CD changes are made in a dedicated branch (`ci/cd`) to avoid disrupting the main branch.

#### ⚙️ How the CI/CD Works

1. **On every push**, GitHub Actions triggers the workflow.
2. **Dependencies are installed** using Node.js 20.
3. **Linting** checks code quality and style.
4. **Tests** are run from the `tests/` folder, covering all major app features and edge cases.
5. **Security scan** checks for vulnerabilities in dependencies.
6. **Test results** are uploaded for review.
7. **Build fails** if any step does not pass, ensuring only healthy code is merged.

#### 🧪 How to Add More Tests

- Add new test files to the `tests/` folder for any new features or bug fixes.
- Use React Testing Library and Vitest for component/unit/integration tests.
- For advanced scenarios, mock APIs and handle errors gracefully in your tests.

#### 📝 Example Advanced Test Scenarios

- Mocking API calls in `SearchBox` and verifying error handling.
- Testing state updates and child component interaction in `WeatherApp`.
- Edge case coverage for empty input, invalid city, and missing data in `InfoBox`.

---

_All changes made by Sai Teja (Continuous Integration) ensure robust, automated quality checks for every code update. This setup helps maintain code quality, security, and reliability as the project evolves. Every step is documented and automated for future scalability._


----


## 🚀 Continuous Deployment (CD) with Vercel by Sai Prasad
----

** I was responsible for implementing Continuous Deployment (CD) in this project. The goal was to automate deployment to Vercel whenever the project is updated.

1. Created a GitHub Actions workflow (deploy.yml) for automated deployment.
2. Configured the workflow to:
3. Run manually (workflow_dispatch) when needed.
4. Trigger automatically after a successful CI pipeline (handled by other teammates).
5. Ensured the app is built using Vite before deployment.
6. Verified build output (dist/ folder) to avoid broken deployments.
7. Integrated deployment with Vercel using amondnet/vercel-action


### ⚡ Deployment Details

- Production Deploys → Triggered when changes are pushed to the main branch.

- Preview Deploys → Available from other branches or manual trigger.

- Secrets Used (stored securely in GitHub):

- VERCEL_TOKEN → Vercel authentication token.

- VERCEL_TEAM_ID → Vercel team/org ID.

- VERCEL_PROJECT_ID → Vercel project ID.


### ✅ Outcome

** The project is now automatically deployed to Vercel after every successful CI run.

** This ensures a fast, reliable, and production-ready deployment process.

** Manual deployment option is available when needed.
