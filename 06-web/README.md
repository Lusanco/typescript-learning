# Inheritance vs. Composition Application

This project is a practical exploration of **Inheritance** and **Composition** in application design, focusing on the strengths, weaknesses, and use cases of each approach. It also serves as a hands-on learning experience for building frameworks and features inspired by older, widely-used libraries like Backbone.js and Marionette.js.

## Project Goals

- To compare and contrast **Inheritance** and **Composition** through real-world examples.
- To provide insight into how classic libraries like Backbone.js and Marionette.js were structured.
- To demonstrate the process of building key application features, including event handling and model-view coordination.

## What We Covered

**1. Inheritance vs. Composition:**

- Explored how **Inheritance** and **Composition** can be used to structure models and views.
- Highlighted the pros and cons of each approach in the context of application design.

**2. Model Layer:**

- Inspired by Backbone.js, the model layer includes methods like get, set, and event handling features like on and trigger.
- Demonstrated how models can synchronize with a backend using a fetch and save workflow.

**3. View Layer:**

- The view layer drew inspiration from Marionette.js, implementing ideas like regions for managing nested views.
- Showcased how views coordinate with models and handle dynamic updates.

**4. Event Handling:**

- Implemented an event system reminiscent of Backbone's event model, showcasing how to trigger and listen for events within the application.

**5. Framework Reimplementation:**

- By recreating portions of Backbone.js and Marionette.js, the project offered an in-depth look at how these frameworks functioned under the hood.
- Highlighted features like collections, nested views, and region-based rendering.

## Takeaways

- **Inheritance** is a powerful tool but can lead to tightly coupled and less flexible designs.
- **Composition** offers greater flexibility by delegating responsibilities to components, promoting cleaner and more maintainable code.
- Understanding the architecture of older libraries like Backbone.js and Marionette.js provides a solid foundation for appreciating modern frameworks like React and Vue.
- The project serves as a bridge to learning how frameworks manage models, views, and events behind the scenes.