import requests
from bs4 import BeautifulSoup
import csv
from datetime import datetime

url = 'https://www.omgubuntu.co.uk/2018/07/suse-linux-sold-in-2-5-billion-deal'
# url = 'http://feedproxy.google.com/~r/d0od/~3/Gg8hTpoMpCY/adwaita-icon-theme-makeover-locust'
# url = 'http://dataquestio.github.io/web-scraping-pages/simple.html'
# url = 'https://f1amp.bedroomvillas.com/property/view/HA-76298'

page = requests.get(url)


soup = BeautifulSoup(page.content, "html.parser")

# content = soup.find_all('a', attrs={'class': 'recommend-row-target'})
anchors = soup.find_all("a")

with open('link.csv', 'a') as csv_file:
    writer = csv.writer(csv_file)
    for anchor in anchors:
        text = anchor.text
        link = anchor["href"]
        writer.writerow([text, link, datetime.now()])    
