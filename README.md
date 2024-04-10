# TKStudio Photography Website
![tks](https://github.com/andile593/Photography-Studio-website-/assets/71168590/efbf2bee-9108-4e64-b3b0-2d9cca512b5c)

Welcome to my Photography Website! This project showcases my photography portfolio with a gallery feature. It's built using HTML, CSS, and JavaScript, with CSS Grid used for layout.

## Features

- **Gallery**: Browse through a collection of stunning photographs organized in a grid layout.
- **Responsive Design**: Enjoy a seamless viewing experience across different devices, including desktops, tablets, and mobile phones.
- **Customizable**: Easily add, remove, or update photos in the gallery by modifying the HTML and CSS files.
- **Minimalistic Design**: Clean and modern design that focuses on showcasing the beauty of the photographs.

## Technologies Used

- **HTML**: Markup language for creating the structure of the website.
- **CSS**: Styling language for designing the layout and appearance of the website.
- **JavaScript**: Programming language for adding interactivity and dynamic behavior.
- **CSS Grid**: Layout system for creating grid-based designs.
- **Git**: Version control system for tracking changes to the codebase.
- **GitHub**: Hosting platform for version-controlled repositories.

## Getting Started

To get started with the Photography Website, simply clone the repository to your local machine and open the `index.html` file in a web browser:

- git clone https://github.com/andile593/Photography-Studio-website-.git

- cd photography-website



## Gallery Layout

The gallery layout is created using CSS Grid. Each photograph is represented by a grid item, allowing for flexible and responsive positioning of images.

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
}

.gallery img {
  width: 100%;
  height: auto;
}
