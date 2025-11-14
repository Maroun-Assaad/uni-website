# University Website - React TypeScript

A modern, responsive university website built with React and TypeScript. This project has been transformed from a static HTML website into a dynamic React application with enhanced functionality and modern UI/UX.

## Features

- **Modern React Architecture**: Built with React 18 and TypeScript for type safety
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Client-side Routing**: Seamless navigation with React Router
- **Interactive Components**:
  - Hero slider with auto-rotation
  - Course filtering by category
  - Expandable course descriptions
  - Tabbed login/register forms
  - Contact form with validation
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Font Awesome Icons**: Consistent iconography throughout the application

## Pages

1. **Home**: Hero slider, popular subjects, and featured courses
2. **About**: University information, mission, vision, and statistics
3. **Courses**: Comprehensive course catalog with filtering
4. **Contact**: Contact form and university contact information
5. **Account**: Login and registration forms with tab switching

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript development
- **React Router**: Client-side routing
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **Font Awesome**: Icon library
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Header.css
│   ├── Footer.tsx      # Site footer
│   └── Footer.css
├── pages/              # Page components
│   ├── Home.tsx        # Home page with slider
│   ├── Home.css
│   ├── About.tsx       # About page
│   ├── About.css
│   ├── Courses.tsx     # Courses catalog
│   ├── Courses.css
│   ├── Contact.tsx     # Contact page
│   ├── Contact.css
│   ├── Account.tsx     # Login/Register
│   └── Account.css
├── App.tsx             # Main app component
├── App.css             # Global styles
├── index.tsx           # App entry point
└── index.css           # Base styles
```

## Key Features Explained

### Hero Slider

- Auto-rotating slides with smooth transitions
- Responsive background images
- Call-to-action buttons

### Course Filtering

- Filter courses by category (Development, Engineering, etc.)
- Dynamic course cards with hover effects
- Course details including duration, level, and price

### Interactive Forms

- Login and registration with tab switching
- Form validation and error handling
- Contact form with email validation

### Responsive Design

- Mobile-first approach
- CSS Grid and Flexbox for layouts
- Smooth animations and transitions

## Customization

### Adding New Courses

Edit the `courses` array in `src/pages/Courses.tsx`:

```typescript
const courses: Course[] = [
  {
    id: 9,
    title: "New Course Title",
    description: "Course description...",
    duration: "12 weeks",
    level: "Beginner",
    price: "$299",
    image: "images/course-image.png",
    category: "development",
  },
];
```

### Styling

- Global styles are in `src/App.css`
- Component-specific styles are in their respective `.css` files
- Color scheme can be modified by changing CSS custom properties

### Images

- Place course and subject images in the `public/images/` directory
- Update image paths in the respective components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Original HTML/CSS/JS website by Maroun Assaad
- Transformed to React/TypeScript with modern enhancements
- Font Awesome for icons
- Unsplash for hero images

---

**Note**: This is a frontend-only application. For production use, you'll need to:

- Connect to a backend API for data management
- Implement proper authentication
- Add form submission handling
- Set up proper image hosting
- Configure environment variables
