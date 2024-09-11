export const config = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "tutorial",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  export const dialect = "mysql";