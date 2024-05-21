[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Yu7n807i)
# Recipe Bank

The app will show recipes by fetching recipes from an API. The URL is: `https://api.sampleapis.com/recipes/recipes`

Here are the requirements:

1. Breakup the UI (User Interface) to components to avoid duplicating HTML
1. It must fetch recipes from the recipes API
1. When the fetching component is unmounted, write to the console 'Unmounted'
1. For each recipe, it will show the title, description, ingredients, and directions
1. When clicking on a recipe in the list, update the document title to show the title of the clicked recipe
1. You will need to add the navbar and footer
1. Use the HTML and CSS below for an idea of how it should look

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recipe Bank</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
      }

      .navbar {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
      }

      .navbar h1 {
        margin: 0;
      }

      .footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px 0;
        position: fixed;
        bottom: 0;
        width: 100%;
      }

      .recipe-container {
        max-width: 800px;
        margin: 80px auto 20px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }

      .recipe {
        margin-bottom: 20px;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
      }

      .recipe h2 {
        margin-top: 0;
        margin-bottom: 10px;
      }

      .recipe p {
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <div class="navbar">
      <h1>Recipe App</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>

    <div class="recipe-container">
      <div class="recipe">
        <h2>Oatmeal Raisin Cookies</h2>
          <strong>Description:</strong> They've been around forever and for good
          reason, a delicious take on a classic.
        </p>
        <p>
          <strong>Ingredients:</strong> 1 1/2 cups old fashioned oats, 1 cup
          all-purpose flour, 1/2 teaspoon baking soda, 1/2 teaspoon ground
          cinnamon, 1/4 teaspoon salt, 1/2 cup unsalted butter (softened), 1/2
          cup packed light brown sugar, 1/4 cup granulated sugar, 1 large egg, 1
          teaspoon vanilla extract, 1 cup raisins, 1/2 cup chopped walnuts, 1/2
          cup mini chocolate chips
        </p>
        <p>
          <strong>Directions:</strong> Preheat oven to 350°F. Combine oats,
          flour, baking soda, cinnamon, and salt in a medium bowl. In a large
          bowl, beat butter and sugars until creamy. Add egg and vanilla; beat
          well. Gradually add oat mixture, beating well. Stir in raisins,
          walnuts, and chocolate chips. Drop dough by rounded teaspoonfuls onto
          ungreased cookie sheets. Bake 10 to 12 minutes or until lightly
          golden. Cool 1 minute on cookie sheets; remove to wire rack. Cool
          completely. Enjoy!
        </p>
      </div>
    </div>

    <div class="footer">
      <p>&copy; 2024 Recipe App. All rights reserved.</p>
    </div>
  </body>
</html>
```
