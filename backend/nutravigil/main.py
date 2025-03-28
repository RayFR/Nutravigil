from nutravigil import app, db
if __name__ == "__main__":
    with app.app_context():
        print(db.engine.table_names()) # prints db tables
        db.create_all()

    app.run(debug=True, port=5000)