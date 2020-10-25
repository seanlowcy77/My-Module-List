# My Module List Application

This project was originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app). `My Module List` is a Single Page Application developed with a `Model-View-Controller` architecture that interacts with the [backend API](https://github.com/seanlowcy77/My-Module-List). This application makes use of the [NUSMods API](https://api.nusmods.com/v2/). NUSMods is an student run application founded in 2012 to provide a better way for students to plan their school timetables. Over time, more features have been added to improve the lives of NUS students. It is available [here](https://nusmods.com/timetable/sem-1)!

This application was done using a combination of React, Express and Node. It was done to experiment the creation of APIs as well as how continuous integration and deployment. More about the APIs may be found [here](https://github.com/seanlowcy77/My-Module-List). The application has been deployed using Netlify. The application is available on the link below!
https://my-module-list.netlify.app/

## 1. How to Start

In the root directory, run `nodemon start` to start the backend. More about the backend may be viewed [here](https://github.com/seanlowcy77/My-Module-List). Next open another tab and enter `cd client` to enter the client directory. After than run `npm start` to start the front end segment of the application.

Open [http://localhost:3000](http://localhost:3000) to view the backend APIs in the browser. Open [http://localhost:3001](http://localhost:3001) or whichever port the frontend runs on to view the 'My Module List' application itself.

## 2. Features

![Home page](https://github.com/seanlowcy77/My-Module-List/blob/master/client/images/Home%20page.png)

An image of the Home page of the application may be seen above. The application has 4 main functionalities:

### 1. Viewing of Module List and Modules

In the image above, we can see the modules that we have added into our list. In addition, upon using the search bar above, we can view more specific information about each module. For example, upon searching 'CS4222', we will reach the following page.

![Search result for CS4222](https://github.com/seanlowcy77/My-Module-List/blob/master/client/images/Module%20search.png)

You will be able to view the description of the module, its module credits as well as the prerequisites. As mentioned above, this part of the application makes use of the [NUSMods API](https://api.nusmods.com/v2/).

### 2. Adding of Modules

As shown in the above image, to add a new module to your list, simply click on the `ADD MODULE TO LIST` button below. You will then be directed to the Home page and the list will be updates with your new module (In this case CS4222)! If the module already exists in your list, an alert will be sent.

### 3. Deleting of Modules

To Delete a module, simply enter the module code in the Home page segment. An alert will then pop up to inform you that the module has been deleted. If the module does not exist in the list, a different alert will pop up to inform you that the module does not exist.

### 4. Modification of Modules

To Modify a module, simply enter the old module code as well as the new module code that you want to change to in the Home page segment. An alert will pop up if the module that you want to change does not exist in the module list. Otherwise, it will display success and update the module list upon changing it!

## 3. Testing

Testing of the APIs were done via Chai and Mocha. Simply run `npm test` in the root directory (not the current client directory) to see the results of the tests. Travis also helps automate these tests with the `travis.yml` file. All test cases should pass.

![Testcases success](https://github.com/seanlowcy77/My-Module-List/blob/master/images/Testcases.png)



## 4. MVC Architecture Pattern

![MVC Wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/400px-MVC-Process.svg.png)

This application uses the Model-View-Controller architecture. The various components in the application serve as the `Controller` in updating the `Model` / backend. Firstly a user interacts with these components - adding, deleting or updating modules. The `Controller` (components) then send these requests to the backend (The `Model`) - The `Model` / the backend of the application is responsible for storing the list of modules. The `Model` then updates the `View` for the user - in this case the list of modules.

## Things to Note

1. If you wish to use a different port for running the backend, you will need to change the `URL` variable in the `constants` directory. Currently it is set as default to `http://localhost:3000/api/courses/`.

2. All dependencies may be found in the `package.json` file.

3. Do not hesitate to reach out to me if you have any queries. Hope this application will shed some light especially to people who are giving their first go in creating a Single page application. Thank you!
