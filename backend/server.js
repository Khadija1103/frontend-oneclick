const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Cargar usuarios
function getUsers() {
  const data = fs.readFileSync('users.json');
  return JSON.parse(data);
}

function saveUser(newUser) {
  const users = getUsers();
  users.push(newUser);
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
}

// Registro
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Datos incompletos' });
  }

  const users = getUsers();
  const userExists = users.find(user => user.email === email);

  if (userExists) {
    return res.status(409).json({ message: 'El usuario ya existe' });
  }

  saveUser({ email, password });
  res.status(201).json({ message: 'Usuario registrado correctamente' });
});

// Inicio de sesión
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: 'Autenticación satisfactoria' });
  } else {
    res.status(401).json({ message: 'Error en la autenticación' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
