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




### Frontend Development (React + Vite)


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
├── App.jsx              # Main application component
├── WeatherApp.jsx       # Weather logic and state management
├── SearchBox.jsx        # Search functionality with API integration
├── InfoBox.jsx          # Weather data display with animations
├── SearchBox.css        # Component styling
└── main.jsx            # Application entry point
```
