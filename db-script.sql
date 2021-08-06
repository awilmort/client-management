create table enterprise (
    id serial primary key,
    name varchar not null,
    description varchar
);

create table client (
    id serial primary key,
    firstname varchar not null,
    lastname varchar,
    enterpriseId integer not null,
    constraint fk_enterprise
    foreign key(enterpriseId)
    references enterprise(id)
);

create table address (
    id serial primary key,
    clientId integer not null,
    street varchar,
    locality varchar,
    city varchar,
    country varchar,
    constraint fk_client
    foreign key(clientId)
    references client(id)
);