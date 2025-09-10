# SkyCast 

**Group 2 Project**  
**GitHub Repository**: https://github.com/suryacharanmanigandla/Devops-project.git

## 🌟 Project Overview

SkyCast is a modern React-based weather application that demonstrates the implementation of DevOps principles through a full-stack development approach. This project showcases how different phases of learning - including frontend and backend development - come together to create a seamless user experience.

## 👥 Team Members & DevOps Roles

- **23211a6770** - Git Manager (Version Control & Repository Management)
- **23211a6781** - Docker Manager (Containerization & Deployment)
- **23211a67a6** - Planning (Project Architecture & Strategy)
- **23211a67a7** - Coding (Frontend + Backend Development) 
- **23211a67b8** - CI (Continuous Integration)
- **23211a67c1** - CD (Continuous Deployment)
- **23211a67c2** - Monitoring (System Monitoring & Observability)


### Frontend Development and Backend Development by Bhargav(React + Vite)


## 🏗️ Technical Implementation Details

### Frontend Stack
- **React 19.1.0**: Latest React with modern hooks
- **Vite**: Fast build tool and development server
- **Material-UI**: Component library for consistent design
- **Framer Motion**: Animation library for smooth interactions
- **CSS Modules**: Scoped styling approach

### Backend Integration
- **OpenWeatherMap API**: Real-time weather data source
- **RESTful API Design**: Standard HTTP methods and responses
- **Error Handling**: Comprehensive error states and user feedback
- **Data Validation**: Input sanitization and response validation


## 🛠️ Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Project Structure
```
src/
├── App.jsx                # Root component
├── main.jsx               # Entry point (mounts App, imports global styles)
├── WeatherApp.jsx         # Container: state, data fetching, feature wiring
├── SearchBox.jsx          # Search component
├── InfoBox.jsx            # Info display component
├── CombinedComponents.jsx # Combined components
├── weatherMap.js          # Weather map functionality
├── App.css                # App styles
├── index.css              # Global styles
├── SearchBox.css          # SearchBox styles
└── assets/
    └── react.svg          # React logo asset
```

## 🐳 Docker Containerization & Deployment by Mukesh Kumar

### Branch: `docker`

#### 🛠️ Summary of Changes

- **Dockerfile Added:**
  - Implemented a **multi-stage Dockerfile** for optimized builds:
    - **Stage 1 (Builder):** Used `node:18` to install dependencies and build the React app.
    - **Stage 2 (Runtime):** Used lightweight `nginx:alpine` to serve the production build.
  - This approach reduced final image size and improved runtime performance.

- **Docker Compose Setup:**
  - Created `docker-compose.yml` for simplified container orchestration.
  - Configured the React app service with:
    - Auto-restart policy (`restart: always`)
    - Port mapping (`3000:80`) for local access
    - Container name `skycast-container`

- **Local Build & Run:**
  - Built the image with:
    ```bash
    docker build -t skycast .
    ```
  - Ran locally with:
    ```bash
    docker run -d -p 3000:80 skycast
    ```
  - Verified functionality at: `http://localhost:3000`

- **DockerHub Integration:**
  - Tagged and pushed the image to DockerHub:
    ```bash
    docker tag skycast mukeshdockerhub/skycast:latest
    docker push mukeshdockerhub/skycast:latest
    ```
  - Final public image available at:
    👉 [dockerhub.com/mukeshdockerhub/skycast](https://hub.docker.com/r/mukesh172/skycast-web)

- **Outcome:**
  - Application is now fully containerized and portable.
  - Team members and reviewers can run the app instantly using:
    ```bash
    docker run -d -p 3000:80 mukeshdockerhub/skycast:latest
    ```
  - Ensured **consistency across environments**, faster setup, and production-ready deployment workflow.


## 🚀 Continuous Integration (CI) & Testing Setup by Sai Teja

### Branch: `ci`

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

#### ⚙️ How the CI Works

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
