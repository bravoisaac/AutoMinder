from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///datebase/AutoMinder_SQLlive.db'
db = SQLAlchemy(app)

class Auto(db.Model):
    rut_cliente = db.Column(db.String(9), primary_key=True)
    nom_auto = db.Column(db.String(20))
    km_inicial = db.Column(db.String(50))
    patente = db.Column(db.String(50), primary_key=True)
    id_auto = db.Column(db.String(50))
    marca = db.Column(db.String(50))

class Documento(db.Model):
    id_docu = db.Column(db.String(20), primary_key=True)
    nombre_docu = db.Column(db.String(50), nullable=False)
    foto_docu = db.Column(db.LargeBinary, nullable=False)
    patente = db.Column(db.String(50), primary_key=True)
    rut_cliente = db.Column(db.String(9), primary_key=True)

class Repuesto(db.Model):
    patente = db.Column(db.String(50), primary_key=True)
    rut_cliente = db.Column(db.String(9), primary_key=True)
    id_repu = db.Column(db.String(20), primary_key=True)
    nom_repu = db.Column(db.String(50), nullable=False)
    mar_repu = db.Column(db.String(50))
    km_inici_repu = db.Column(db.String(50), nullable=False)
    duracion = db.Column(db.String(50), nullable=False)
    recorda = db.Column(db.String(50), nullable=False)
    nota = db.Column(db.Text)

class Usuario(db.Model):
    rut_cliente = db.Column(db.String(9), primary_key=True)
    nombre = db.Column(db.String(20))
    email = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(20), nullable=False)
    foto = db.Column(db.LargeBinary)

# Rutas para la tabla "auto"

@app.route('/auto', methods=['POST'])
def create_auto():
    data = request.get_json()
    auto = Auto(**data)
    db.session.add(auto)
    db.session.commit()
    return jsonify({'message': 'Auto created successfully'})

@app.route('/auto/<rut_cliente>/<patente>', methods=['GET'])
def get_auto(rut_cliente, patente):
    auto = Auto.query.filter_by(rut_cliente=rut_cliente, patente=patente).first()
    if auto:
        return jsonify(auto)
    else:
        return jsonify({'message': 'Auto not found'})

@app.route('/auto/<rut_cliente>/<patente>', methods=['PUT'])
def update_auto(rut_cliente, patente):
    auto = Auto.query.filter_by(rut_cliente=rut_cliente, patente=patente).first()
    if auto:
        data = request.get_json()
        auto.nom_auto = data['nom_auto']
        auto.km_inicial = data['km_inicial']
        auto.id_auto = data['id_auto']
        auto.marca = data['marca']
        db.session.commit()
        return jsonify({'message': 'Auto updated successfully'})
    else:
        return jsonify({'message': 'Auto not found'})

@app.route('/auto/<rut_cliente>/<patente>', methods=['DELETE'])
def delete_auto(rut_cliente, patente):
    auto = Auto.query.filter_by(rut_cliente=rut_cliente, patente=patente).first()
    if auto:
        db.session.delete(auto)
        db.session.commit()
        return jsonify({'message': 'Auto deleted successfully'})
    else:
        return jsonify({'message': 'Auto not found'})

# Rutas para la tabla "documento"

@app.route('/documento', methods=['POST'])
def create_documento():
    data = request.get_json()
    documento = Documento(**data)
    db.session.add(documento)
    db.session.commit()
    return jsonify({'message': 'Documento created successfully'})

@app.route('/documento/<id_docu>/<rut_cliente>/<patente>', methods=['GET'])
def get_documento(id_docu, rut_cliente, patente):
    documento = Documento.query.filter_by(id_docu=id_docu, rut_cliente=rut_cliente, patente=patente).first()
    if documento:
        return jsonify(documento)
    else:
        return jsonify({'message': 'Documento not found'})

@app.route('/documento/<id_docu>/<rut_cliente>/<patente>', methods=['PUT'])
def update_documento(id_docu, rut_cliente, patente):
    documento = Documento.query.filter_by(id_docu=id_docu, rut_cliente=rut_cliente, patente=patente).first()
    if documento:
        data = request.get_json()
        documento.nombre_docu = data['nombre_docu']
        documento.foto_docu = data['foto_docu']
        db.session.commit()
        return jsonify({'message': 'Documento updated successfully'})
    else:
        return jsonify({'message': 'Documento not found'})

@app.route('/documento/<id_docu>/<rut_cliente>/<patente>', methods=['DELETE'])
def delete_documento(id_docu, rut_cliente, patente):
    documento = Documento.query.filter_by(id_docu=id_docu, rut_cliente=rut_cliente, patente=patente).first()
    if documento:
        db.session.delete(documento)
        db.session.commit()
        return jsonify({'message': 'Documento deleted successfully'})
    else:
        return jsonify({'message': 'Documento not found'})

# Rutas para la tabla "repuesto"

@app.route('/repuesto', methods=['POST'])
def create_repuesto():
    data = request.get_json()
    repuesto = Repuesto(**data)
    db.session.add(repuesto)
    db.session.commit()
    return jsonify({'message': 'Repuesto created successfully'})

@app.route('/repuesto/<id_repu>/<rut_cliente>/<patente>', methods=['GET'])
def get_repuesto(id_repu, rut_cliente, patente):
    repuesto = Repuesto.query.filter_by(id_repu=id_repu, rut_cliente=rut_cliente, patente=patente).first()
    if repuesto:
        return jsonify(repuesto)
    else:
        return jsonify({'message': 'Repuesto not found'})

@app.route('/repuesto/<id_repu>/<rut_cliente>/<patente>', methods=['PUT'])
def update_repuesto(id_repu, rut_cliente, patente):
    repuesto = Repuesto.query.filter_by(id_repu=id_repu, rut_cliente=rut_cliente, patente=patente).first()
    if repuesto:
        data = request.get_json()
        repuesto.nom_repu = data['nom_repu']
        repuesto.mar_repu = data['mar_repu']
        repuesto.km_inici_repu = data['km_inici_repu']
        repuesto.duracion = data['duracion']
        repuesto.recorda = data['recorda']
        repuesto.nota = data['nota']
        db.session.commit()
        return jsonify({'message': 'Repuesto updated successfully'})
    else:
        return jsonify({'message': 'Repuesto not found'})

@app.route('/repuesto/<id_repu>/<rut_cliente>/<patente>', methods=['DELETE'])
def delete_repuesto(id_repu, rut_cliente, patente):
    repuesto = Repuesto.query.filter_by(id_repu=id_repu, rut_cliente=rut_cliente, patente=patente).first()
    if repuesto:
        db.session.delete(repuesto)
        db.session.commit()
        return jsonify({'message': 'Repuesto deleted successfully'})
    else:
        return jsonify({'message': 'Repuesto not found'})

# Rutas para la tabla "usuario"

@app.route('/usuario', methods=['POST'])
def create_usuario():
    data = request.get_json()
    usuario = Usuario(**data)
    db.session.add(usuario)
    db.session.commit()
    return jsonify({'message': 'Usuario created successfully'})

@app.route('/usuario/<rut_cliente>', methods=['GET'])
def get_usuario(rut_cliente):
    usuario = Usuario.query.filter_by(rut_cliente=rut_cliente).first()
    if usuario:
        return jsonify(usuario)
    else:
        return jsonify({'message': 'Usuario not found'})

@app.route('/usuario/<rut_cliente>', methods=['PUT'])
def update_usuario(rut_cliente):
    usuario = Usuario.query.filter_by(rut_cliente=rut_cliente).first()
    if usuario:
        data = request.get_json()
        usuario.nombre = data['nombre']
        usuario.email = data['email']
        usuario.password = data['password']
        usuario.foto = data['foto']
        db.session.commit()
        return jsonify({'message': 'Usuario updated successfully'})
    else:
        return jsonify({'message': 'Usuario not found'})

@app.route('/usuario/<rut_cliente>', methods=['DELETE'])
def delete_usuario(rut_cliente):
    usuario = Usuario.query.filter_by(rut_cliente=rut_cliente).first()
    if usuario:
        db.session.delete(usuario)
        db.session.commit()
        return jsonify({'message': 'Usuario deleted successfully'})
    else:
        return jsonify({'message': 'Usuario not found'})

if __name__ == '__main__':
    app.run()
