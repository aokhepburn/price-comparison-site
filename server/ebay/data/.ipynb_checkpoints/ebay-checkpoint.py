import requests
import pandas as pd

input_string = input("Please enter an item ")

print(input_string)
url = f"https://ebay-search-result.p.rapidapi.com/search/{input_string.replace(' ', '%20')}"

headers = {
	"X-RapidAPI-Key": "6e4aead265msh02d5cee6251f7f8p17e904jsna7042731095f",
	"X-RapidAPI-Host": "ebay-search-result.p.rapidapi.com"
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    items = data.get('result, []')
    df = pd.DataFrame(items)

    csv_filename = f"{input_string}_ebay_search_results.csv"
    df.to_csv(csv_filename, index=False)

    print(f"CSV file '{csv_filename} has been created")

else:
    print("API request failed: ", response.status_code)
