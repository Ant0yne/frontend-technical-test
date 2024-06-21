# Frontend Technical Test

Made with Vite + React

## Pages

### Home

`/`

A table with all the users in DB:

- username `navigate to "Profile" for the user`
- email
- website `navigate to the website`
- number of todos
- number of albums

### Profile

`/profile/:userId`

The user's info:

- full name
- username
- website
- albums `each navigate to "Photos" for the album`

### Photos

`/photos/:albumId`

All the photos in the Album

## Packages

- Typescript
- Zod
- React Router DOM
- Axios
- Shadcn/ui
- Tailwind
- FontAwesome
