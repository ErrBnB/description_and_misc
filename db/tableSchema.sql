DROP DATABASE IF EXISTS errbnb;

CREATE DATABASE errbnb;

USE errbnb;

CREATE TABLE basics (
	id int NOT NULL AUTO_INCREMENT,
	title varchar(50) NOT NULL,
	owner varchar(30) NOT NULL,
	guests int NOT NULL,
	beds int NOT NULL,
	bath int NOT NULL,
	description text,
	is_super_guest boolean NOT NULL default 1,
	is_great_location boolean NOT NULL default 1,
	is_great_checkin boolean NOT NULL default 1,
	PRIMARY KEY (id)	
);

CREATE TABLE amenity_categories (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(20) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE amenities (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
	category varchar(20) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE house_amenities (
	house_id int NOT NULL,
	amenity_id int NOT NULL,
	owner_comment varchar(200)
);

CREATE TABLE descriptions (
	house_id int NOT NULL,
	space text,
	guest_access text,
	interactions text,
	other text
);

INSERT into amenity_categories (name) VALUES ("Basic");
INSERT into amenity_categories (name) VALUES ("Family features");
INSERT into amenity_categories (name) VALUES ("Facilities");
INSERT into amenity_categories (name) VALUES ("Dining");
INSERT into amenity_categories (name) VALUES ("Guest Access");
INSERT into amenity_categories (name) VALUES ("Logistics");
INSERT into amenity_categories (name) VALUES ("Bed and Bath");
INSERT into amenity_categories (name) VALUES ("Outdoor");
INSERT into amenity_categories (name) VALUES ("Safety Features");

INSERT into amenities (name, category) VALUES ("WiFi", "Basic");
INSERT into amenities (name, category) VALUES ("Dryer", "Basic");
INSERT into amenities (name, category) VALUES ("Washer", "Basic");
INSERT into amenities (name, category) VALUES ("Laptop friendly workspace", "Basic");
INSERT into amenities (name, category) VALUES ("Heating", "Basic");
INSERT into amenities (name, category) VALUES ("Air conditioning", "Basic");
INSERT into amenities (name, category) VALUES ("TV", "Basic");
INSERT into amenities (name, category) VALUES ("Carbon monoxide detector", "Basic");
INSERT into amenities (name, category) VALUES ("Iron", "Basic");
INSERT into amenities (name, category) VALUES ("Essential", "Basic");
INSERT into amenities (name, category) VALUES ("Hot water", "Basic");
INSERT into amenities (name, category) VALUES ("Baby bath", "Family features");
INSERT into amenities (name, category) VALUES ("Children’s books and toys", "Family features");
INSERT into amenities (name, category) VALUES ("Kitchen", "Dining");
INSERT into amenities (name, category) VALUES ("Lockbox", "Guest Access");
INSERT into amenities (name, category) VALUES ("Private entrance", "Guest Access");
INSERT into amenities (name, category) VALUES ("Luggage dropoff allowed", "Logistics");
INSERT into amenities (name, category) VALUES ("Hair dryer", "Bed and Bath");
INSERT into amenities (name, category) VALUES ("Hangers", "Bed and Bath");
INSERT into amenities (name, category) VALUES ("Shampoo", "Bed and Bath");
INSERT into amenities (name, category) VALUES ("Bed linens", "Bed and Bath");
INSERT into amenities (name, category) VALUES ("BBQ grill", "Outdoor");
INSERT into amenities (name, category) VALUES ("Patio or balcony", "Outdoor");
INSERT into amenities (name, category) VALUES ("Garden or backyard", "Outdoor");
INSERT into amenities (name, category) VALUES ("Fire extinguisher", "Safety Features");
INSERT into amenities (name, category) VALUES ("Smoke detector", "Safety Features");
INSERT into amenities (name, category) VALUES ("First aid kit", "Safety Features");

-- INSERT into basics (title, owner, guests, beds, bath, description) VALUES ("The Great Monkey House", "Naruto", 2, 2, 1, "Romantic hideaway! This property has the lush beauty and privacy of Hana, without the drive! Only 15-20 minutes to the airport, 10 minutes to beaches, 2 minutes to restaurants and shops...on a private gated property with organic nursery. BEAUTIFUL!");

INSERT into house_amenities (house_id, amenity_id, owner_comment) VALUES (1, 1, "Wifi is not free, sorry!");
INSERT into house_amenities (house_id, amenity_id, owner_comment) VALUES (1, 2, "Dryer is broken");
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 3);
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 4);
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 8);
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 12);
INSERT into house_amenities (house_id, amenity_id, owner_comment) VALUES (1, 13, "Not neccesary for children");
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 14);
INSERT into house_amenities (house_id, amenity_id, owner_comment) VALUES (1, 15, "Monkey will steal your stuff");
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 16);
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 17);
INSERT into house_amenities (house_id, amenity_id, owner_comment) VALUES (1, 18, "Hair dryer is broken too");
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 19);
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 20);
INSERT into house_amenities (house_id, amenity_id, owner_comment) VALUES (1, 21, "What is bed lines");
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 22);
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 23);
INSERT into house_amenities (house_id, amenity_id, owner_comment) VALUES (1, 25, "Use that for monkeys");
INSERT into house_amenities (house_id, amenity_id) VALUES (1, 26);

