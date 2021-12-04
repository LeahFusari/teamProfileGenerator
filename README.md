# Team Profile Generator
  
  ## Description 
  This is an app that will generate cards for each member of a development team.  This will be done by using Node Inquirer prompts.  There was also a requirement to use Jest for testing.

  ## User Story
    AS A manager
    I WANT to generate a webpage that displays my team's basic info
    SO THAT I have quick access to their emails and GitHub profiles

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  You will need to install Node and Jest(for the tests.)

  ## Usage 
  Start the prompts by entering "node index" into the command line.  Answer the series of prompts.  Once you have completed your team, then you should receive an "HTML Generated Successfully" message.  Go to the newly generated HTML file and open it in your browswer to see the webpage with the team cards.
  
  ## Acceptance Criteria

    GIVEN a command-line application that accepts user input
    WHEN I am prompted for my team members and their information
    THEN an HTML file is generated that displays a nicely formatted team roster based on user input
    WHEN I click on an email address in the HTML
    THEN my default email program opens and populates the TO field of the email with the address
    WHEN I click on the GitHub username
    THEN that GitHub profile opens in a new tab
    WHEN I start the application
    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    WHEN I enter the team manager’s name, employee ID, email address, and office number
    THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    WHEN I select the engineer option
    THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    WHEN I select the intern option
    THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    WHEN I decide to finish building my team
    THEN I exit the application, and the HTML is generated

  ## Contributing 
  None

  ## Tests
  In the command line, type "npm run test."

  ## Questions
  If you wish to view more of my projects go to https://github.com/LeahFusari