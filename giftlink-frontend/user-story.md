GiftLink User Stories

1. Finish User Stories

As a product owner
I need the GiftLink project requirements documented as user stories
So that the development team has a clear and organized backlog to work from.

Details and Assumptions

User stories describe the major functionality required for the GiftLink capstone.

Stories can be prioritized and refined by the team.

Acceptance Criteria

Given the GiftLink project requirements
When the backlog is created
Then the major project requirements are represented as user stories
And each story contains details and acceptance criteria.

2. Initialize and Populate MongoDB
   As a backend developer
   I need to set up MongoDB and seed it with gift data
   So that the application has data to serve to users

Details and Assumptions
Seed script lives in giftlink-backend/util/import-mongo
Connection comes from a .env file (MONGO_URL)
gifts.json holds the initial 16 gift documents
Acceptance Criteria

Given a running MongoDB instance and a valid .env file
When I run npm install and npm start in the import-mongo folder
Then the console prints "Inserted documents: 16" and the gifts collection exists in giftdb

3. Run Skeleton Application
   As a developer
   I need to run the starter backend and frontend
   So that I can confirm the environment works before building features

Details and Assumptions
Backend is an Express app (giftlink-backend)
Frontend is a React app (giftlink-frontend)
Environment variables configured for both
Acceptance Criteria

Given the starter code and installed dependencies
When I start the backend and the frontend
Then the backend responds on its port and the React app loads without errors

4. Implement a Landing Page and Navigation
   As a GiftLink user
   I need a landing page with navigation
   So that I can understand the app and move between its sections

Details and Assumptions
Uses React Router
Landing page describes GiftLink and links to the gifts listing
Navbar present on all pages
Acceptance Criteria

Given I open the GiftLink app
When the landing page loads
Then I see a welcome message and a navbar linking to Home, Gifts and Login/Register

5. Add Authentication Components and Logic
   As a GiftLink user
   I need to register and log in
   So that my identity is known and protected actions are secured

Details and Assumptions
Backend exposes /api/auth/register and /api/auth/login
Passwords hashed with bcryptjs; JWT issued on login
Protected routes require a valid token
Acceptance Criteria

Given I am a new user
When I submit the registration form with valid details
Then my account is created, a JWT is returned and I am logged in

6. Implement Gifts Details Page

As a GiftLink user
I need to view the full details of a single gift
So that I can decide whether I want to request it

Details and Assumptions
Backend exposes GET /api/gifts and GET /api/gifts/:id
Details page shows name, image, category, condition, age, description, poster
Handles "gift not found"
Acceptance Criteria

Given a gift exists in the database
When I click a gift from the listing
Then I land on its details page showing all of its information

7. Implement a Search Component
   As a GiftLink user
   I need to search and filter gifts
   So that I can quickly find items I am interested in

Details and Assumptions
Backend exposes GET /api/search with query params (name, category, condition, age)
Frontend has a search form with text input and filters
Acceptance Criteria

Given gifts exist in the database
When I enter search text and/or select filters and submit
Then only gifts matching the criteria are displayed

8. Design and Implement the Comments Feature
   As a GiftLink user
   I need to read and post comments on a gift
   So that I can ask questions and coordinate with the gift poster

Details and Assumptions
A sentiment-analysis microservice evaluates comment tone
Comments are stored and associated with a gift
Only authenticated users can post
Acceptance Criteria

Given I am logged in and viewing a gift details page
When I submit a comment
Then the comment appears in the comments list for that gift

9. Containerize the Services and Applications
   As a DevOps engineer
   I need Docker images for the backend, sentiment service and frontend
   So that the app can be deployed consistently across environments

Details and Assumptions
Each service has its own Dockerfile
Environment variables passed at runtime
Acceptance Criteria

Given the Dockerfiles for each service
When I build and run the containers
Then each service starts and is reachable on its mapped port 10. Deploy Backend and Frontend
As a GiftLink stakeholder
I need the application deployed to the cloud
So that users can access GiftLink over the internet

Details and Assumptions
Backend and sentiment service deploy to IBM Code Engine / Kubernetes
Frontend deployed as a static site or container
CI/CD via GitHub Actions
Acceptance Criteria

Given the containerized services
When the deployment pipeline runs successfully
Then the GiftLink frontend is publicly accessible and talks to the deployed backend

11. Research Authentication in React and Express

As a developer
I need to research authentication patterns in React and Express
So that I can implement secure, maintainable auth for GiftLink

Details and Assumptions
Covers JWT, bcrypt, protected routes and token-storage trade-offs
No direct customer-visible value, so this is technical debt
Acceptance Criteria

Given the need for authentication
When I complete the research
Then the chosen approach and its rationale are documented in the repo

Backlog Labels

new — stories that need to be prioritized.

backlog — stories selected for the current sprint.

icebox — stories planned for later work.

technical debt — developer work that does not directly provide visible customer value.
