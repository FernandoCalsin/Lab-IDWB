import requests

url = "https://httpbin.org/get"
params = {
    "curso": "web",
    "nivel": "basico"
}

response = requests.get(url, params=params)
data = response.json()

print("IP:")
print(data["origin"])

print("\nHEADERS:")
for key, value in data["headers"].items():
    print(f"{key}: {value}")

print("\nARGS:")
for key, value in data["args"].items():
    print(f"{key}: {value}")
