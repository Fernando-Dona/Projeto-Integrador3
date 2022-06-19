#importing the needed packages and modules
from flask import Flask, render_template, request, redirect
from flask_mysqldb import MySQL

app = Flask(__name__)
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'cadastro_fornecedores' #nome do database criado no servidor SQL
 
mysql = MySQL(app) 

@app.route('/', methods =['GET','POST'])
def home():
    if request.method == 'POST':
        #Fetch form data
        dataDetails = request.form
        nome = dataDetails['nome']
        produto = dataDetails['produto']
        email = dataDetails['email']
        endereco = dataDetails['endereco']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO fornecedores(nome, produto, email, endereco) VALUES(%s, %s, %s, %s)",(nome, produto, email, endereco))
        mysql.connection.commit()
        cur.close()
        return redirect('/fornecedores')
    return render_template('index.html')


@app.route('/fornecedores')
def users():
    cur = mysql.connection.cursor()
    resultValue = cur.execute("SELECT * FROM fornecedores")
    if resultValue > 0:
        dataDetails = cur.fetchall()
        return render_template('fornecedores.html',dataDetails=dataDetails)

if __name__ == '__main__':
    app.run(debug=True, host='localhost')


