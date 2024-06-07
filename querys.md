# Querys

Querys implementados

## Crear empresa

```graphql
mutation {
  createCompany(name: "Microsoft") {
    id
    name
  }
}
```

## Obtener empresas

```graphql
query {
  getCompanies {
    id
    name
    users {
      id
      name
      email
    }
  }
}

```

## Obtener empresa por su id

```graphql
query {
  getCompany(id: "b1506ad8-7997-447c-bb0e-bf6861c4cb28") {
    id
    name
    users {
      id
      name
      email
    }
  }
}

```

## Crear usuario

```graphql
mutation {
  createUser(name: "Usuario 4", email: "usuario@gmail.com", companyId: "b1506ad8-7997-447c-bb0e-bf6861c4cb28") {
    id
    name
    email
  }
}
```

## Obtener usuarios

```graphql
query {
  getUsers {
    id
    name
    email
  }
}
```

## Obtener usuarios de una empresa

```graphql
query {
  getUsers(companyId: "b1506ad8-7997-447c-bb0e-bf6861c4cb28") {
    id
    name
    email
    company {
      id
      name
    }
  }
}
```