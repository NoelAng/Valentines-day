/* style.css */

body {
    font-family: Arial, sans-serif; /* Fallback font family */
    text-align: center; /* Center-align text */
    margin: 0; /* Remove default margin */
    background-color: #FADADD; /* Set background color to light pink */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#container {
    display: flex; /* Use flexbox layout */
    flex-direction: column; /* Stack elements vertically */
    align-items: center; /* Center-align items horizontally */
    justify-content: center;
    height: 100%;
}

#image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

#question {
    font-family: 'Sacramento', cursive; /* Apply Sacramento font to the question */
    font-size: 64px; /* Increased font size for the question */
    text-align: center;
    margin-bottom: 20px;
}

#options {
    margin-top: 20px; /* Add space above the options */
    display: flex;
    justify-content: center;
}

button {
    padding: 12px 24px; /* Increased padding for buttons */
    margin: 0 10px; /* Set margin around buttons */
    font-size: 32px; /* Increased font size for buttons */
    font-family: 'Sacramento', cursive; /* Apply Sacramento font to the options */
    background-color: #FB607F; /* Set button background color */
    color: white; /* Set text color to white */
    border: none; /* Remove button border */
    cursor: pointer; /* Set cursor to pointer on hover */
}
