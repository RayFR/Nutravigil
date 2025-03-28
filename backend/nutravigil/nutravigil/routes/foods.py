from flask import Blueprint, jsonify, request
import requests

foods = Blueprint("foods", __name__)

@foods.route('/food_search/<string:food>', methods=['GET'])
def food_search(food):
    search = food
    response = requests.get(f'https://world.openfoodfacts.org/api/v2/search', params={"keywords": {search}, "countries_tags": "en:united-kingdom"})
    
    if response.status_code == 200:
        data = response.json()
        return jsonify(data.get("products", []))
    elif response.status_code == 404:
        return jsonify({"error": "NOT FOUND"})
    else:
        return jsonify({"error": "Failed to fetch data from Open Food Facts API"}), 500
    
@foods.route("track_food", methods=["POST"])
def track_food():
    pass