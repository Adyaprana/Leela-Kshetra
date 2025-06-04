# Use official lightweight Python image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy all application files
COPY . .

# Expose port 5000 to the outside world
EXPOSE 5000

# Run the app with gunicorn WSGI server
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
