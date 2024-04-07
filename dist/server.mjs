import {
  errorHandler
} from "./chunk-NPLHX6G5.mjs";
import {
  checkIn
} from "./chunk-RHN5QPL6.mjs";
import {
  createEvent
} from "./chunk-2HNYHQKO.mjs";
import "./chunk-BSVPRCSZ.mjs";
import {
  getAttedeeBadge
} from "./chunk-RSTDV7LV.mjs";
import {
  getEventAttendees
} from "./chunk-5DDGCQRS.mjs";
import {
  getEvent
} from "./chunk-ZXQR6G54.mjs";
import {
  registerForEvent
} from "./chunk-ADOVL5AS.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import fastify from "fastify";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
var app = fastify();
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API pass.in constru\xEDda no NLW Unite 2024",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttedeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333 }).then(() => {
  console.log("Server running!");
});
