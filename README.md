# Faraday - Password Manager

<p align="center">
    <img
      alt="logo"
      src="https://i.imgur.com/0LXGsFX.png"
      width="400"
    />
</p>

##

Faraday is a simple password manager still in development. 

Users are able to store logins containing username, password and the URL, as well as account and general note information. Another feature it currently offers is a random password generator with 14 characters allowing numbers and symbols.

At this moment, access to the app is limited to Google OAuth, however it will be transitioned to Master Password architecture access in the future.

The encryption at rest is being handled by MongoDB Atlas using the encrypt-then-MAC approach combined with either a deterministic or random initialization vector to encrypt field values.

##

You can access the app going  <a href="https://faraday-password-manager.herokuapp.com/"> HERE </a>.

Project Languages -

- Front-end: Bootstrap, CSS, HTML and JavaScript
- Back-end: Node.js, Express and JavaScript
- Database: MongoDB using Mongoose
- Extra NPM modules: Passport, passport-google-oauth, mongoose, generate-password 

Project Goals near future -

- A better, responsive and user friendly front end
- Make "Copy-to-clipboard" and "Open in a new tab" features enabled
- Options for generate ramdom passoword

##

Project Goals Future -

- Switch from Google Oauth authentication to a Master Password access acrchitecture
- Integrate MFA
- Additional data entities

##

# Screenshots -

### Landing Page

[Imgur](https://i.imgur.com/Ls0hp3m.png) 

### Dashboard

https://i.imgur.com/taU6SaJ.png
