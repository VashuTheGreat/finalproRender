import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import re

# Target URL
url = 'https://wormworldsaga.com/chapters/chapter01/en/'

# Create a folder to save images if it doesn't exist
folder_name = 'wormworld_images'
if not os.path.exists(folder_name):
    os.makedirs(folder_name)

# Get the HTML content
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Find all image tags
img_tags = soup.find_all('img')

# Function to sanitize the file name
def sanitize_filename(filename):
    # Replace invalid characters with underscores
    return re.sub(r'[\\/*?:"<>|]', '_', filename)

# Loop through all images and download them
for img_tag in img_tags:
    # Get the image URL (absolute URL using urljoin)
    img_url = urljoin(url, img_tag.get('src'))
    
    # Print the image URL for debugging
    print(f"Image URL: {img_url}")
    
    # Get the image name (last part of URL)
    img_name = os.path.basename(img_url)
    
    # Sanitize the file name
    img_name = sanitize_filename(img_name)
    
    # Skip if the image name is empty
    if not img_name:
        print("Skipping image with no valid name.")
        continue
    
    # Make the full path to save the image
    img_path = os.path.join(folder_name, img_name)
    
    # Download and save the image
    try:
        img_data = requests.get(img_url).content
        with open(img_path, 'wb') as img_file:
            img_file.write(img_data)
            print(f"Downloaded {img_name}")
    except Exception as e:
        print(f"Error downloading {img_name}: {e}")

print(f"All images have been downloaded to {folder_name}")
