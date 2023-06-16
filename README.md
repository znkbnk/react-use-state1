
In this guided project, you will
create a to-do list application
using React and the useState hook.
This project is designed for
advanced coders who are already 
familiar with React and want to
practice using the useState hook
to manage state within functional
components.

Step 1: Set Up the Project

-  Create a new React project using your
preferred method (e.g., Create React App).
-  Set up the project structure with a main
component (e.g., App.js) and any
additional components you may need.

Step 2: Create the Task Component

-  Create a new component called Task.
This component will represent an 
individual task item.
-  Set up the component to receive the
task data as props and display it
(e.g., task title, completion status).
-  Add functionality to toggle the
completion status of a task when clicked.
-  Implement a delete button to
remove a task when clicked.

Step 3: Set Up State in the
Main Component

-  In the main component (e.g., App.js),
import the useState hook from React.
-  Declare a state variable using useState
to hold the array of tasks.
-  Initialize the state with a few sample
tasks for testing.

Step 4: Display the Task List

-  Map over the array of tasks in the
main component and render a Task component
for each task.
-  Pass the necessary props
(e.g., task data, completion status)
to each Task component.

Step 5: Add New Tasks

-  Create a form or input field in the main
component to allow users to enter a new task.
-  Implement a submit event handler for
the form/input field.
-  Inside the event handler,
create a new task object with the entered data.
-  Use the setTasks function
(provided by useState) to update the
state with the new task.

Step 6: Update Task Completion Status

-  Modify the Task component to add a click
event handler to the task's completion
status indicator.
-  Inside the event handler, update
the completion status of the task
in the state using the setTasks function.

Step 7: Delete Tasks

-  Implement a delete event handler in
the Task component.
-  Pass the event handler to each Task
component as a prop.
-  Inside the event handler, filter the
array of tasks to remove the task being deleted.
-  Update the state with the filtered
array using the setTasks function.


