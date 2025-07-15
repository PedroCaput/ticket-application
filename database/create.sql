DROP SCHEMA IF EXISTS schema_do_db_ingressos CASCADE;
CREATE SCHEMA schema_do_db_ingressos;

CREATE TABLE schema_do_db_ingressos.event (
	event_id UUID PRIMARY KEY,
	description TEXT,
	price NUMERIC,
	capacity INTEGER
);

CREATE TABLE schema_do_db_ingressos.ticket (
	ticket_id UUID PRIMARY KEY,
	event_id UUID REFERENCES schema_do_db_ingressos.event(event_id),
	email TEXT,
	status TEXT
);

CREATE TABLE schema_do_db_ingressos."transaction" (
	transaction_id UUID PRIMARY KEY,
	ticket_id UUID REFERENCES schema_do_db_ingressos.ticket(ticket_id),
	event_id UUID REFERENCES schema_do_db_ingressos.event(event_id),
	tid TEXT,
	price NUMERIC,
	status TEXT
);

CREATE TABLE schema_do_db_ingressos."users" (
	id UUID PRIMARY KEY,
	name TEXT,
	email TEXT UNIQUE,
	password TEXT
);

INSERT INTO schema_do_db_ingressos.event (event_id, description, price, capacity) 
VALUES ('bf6a9b3d-4d5c-4c9d-bf3b-4a091b05dc76', 'Foo Fighters 10/10/2022 22:00', 300, 100000);
