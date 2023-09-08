
  
 # Pretty Academic Portfolio Website Theme

Finally, an academic portfolio website that actually looks good, ready to go.

[See my dad's website here](www.georgelordos.com), or the screenshots below, for a demo of the website.

This repo guides you through setting up your own academic portfolio website, complete with its own CMS.

![Homepage](https://i.ibb.co/rs9NHbP/Homepage.png)

![Papers Page](https://i.ibb.co/HFLK8RP/Papers.png)

![Project page](https://i.ibb.co/MSF9JT1/Project.png)
  

## Guide
  
  ### WEBSITE SETUP

1. Click on "Use this template" and then "Clone this repository"
2. `git clone` your directory locally to your computer
3. `cd src && npm i`
4. Edit `src/config.json` (see **Config Manual** below) as needed. Leave Project ID blank for now
5. `cd ..`
6. `python setup.py`
7. Continue to **CMS guide**

### CMS GUIDE

#### Creating the project
1. Run this command in your terminal:  

	    npm create sanity@latest -- --bare --dataset-default --create-project "Personal Site"
2. Follow instructions from Terminal to create or login to Sanity
3. After creating your account, go back to Terminal and take note of the Project ID.
4. Copy paste your Sanity Project ID into `config.js` and proceed to **Deploying the Schema**

#### Deploying the CMS 

    cd cms
    npm i
    sanity cors add localhost:3000
    sanity deploy

*sanity deploy* will prompt you to enter a hostname for your CMS. Enter whatever you like - keep in mind it needs to be a unique hostname so maybe 
put your full name down. Take note of the link outputted after sanity deploy runs - that is your Sanity CMS!

**Testing your website**
Navigate to the project root and run `npm start`. Add content to your website through the link above. Your website will be empty until you add 
content.


## Config Manual

### Config File
Fields:

**name**: Your full name. Will be used in the website's title and homepage

**authorName**: e.g. if your name is "John Roberts", this would likely be "J. Roberts". This is used to underline your author name in the Papers 
section so viewers can easily discern if you were the first, second, third, etc. author

**sanityProjectId**: Links your Sanity CMS to your site. You get the Project ID after completing *Creating the Project* in the CMS Guide 

**pages**:  Which pages you want to display. These are already set by default but feel free to change them.

**pageNames:** What the name of each page should be. These are already set by default but feel free to change them

**metaDescription**: The description of your website that shows up on Google Search


### CV

If you want to add your CV to the website, you should replace CV.pdf in the `public/` folder with a PDF of your own CV. Make sure your CV is named 
`CV.pdf`

### Favicon

Replace the `favicon.ico` in the `public/` directory to change your website's icon

## Deploying your website

After all the above steps are completed and you've added enough content so that your personal website is ready to go, run

    firebase deploy hosting

1. Select the option to **Create a New Project.**
2. Enter any Project Name / ID that you like
3. Your public directory is `build`
4. Select `Yes` for configuring as a single page app
5. Select `No` for configuring automatic deploys with GitHub

Now, push to GitHub:

    git add .
    git commit -m "firebase setup"
    git push origin main

And then build the website + deploy to Firebase:

    npm run build
    firebase deploy

After deploying, you should get a URL where your website is hosted. Make sure to add that URL as a CORS Origin so that Sanity lets your site 
request data

    cd cms
    sanity cors add your-url-here
    
Congratulations, you have a personal website!
