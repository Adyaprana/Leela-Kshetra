# 🕉️ Jagannath And Radhakrishna Temple Website

A beautiful, responsive Flask web application for the Jagannath And Radhakrishna Temple, featuring a luxurious design with traditional Indian spiritual aesthetics.

## ✨ Features

### 🎨 Design & User Experience
- **Luxurious Premium Design** with gold-accented color palette
- **Sanskrit & Devanagari Fonts** for authentic spiritual feel
- **Fully Responsive** design for all devices
- **Smooth Animations** and hover effects
- **Modern UI Components** with traditional Indian motifs

### 🏛️ Temple Features
- **Home Page** with hero section and daily quotes
- **About Us** with temple history and mission
- **Deities** showcase of Hindu gods and goddesses
- **Services** offered by the temple
- **Events** calendar with upcoming and past events
- **Gallery** with beautiful temple photography
- **Donations** secure donation system
- **Blog** spiritual insights and temple news
- **Daily Quotes** from Bhagavad Gita and scriptures
- **Visit Us** with location and contact information

### 🔧 Technical Features
- **Flask Backend** with Jinja2 templating
- **Modular Structure** with organized templates
- **Form Handling** for donations and contact
- **Flash Messages** for user feedback
- **Mobile Navigation** with hamburger menu
- **SEO Optimized** with proper meta tags
- **Deployment Ready** with Procfile and requirements

## 🚀 Quick Start

### Prerequisites
- Python 3.7+
- pip (Python package manager)

### Installation

1. **Clone the repository**
\`\`\`bash
git clone <your-repo-url>
cd mandir-flask-project
\`\`\`

2. **Create virtual environment**
\`\`\`bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
\`\`\`

3. **Install dependencies**
\`\`\`bash
pip install -r requirements.txt
\`\`\`

4. **Set environment variables**
\`\`\`bash
export SECRET_KEY="your-secret-key-here"  # On Windows: set SECRET_KEY=your-secret-key-here
\`\`\`

5. **Run the application**
\`\`\`bash
python app.py
\`\`\`

6. **Open your browser**
Navigate to `http://localhost:5000`

## 📁 Project Structure

\`\`\`
mandir-flask-project/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── Procfile              # Deployment configuration
├── README.md             # Project documentation
├── templates/            # HTML templates
│   ├── base.html         # Base template with navigation
│   ├── index.html        # Home page
│   ├── about.html        # About us page
│   ├── donation.html     # Donation page
│   └── ...               # Other page templates
├── static/               # Static assets
│   ├── css/
│   │   └── style.css     # Main stylesheet
│   ├── js/
│   │   └── main.js       # JavaScript functionality
│   └── images/           # Temple images and assets
└── ...
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary Gold**: `#D4AF37` - Main accent color
- **Secondary Gold**: `#FFD700` - Highlights and buttons
- **Deep Saffron**: `#FF9933` - Traditional saffron
- **Temple Brown**: `#8B4513` - Navigation and headers
- **Cream**: `#FFF8DC` - Background and cards

### Typography
- **Cinzel** - Headings and titles
- **Noto Sans Devanagari** - Sanskrit text
- **Playfair Display** - Body text

### Components
- Responsive navigation with mobile menu
- Hero sections with overlay effects
- Card-based layouts with shadows
- Gradient buttons with hover effects
- Modal image gallery
- Flash message system

## 🔧 Configuration

### Environment Variables
\`\`\`bash
SECRET_KEY=your-secret-key-here
FLASK_ENV=development  # or production
\`\`\`

### Database (Optional)
The current version uses in-memory data. To add database support:

1. Install Flask-SQLAlchemy
2. Configure database URL
3. Create models for events, blog posts, etc.
4. Add migration support with Flask-Migrate

## 🚀 Deployment

### Heroku Deployment
1. Create Heroku app: `heroku create your-app-name`
2. Set environment variables: `heroku config:set SECRET_KEY=your-secret-key`
3. Deploy: `git push heroku main`

### Railway Deployment
1. Connect your GitHub repository
2. Set environment variables in Railway dashboard
3. Deploy automatically on push

### Render Deployment
1. Connect repository to Render
2. Set build command: `pip install -r requirements.txt`
3. Set start command: `gunicorn app:app`

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Hamburger navigation menu
- Touch-friendly buttons and links
- Optimized images for different screen sizes
- Flexible grid layouts

## 🔒 Security Features

- CSRF protection with Flask-WTF
- Secure form handling
- Input validation and sanitization
- Environment-based configuration
- Secure headers implementation

## 🎯 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with alt text
- Clean URL structure
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Hindu Scriptures** for spiritual quotes and wisdom
- **Traditional Indian Art** for design inspiration
- **Open Source Community** for tools and libraries
- **Temple Community** for content and feedback

## 📞 Support

For support and questions:
- **Email**: Jagannath_Temple14@gmail.com
- **Phone**: +91 0000000000
- **Address**: P8XF+27V, Badamandaruni, Odisha 756034

---

**Built with devotion and love** 🕉️ **| Jai Jagannath** 🙏
