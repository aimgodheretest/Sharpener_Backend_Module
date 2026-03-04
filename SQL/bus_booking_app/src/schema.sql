-- USERS TABLE
CREATE TABLE Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

-- Buses TABLE
CREATE TABLE Buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(50),
    totalSeats INT NOT NULL,
    availableSeats INT NOT NULL
);

-- Bookings TABLE
CREATE TABLE Bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT NOT NULL
);

-- Payments TABLE
CREATE TABLE Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT NOT NULL,
    paymentStatus VARCHAR(50) NOT NULL
);