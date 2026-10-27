# QuickNotes Data Model

## Entities

### User
Represents a registered user of the QuickNotes application.
- `id` (String, Primary Key): Unique identifier (e.g., `usr_98765`).
- `email` (String, Unique): User's email address.
- `created_at` (Timestamp): Account creation timestamp.

### Note
Represents a note created by a user.
- `id` (String, Primary Key): Unique identifier (e.g., `note_12345`).
- `user_id` (String, Foreign Key -> User.id): Owner of the note.
- `title` (String, Required): Title of the note (max 100 characters).
- `body` (Text, Optional): Content of the note (max 2000 characters).
- `created_at` (Timestamp): Creation timestamp.
- `updated_at` (Timestamp): Last modification timestamp.

## Relationships
- **1-to-Many:** One `User` can have many `Notes`. Each `Note` belongs to exactly one `User`.