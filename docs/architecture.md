# QuickNotes Architecture

## System Overview
QuickNotes follows a standard 3-tier web application architecture separating the client-side single-page application (SPA), the backend REST API service, and the persistent data store.

## Architecture Layers

1. **Client Tier (Presentation Layer)**
   - Built with vanilla HTML5, CSS3, and modern JavaScript (ES6+).
   - Hosted statically (e.g., Vercel, Netlify, or GitHub Pages).
   - Communicates with the backend via asynchronous `fetch` requests using JSON.

2. **Application Tier (Business Logic Layer)**
   - RESTful API server handling request routing, authentication verification, and input validation.
   - Enforces business rules such as title length limits and user ownership checks.

3. **Data Tier (Persistence Layer)**
   - Relational database (e.g., PostgreSQL) storing normalized `users` and `notes` tables.
   - Indexed on `user_id` to ensure efficient retrieval of user-specific notes feeds.

## Security & Scalability
- **Authentication:** Token-based authentication (JWT) for secure API requests.
- **CORS Policy:** Restricted to authorized client origins.
- **Scaling:** Stateless application servers behind a load balancer to scale horizontally under high traffic.