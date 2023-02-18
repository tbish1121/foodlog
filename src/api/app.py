from . import create_app, db
from flask import request

app = create_app()

#Models
class FoodItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128))
    serving = db.Column(db.String(128), nullable=True)
    calories = db.Column(db.Integer, nullable=True)

#Routes

#Test Route
@app.route("/")
def index():
    return "Test Route"

#Get all saved food items
@app.route("/food", methods=['GET'])
def get_items():
    items = FoodItem.query.all()

    results = []

    for item in items:
            items = {
                "name": item.name,
                "serving": item.serving,
                "calories": item.calories
            }
            results.append(items)
    
    return results

#Save food item
@app.route("/food", methods=['POST'])
def create_item():

    data = request.json
    new_item = FoodItem(name=data['name'], serving=data['serving'], calories=data['calories'])

    db.session.add(new_item)
    db.session.commit()

    return "Food item created successfully"

#Edit existing food item
@app.route("/food/<item_id>", methods=['PUT'])
def edit_item(item_id):
    item = FoodItem.query.filter_by(id=int(item_id)).first()

    item.name = request.json.get('name', item.name)
    item.serving = request.json.get('serving', item.serving)
    item.calories = request.json.get('calories', item.calories)

    db.session.add(item)
    db.session.commit()

    return "Item updated"

