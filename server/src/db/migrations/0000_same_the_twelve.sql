CREATE TABLE "product" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"price" real NOT NULL,
	CONSTRAINT "positive_price" CHECK ("product"."price" > 0)
);
--> statement-breakpoint
CREATE TABLE "special_offer" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"quantity" integer NOT NULL,
	"price" real NOT NULL,
	"product_id" uuid NOT NULL,
	CONSTRAINT "positive_price" CHECK ("special_offer"."price" > 0),
	CONSTRAINT "positive_quantity" CHECK ("special_offer"."quantity" > 0),
	CONSTRAINT "limit_quantity" CHECK ("special_offer"."quantity" < 10)
);
--> statement-breakpoint
ALTER TABLE "special_offer" ADD CONSTRAINT "special_offer_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE cascade ON UPDATE no action;

INSERT INTO public.product(id, name, price) VALUES ('b163660c-a170-4945-c63b-c581dd865a6e',	'Pizza',	2.99);
INSERT INTO public.product(id, name, price) VALUES ('5bb5a208-68af-41b8-0c93-d0380cf579c2',	'Bread',	1.99);
INSERT INTO public.product(id, name, price) VALUES ('ff0a40fa-654f-4153-cf52-94d8cefd9535',	'Milk',	1.19);
INSERT INTO public.product(id, name, price) VALUES ('cba8ef34-8532-4c6e-e64b-1d78b385e91d',	'Banana',	1.49);
INSERT INTO public.product(id, name, price) VALUES ('118bdf88-e851-402c-932e-81a96512c77f',	'Toilet Paper',	5.99);
INSERT INTO public.product(id, name, price) VALUES ('edfc5df5-b00e-47e2-8434-f728cc1ec1f4',	'Soap',	0.59);
INSERT INTO public.product(id, name, price) VALUES ('fa1b7687-755e-4139-7428-84ce22453b47',	'Shampoo',	7.49);
INSERT INTO public.product(id, name, price) VALUES ('48b07e4f-77a1-42f1-58bd-3d2508473a1d',	'Toothpaste',	2.49);
INSERT INTO public.product(id, name, price) VALUES ('b24df512-72b0-4e3f-8740-7d15891d3a74',	'Apple',	0.99);
INSERT INTO public.product(id, name, price) VALUES ('371a6471-478a-4785-8e6d-c6134019ebbc',	'Orange',	3.99);

INSERT INTO public.special_offer(id, quantity, price, product_id)
	VALUES ('a5c288ef-735d-4b39-500e-0a97c7a5d2b9',	2,	2.49,	'5bb5a208-68af-41b8-0c93-d0380cf579c2');
INSERT INTO public.special_offer(id, quantity, price, product_id)
	VALUES ('0c028178-6a82-436a-94b4-a8bc34b92445',	4,	2.99,	'b24df512-72b0-4e3f-8740-7d15891d3a74');
INSERT INTO public.special_offer(id, quantity, price, product_id)
	VALUES ('5facfd9c-122b-43ad-2d1d-b8a2bb4df96d',	5,	5.99,	'cba8ef34-8532-4c6e-e64b-1d78b385e91d');
INSERT INTO public.special_offer(id, quantity, price, product_id)
	VALUES ('8e09a4d2-87fa-4f12-3897-71821288c853',	3,	9.99,	'371a6471-478a-4785-8e6d-c6134019ebbc');