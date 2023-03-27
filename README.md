This is my 5th portfolio project developed as part of the Code Institute Diploma in Full Stack Development. It was created to demonstrate skills acquired using the Django REST Framework and React to develop the API and Frontend respectively.

![Website Preview]()

## Demo

[Frontend - Deployment]()

### API Project Links

- [API - Repository]()
- [API - Deployment]()

## TOC

- [User Experience (UX)](#user-experience-ux)
  - [User Stories](#user-stories)
  - [Agile Methodology](#agile-methodology)
  - [Design](#design)
    - [Wireframes](#wireframes)
    - [Color Scheme](#color-scheme)
    - [Typography](#typography)
    - [Images and Iconography](#images-and-iconography)
- [Features](#features)
  - [Home Page](#home-page)
  - [Navigation](#navigation)
  - [Register (Sign up) / Login](#register-sign-up--login)
  - [Post Creation / Edit Form](#post-creation--edit-form)
  - [Post List View](#post-list-view)
  - [Post Detail View](#post-detail-view)
  - [Post Search Form](#post-search-form)
  - [Top Sellers and Following Users](#top-sellers-and-following-users)
  - [Profile](#profile)
  - [Profile Edit Form](#profile-edit-form)
  - [Username and Password Edit Forms](#username-and-password-edit-forms)
  - [Components](#components)
    - [Components used in this application](#components-used-in-this-application)
  - [Features Not Implemented](#features-not-implemented)
  - [Future Features](#future-features)
- [Testing](#testing)
  - [Bugs](#bugs)
    - [Fixed Bugs](#fixed-bugs)
    - [Remaining Bugs](#remaining-bugs)
- [Technologies Used](#technologies-used)
  - [Languages and Frameworks Used](#languages-and-frameworks-used)
  - [Node Packages / Dependencies Used](#node-packages--dependencies-used)
  - [Programs and Tools Used](#programs-and-tools-used)
- [Deployment](#deployment)
  - [Forking the GitHub Repository](#forking-the-github-repository)
  - [Making a Local Clone](#making-a-local-clone)
  - [Deploying with Heroku](#deploying-with-heroku)
  - [Linking with the API/backend](#linking-with-the-apibackend)
- [Credits](#credits)
  - [Code](#code)
  - [Media](#media)
  - [Acknowledgments](#acknowledgments)

## User Experience (UX)

The initial aims of the ConvergeHub project were to create a social image sharing platform that allows registered users to share their photos and connect with other like-minded individuals. Key goals for the platform were identified as below and used to construct user stories:

- Create a social platform where users can upload and share their photos with others.
- Allow users to search for images based on categories, tags, and other filters.
- Allow users to save their favorite images and create collections for future reference.
- Allow popular photographers and influencers to be followed so new content can be seen via a feed.
- Registered users can leave comments on images to express their thoughts and opinions.
- Platform Owners can create / edit / delete articles to help users improve their photography skills.
- Registered users can read and comment on articles to learn new techniques and get inspiration for their own photography.

## Features

### Home Page

- The home page serves as the entrypoint for the site.
- It contains the navigation bar, a list of properties, and the search bar so users can interact with site content straight away.
- User Stories covered:
[6](https://github.com/qburn93/convergehub-frontend/issues/6),
[14](https://github.com/qburn93/convergehub-frontend/issues/14),
[25](https://github.com/qburn93/convergehub-frontend/issues/25),
[34](https://github.com/qburn93/convergehub-frontend/issues/34).

![Home Page](docs/assets/features/homepage.png)

### Navigation

The navigation bar on ConvergeHub's social image sharing platform features on all pages of the site. It was designed to be responsive and displays different links to visitors based on their authentication state.

If a user is authenticated, they can see links to upload photos, view bookmarked (saved) images, view their image feed (photos shared by other users they have followed), a link to their profile, and the option to logout.
If a user is logged in but not authenticated, they can see all the options previously mentioned except for the link to upload photos.
Anonymous visitors see links to login or register (sign up).
When viewed on smaller viewports, all options are listed in a hamburger menu on the left of the navbar, which opens a Bootstrap off-canvas element. Key site features are duplicated on the right for quick access.

User stories covered:

Allow authenticated users to upload and share their photos with others.
Allow authenticated users to view their bookmarked images and follow other users to see their image feed.
Allow anonymous visitors to login or register to become authenticated users.
Create a responsive navigation bar that displays different links based on authentication state and is accessible on smaller viewports.
[6](https://github.com/qburn93/convergehub-frontend/issues/6),
[7](https://github.com/qburn93/convergehub-frontend/issues/7),
[8](https://github.com/qburn93/convergehub-frontend/issues/8),
[9](https://github.com/qburn93/convergehub-frontend/issues/9),
[11](https://github.com/qburn93/convergehub-frontend/issues/11).


### Register (Sign up) / Login

- On ConvergeHub's social image sharing platform, visitors can register for an account that allows them to upload photos, bookmark images, maintain a profile, and view other users' image contact information.


- A unique username must be provided with a password. The password must be entered twice to minimize the possibility of incorrectly entering the chosen password.
- When registration is complete, the user is redirected to the login page so they can use their new credentials to authenticate.

User stories covered:

- Allow visitors to register for an account on the platform that allows them to upload photos, bookmark images, and maintain a profile.
Provide a checkbox during registration for visitors who want to be able to upload photos to the platform.
- Require a unique username and password during registration to ensure secure authentication.
- Redirect users to the login page after registration is complete, so they can use their new credentials to authenticate and access the platform.
[7](https://github.com/qburn93/convergehub-frontend/issues/7),
[8](https://github.com/qburn93/convergehub-frontend/issues/8).

![Registration Form]()
![Login Form]()

### Post Creation / Edit Form

On ConvergeHub's social image sharing platform, users registered as sellers have access to create photo listings, which advertise photos for sharing.

- This form is used both when creating a photo listing and when editing an existing photo.
- Users can upload an image to represent the photo listing.
- Other photo details can be entered in the form fields to provide more detail about the photo such as title, description, and tags.
- Certain fields are mandatory and will be verified to ensure they are filled out correctly.
- If no photo is provided, a default placeholder image will be used until one is provided by the user.
User stories covered:

- Allow users registered as sellers to create photo listings to advertise photos for sharing.
- Allow users to upload images to represent their photo listings and enter other photo details such as title, description, and tags.
- Ensure that certain fields are mandatory and verified to ensure they are filled out correctly.
Use a default placeholder image when no photo is provided.
[12](https://github.com/qburn93/convergehub-frontend/issues/12),
[16](https://github.com/qburn93/convergehub-frontend/issues/16).

![Post Form](docs/assets/features/post_form.png)


### Post List View

On ConvergeHub's social image sharing platform, this view is shown on the Home, Bookmarks, Feed, and User Profile pages.
- The compact photo detail shown has been designed to be responsive, with the information layout shifting based on the viewport size for maximum information clarity.
## User Stories covered:

- Display a compact view of photo details on Home, Bookmarks, Feed, and User Profile pages.
- Make the view responsive, with the information layout shifting based on the viewport size for maximum information clarity.
- Allow users to click the photo or the more detail link to open the photo detail page and bookmark photos directly from the list view using the bookmark icon.
- Display user information through the avatar below the photo and link to the user's profile so users can discover more information about them.
[14](https://github.com/qburn93/convergehub-frontend/issues/14),


![Post View]()
### Post Detail View


[14](),

### Profile

- Profile pages for users accounts are public and can be viewed by all users.
- Standard user profiles can only be viewed by the profile owner.
- Profile owners can edit their profiles allowing them to add a description and avatar image to present their brand to other users.
- In addition to editing a profile, users can change their password and username.
- Users can see how many users they are following.
- Users will also see a feed of all the postss they have shared on their profile page to make it easier to manage everything they have listed.
- User Stories covered:
[18](),


![Profile Page](docs/assets/features/profile.png)

#### Components used in this application

- Asset
  - Used to display a loading spinner, upload image (planned to be used when multiple image uploads are introduced to the site in future versions) and a message when search filters return no results.
  - UX (user experience) is improved by the loading spinner as users are notified when content is being fetched by the application, rather then being presented with a blank or partially complete page while data is loaded.
  - UX is improved by the feedback provided to users when a search returns no results as this provides feedback and prompts them to adjust their search criteria.

- Avatar
  - Used to display the user avatar in different variations throughout the site (based on use and viewport size).
  - UX experience is improved as users can quickly identify the author of posts and their authentication state.

- Contact Information Button
  - This component is used to display contact information about each. The component is displayed in different parts of the platform pages determined by viewport size.


- More Actions Dropdown
  - This component was used on the profile, post detail and note components to present options for object editing and deletion.
  - UX was improved by presenting a consistent menu throughout the site while allowing for different functionality by passing handler functions as arguments (props) to the component.

- NavBar
  - The navigation bar appears on every page and contributes to an improved user experience by providing users to access the majority of site functionality in a consistent way.
  - The Navbar component displays different links and layouts based on authentication state and as such contains a lot of conditional logic. To not have to duplicate this code across each page and have a reusable component saved time and effort during the development cycle.

- NotFound
  - This component is displayed when a user navigates to a resource that doesn't exist.
  - It improves the user experience by providing feedback when an error has occurred and allowing the NavBar to remain accessible so they can continue to use the site.



### Future Features


## Testing

## Manual Testing

<summary>See Testing User Stories</summary>

#### Testing User Stories - Users




































## Deployment

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on
our GitHub account to view and/or make changes without affecting the original
repository by using the following steps...

1. Log in to GitHub and locate the [GitHub
   Repository](https://github.com/qburn93/convergehub-backend)
1. At the top of the Repository (not top of page) just above the "Settings"
   Button on the menu, locate the "Fork" Button.
1. Click the button (not the number to the right) and you should now have a copy
   of the original repository in your GitHub account.

### Making a Local Clone

**NOTE**: It is a requirement of the project that you have Python version 3.8 or higher installed locally.

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/qburn93/convergehub-backend).
1. Under the repository name, click "Code".
1. To clone the repository using HTTPS, under "HTTPS", copy the link.
1. Open your local terminal with git installed
1. Change the current working directory to the location where you want the cloned directory to be created.
1. Type `git clone`, and then paste the URL you copied in Step 3.

    ```console
    ~$ git clone https://github.com/qburn93/convergehub-backend.git
    ```

1. Press Enter. Your local clone will be created.

    ```console
    $ git clone https://github.com/qburn93/convergehub-backend.git
    > Cloning into `test-dir`...
    > remote: Counting objects: 10, done.
    > remote: Compressing objects: 100% (8/8), done.
    > remove: Total 10 (delta 1), reused 10 (delta 1)
    > Unpacking objects: 100% (10/10), done.
    ```

    [Click here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) for a more detailed explanation of the process above with pictures.

1. Change the current working directory to the cloned project folder (this will be a child directory in the location you cloned the project).

1. This guide assumes you have Node.js and npm installed locally, if this is not the case please install these now.
1. From the terminal run the command `npm install` to install all project dependencies.
1. Run the command `npm start` to run the application.
**NOTE**: It is assumed you have followed all deployment instructions listed in this readme starting with the section titled 'Forking the GitHub Repository'.

1. Log in to [Heroku](https://www.heroku.com/) and if not taken there automatically, navigate to your personal app dashboard.
2. At the top of the page locate the 'New' drop down, click it and then select 'Create new app'.
3. Give your application a unique name, select a region appropriate to your location and click the 'Create app' button.
4. Your app should now be created. From the menu towards the top of the page select the 'Settings' section and click 'Reveal Config Vars' in the Config vars section. Enter the following key / value pairings:
    1. Key as `REACT_APP_MAPS_API` and the value as your Google Maps JavaScript API key. Click the Add button.
5. Navigate to the 'Deploy' page using the menu towards the top of the page.
6. Select 'GitHub' from the 'Deployment method' section and you will be prompted to 'Connect to GitHub'.
7. Once connected to your GitHub account you will be able to search for your repository which contains the forked 'Support-Hub' repository.
8. Once the repository is found click 'Connect'.
9. At the bottom of the page find the section named 'Manual deploy', select the 'main' branch in the drop down and click the 'Deploy' button.
10. Once deployment is complete, click the 'View' button to load the URL of the deployed application.

### Linking with the API/backend

You will need to ensure you have set the `axios.defaults.baseURL` in the `api/axiosDefaults.jsx` file to the url of your deployed version of th API.
You should then update the `CLIENT_ORIGIN` config variable in your deployed version of the API to ensure you will be able to make authenticated requests to this API.