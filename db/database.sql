create database if not exists first_api;
use first_api;

CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    -- Definición de la Clave Foránea
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

INSERT INTO Usuarios (id, nombre, email, fecha_registro) VALUES
(1, 'Ana López García', 'ana.lopez@ejemplo.com', '2024-10-01 10:00:00'),
(2, 'Juan Pérez Díaz', 'juan.perez@ejemplo.com', '2024-10-05 15:30:00'),
(3, 'Sofía Ruiz Martín', 'sofia.ruiz@ejemplo.com', '2024-10-10 08:45:00');
INSERT INTO Usuarios (nombre, email) VALUES
('Carlos Soto Bravo', 'carlos.soto@ejemplo.com'),
('Elena Vidal Mora', 'elena.vidal@ejemplo.com');

INSERT INTO Pedidos (id, usuario_id, fecha_pedido, total, estado) VALUES
(101, 1, '2024-10-02 12:15:00', 45.99, 'Entregado'),
(102, 1, '2024-10-08 17:00:00', 120.50, 'Enviado'),
(103, 2, '2024-10-06 09:30:00', 25.00, 'Entregado'),
(104, 3, '2024-10-12 14:00:00', 88.75, 'Pendiente'),
(105, 2, '2024-10-15 11:10:00', 50.00, 'Enviado');

INSERT INTO Pedidos (usuario_id, total, estado) VALUES
(1, 99.99, 'Entregado'),
(2, 15.00, 'Pendiente'),
(4, 240.50, 'Enviado'),
(5, 62.10, 'Pendiente'),
(4, 35.75, 'Entregado');

SELECT * from Usuarios u ;
SELECT * from Pedidos p ;