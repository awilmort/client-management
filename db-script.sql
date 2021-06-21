create table enterprise (
    id serial primary key,
    name varchar,
    description varchar
);

create table client (
    id serial primary key,
    firstname varchar,
    lastname varchar,
    enterpriseId integer,
    constraint fk_enterprise
    foreign key(enterpriseId)
    references enterprise(id)
);

create table address (
    id serial primary key,
    clientId integer,
    street varchar,
    locality varchar,
    city varchar,
    country varchar,
    constraint fk_client
    foreign key(clientId)
    references client(id)
);