from flask import Flask, render_template, request, flash, redirect, url_for
import os
from datetime import datetime

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'your-secret-key-here')

# Sample data for dynamic content
quotes = [
    {
        "text": "You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
        "source": "Bhagavad Gita, Chapter 2, Verse 47"
    },
    {
        "text": "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
        "source": "Bhagavad Gita, Chapter 6, Verse 19"
    },
    {
        "text": "The soul is neither born, and nor does it die.",
        "source": "Bhagavad Gita, Chapter 2, Verse 20"
    }
]

events = [
    {
        "name": "New Year Celebration",
        "date": "01/01/2025",
        "time": "7:00 PM",
        "description": "New Year celebrations in temples often involve special prayers, rituals, and offerings to seek blessings for the coming year."
    },
    {
        "name": "Makar Sankranti",
        "date": "14/01/2025", 
        "time": "6:00 AM",
        "description": "Harvest festival celebrating the transition of the sun into Capricorn, marked with special prayers and traditional offerings."
    }
]

past_events = [
    {
        "name": "Kartika Purnima",
        "date": "15/11/2024",
        "description": "Kartik Purnima is a Hindu festival celebrated on the full moon day of the Kartik month.",
        "image": "chandan-yatra-2025-2.jpg"
    },
    {
        "name": "Rath Yatra",
        "date": "07/07/2024",
        "description": "The Ratha Yatra, or Chariot Festival, is a Hindu religious festival celebrated annually in Puri, Odisha, India.",
        "image": "Rath-Yatra-2024.jpg"
    }
]


blog_posts = [
    {
        "title": "The Significance of Rath Yatra",
        "content": "Rath Yatra, also known as the Festival of Chariots, is one of the most famous Hindu festivals.",
        "image": "Z15.jpg"
    },
    {
        "title": "The Benefits of Morning Meditation",
        "content": "Morning meditation within a temple premise brings unparalleled serenity to one's mind.",
        "image": "Z2.jpg"
    }
]

@app.route('/')
def home():
    return render_template('index.html', quotes=quotes[:1], events=events[:2], blog_posts=blog_posts[:2])

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/deities')
def deities():
    return render_template('deities.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/events')
def events_page():
    return render_template('events.html', events=events, past_events=past_events)

@app.route('/visit')
def visit():
    return render_template('visit.html')

@app.route('/donation', methods=['GET', 'POST'])
def donation():
    if request.method == 'POST':
        # Handle donation form submission
        amount = request.form.get('amount')
        name = request.form.get('name')
        email = request.form.get('email')
        purpose = request.form.get('purpose', 'General Temple Fund')
        
        flash(f'Thank you {name} for your generous donation of ₹{amount} for {purpose}!', 'success')
        return redirect(url_for('donation'))
    
    return render_template('donation.html')

@app.route('/blog')
def blog():
    return render_template('blog.html', blog_posts=blog_posts)

@app.route('/quotes')
def quotes_page():
    return render_template('quotes.html', quotes=quotes)

# @app.route('/gallery')
# def gallery():
#     # Sample gallery images
#     gallery_images = [
#         {"src": "Z1.jpg", "alt": "All Mandir", "description": "Complete temple view", "category": "architecture"},
#         {"src": "Z2.jpg", "alt": "All gods", "description": "Divine deities", "category": "deities"},
#         {"src": "Z3.jpg", "alt": "All gods", "description": "Sacred idols", "category": "deities"},
#         {"src": "Z4.jpg", "alt": "Night picture", "description": "Temple at night", "category": "architecture"},
#         {"src": "Z5.jpg", "alt": "Temple view", "description": "Temple architecture", "category": "architecture"},
#         {"src": "Z15.jpg", "alt": "Jai Jagannatha", "description": "Lord Jagannath", "category": "deities"}
#     ]
#     return render_template('gallery.html', images=gallery_images)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')
        
        # Here you would typically send an email or save to database
        flash(f'Thank you {name}! Your message regarding "{subject}" has been received. We will respond within 24 hours.', 'success')
        return redirect(url_for('contact'))
    
    return render_template('contact.html')


@app.route('/gallery')
def gallery():
    image_folder = os.path.join(app.static_folder, 'images')
    images = [f for f in os.listdir(image_folder) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    return render_template('gallery.html', images=images)



# Add context processor for current year
@app.context_processor
def inject_current_year():
    return {'current_year': datetime.now().year}

if __name__ == '__main__':
    app.run(debug=True)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)