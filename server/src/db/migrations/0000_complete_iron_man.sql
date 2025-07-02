CREATE TABLE "product" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"price" real NOT NULL,
	"offer_quantity" integer,
	"offer_price" real,
	CONSTRAINT "positive_price" CHECK ("product"."price" > 0),
	CONSTRAINT "positive_offer_price" CHECK ("product"."offer_price" > 0),
	CONSTRAINT "positive_offer_quantity" CHECK ("product"."offer_quantity" > 0)
);

INSERT INTO public.product(id, name, price, offer_quantity, offer_price) VALUES ('5bb5a208-68af-41b8-0c93-d0380cf579c2','Bread',1.99,2,2.49);
INSERT INTO public.product(id, name, price, offer_quantity, offer_price) VALUES ('cba8ef34-8532-4c6e-e64b-1d78b385e91d','Banana',1.49,5,5.99);
INSERT INTO public.product(id, name, price, offer_quantity, offer_price) VALUES ('b24df512-72b0-4e3f-8740-7d15891d3a74','Apple',0.99,4,2.99);
INSERT INTO public.product(id, name, price, offer_quantity, offer_price) VALUES ('371a6471-478a-4785-8e6d-c6134019ebbc','Orange',3.99,3,9.99);
INSERT INTO public.product(id, name, price) VALUES ('b163660c-a170-4945-c63b-c581dd865a6e','Pizza',2.99);
INSERT INTO public.product(id, name, price) VALUES ('ff0a40fa-654f-4153-cf52-94d8cefd9535','Milk',1.19);
INSERT INTO public.product(id, name, price) VALUES ('118bdf88-e851-402c-932e-81a96512c77f','Toilet Paper',5.99);
INSERT INTO public.product(id, name, price) VALUES ('edfc5df5-b00e-47e2-8434-f728cc1ec1f4','Soap',0.59);
INSERT INTO public.product(id, name, price) VALUES ('fa1b7687-755e-4139-7428-84ce22453b47','Shampoo',7.49);
INSERT INTO public.product(id, name, price) VALUES ('48b07e4f-77a1-42f1-58bd-3d2508473a1d','Toothpaste',2.49);