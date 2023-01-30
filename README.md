## react-todos
Authenticated To Do List
Deployed Example

## Learning Objectives
Use Supabase authentication and authorization methods and row level security to protect an application’s data
Connect Supabase’s auth methods to a React form to provide Sign In and Sign Up support
Use React state and Supabase’s auth methods to create protected routes in React router which are only available to authenticated users
Use React context to share state between components
Description
For this deliverable you will create an authenticated To Do list application. You can either use your previous table from the Web module, create a new Supabase table or you can use the Alchemy table using the following credentials:

REACT_APP_SUPABASE_URL=https://nwxkvnsiwauieanvbiri.supabase.co
REACT_APP_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc

## The schema for the Alchemy table is the following:
Column	Data Type
id	INT - Primary Key
user_id	INT – Foreign Key
description	VARCHAR
complete	BOOL
The table also must have Row Level Security enabled so that users can only interact with their own data.

## Acceptance Criteria
Users can sign up for an account
Users can sign in to an existing account
Users can logout of an account
Unauthenticated users see the option to sign in or sign up
Authenticated users can see a list of to do items
Authenticated users can add new to do items
Authenticated users can complete to do items
Authenticated users can delete to do items (stretch)

## Rubric
Task / Points
Current User passed throughout the application using Context	2
Nav bar shows current user and logout when authenticated	2
Nav bar shows links to sign in / sign up when not authenticated	2
Users can sign up for an account	2
Users can sign in to an existing account	2
Auth page redirects to tasks if user already authenticated	2
Tasks redirects to auth if user is not authenticated	2
Authenticated users can log out	2
Authenticated users see a list of their tasks	2
Authenticated users can add new tasks	2
Stretch - Authenticated users can complete tasks	+ 1
Stretch - Authenticated users can delete tasks	+ 1